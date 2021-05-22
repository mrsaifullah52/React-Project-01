import React from 'react';

const Carousel = (props)=>{


  let isFirst=true;
  props.Links.map(link => {
    console.log(link.url);
  });

  return(
    <>

      <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          {props.Links.map((link, index)=>{
            if(isFirst){
              isFirst=false;
              return(
                <div className="carousel-item active" key={index}>
                  <img className="d-block w-100" src={link.url} alt="First slide"/>
                </div>);
            }else{
              return(
                <div className="carousel-item"  key={index}>
                  <img className="d-block w-100" src={link.url} alt="First slide"/>
                </div>);
            }
          })}
        </div>
      </div>

    </>
  );
}

export default Carousel;
