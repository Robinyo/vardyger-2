# The Vardyger 2 Publishing Platform

### Prerequisites
* OpenJDK for Java 1.8
* Git
* Maven (I'm using 3.3.9)
* The Eclipse IDE for Java EE Developers (I'm using Neon)
* The Sling Launchpad

**Note:** This [post](http://robferguson.org/2017/03/23/getting-started-with-apache-sling/) will walk you through the steps required to install the OpenJDK for Java 1.8. This [post](http://robferguson.org/2016/03/29/how-to-install-git-maven-and-eclipse-on-elementary-os/) will walk you through the steps required to install Git, Maven and the Eclipse IDE. And, this [post](http://robferguson.org/2017/03/23/getting-started-with-apache-sling/) introduces the Apache Sling Launchpad.

## Download and start Apache Sling

This project requires Apache Sling.

1. [Download](http://sling.apache.org/downloads.cgi) the Apache Sling Launchpad.
2. Start the Launchpad by running the following command:

```
java -Xmx1024M -jar org.apache.sling.launchpad-8.jar
```

**Note:** The Sling Launchpad will take a few minutes to unpack, install itself, and start up.

## Build

Build and deploy to a running instance of the Sling Launchpad:

    cd ui.content
    mvn clean install -PautoInstallBundle

## Login

Navigate to [http://localhost:8080/author/index.html](http://localhost:8080/author/index.html).

You should see something like:

![Author UI screenshot](https://github.com/Robinyo/vardyger-2/blob/master/author.png)

### Maven Archetypes

Three Maven archetypes where used to kickstart this project (this is purely informational, you do not need to run the following commands).

1. Create the parent pom:

```
mvn archetype:generate \
    -DarchetypeGroupId=org.codehaus.mojo.archetypes \
    -DarchetypeArtifactId=pom-root \
    -DarchetypeVersion=RELEASE \
    -DgroupId=org.vardyger \
    -DartifactId=vardyger \
    -Dversion=1.0.0-SNAPSHOT \
    -DinteractiveMode=false
```
2. Create the "core" bundle project:

```
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
```

3. Create the "ui.content" content project:

```
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
```

4. Create the "author" project: 

```  
ionic start author sidemenu
```
