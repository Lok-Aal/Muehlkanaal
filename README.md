# Mühlkanaal - Kontaktsplitter

Projekt im Modul *Softwarequalität* zur Erstellung eines Kontaktsplitters

## Content
1. [User Stories](#user-stories)
3. [Definition of Done](#definition-of-done)
4. [Project Structure](#project-structure)
5. [Project Setup](#project-setup)

## User Stories

### User Story 1
Als Benutzer möchte ich eine Anrede automatisch in Ihre Bestandteile (Anrede, Titel, Geschlecht, Vorname und Nachname) zerlegen können, um die Informationen speichern oder weiterverarbeiten zu können.  
**Priorität:** hoch  
**Akzeptanzkriterien:** Eine eingegebene Zeichenkette wird korrekt in die einzelnen Bestandteile zerlegt.

### User Story 2: 
Als Benutzer möchte ich in der Lage sein, die einzelnen Bestandteile manuell anpassen zu können, um somit inkorrekte oder unvollständige Daten ergänzen zu können.  
**Priorität:** hoch  
**Akzeptanzkriterien:** Der Benutzer kann die zerlegten Bestandteile vor der Speicherung über manuelle Eingabe anpassen.

### User Story 3:
Als Benutzer möchte neue Titel hinzufügen können, um somit die Menge der parsbaren Titel zu vergrößern.  
**Priorität:** niedrig  
**Akzeptanzkritierien:** Es ist möglich neue Titel hinzuzufügen.

### User Story 4: 
Als Benutzer möchte ich über das Tool eine standardisierte Briefanrede generieren lassen können, um eine einheitliche Kommunikation zu gewährleisten.
**Priorität:** niedrig
**Akzeptanzkriterien:** Es werden korrekte Briefanreden aus den einzelnen Informationen generiert. (bspw. „Sehr geehrter Herr Prof.“ bei männlichem Professor)

### User Story 5:
Als Benutzer möchte ich, dass Präfixe/Suffixe (z.B. „von“, „de“, „van“, …) dem Nachnamen zugeordnet werden, damit ich korrekte Daten erhalte.  
**Priorität:** niedrig  
**Akzeptanzkriterien:** Die Präfixe/Suffixe werden korrekt zugeordnet.


## Definition of Done

* Benutzer kann Zeichenkette über grafische Oberfläche eingeben
* Zerlegung der Zeichenkette funktioniert korrekt
* Benutzer kann die zerlegten Daten auf grafischer Oberfläche anzeigen
* Benutzer kann neue Titel über die grafische Oberfläche hinzufügen
* Es werden korrekte Briefanreden aus den zerlegten Daten generiert
* Der Kontaktparser kann mit Fehleingaben umgehen
* Die Logik wird über unit tests getestet

## Project Structure
Speicherorte der, für die Bewertung relevanten, Dateien:

**Frontend:** `src/App.vue`  
**Kontaktsplitter:** `src/services/contactsplitter-service.ts`  
**Kontakt Objekt:** `src/types/contact.ts`  
**Unit Tests:** `src/_tests_/contactsplitter.spec.ts`


## Project Setup
Starten der Applikation über folgende Commands:  

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
