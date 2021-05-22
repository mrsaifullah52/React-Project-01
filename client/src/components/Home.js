import React from 'react';
import {NavLink} from 'react-router-dom';
// material icons
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import {Search} from '@material-ui/icons';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// components
import Carousel from './Carousel';
import Offerwindos from './Offerwindos';

const SliderList=[
  {
    url: "//icms-image.slatic.net/images/ims-web/4a928cb3-223f-4aaa-ab63-49e12b63b441.jpg"
  },{
    url: "//icms-image.slatic.net/images/ims-web/9dc81a66-2a73-45a0-ba97-feeb823b87ba.jpg"
  },{
    url: "//icms-image.slatic.net/images/ims-web/be5cc7e4-136b-43f0-8903-8a2076068d16.jpg_1200x1200.jpg"
  },{
    url: "//icms-image.slatic.net/images/ims-web/2e50017b-e026-4760-8461-6b0f2ff7c653.jpg"
  }
]

const ProductsList=[
  {
    id: 1,
    category: "Mobile Phone",
    brand: "Oppo",
    name: "Oppo F19",
    price: 39999,
    image: "https://www.whatmobile.com.pk/admin/images/Oppo/OppoF19-b.jpg",
    details: [
      {OS: "11 OS"},
      {Dimensions: "160.3 x 73.8 x 7.95 mm "},
      {Weight: "175 g"},
      {Storage: "128GB Built-in, 6GB RAM"},
      {CPU:"Octa-core (4 x 2.0 GHz Kryo 260 Gold + 4 x 1.8 GHz Kryo 260 Silver)"},
      {Color:"Prism Black, Midnight Blue"},
      {Resolution:"1080 x 2400 Pixels"},
      {Camera:"48MP, 16MP"},
  ]},{
    id: 2,
    category: "Mobile Phone",
    brand: "Oppo",
    name: "Oppo Reno 5A",
    price: 49999,
    image: "https://www.whatmobile.com.pk/admin/images/Oppo/OppoReno5A-b.jpg",
    details: [
      {OS: "11 OS"},
      {Dimensions: "162 x 74.4 x 8.2mm"},
      {Weight: "182 g"},
      {Storage: "128GB Built-in, 6GB RAM"},
      {Color:"Various  "},
      {CPU:"2.3 Ghz Octa Core"},
      {Resolution:"1080 x 2400 Pixels"},
      {Camera:"64MP, 32MP"}
    ]},{
    id: 3,
    category: "Mobile Phone",
    brand: "Samsung",
    name: "Samsung Galaxy A32",
    price: 39999,
    image: "https://www.whatmobile.com.pk/admin/images/Samsung/SamsungGalaxyA32-b.jpg",
    details: [
      {OS: "11 OS"},
      {Dimensions: "158.9 x 73.6 x 8.4 mm"},
      {Weight: "184 g"},
      {Storage: "128GB Built-in, 6GB RAM"},
      {Color:"Awesome Black, Awesome White, Awesome Blue, Awesome Violet"},
      {CPU:"Octa-core (4 x 2.0 GHz Kryo 260 Gold + 4 x 1.8 GHz Kryo 260 Silver)"},
      {Resolution:"1080 x 2400 Pixels"},
      {Camera:"64MP, 20MP"},
    ]},{
    id: 3,
    category: "Mobile Phone",
    brand: "Tecno",
    name: "Tecno Spark 7 Pro",
    price: 20999,
    image: "https://www.whatmobile.com.pk/admin/images/Oppo/OppoF19-b.jpg",
    details: [
      {OS: "11 OS"},
      {Dimensions: "171.9 x 77.9 x 9.2 mm"},
      {Weight: "184 g"},
      {Storage: "64GB Built-in, 4GB RAM"},
      {Color:"Alps Blue, Spruce Green, Magnet Black"},
      {CPU:"Octa-core (2 x 2.0 GHz Cortex-A75 + 6 x 1.8 GHz Cortex-A55)"},
      {Resolution:"720 x 1600 Pixels"},
      {Camera:"48MP, 8MP"},
    ]},
]

const searchItem=(e)=>{
  e.preventDefault();

  console.log(e.value);
}

const onQueryChange=(e)=>{
  console.log(e.value);
}

const leftNavItems=[
  {name: "Samsung Galaxy Mobiles",
   url: "category/Samsung Galaxy Mobiles"},
  {name: "Oppo Mobiles",
  url: "category/Oppo Mobiles"},
  {name: "Techno Spark Mobiles",
   url: "category/Techno Spark Mobiles"},
  {name: "Q Mobiles",
   url: "category/Q Mobiles"},
  {name: "Apple Mobiles",
   url: "category/Apple Mobiles"},
  {name: "Chargers",
   url: "category/Chargers"},
  {name: "Handfrees",
   url: "category/Handfrees"},
  {name: "Mobile Covers",
   url: "category/Mobile Covers"},
  {name: "Mobile Battries",
   url: "category/Mobile Battries"},

];

const Home = ()=>{
  return(
    <>
      <div className="container-fluid">
        <div className="headerCr">
            <div className="categouryNav">
              <nav className="nav flex-column">
                {
                  leftNavItems.map((item,index)=>{
                    return(
                      <li className="nav-item" key={index}><NavLink className="nav-link" to={item.url}>{item.name}</NavLink></li>
                    );
                  })
                }
              </nav>
          </div>

          <Carousel Links={SliderList}/>
        </div>
      </div>

      <div className="container mt-5">
        <Offerwindos title="Flash Sale" products={ProductsList}/>
        <Offerwindos title="New Collection" products={ProductsList}/>
      </div>

    </>
  );
}
export default Home;