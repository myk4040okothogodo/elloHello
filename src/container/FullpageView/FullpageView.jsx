import React, {useEffect, useState } from 'react';
import { CgArrowLeftR, CgArrowRightR } from 'react-icons/cg';
import  PageContent  from '../PageContent/PageContent';
import './FullpageView.css';
import { getBookPages } from "../../services";
import { images } from "../../constants";


const FullpageView = () => {
  const [pages, setPages] = useState([]);
  const [pageNo, setPageNo] = useState(0);
  
  const scrollRef = React.useRef(0);

  useEffect(() => {
      getBookPages().then((result) => {
        setPages(result);
      });
  },[]);

  console.log("pages :", pages);  
   
  const scroll = (direction) => {
    if (direction === 'left'){
        scrollRef.current = pageNo - 1;
        setPageNo(scrollRef.current);
        }
    if (direction === 'right') {
        scrollRef.current = pageNo + 1;
        setPageNo(scrollRef.current);
       }
  }; 
 
  
  
  return (
    
    <div className="book__page flex__center app__gallery-images_container section_padding" ref={scrollRef} >
     {pages && (
      <>
      <div className="split left">
       <div className="centered">
       <PageContent {...pages[0]} />
       </div>
       {(pageNo > 0) && ( 
        <div className="app__gallery-images_arrows">
         <CgArrowLeftR className="gallery__arrow-icon" onClick={() => scroll('left')} />
         </div>
          )}
       </div>
      <div className= "app_aboutus-content_knife flex__center"> 
          <img src={images.divider} alt="page_divider" />
        </div> 
     <div className="split right">
       <div className="centered">
       <PageContent {...pages[1]} />
       </div>
       {(pageNo < pages.length) && ( 
        <div className="app__gallery-images_arrows">
         <CgArrowRightR className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div> 
        )}
     </div>
    
     </>
    )}
    </div>   
 );
};

export default FullpageView;
