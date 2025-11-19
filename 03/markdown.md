version: major.minor.patch
example: version: 1.0.0

when you change the code for fixing bugs the patch increases.
when you change the code for new options but the api doesn't break the minor increases.
when you change the code and api must be changed the major increases.

patch -> npm version patch
minor -> npm version minor
major -> npm version major

npm install package_name --save-dev -> means you can add a package that won't be published.

npm uninstall package_name -> to uninstall. you can also use un instead of uninstall.

when you want to install older version -> npm install package_name@major.minor.patch

to find out if a package is old and outdated -> npm outdated

~ -> means only patch can be changed.
^ -> means only patch and minor can be changed.

to update all old packages -> npm update

