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

# How to run jekyll
JEKYLL_CMD=bundle exec jekyll

# Set to do a dry run.
#RSOPTS=-n --delete
DATE=$(shell date +"%Y-%m-%d")

##### DEFAULT ####

# Build into _site
build:
	$(JEKYLL_CMD) build

# Build and watch
# - assumes another webserver is serving the content
watch:
	$(JEKYLL_CMD) build --watch

# Start local web server
# - Serve content from http://localhost:4000 (root)
serve:
	$(JEKYLL_CMD) serve --watch

##### USM-PEOPLE #####

PEOPLE_DEST=/Volumes/usmfiles/home/houser/public.www
MEDIA_DEST=media.usm.maine.edu:public_html

publish-people: clean-mac-files
	@test -d $(PEOPLE_DEST) || { echo "ERROR: $(PEOPLE_DEST) not mounted. Exiting..."; exit 1; }
	$(JEKYLL_CMD) build --config _config.yml,_config/usm-people.yml -d "$(PEOPLE_DEST)"

publish-media: clean-mac-files
	rsync $(RSOPTS) -vauzC --exclude ._* ./files/ "$(MEDIA_DEST)"

pull-media:
	rsync $(RSOPTS) -vauzC --exclude ._* "$(MEDIA_DEST)/" ./files

##### GITHUB-DROPBOX ######

publish-github: clean-mac-files
	$(JEKYLL_CMD) build --config _config.yml,_config/github-site.yml

##### UMS-GOOGLE #####

GOOGLE_DEST=~/Google Drive/Public

# Publish to Google Drive folder
# - sync'd in "~/Google Drive"
publish-google:
	$(JEKYLL_CMD) build --config _config.yml,_config/ums-google.yml -d "$(GOOGLE_DEST)"

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

clean-mac-files:
	@find . -name ._* -exec rm -rf {} \;
	@find . -name .DS_Store -exec rm {} \;
	@find . -name *~ -exec rm {} \;


