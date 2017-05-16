# The Author (Content Authoring) Application

A mobile-optimised "authoring" UI for the Vardyger 2 Publishing Platform.

## Build

To run the build script found in the package.json scripts property, execute:

    npm run build [--prod]

**Note:** By default the build and serve tasks produce dev builds (a build that does not include Ahead of Time (AoT) compilation or minification). To force a prod build you should use the --prod command line flag.
    
## Copy

To copy the application to the ui.content module, execute:

    npm run export

## App Build Scripts

See: `https://github.com/driftyco/ionic-app-scripts` and `node_modules/@ionic/app-scripts`

**Note:** Don't change the name of "app.module.ts" to "app-module.ts" or the Ionic build scripts will fail.

### Create a scaffold
The Ionic framework includes several templates that you can use to create the scaffolding for new projects. We'll use the blank template (this is is purely informational, you do not need to run the following command).

1. Create the "author" project: 

```  
ionic start author --no-cordova blank
```
