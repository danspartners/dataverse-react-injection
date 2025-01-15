# React -> Dataverse script injection
This app is meant to inject a React app into the old-school Dataverse front-end. For simplicity, it builds all javascript not as external files, but straight into an HTML file. You can use this HTML file as custom DV footer.

Another option would be to build JS files, and include those into the DV footer using script tags.

For dev purposes, using a stock DV Docker installation, option 1 is easier, as you won't have to set up serving external files.

## Prerequisites
A (local) Dataverse installation

## Install 
```
npm install
```

## Edit and configure app
Do whatever you need to do.

## Build app
```
npm run build
```

## Add to Dataverse
Copy the HTML file in the dist folder your build command created to a folder your DV install can access. Then add the file as a custom footer. E.g.:

```
curl -X PUT -d '/dv/templates/index.html' http://localhost:8080/api/admin/settings/:FooterCustomizationFile
```