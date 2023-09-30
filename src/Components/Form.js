import React, { useState } from 'react';
import './Form.css'

function Form() {
    const [smallLetter, setSmallLetter] = useState("");
    const [capitalLetter, setCapitalLetter] = useState("");
    const [symbols, setSymbols] = useState("");
    const [numbers, setNumbers] = useState("");
    const [passLength, setPassLength] = useState(9);
    const [final, setFinal] = useState("");
    function smallLetterSet(){
        smallLetter===""?setSmallLetter("abcdefghijklmnopqrstuvwxyz"):setSmallLetter("");
        console.log("button clicked");
    }
    function numbersSet(){
        numbers===""?setNumbers("0123456789"):setNumbers("");
    }
    function symbolSet(){
        symbols===""?setSymbols("!@#$%^&*-+_/=?"):setSymbols("");
    }
    function capitalSet(){
        capitalLetter===""?setCapitalLetter("ABCDEFGHIJKLMNOPQRSTUVWXYZ"):setCapitalLetter("");
    }
    function passLengthSet(){
        setPassLength(document.getElementById("passwordLength").value);
    }

    function basic(){
        let basic=smallLetter.charAt(Math.floor(25*Math.random()))+capitalLetter.charAt(Math.floor(25*Math.random()))+symbols.charAt(Math.floor(14*Math.random()))+numbers.charAt(Math.floor(9*Math.random()));
        return basic;
    }
    
    function GeneratePassword(){
        let shortPass= basic();
        let megaString=smallLetter+capitalLetter+symbols+numbers;
        let passWord="";
        for(let i=0; i<passLength-shortPass.length;i++){
            passWord+=megaString.charAt(Math.floor(megaString.length*Math.random()))
        }
        setFinal(shortPass+passWord);
    }


    return (
        <div className='req-form'>
            <div className="card border-primary mb-3 my-4 mx-5 text-start">
                <div className="card-header">Your Requirements</div>
                <div className="card-body text-primary">
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="smallLetter" onChange={smallLetterSet} />
                        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Small Letters</label>
                    </div>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="number" onChange={numbersSet} />
                        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Numbers</label>
                    </div>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="symbol" onChange={symbolSet} />
                        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Symbols</label>
                    </div>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="capitalLetter" onChange={capitalSet}  />
                        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Capital Letters</label>
                    </div>
                    <hr />
                    <label htmlFor="customRange3" className="form-label fs-4">Length : &nbsp;
                        <span className="badge rounded-pill text-bg-primary">{passLength}</span></label>
                    <input type="range" className="form-range fs-4" min="6" max="12" step="1" id="passwordLength" onChange={passLengthSet} defaultValue="9" >
                    </input>
                </div>
            </div>
            <div>
                <button type="button" onClick={GeneratePassword} className="btn btn-warning">Generate</button>
                <div className="input-group">
                    <span id='textToBeCopied' className="form-control my-4 mx-2">{final}</span>

                    {/* feature to be added later */}
                    <button type="button" className="btn btn-success my-4 mx-1" onClick={()=>{
                        alert("Sorry! This Feature is not Available Yet")
                    }}>Copy to Clipboard</button>


                </div>

            </div>
            <div>
                
            </div>
        </div>

    )
}

export default Form;
