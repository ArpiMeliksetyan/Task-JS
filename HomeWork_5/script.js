const fs = require('fs');

function config() {
    let data = fs.readFileSync('.env', 'utf8');
    let newData = data.split('\n');
    for (let i = 0; i < newData.length; i++) {
        if (!containsDuplicateCharacter(newData[i],'=')) {
            const [key, value]= newData[i].split('=');
            if (key && value!=='\r' && !key.startsWith('#')&& !key.startsWith(' ')) {
                process.env[key] = value;
            }
        }
    }
}

function containsDuplicateCharacter(text,character) {
    let seenFirst = false;
    for (let i = 0; i < text.length; i++){
        if (text[i] !== character)
            continue;
        if (seenFirst)
            return true;
        seenFirst = true;
    }
    return false;
}


module.exports = {
    config: config
};

