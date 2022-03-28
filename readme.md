# gettext translate
A simple package to quickly translate `gettext` formatted files using Google translate. This is quite useful for Fitbit developers who need to support multiple languages, but do this manually today.

## Usage

1. `npm install`
2. Paste your original file contents into `origin.po` or specify your file path in the `config.js` file `(config.originFilePath)`
3. Set the languages in `config.languages`
4. `npm start` or `npm run translate`

Your contents will be translated in the `/translations` directory 🥂.

# License
MIT
