import React from 'react';
import '../../MAINECGTEST/ecgtestdata.css';

export default function Condition() {
  const level = "high";

  return (
    <>
      <div className="values">
        <div className="lowvalue">Low risk</div>
        <div className="midvalue">Moderate risk</div>
        <div className="highvalue">High risk</div>
      </div>
      <div className="bar">
        <div className="low">
          <center>
            <div className='indicator' style={{ display: level === 'low' ? 'block' : 'none' }}></div>
          </center>
        </div>
        <div className="mid">
          <center>
            <div className='indicator' style={{ display: level === 'mid' ? 'block' : 'none' }}></div>
          </center>
        </div>
        <div className="high">
          <center>
            <div className='indicator' style={{ display: level === 'high' ? 'block' : 'none' }}></div>
          </center>
        </div>
      </div>
    </>
  );
}
