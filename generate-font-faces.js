const fs = require('fs');
const process = require('process');

const fontsDirectory = 'fonts';
const outputFilename = 'font-faces.css';

fs.readdir(fontsDirectory, (err, filenames) => {
  if (err) {
    console.error(`Failed to read the contents of '${fontsDirectory}.'`, err);
    process.exit(1);
  }

  const fontFaceRules = filenames
    .filter(filename => {  // Ignore files that aren't TTFs.
      const extension = filename.substring(filename.lastIndexOf('.') + 1);
      if (!/ttf$/ig.test(extension)) {
        console.warn(`'${filename}' is not a TTF file and will be ignored.`);
        return false;
      } else {
        return true;
      }
    })
    .map(filename =>  // Generate a @font-face rule for each of the font files.
`@font-face {
  font-family: "${filename.substring(filename.length - 4)}";
  src: url("fonts/${filename}");
}`
    );

  // Write each of the generated font faces to a CSS file.
  const fileOutputStream = fs.createWriteStream(outputFilename);
  fontFaceRules.forEach((fontFaceRule, index) => {
    fileOutputStream.write(fontFaceRule);

    // Add newlines for nice formatting.
    if (index === fontFaceRules.length - 1) {
      fileOutputStream.write('\n');
    } else {
      fileOutputStream.write('\n\n');
    }
  });

  fileOutputStream.end();
});
