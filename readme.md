# The Vardyger 2 Publishing Platform

## Download and start Apache Sling

This project requires Apache Sling.

1. [Download](http://sling.apache.org/downloads.cgi) the Apache Sling Launchpad.
2. Start the Launchpad by running the following from the command line:

```
java -Xmx1024M -jar org.apache.sling.launchpad-8.jar
```

### Maven Archetypes

Three Maven archetypes where used to kickstart this project.

1. Create the parent pom:

mvn archetype:generate \
    -DarchetypeGroupId=org.codehaus.mojo.archetypes \
    -DarchetypeArtifactId=pom-root \
    -DarchetypeVersion=RELEASE \
    -DgroupId=org.vardyger \
    -DartifactId=vardyger \
    -Dversion=1.0.0-SNAPSHOT \
    -DinteractiveMode=false
    
2. Create the "core" bundle project:

mvn archetype:generate \
    -DarchetypeGroupId=org.apache.sling \
    -DarchetypeArtifactId=sling-bundle-archetype \
    -DgroupId=org.vardyger \
    -DartifactId=core \
    -Dversion=1.0.0-SNAPSHOT \
    -Dpackage=org.vardyger.core \
    -DappsFolderName=vardyger \
    -DartifactName="core" \
    -DpackageGroup="core" \
    -DinteractiveMode=false  
    
3. Create the "ui.content" content project:

mvn archetype:generate \
    -DarchetypeGroupId=org.apache.sling \
    -DarchetypeArtifactId=sling-initial-content-archetype \
    -DgroupId=org.vardyger \
    -DartifactId=ui.content \
    -Dversion=1.0.0-SNAPSHOT \
    -Dpackage=org.vardyger.ui.content \
    -DappsFolderName=vardyger \
    -DartifactName="ui.content" \
    -DpackageGroup="ui.content" \
    -DinteractiveMode=false  
  
4. Create the "author" project: 
  
ionic start author sidemenu
    
http://localhost:8080/author/index.html    

    