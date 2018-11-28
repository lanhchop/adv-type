# [Boise State GDes Typography](https://github.com/lanhchop/adv-type)
***

## Getting Setup

#### Install [Node.js](http://nodejs.org/)
```sh
$ git clone git:https://github.com/lanhchop/adv-type.git
$ cd adv-type
$ npm install
```

### Detailed Installation

This section provides a little more detailed understanding of what goes into
getting `adv-type` up and running.

`adv-type` uses [create-react-app](http://reactjs.org) as its build system, so
[Node.js](http://nodejs.org) is required. Once you have Node.js installed, 
you can just use `npm` to get it all to work.

Next, you can clone this repository using Git to get it set up on your station.

```sh
$ git clone git://github.com/lanhchop/adv-type
$ cd adv-type
```

Then install the remaining build dependencies locally:

```sh
$ npm install

$ npm run generate

$ npm start
```

`adv-type` is now ready to go!


The built files are placed in the `build/` directory by default. Open the
`build/index.html` file in your browser to verify.

With this setup, any file that changes will trigger only those build tasks 
necessary to bring the app up to date. For example, when a javascript file 
changes, the javascript are recompiled and concatenated. This allows the 
watch command to complete in a fraction of the time it would ordinarily take.


### Typeface File Preparation

`font-faces.css` does not need to be manually inputted. `generate-font-faces.js` 
will automatically generate the `font-faces.css` file when 'npm run generate' 
is ran in the terminal when new fonts are added. 

To add new a new typeface, follow the naming convention of 

```sh
Typeface.ttf 
````

Copy and paste the type file into the folder `public/`. 

Only truetype and opentype files are supported. Ensure that there are no 
other characters besides alphabetical letters or numbers. 

If the typfaces are named `Typeface-Regular.otf`, omit the "-Regular" by 
renaming the file, we will talk about font-style later.

### Adding New Typefaces

You will be manually adding the description to each typefaces in 
`font-details.json` using the following template:

```sh
{
    "fontFamily": "Typeface",
    "filename": "Typeface.otf",
    "specimenFilename": "Typeface.pdf",
    "author": "GD Student",
    "year": 2017,
    "course": "Graphic Design IV",
    "availChars": "abcdefghijklmnopqrstuvwxyz",
    "description": "Description",
    "sampleText": "A quick brown fox jumps over the lazy dog."
},
```

This will need to be added for each new typeface. The following must be ran each time a new typeface or group of typefaces are added so an updated `font-faces.css` can be generated with the new typeface: 

```sh
$ npm run generate
```

Once the command is ran, you can view the updated typefaces locally by running:

```sh
$ npm start
```
