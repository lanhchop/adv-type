const fs = require('fs');
const process = require('process');

const fontsDirectory = 'fonts';
const outputFilename = 'font-faces.css';

const generateCss = filenames => {
  // Generate a @font-face rule for each of the font files.
  const fontFaceRules = filenames.map(filename =>
`@font-face {
  font-family: "${filename.substring(0, filename.length - 4)}";
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
};

const generateJs = filenames => {
  // TODO: Implement something that creates a JS array of fontnames that can be imported into React components.
  console.log(filenames);
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
