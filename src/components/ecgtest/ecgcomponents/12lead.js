import React from 'react';
import '../../MAINECGTEST/ecgtestdata.css';
import Testplot from '../../MAINECGTEST/Testplot';
import Condition from './condition';

export default function Blank({ data }) {
  return (
    <div className="insidecard">
      <div className='hambugmenu'>
        <p className='menu'>ECG Tests &gt;</p>
        <p className='navigate'>12 Lead ECG</p>
      </div>
      {/* Analysis & Device Section */}
      <div className="analysisodevice">
        <div className='devicesused'><span className='pt'>PT Intervel:</span></div>
        <div className='condition'><span className='qrs'><Condition/></span></div>
      </div>
      {/* Interpretation & Suggestions Section */}
      <div className="analysisodevice">
        <div className='devicesused'><span className='details'>Interpretation Details</span>
                                     <ul className='mi'><li>Old MI</li>
                                     <li>Non specific ST-abnormality</li>
                                     <li>Suspect/possible Ischemia</li></ul></div>
                                     <div className='devicesused'><span className='details'>Interpretation Details</span>
                                     <ul className='mi'><li>Old MI</li>
                                     <li>Non specific ST-abnormality</li>
                                     <li>Suspect/possible Ischemia</li></ul></div>
        </div>
      {/* ECG Data Analysis Section */}
      <div className='hwa'>
        <h4>ECG Data Analysis</h4>
        <div className="dataanalysis">
          <div className='intervel'><span className='pt'>PT Intervel:</span></div>
          <div className='intervel'><span className='qrs'>QRS Complex:</span></div>
          <div className='intervel'><span className='qt'>QT Intervel:</span></div>
          <div className='intervel'><span className='qtc'>QTc intervel:</span></div>
        </div>
      </div>
      {/* ECG Characteristics Section */}
      <div className='waves'>
        <h4>ECG Characteristics</h4>
        <div className="deviceid">
          <div className='devicedetails'>
            <Testplot />
          </div>
          <div className='testconclusion'>
            <Testplot />
          </div>
        </div>
        <div className="deviceid">
          <div className='devicedetails'>
            <Testplot />
          </div>
          <div className='testconclusion'>
            <Testplot />
          </div>
        </div>
        <div className="deviceid">
          <div className='devicedetails'>
            <Testplot />
          </div>
          <div className='testconclusion'>
            <Testplot />
          </div>
        </div>
        {/* Repeat the above block for other deviceid sections */}
      </div>
    </div>
  );
}
