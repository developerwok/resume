var markdownpdf = require("markdown-pdf")
  , fs = require("fs")
 
fs.createReadStream("../README.md")
  .pipe(markdownpdf())
  .pipe(fs.createWriteStream("../RESUME.pdf"))
 
// --- OR ---
/* 
markdownpdf().from("/path/to/document.md").to("/path/to/document.pdf", function () {
  console.log("Done")
})
*/