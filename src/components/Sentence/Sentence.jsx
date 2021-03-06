import React from 'react';

import WordToken from '../WordToken/WordToken';

import './Sentence.css'


const Sentence = ({ content, tokens}) => {

const handleClick=(word) => {
      console.log(word,"clicked")
      }
 
{/*  
  return (
  <>   
      <div style={{display:flex, flex-direction: row}}>
      {tokens.map((token, index) => (
     
      <div key={index}>
       <span>
          <WordToken  value={token.value} position={token.position} />
       </span>
       </div>
       ))}
       
       </div>
 </>       
 ); */}
 
 
 const renderParagraph = () => content.split(" ").map((word) => <span className="book__word" style={{color:"black"}} onClick={() => handleClick(word)}>{" "}{word}{" "}</span> );
 
 
 return (
    <div>
    {renderParagraph()}
    </div>
 )
 
};

export default Sentence;
