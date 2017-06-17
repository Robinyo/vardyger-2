# The ui.content module

Apache Sling provides support for registering node types and initial content loading into a repository.

The sling-jcr-contentloader bundle provides loading of content from a bundle into the repository and the sling-jcr-base bundle provides node type registration.

## Initial Content Loading

Bundles can provide initial content, which is loaded into the repository when the bundle has entered the started state. Such content is expected to be contained in the bundles accessible through the Bundle entry API methods. Content to be loaded is declared in the Sling-Initial-Content bundle manifest header. This header takes a comma-separated list of bundle entry paths. Each entry and all its child entries are accessed and entered into starting with the child entries of the listed entries.

The sling-intitial-content-archetype generates a Maven project which will build an OSGi bundle that supports JCR NodeType registration (in SLING-INF/nodetypes/nodetypes.cnd) and initial content loading (in SLING-INF/scripts and SLING-INF/content).


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

## Initial Content (by convention, located in SLING-INF/content)

The content folder: ui.content/src/main/resources/SLING-INF/content

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
        <!-- Script (apps/html.esp) to load the Ionic Web Application -->
        SLING-INF/scripts/apps;overwrite:=true;uninstall:=true;path:=/apps/vardyger/author,
                            
        <!-- Ionic Web Application -->
        SLING-INF/scripts/etc/author;overwrite:=true;ignoreImportProviders:="json,xml,html,jar,zip";uninstall:=true;path:=/author,
                            
        <!-- Initial content -->
        SLING-INF/content;overwrite:=true;uninstall:=true;path:=/content                  
    </Sling-Initial-Content>
    
    ...
```

## Scripts (by convention, located in SLING-INF/scripts)

### ui.content/src/main/resources/SLING-INF/apps/html.esp
This is the "host" page for the Author (Content Authoring) application.

This is where we include the files (e.g., "build/main.js") generated during the build process (as per the author/www/index.html file).

## External Scripts (by convention, located in SLING-INF/scripts/etc)

### ui.content/src/main/resources/SLING-INF/scripts/etc/author
The Author application is copied from the **author module** (author/www) to the **ui.content module** (etc/author)

## Build

Build and deploy to a running instance of the Sling Launchpad:

    mvn clean install -PautoInstallBundle

## Login

Navigate to [http://localhost:8080/author/index.html](http://localhost:8080/author/index.html).

## Notes

Placed copy of jcr_root/etc/author/config.xml in jcr_root/content/config.xml (it's referenced by cordova.js)

