import React, { useState } from 'react'


export default function Textform(props) {
    const [text, setText] = useState('');
    const handleupclick = () => {
        // alert("hi");
        // console.log("onclick was used!" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handlelowclick = () => {
        // alert("hi");
        // console.log("onclick was used!" + text);
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handlevowel = (event) => {
        // alert("hi");
        // console.log("onclick was used!" + text);
        let newtext = text.toLowerCase();
        let element = 0;
        for (let i = 0; i < newtext.length; i++) {
            if(newtext[i] === 'a' || newtext[i] === 'e' || newtext[i] === 'i' || newtext[i] === 'o' || newtext[i] === 'u')
            {
                element++;
            }
        }
        alert("The vowel count is " + element);
    }
    const handleclearclick = () => {
        // alert("hi");
        // console.log("onclick was used!" + text);
        let newText = '';
        setText(newText)
    }
    const handlechange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }
    return (
        <>
            <div className="container">
                <h1>{props.heading} </h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} id="exampleFormControlTextarea1" rows="12" onChange={handlechange} ></textarea>
                    <button className="btn btn-primary my-3" onClick={handleupclick}>Convert to uppercase</button>
                    <button className="btn btn-primary my-3 mx-2" onClick={handlelowclick}>Convert to uppercase</button>
                    <button className="btn btn-primary my-3 mx-1" onClick={handleclearclick}>Clear Text</button>
                    <button className="btn btn-primary my-3 mx-1" onClick={handlevowel}>Count Vowels</button>
                </div>
            </div>
            <div className="container my-2">
                <h1>Your text summary</h1>
                <p>{text.split(" ").length - 1} words, {text.length} characters</p>
                <p>Time taken to read {0.008 * (text.split(" ").length - 1)} minutes</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
