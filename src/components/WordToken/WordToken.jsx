import React, {useState} from 'react';

import './WordToken.css';

const WordToken = ({ value, position}) => {

  console.log(value)
  const [clicked ,setClicked] = useState(false);  
  const handleClick=(value) => {
      setClicked(true);
      console.log(value,"clicked")
      
  }
return (
  <div className="word_styling">
 <p  onClick={()=> { handleClick(value) }}>{value}</p>
  </div>
)
}

export default WordToken;
