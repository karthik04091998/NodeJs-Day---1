import fs from "fs";

const createFile = () => {
  try {
    if (!fs.existsSync("files")) {
      fs.mkdirSync("files");
    }
    let date = new Date().toString();
    let textDate = date.toString();
    let txt = textDate.split(":").join("-"); 

    fs.writeFileSync(`./files/${txt}.txt`, `Timestamp : ${Date.now()}`);
  } catch (e) {
    console.log(`Error writing file: ${e.message}`);
  }
};

const readFolder = (folderName) => {
  try {
    const files = fs.readdirSync(folderName,'utf8');
    return files;
  } catch (e) {
    console.log(`Error writing file: ${e.message}`);
  }
};

export { createFile, readFolder };

