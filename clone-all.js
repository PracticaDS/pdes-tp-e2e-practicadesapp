const fs = require('fs');
var dir = './cloned-repos';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

const { execSync } = require("child_process");

execSync("git clone https://github.com/PracticaDS/pdes-tp-backend-practicadesapp cloned-repos/todos-backend")
execSync("git clone https://github.com/PracticaDS/pdes-tp-practicadesapp cloned-repos/todos-frontend")
