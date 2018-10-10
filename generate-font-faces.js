const fs = require('fs');
const process = require('process');

const fontsDirectory = 'src/fonts';
const cssOutputFilename = 'src/font-faces.css';

const generateCss = filenames => {
  // Generate a @font-face rule for each of the font files.
  const fontFaceRules = filenames.map(filename =>
`@font-face {
  font-family: "${filename.substring(0, filename.length - 4)}";
  src: url("./fonts/${filename}");
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

fs.readdir(fontsDirectory, (err, filenames) => {
  if (err) {
    console.error(`Failed to read the contents of '${fontsDirectory}.'`, err);
    process.exit(1);
  }

  // Ignore files that aren't TTFs or OTFs.
  const ttfFilenames = filenames.filter(filename => {
    const extension = filename.substring(filename.lastIndexOf('.') + 1);
    if (!/(ttf|otf)$/ig.test(extension)) {
      console.warn(`'${filename}' is not a TTF or OTF file and will be ignored.`);
      return false;
    } else {
      return true;
    }
  });

  generateCss(filenames);
});
