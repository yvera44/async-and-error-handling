//Import Node Filesystem Module (the callback version)

import fs from "node:fs";

fs.readFile('./data.json', 'utf8', (err, data) => { 
    if (err) {
        console.error('Error reading file:');
        throw err;
    }
   try{
    const dataObj = JSON.parse(data);
    console.log(dataObj);
    console.log("Complete");
   } catch (err) {
    console.error('Error parsing JSON:');
    throw err;
   }
});