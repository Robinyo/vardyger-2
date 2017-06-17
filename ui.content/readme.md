# The ui.content module

Apache Sling provides support for registering node types and initial content loading into a repository.

The sling-jcr-contentloader bundle provides loading of content from a bundle into the repository and the sling-jcr-base bundle provides node type registration.

## Initial Content Loading

Bundles can provide initial content, which is loaded into the repository when the bundle has entered the started state. Such content is expected to be contained in the bundles accessible through the Bundle entry API methods. Content to be loaded is declared in the Sling-Initial-Content bundle manifest header. This header takes a comma-separated list of bundle entry paths. Each entry and all its child entries are accessed and entered into starting with the child entries of the listed entries.

The sling-intitial-content-archetype generates a Maven project which will build an OSGi bundle that supports JCR NodeType registration (in SLING-INF/nodetypes/nodetypes.cnd) and initial content loading (in SLING-INF/scripts and SLING-INF/content).



http://localhost:8080/my-first-node.html











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

## Initial Content (by convention, located in jcr_root/content)

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

