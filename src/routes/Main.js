import React from 'react';
import { Link } from 'react-router-dom';

import fonts from '../font-details.json';
import button from '../topButton.svg';
import '../App.css';

const Main = () => (
    <React.Fragment>
        <div className="header navbar">
            <span>Boise State GDes Typography</span>
            <span className="about"><Link to='/About'>About</Link></span>
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
                                <a method="get" href={`specimens/${font.specimenFilename}`} download>View Specimen</a>
                            </button>
                            <button className="buttonDownload">
                                <a method="get" href={`fonts/${font.filename}`} download>Download</a>
                            </button>
                        </span>
                    </div>
                </div>
            ))}
        </div>
        <a className="backToTop" href="#top" ><img src={button} alt="back to top"></img></a>
    </React.Fragment>
);

export default Main