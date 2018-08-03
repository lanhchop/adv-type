const fs = require('fs');
const process = require('process');

const fontsDirectory = 'fonts';

fs.readdir(fontsDirectory, (err, filenames) => {
  if (err) {
    console.error(`Failed to read the contents of ${fontsDirectory}.`, err);
    process.exit(1);
  }

  // TODO: Validate filenames.

  // Generate a @font-face for the filename.
  const fontFaceRules = filenames.map(filename =>
`@font-face {
  font-family: "${filename.slice(0, filename.length - 4)}";
  src: url("fonts/${filename}");
}`
  );

  // Write each of the generated font faces to a CSS file.
  const fileOutputStream = fs.createWriteStream('font-faces.css');
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
