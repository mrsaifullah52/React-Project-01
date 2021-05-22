import React from 'react';


import {useParams} from 'react-router-dom';

const Category=()=>{
  let {category}=useParams();

  return(
    <>
      {category}
    </>
  );
}

export default Category;