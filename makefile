#
# makefile - make based maintenance for Stephen Houser's website
#
# make build            : Builds content to local _site
# make serve		    : Builds and serves locally (for development)
# make watch            : Builds and rebuilds on changes (for alternate web server)
# make local            : Builds to ~user/public_html or ~user/Sites 
#
# make publish-people	: Publishes the USM       -- http://people.usm.maine.edu/houser
# make publish-n1sh     : Publish to n1sh.net     -- http://n1sh.net/~houser
# make publish-google   : Publish to Google Drive -- http://goo.gl/I7jER8
# make publish-github   : Publish to Git Hub      -- http://stephenhouser.githib.io 
#

# Set to do a dry run.
#RSOPTS=-n --delete

# default destination
DEST=_site

# Other publishable places
PEOPLE_DEST=/Volumes/usmfiles/home/houser/public.www
GOOGLE_DEST=~/Google Drive/Public
MEDIA_DEST=media.usm.maine.edu:public_html/
N1SH_DEST=~/public_html

DATE=$(shell date +"%Y-%m-%d")

JEKYLL_CMD=bundle exec jekyll

# Build into _site
build:
	$(JEKYLL_CMD) build
	make tidy DEST=_site

# Build and watch
# - assumes another webserver is serving the content
watch:
	$(JEKYLL_CMD) build --watch

# Start local web server
# - Serve content from http://localhost:4000 (root)
serve:
	$(JEKYLL_CMD) serve --watch

# Start local web server
# - Serve content from http://localhost:4000 (root)
serve-houser:
	$(JEKYLL_CMD) serve -b /houser --watch

tidy: clean-mac-files
	find "$(DEST)" -type f -name "*.html" -exec tidy -config _config/tidy.conf {} \;

clean-mac-files:
	@find . -name ._* -exec rm -rf {} \;
	@find . -name .DS_Store -exec rm {} \;
	@find . -name *~ -exec rm {} \;

local:
	$(JEKYLL_CMD) build --config _config.yml,_config/n1sh.yml -d ~/Sites

publish-n1sh:
	$(JEKYLL_CMD) build --config _config.yml,_config/n1sh.yml
	#make tidy DEST=_site
	rsync $(RSOPTS) -vauzC --exclude .DS_Store --exclude ._* _site/ n1sh.net:public_html

# Publish to Google Drive folder
# - sync'd in "~/Google Drive"
publish-google:
	#$(JEKYLL_CMD) build --config _config.yml,_config/ums-google.yml -d "$(GOOGLE_DEST)"
	#make tidy DEST="$(GOOGLE_DEST)"

	$(JEKYLL_CMD) build --config _config.yml,_config/ums-google.yml
	make tidy DEST=_site
	rsync -avz _site/* /Users/houser/Google\ Drive/Public/

publish-people: clean-mac-files
	@test -d $(PEOPLE_DEST) || { echo "ERROR: $(PEOPLE_DEST) not mounted. Exiting..."; exit 1; }
	$(JEKYLL_CMD) build --config _config.yml,_config/usm-people.yml -d "$(PEOPLE_DEST)"
	make tidy DEST=$(PEOPLE_DEST)

publish-media: clean-mac-files
	{ cd ../media.usm.maine.edu; rsync $(RSOPTS) -vauzC --exclude ._* . "$(MEDIA_DEST)"; }

pull-media:
	{ cd ../media.usm.maine.edu; rsync $(RSOPTS) -vauzC --exclude ._* "$(MEDIA_DEST)" .; }
