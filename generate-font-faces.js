const fs = require('fs');
const process = require('process');

const fontsDirectory = 'fonts';
const cssOutputFilename = 'font-faces.css';
const jsOutputFilename = 'src/font-names.js';

const generateCss = filenames => {
  // Generate a @font-face rule for each of the font files.
  const fontFaceRules = filenames.map(filename =>
`@font-face {
  font-family: "${filename.substring(0, filename.length - 4)}";
  src: url("fonts/${filename}");
}`
  );

  // Write each of the generated font faces to a CSS file.
  const fileOutputStream = fs.createWriteStream(cssOutputFilename);
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
};

const generateJs = filenames => {
  // Get the font names (minus the .ttf extension).
  const fontNames = filenames.map(filename => filename.substring(0, filename.length - 4));

  // Write the font names to a JavaScript file that exports an array of the names.
  const fileOutputStream = fs.createWriteStream(jsOutputFilename);
  fileOutputStream.write('export default [\n');

  fontNames.forEach((fontName, index) => {
    fileOutputStream.write(`  '${fontName}'`);

    // Add newlines between font names as well as commas unless we're iterating over the last font name.
    if (index === fontNames.length - 1) {
      fileOutputStream.write('\n');
    } else {
      fileOutputStream.write(',\n');
    }
  });

  fileOutputStream.write('];\n');
  fileOutputStream.end();
};

fs.readdir(fontsDirectory, (err, filenames) => {
  if (err) {
    console.error(`Failed to read the contents of '${fontsDirectory}.'`, err);
    process.exit(1);
  }

  // Ignore files that aren't TTFs.
  const ttfFilenames = filenames.filter(filename => {
    const extension = filename.substring(filename.lastIndexOf('.') + 1);
    if (!/ttf$/ig.test(extension)) {
      console.warn(`'${filename}' is not a TTF file and will be ignored.`);
      return false;
    } else {
      return true;
    }
  });

  generateCss(filenames);
  generateJs(filenames);
});
