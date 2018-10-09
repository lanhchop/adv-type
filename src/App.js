import React from 'react';
import './App.css';
import fonts from './font-details.json';

const App = () => (
  <React.Fragment>
    <div className="header">
      <span>Boise State GDes Typography</span>
      <a className="about" href="https://wwww.google.com/" onClick={( ) => console.log("CLICK")}>About</a>
    </div>
    <div>
      {fonts.map((font, index) => (
        <div className="fontContainer" key={index}>

          <div className="fontFamily">{font.fontFamily}</div>
          <div className="fontDetails">{font.author} -- {font.year} -- {font.course}</div>
          <div className="grid-container">
            <div>
              <div className="fontPreview" style={{ fontFamily: font.fontFamily }}>
              {font.availChars}
              </div>
              <div className="fontSize-1">
              </div>
            </div>
            <div>
              <div className="sampleText" style={{ fontFamily: font.fontFamily }}>
                {font.sampleText}            
            </div>
              <div className="fontSize-2">
              </div>
            </div>
            <span className="fontDescript">
              {font.description}
            </span>
            <span>
              {/* <button>View Specimen</button>
              <button>Download</button> */}
            </span>
          </div>
        </div>
      ))}
    </div>
  </React.Fragment>
);

export default App;
