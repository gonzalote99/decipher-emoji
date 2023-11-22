import React, {useState} from 'react';
import './style.css';

const emojiDict = {
  "😞":"Sad",
  "😡":"Angry",
  "☺️":"Smiling",
  "😘":"Kiss",
  "🤪":"Zany",
  "😈":"Devil",
  "😢":"Crying",
  "😐":"Neutral"
 
};

export default function App() {
 var emojiArr = Object.keys(emojiDict);

 const [meaning, setterOutput] = useState('deciphered here')
 function inputClickHandler (event) {
   var userInput = event.target.value;
   var output = emojiDict[userInput];
   if(output === undefined) {
     var error = "decipher unavailable";
     setterOutput(error)
   }else {
     setterOutput(output);
   }
 }
 function clickEventHandler (item) {
   setterOutput(emojiDict[item])
 }
  return (
    <div className="App">
      <heaer>
       <h1 className="main">
           <div id="brand">by me </div>
            decipher emojis
         </h1>

        </heaer>
        <h3>
         <span className="head2">enter emoji and find meaning</span>

          </h3>
          <input onChange={inputClickHandler} />
          <div className="meaning">
           <span>{meaning}</span>
            </div>
            <span className="para">click emoji to decipher </span>
            <div className="info" >
                  {emojiArr.map(function (emoji) {
                    return (
                      <span 
                         id="emojiArr"
                         key={emoji}
                         onClick={() => clickEventHandler(emoji)}
                      >{emoji}</span>
                    );
                  })}
        
              </div>
    </div>
  );
}
