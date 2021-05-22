import React from 'react';
import GoogleMapReact from 'google-map-react';

const Storelocation = ()=>{
  const center = {
    lat: 59.95,
    lng: 30.33
  };
  const zoom = 16;

  return(
    <>
    <div className="container">
      <h1 className="text-center my-4">Store Locations</h1>
      <div className="storelocation my-5">
        <div className="details">
          <div className="card m-1">
            <div className="card-body">
              <h5 className="card-title">DAROGHAWALA, LAHORE</h5>
              <p className="card-text">Daroghawala Chowk,<br/> Near Qadri Auto Shop,<br/>  54000 LAHORE</p>
            </div>
          </div>

          <div className="card m-1">
            <div className="card-body">
              <h5 className="card-title">SALAMATPURA, LAHORE</h5>
              <p className="card-text">1 Minar Wali Masjid,<br/>  Near 7 Hills Grammer School,<br/>  54000 LAHORE</p>
            </div>
          </div>
        </div>

        <div className="map">
          <GoogleMapReact
            defaultCenter={center}
            defaultZoom={zoom}
          />
        </div>

        </div>
    </div>
    </>
  );
}
export default Storelocation;