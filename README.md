# contactsplitter

Projekt im Modul *Softwarequalität* zur Erstellung eines Kontaktsplitters

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
Als Benutzer möchte neue Titel (komischer Lernaal)  
**Priorität:** mittel  
**Akzeptanzkritierien:** 

### User Story 4: 
Als Benutzer möchte ich über das Tool eine standardisierte Briefanrede generieren lassen können, um eine einheitliche Kommunikation zu gewährleisten.
**Priorität:** niedrig
**Akzeptanzkriterien:** Es werden korrekte Briefanreden aus den einzelnen Informationen generiert. (bspw. „Sehr geehrter Herr Prof.“ bei männlichem Professor)

### User Story 5:
Als Benutzer möchte ich, dass Präfixe/Suffixe (z.B. „von“, „de“, „van“, …) dem Nachnamen zugeordnet werden, damit ich korrekte Daten erhalte.  
**Priorität:** niedrig  
**Akzeptanzkriterien:** Die Präfixe/Suffixe werden korrekt zugeordnet.



## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

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
