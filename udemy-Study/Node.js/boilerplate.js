const fs = require('fs');
const dirName = process.argv[2] || 'Project';

try {
    fs.mkdirSync(dirName);
    fs.writeFileSync(`${dirName}/index.html`, '')
    fs.writeFileSync(`${dirName}/index.css`, '')
    fs.writeFileSync(`${dirName}/index.js`, '')
} catch (e) {
    console.log("Something went wrong!");
    console.log(e);
}