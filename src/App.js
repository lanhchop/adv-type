import React from 'react';
import './App.css';
import fonts from './font-details.json';
import button from './topButton.svg';

const App = () => (
  <React.Fragment>
    <div className="header">
      <span>Boise State GDes Typography</span>
      <a className="about" href="/about" onClick={( ) => console.log("CLICK")}>About</a>
    </div>
    <div>
      {fonts.map((font, index) => (
        <div className="fontContainer" key={index}>

          <div className="fontFamily">{font.fontFamily}</div>
          <div className="fontDetails">{font.author}&nbsp; |&nbsp; {font.year}&nbsp; |&nbsp; {font.course}</div>
          <div className="grid-container">
            <div>
              <div className="fontPreview" style={{ fontFamily: font.fontFamily }}>
              {font.availChars}
              </div>
              <div className="fontSize fontSize-1">
              </div>
            </div>
            <div>
              <div className="sampleText" style={{ fontFamily: font.fontFamily }} >
                {font.sampleText}            
              </div>
              <div className="fontSize-2">
              </div>
            </div>
            <span className="fontDescript">
              {font.description}
            </span>
            <span className="buttonContainer">
              <button className="buttonSpecimen">
                <a method="get" href={`specimen/${font.fontFamily}.pdf`} download>View Specimen</a>
              </button>
              <button className="buttonDownload">
                <a method="get" href={`fonts/${font.fontFamily}.ttf`} download>Download</a>
              </button>
            </span>
          </div>
        </div>
      ))}
    </div>
      <button className="backToTop" ><img src={button} alt="back to top"></img></button>
  </React.Fragment>
);

export default App;
