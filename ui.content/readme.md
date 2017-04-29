# The ui.content module

Apache Sling uses scripts or servlets to render and process content.

## Node Types

### src/main/resources/SLING-INF/nodetypes/nodetypes.cnd

```
    <vardyger = 'https://vardyger.org'>

    [vardyger:author] > nt:unstructured

    [vardyger:page] > nt:unstructured
      - title (string)
      - description (string)
      
    ...  
```

## Content (by convention, located in jcr_root/content)

The content folder: ui.content/src/main/resources/jcr_root/content

### author/index.json

```
    {
      "jcr:primaryType":"vardyger:author"
    }
```

### pom.xml

```
    ...
    
    <Sling-Initial-Content>           
      <!-- Initial content -->
      jcr_root/content;overwrite:=true;uninstall:=true;path:=/content,
                          
      <!-- Script (apps/vardyger/author/html.esp) to load Ionic Web Application -->
      jcr_root/apps;overwrite:=true;uninstall:=true;path:=/apps,
                          
      <!-- Ionic Web Application -->
      jcr_root/etc/author;overwrite:=true;uninstall:=true;path:=/author,
      jcr_root/etc/author/assets;overwrite:=true;uninstall:=true;path:=/author/assets,
      jcr_root/etc/author/build;overwrite:=true;uninstall:=true;path:=/author/build                    
    </Sling-Initial-Content>
    
    ...
```

## Scripts (by convention, located in jcr_root/apps)

### ui.content/src/main/resources/jcr_root/apps/vardyger/author/html.esp
This is the "host" page for the Author (Content Authoring) application.

This is where we include the files (e.g., "build/main.js") generated during the build process (as per the author/www/index.html file).

## External Scripts (by convention, located in jcr_root/etc)

### ui.content/src/main/resources/jcr_root/etc/author
The Author application is copied from the **author module** (author/www) to the **ui.content module** (etc/author)

## Build

Build and deploy to a running instance of the Sling Launchpad:

    mvn clean install -PautoInstallBundle

## Login

Navigate to [http://localhost:8080/author/index.html](http://localhost:8080/author/index.html).

## Notes

Placed copy of jcr_root/etc/author/config.xml in jcr_root/content/config.xml (it's referenced by cordova.js)


