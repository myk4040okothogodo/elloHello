import React, {useEffect, useState } from 'react';
import { CgArrowLeftR, CgArrowRightR } from 'react-icons/cg';
import  PageContent  from '../PageContent/PageContent';
import './FullpageView.css';
import { getBookPages } from "../../services";
import { images } from "../../constants";


const FullpageView2 = () => {
  const [pages, setPages] = useState([]);  
  
  useEffect(() => {
      getBookPages().then((result) => {
        setPages(result);
      });
  },[]);

   console.log("pages :",pages);  
 
 
  
  return (
    <div >   
      <div className="split left">
       <div className="centered">
       <PageContent {...pages[0]} />
       </div>
       </div>
    </div>
);
};
export default FullpageView2;
