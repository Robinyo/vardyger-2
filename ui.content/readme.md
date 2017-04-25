# The ui.content module

## ui.content/src/main/resources/jcr_root/apps/vardyger/author/html.esp
This is the "host" page for the Author (Content Authoring) application.

## ui.content/src/main/resources/jcr_root/etc/author
The Author application is copied from author/www -> /etc/author

## pom.xml

```
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
```


## Build

Build and deploy to a running instance of the Sling Launchpad:

    mvn clean install -PautoInstallBundle

## Login

Navigate to [http://localhost:8080/author/index.html](http://localhost:8080/author/index.html).
