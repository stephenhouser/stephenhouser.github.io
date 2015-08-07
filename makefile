#
# makefile - make based maintenance for Stephen Houser's website
#
# Development Targets:
# make build            : Builds content to local _site
# make serve		: Builds and serves locally (for development)
# make watch            : Builds and rebuilds on changes (for alternate web server)
# make local            : Builds to ~user/public_html or ~user/Sites
#
# Production Target:
# make publish		: Publish to Production (GitHub)
#
# Underlying alternate publishing locations
# make publish-people	: Publishes the USM       -- http://people.usm.maine.edu/houser
# make publish-n1sh     : Publish to n1sh.net     -- http://n1sh.net/~houser
# make publish-google   : Publish to Google Drive -- http://goo.gl/I7jER8
# make publish-github   : Publish to Git Hub      -- http://stephenhouser.github.io
#

# How to run jekyll
JEKYLL_CMD=bundle exec jekyll

# Set to do a dry run.
#RSOPTS=-n --delete
DATE=$(shell date +"%Y-%m-%d")

##### DEVELOPMENT TARGETS ####
default: build

# Build into _site
build:
	$(JEKYLL_CMD) build

# Start local web server
# - Serve content from http://localhost:4000 (root)
serve:
	$(JEKYLL_CMD) serve --watch

# Build and watch
# - assumes another webserver is serving the content
watch:
	$(JEKYLL_CMD) build --watch

local:

##### PRODUCTION TARGET ####

publish: publish-github

##### USM: PEOPLE and MEDIA #####
# Site is hosted on people.usm.maine.edu
# files are hosted on media.usm.maine.edu

PEOPLE_DEST=/Volumes/usmfiles/home/houser/public.www
MEDIA_DEST=media.usm.maine.edu:public_html

publish-people: clean-mac-files
	@test -d $(PEOPLE_DEST) || { echo "ERROR: $(PEOPLE_DEST) not mounted. Exiting..."; exit 1; }
	$(JEKYLL_CMD) build --config _config.yml,_config/usm-people.yml -d "$(PEOPLE_DEST)"

# These handle pushing and pulling FILES from USM's media server
publish-media: clean-mac-files
	rsync $(RSOPTS) -vauzC --exclude ._* ./files/ "$(MEDIA_DEST)"

pull-media:
	rsync $(RSOPTS) -vauzC --exclude ._* "$(MEDIA_DEST)/" ./files

##### GITHUB and DROPBOX ######

# Site is hosted on GitHub and using GitHub Pages
# files are hosted from Dropbox (no "publish" option, all are public)

# Utility target to add github remote configuration to .git/config
add-github:
	git remote add github https://github.com/stephenhouser/stephenhouser.github.io.git

publish-github: clean-mac-files
	# Don't need to build, github will do that.
	git push github -v --all

##### UMS: GOOGLE #####
# Site is hosted on Google Drive
# files are co-located on Google Drive as files subdirectory

GOOGLE_DEST="~/Google Drive/Sites/people-mirror"
GOOGLE_FILES=~/Google\ Drive/Sites/media-mirror

# Publish to Google Drive folder
# - sync'd in "~/Google Drive"
publish-google:
	$(JEKYLL_CMD) build --config _config.yml,_config/ums-google.yml -d $(GOOGLE_DEST)
	#rsync $(RSOPTS) -vauzC --exclude ._* ./files/ $(GOOGLE_FILES)/files

	# Alternate makes locally and then rsync's
	#$(JEKYLL_CMD) build --config _config.yml,_config/ums-google.yml
	#rsync -avz _site/* /Users/houser/Google\ Drive/Public/

##### LOCAL-FILES #####

serve-local:
	$(JEKYLL_CMD) serve --watch --config _config.yml,_config/local-files.yml

##### HOUSER #####

publish-houser:
	@echo "ERROR: publish-houser is not running."
	@echo #$(JEKYLL_CMD) build --config _config.yml,_config/houser.yml

N1SH_DEST=~/public_html

publish-n1sh:
	$(JEKYLL_CMD) build --config _config.yml,_config/houser.yml
	rsync $(RSOPTS) -vauzC --exclude .DS_Store --exclude ._* _site/ n1sh.net:public_html

tidy: clean-mac-files
	@echo "ERROR: TIDY IS BROKEN"
	@echo find "$(DEST)" -type f -name "*.html" -exec tidy -config _config/tidy.conf {} \;

clean:
	rm -rf _site/*

clean-mac-files:
	@find . -name ._* -exec rm -rf {} \;
	@find . -name .DS_Store -exec rm {} \;
	@find . -name *~ -exec rm {} \;


