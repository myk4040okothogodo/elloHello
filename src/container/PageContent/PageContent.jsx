import React from 'react';

import {Sentence} from "../../components";
import "./PageContent.css";


const PageContent = ({content, tokens}) => {
      console.log("content", content);
      console.log("tokens", tokens);     
      return (
      <div >
      
         <Sentence content={content} tokens={tokens} />
      </div>
   )
};


export default PageContent;
