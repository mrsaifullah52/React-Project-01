import React from 'react';
import Product from './Product';

const Offerwindos=(props)=>{
  return(<>
    <h4 className="mb-2 mt-5">{props.title}</h4>
    <div className="offercontainer">
      <div className="card-deck d-flex flex-wrap">

        {props.products.map((item, index)=>{
          return(
            <Product item={item} key={index}/>
          );
        })}

      </div>
    </div>
  </>);
}

export default Offerwindos