import React from 'react';

// react router dom
import {NavLink, useParams} from 'react-router-dom';

// material icons
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const Viewproducts=()=>{

  let {pid}=useParams();

  return(
    <div className="container">

      <nav aria-label="breadcrumb" className="py-3">
        <ol className="breadcrumb text-uppercase font-weight-light">
          <li className="breadcrumb-item"><NavLink to="/products">Products</NavLink></li>
          <li className="breadcrumb-item"><NavLink to="#">Mobile Phone</NavLink></li>
          <li className="breadcrumb-item active" aria-current="page">Oppo F19</li>
        </ol>
      </nav>

        <div className="productview" key="1">

          <div className="top">
            <div className="img">
              <div className="card">
                <img className="card-img-top" src="https://www.whatmobile.com.pk/admin/images/Oppo/OppoF19-b.jpg" alt="image" />
                <hr/>
                <div id="images">
                  <div className="img">  
                    <img className="card-img-top" src="https://www.whatmobile.com.pk/admin/images/Oppo/OppoF19-b.jpg" alt="image" />
                  </div>
                  <div className="img">
                    <img className="card-img-top" src="https://www.whatmobile.com.pk/admin/images/Oppo/OppoF19-b.jpg" alt="image" />
                  </div>
                  <div className="img">  
                    <img className="card-img-top" src="https://www.whatmobile.com.pk/admin/images/Oppo/OppoF19-b.jpg" alt="image" />
                  </div>
                </div>
              </div>
            </div>

            <div className="details">
              <div className="productdetail">
                <span className="category">
                  Mobile Phone
                </span>
                <span className="title">
                  Oppo F19
                </span>
                <span>
                  <b>Price:</b> Rs. 39999
                </span>
                <span className="os">
                  <b>OS:</b> 11 OS
                </span>
                <span className="dimensions">
                  <b>Dimensions:</b> 160.3 x 73.8 x 7.95 mm
                </span>
                <span className="weight">
                  <b>Weight:</b> 175 g
                </span>
                <span className="storage">
                  <b>Storage:</b> 128GB Built-in, 6GB RAM
                </span>
                <span className="cpu">
                  <b>CPU:</b> Octa-core (4 x 2.0 GHz Kryo 260 Gold + 4 x 1.8 GHz Kryo 260 Silver)
                </span>
                <span className="color">
                  <b>Color:</b> Prism Black, Midnight Blue
                </span>
                <span className="resolution">
                  <b>Resolution:</b> 1080 x 2400 Pixels
                </span>
                <span className="camera">
                  <b>Camera:</b> 48MP, 16MP
                </span>
              </div>

              <div className="actions">
                <form>
                  <div className="buttons my-3">
                    <button type="button" className="btn btn-primary m-1">Compare it</button>
                    <button type="button" className="btn btn-warning m-1">Buy Now</button>
                    <button type="button" className="btn btn-primary m-1">Add to Cart</button>
                  </div>
                </form>
              </div>
            </div>
          </div>


          <div className="description">
            <p>
              <b>What is Lorem Ipsum?<br/></b>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 
              and scrambled it to make a type specimen book. </p>
              <p>It has survived not only five centuries, but also the
              leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s 
              with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
              publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 
              and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the
              leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s 
              with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
              publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
          </div>

        </div>
    </div>
  );
}

export default Viewproducts;