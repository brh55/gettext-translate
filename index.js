const translate = require('translation-google');
const fs = require('fs');
const config = require('./config');
 
const originFilePath = config.originFilePath;
let str = fs.readFileSync(originFilePath, 'utf-8');

const matchRegex = /(?<=msgid\s\")(.+)(?=\")/g;
const ids = str.match(matchRegex);

ids.forEach((id, index) => {
    str = str.replace(id, `${index}@`);
});

const formattedStr = str.replace(/msgid/g, "%*^");

config.languages.map(language => {
    translate(formattedStr, {to: language}).then(res => {
        let translated = res.text;
        ids.forEach((id, index) => {
            translated = translated.replace(`${index} @`, id);
        });
        translated = translated.replace(/\%\s\*\s\^/g, 'msgid');
        fs.writeFileSync(`./translations/${language}.po`, translated)
    }).catch(err => {
        console.error(err);
    });
});