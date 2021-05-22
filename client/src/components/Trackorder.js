import React from 'react';

const Trackorder = ()=>{
  return(
    <>
    <div className="container">
      <div className="trackorder">
        <h1 className="text-center my-4">Track My Order</h1>
        <form>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Tacking Id" aria-label="Username" aria-describedby="basic-addon1" />
          <div className="input-group-prepend">
            <input type="button" className="form-control btn btn-primary" value="Track" />
          </div>
        </div>
        </form>
        </div>
    </div>
    </>
  );
}
export default Trackorder;