const fs = require("fs");
const path = require("path");

exports.job = () => {
  const folderName = "docs";
  const folderPath = path.join(__dirname, folderName);

  const files = fs.readdirSync(folderPath);
  // for (const file of files) {
  console.log(files);
  // }
};
