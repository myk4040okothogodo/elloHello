<>
    {pages.length > 0 && (
    <div className="app__gallery flex__center">
    {pages.map((page,index) => {
    <div className="app__gallery-images" key={index}>
        <div className="app__gallery-images_container" ref={scrollRef}>
           <div className="app__aboutus-content_about ">
             <h1 className="headertext_cormorant">{index}</h1>
             console.log(index)
             <PageContent page= {page} />
             <div className="app__galllery-images_arrows">
               <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
             </div>
           </div>
           <div className="app__aboutus-content_knife flex__center">
           </div>
           <div className="app__aboutus-content_history">
              <h1 className="headertext_cormorant">{index+1}</h1>
              <PageContent page= {page} />
              <div className="app_gallery-images_arrows">
                <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
              </div>
           </div>
        </div>
    </div>
    })};
  </div>
  )}
    </>
