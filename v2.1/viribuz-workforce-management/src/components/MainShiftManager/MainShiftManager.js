import React from 'react';
import "./mainshiftmanager.css";

const ShiftManager = () => {
  return (
    <div className="card-with-box-shadow" style={{ paddingLeft: '5rem', marginTop: '2rem', marginBottom: '3rem' }}>
      <div className="card" style={{ width: '30%', backgroundColor: 'white', color: 'black' }}>
        <div className="card-body">
          <div className="row">
            <div className="col-6">
              <p className="card-text">Campaign</p>
            </div>
            <div className="col-6" style={{ paddingRight: '1rem' }}>
              <p className="card-text">NEC</p>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <p className="card-text">Account</p>
            </div>
            <div className="col-6" style={{ paddingRight: '1rem' }}>
              <p className="card-text">Flynn</p>
            </div>
          </div>
          
          <div className="row" style={{ paddingRight: '1rem' }}>
            <div className="col-6">
              <p className="card-text">Shift Managers</p>
            </div>
    		    <div className="col-6" style={{ 
    		      border: '1px solid #D0D5DD',
    		      borderRadius: '8px',  
    		      padding: '8px',
    		      height: '25px',       
    		      display: 'flex',
    		      alignItems: 'center'  
    		    }}>
    		      <p className="card-text">John Smith</p>
    		    </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ShiftManager;
