# CRUD Starter API oder BACKEND

CRUD ist die Abkürzung für CREATE (Erstellen), READ (Lesen), UPDATE (Aktualisieren) und
DELETE (Löschen). Dies sind die vier grundlegenden Operationen zur Erstellung und Verwaltung
persistenter Datenelemente, die hauptsächlich in relationalen und NoSQL-Datenbanken zum Einsatz kommen.
Erstelle schnell eine CRUD-API mit Node, Express und Postgres.
Bedient vier Anfragen (Get, Post, Put, Delete) von einer Seite mit jeweils einer separaten Funktion.

Der gesamte Code kann bearbeitet und ersetzt werden, um ihn an die Anforderungen des zu erstellenden Projekts anzupassen.

Ich verwende **express**, um die API bereitzustellen, **body-parser**, um Antworten zu analysieren,
**postgres** für die Datenbank, **knex** als Abfrage-Engine, **dotenv**, um die Umgebungsvariablen zu schützen,
**helmut** zum Hinzufügen geeigneter Header, **cors** zum Verhindern/Zulassen von XSS,
**morgan** als Logger und **nodemon** als Entwicklerabhängigkeit, um auf Änderungen zu achten.

**Abhängigkeiten**
Alle Abhängigkeiten sind im geklonten Projekt enthalten.

## Nötige Software

**1. Installieren Sie node js für Windows**

**2. Installieren Sie yarn für Windows**

**3. Installieren Sie VisualStudioCode für Windows**

**4. Installieren Sie Postgres für Windows**

**5. Installieren Sie git für Windows**

**5. Klone das Repository**

## npm und yarn installieren

Wechseln Sie in den Ordner
Öffne eine Powershell als Admin und gebe folgenden Befehl ein:

```
set-executionpolicy remotesigned
```

```
npm install -g yarn (to install yarn globally)
```

oder

```
npm install
```

oder

```
yarn install
```

```
npm init -y
```

Sollten packages (node-modules) fehlen gebe ggfs. weitere Befehle ein

MAC(erforderlich)
```
sudo chown -R 501:20 "/Users/marcohelmutfeldhaus/.npm"
````
Dann: Passwort sudo eingeben

```
npm install express body-parser pg knex dotenv helmet cors morgan
```

```
npm install nodemon --save-dev
```

**1. Datenbank "Postgres" starten**
Suche in Windows nach der Browser App PGAdmin4

**Hinweis:**
Sie können Postgres oder MYSQL verwenden. Ich verwende Postgres. Wenn Sie MYSQL anstelle von Postgres verwenden möchten, müssen Sie „npm uninstall pg“ und „npm install mysql“ ausführen. Bearbeiten Sie dann den obigen Befehl, um MYSQL auf Ihrem Computer zu starten.

**2. Erstellen Sie eine Datenbank**

Ändern Sie den Datenbanknamen in den Namen, den Sie der Datenbank geben möchten. Stellen Sie sicher, dass Sie auch den Datenbanknamen in server.js in den von Ihnen gewählten Datenbanknamen ändern und das Passwort ebenfalls gleichsetzen. Das hier gewählte Passwort lautet:

```
Z8&ctdNk
```

```
CREATE DATABASE "stelcon"
```

**3. Erstellen der Datenbanktabelle**

Öffnen Sie eine SQL-Kommandozeile und führen Sie den folgenden Befehl aus. Ändern Sie den Tabellennamen in den gewünschten Namen für die Tabelle.

```
CREATE TABLE participant (
 id serial PRIMARY KEY,
 first VARCHAR(100),
 last VARCHAR(100),
 email VARCHAR(100),
 phone VARCHAR(100) UNIQUE NOT NULL,
 location VARCHAR(100),
 education VARCHAR(100),
 added TIMESTAMP NOT NULL
);
```

Öffnen Sie pgAdmin 4 und naviegieren Sie zur erstellten Tabelle participant. Dort öffnen Sie mit einem Rechtsklick das Query-Tool und fügen Sie einen ersten Datenbank eintrag mit dem folgenden Befehl hinzu:

```
INSERT INTO "participant" (first, last, email, phone, location, education, added)
VALUES ('First', 'Entry', 'for@functional.frontend', 12345, 'Important', 'Really', NOW());
```

**4. Starten sie das Backend**
Wechseln Sie in den backend Ordner, falls sie sich nicht noch dort befinden
und geben Sie folgenden Befehl ein

```
node server.js
```

# GIT

**1. Clone the repo**

## Install Gitbash

Downloading Git from https://github.com/git-for-windows/git/releases/download/v2.44.0.windows.1/Git-2.44.0-64-bit.exe

## Generate ssh-key and add ssh-key to your Gitlab-Account

Open Git-bash and generate ssh-key

```
ssh-keygen -t ed25519 -C "<comment>"
```

Copy Key to the clipboard

```
cat ~/.ssh/id_ed25519.pub | clip
```

Open Gitlab User Preferences and add the copied Key
https://gitlab.com/-/profile/keys

## Change to your preferred Folder for Developments and clone the Repository

```
git clone git@gitlab.com:MarcoFeldhaus/teilnehmer_app.git
```

## Your Identity

The first thing you should do when you install Git is to set your user name and email address.
This is important because every Git commit uses this information, and it’s immutably baked into
the commits you start creating

```
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
```

## Change one unimportant thing from cloned file´s to test all

Open Visual Studio Code at cloned Folder and create a branch or use gitbash for it

```
git checkout -b <branchname>
```

## Add change files to branch and commit

Use Visual Studio Code or gitbash

```
git add app
git commit -m "message"
```

## Push commit and branch to merge the repository

Use Visual Studiop Code or Gitbash

```
git push
```

## Merge the pushed branch and Changes to master (main)

```
git checkout <mastername>
git merge <branchname>
```

# Frontend

## If all correctly add node-modules to frontend

Open new terminal and change to frontend folder

```
cd .\Teilnehmer_App_V20_Git\frontend
```

```
yarn
```

## Test frontend

```
yarn start
```
