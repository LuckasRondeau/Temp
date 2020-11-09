import { readdirSync } from "fs";
import { join } from "path";

export function job() {
  const folderName = "docs";
  const folderPath = join(__dirname, folderName);

  const files = readdirSync(folderPath);
  // for (const file of files) {
  console.log(files);
  // }
}
