# Stephen Houser

GitHub Personal Pages website for Stephen Houser.

## Projects, Blogs, and Pages, oh my!

There are two places _projects_ show up:

- Project writeup and/or blurb to show on "Projects" page goes in `_projects`
- Projects themselves and their media go in `/project_name` or can be hosted by github in a repo of the same name if github pages is turned on for the project. Example is `some-books`

These two locations are merged for the project listing on the `/projects/` page.

There may also be a _blog_ entry about a project, for example to announce a version of say *Good Turn*.

## Hosting Configurations

1. *DEFAULT*: Site served locally with files on Dropbox (development)
    * Site: http://localhost:4000 (in _site directory)
    * Files: https://dl.dropboxusercontent.com/u/9832808
    * To publish: `make serve` (or `build`, kind of n/a for this)
    * The `files` are stored in Dropbox so there's no real need to push them anywhere
    
2. *USM-PEOPLE*: USM "people" server for the site and "media" server for the files
    * Site: http://people.usm.maine.edu/houser 
    * Files: http://media.usm.maine.edu/~houser (note the ~ difference in the two)
    * To publish: `make publish-people; make publish-media`

3. *GITHUB-DROPBOX*: GitHub Pages for the site and Dropbox for the files (experimental)
    * Site: http://stephenhouser.github.io
    * Files: https://dl.dropboxusercontent.com/u/9832808
    * To publish: `git push github`
    * The `files` are stored in Dropbox so there's no real need to push them anywhere
    
4. *UMS-GOOGLE*: UMS Google Drive for Education for both site and files (experimental)
    * Site: https://googledrive.com/host/0B-dNF1GpqqFhSjVMMWZuajl2WXM
    * Files: https://googledrive.com/host/0B-dNF1GpqqFhSjVMMWZuajl2WXM/files
    * To publish: `make publish-google`
    * Use Google short link http://goo.gl/I7jER8

5. *LOCAL-FILES*: Site served locally and Files hosted locally for testing (development)
    * Site: http://localhost:4000 (in _site directory)
    * Files: /files (needs to be sym-linked in)
    * `make serve-local`
 
6. *~houser*: Site served from local Apache or the like from userdir (experimental)
    * Site: http://localhost/~houser
    * Files: *DEFAULT*
    * `make publish-houser`

