#
# makefile - make based maintenance for Stephen Houser's website
#
# Development Targets:
# make build            : Build content to internal "_site" (default target)
# make serve		: Build and serve from internal "_site" (primary development target)
# make local            : Build to ~user/public_html or ~user/Sites
#
# Production Target:
# make publish		: Publish to Production (GitHub)
#
# Underlying alternate publishing locations
# make publish-usm	    : Publishes the USM		  -- http://people.usm.maine.edu/houser
# make publish-ums	: Publish to Google Drive -- http://goo.gl/I7jER8
# make publish-n1sh		: Publish to n1sh.net	  -- http://n1sh.net/~houser
# make publish-github	: Publish to Git Hub	  -- http://stephenhouser.github.io
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
# Disabled: this would be more useful as part of the local build below.
#watch:
#	$(JEKYLL_CMD) build --watch

# Set "local" destination based on platform/host type
LOCAL_DEST=~/public_html
ifeq ($(shell uname), Darwin)
$(eval LOCAL_DEST=~/Sites)
endif

local:
	$(JEKYLL_CMD) build -d $(LOCAL_DEST)

##### PRODUCTION TARGET ####

publish: publish-github

##### UTILITY TARGETS #####

tidy: clean-mac-files
	@echo "ERROR: TIDY IS BROKEN"
	@echo find "$(DEST)" -type f -name "*.html" -exec tidy -config _config/tidy.conf {} \;

clean:
	rm -rf _site/*

clean-mac-files:
	@find . -name ._* -exec rm -rf {} \;
	@find . -name .DS_Store -exec rm {} \;
	@find . -name *~ -exec rm {} \;

##### GITHUB and DROPBOX ######

# Site is hosted on GitHub and using GitHub Pages
# files are hosted from Dropbox (no "publish" option, all are public)

# Utility target to add github remote configuration to .git/config
add-github:
	git remote add github ssh://git@github.com/stephenhouser/stephenhouser.github.io.git

publish-github: clean-mac-files
	# Don't need to build, github will do that.
	git push github -v --all

###
sync-s3:
	cd ~/Dropbox/Public
	aws s3 sync ~/Dropbox/Public s3://media.stephenhouser.com --acl public-read --exclude .dropbox --exclude *.DS_Store


##### N1SH.NET #####

publish-houser:
	@echo "ERROR: publish-houser is not running."
	@echo #$(JEKYLL_CMD) build --config _config.yml,_config/houser.yml

N1SH_DEST=~/public_html

publish-n1sh:
	$(JEKYLL_CMD) build --config _config.yml,_config/houser.yml
	rsync $(RSOPTS) -vauzC --exclude .DS_Store --exclude ._* _site/ n1sh.net:public_html

###### OLD TARGETS ######

##### LOCAL-FILES #####

serve-local:
	$(JEKYLL_CMD) serve --watch --config _config.yml,_config/local-files.yml

##### USM: PEOPLE and MEDIA #####
# Site is hosted on people.usm.maine.edu
# files are hosted on media.usm.maine.edu

USM_WEB=/Volumes/usmfiles/home/houser/public.www
USM_FILES=media.usm.maine.edu:public_html

usm: 
	$(JEKYLL_CMD) build --config _config.yml,_config/usm-people.yml
	
publish-usm: clean-mac-files
	@test -d $(PEOPLE_DEST) || { echo "ERROR: $(USM_WEB) not mounted. Exiting..."; exit 1; }
	$(JEKYLL_CMD) build --config _config.yml,_config/usm-people.yml -d "$(USM_WEB)"

# These handle pushing and pulling FILES from USM's media server
publish-usm-media: clean-mac-files
	rsync $(RSOPTS) -vauzC --exclude ._* ./files/ "$(USM_FILES)"

pull-usm-media:
	rsync $(RSOPTS) -vauzC --exclude ._* "$(USM_FILES)/" ./files

##### UMS: GOOGLE #####
# Site is hosted on Google Drive
# files are co-located on Google Drive as files subdirectory

UMS_WEB="~/Google Drive/Sites/people-mirror"
UMS_FILES=~/Google\ Drive/Sites/media-mirror

# Publish to Google Drive folder
# - sync'd in "~/Google Drive"
publish-ums:
	$(JEKYLL_CMD) build --config _config.yml,_config/ums-google.yml -d $(UMS_WEB)
	#rsync $(RSOPTS) -vauzC --exclude ._* ./files/ $(UMS_FILES)/files

	# Alternate makes locally and then rsync's
	#$(JEKYLL_CMD) build --config _config.yml,_config/ums-google.yml
	#rsync -avz _site/* /Users/houser/Google\ Drive/Public/

