// Import Node Filesystem Module (the promises version)
import fs from "node:fs/promises";

async function loadData() {
    const data = await fs.readFile('./data.json', 'utf8');
    const dataObj = JSON.parse(data);
    console.log(dataObj);
    console.log("Complete");
}

loadData().then(() => console.log("Promise completed"));
