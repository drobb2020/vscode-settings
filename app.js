const fs = require('fs');

const path = "C:\\Users\\DRobb\\AppData\\Roaming\\Code\\User\\settings.json";

const settings = require(path);
settings['workbench.colorTheme'] = 'codeSTACKr Theme';
fs.writeFileSync(path, JSON.stringify(settings, null, 4));
console.log(settings);
