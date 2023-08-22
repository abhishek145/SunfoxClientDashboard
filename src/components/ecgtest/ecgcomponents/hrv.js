import React from 'react';
import '../../MAINECGTEST/ecgtestdata.css';
import Testplot from '../../MAINECGTEST/Testplot';
import Condition from './condition';
import Hrvgraph from './hrvgraph';

export default function hrv({ data }) {
  return (
    <div className="insidecard">
      <div className='hambugmenu'>
        <p className='menu'>ECG Tests &gt;</p>
        <p className='navigate'>HRV</p>
      </div>
      {/* Analysis & Device Section */}
     
      {/* Interpretation & Suggestions Section */}
      <div className="analysisodevice">
        <div className='devicesused'><span className='details'>Trends and Conclusions</span>
                                     <ul className='mi'><li>Old MI</li>
                                     <li>Non specific ST-abnormality</li>
                                     <li>Suspect/possible Ischemia</li></ul></div>
                                     <div className='devicesused'><span className='details'>Trends and Conclusions</span>
                                     <ul className='mi'><li>Old MI</li>
                                     <li>Non specific ST-abnormality</li>
                                     <li>Suspect/possible Ischemia</li></ul></div>
        </div>
        <div className="analysisodevice">
        <div className='devicesused'><span className='details'>Patient Information</span>
                                     <ul className='mi'><li>Old MI</li>
                                     <li>Non specific ST-abnormality</li>
                                     <li>Suspect/possible Ischemia</li></ul></div>
                                     <div className='devicesused'><span className='details'>Doctor’s Information</span>
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
        <div className="analysisodevice">
        <div className='hrvgraphone'><Hrvgraph/></div>
        <div className='hrvgraphtwo'><Hrvgraph/></div>
        </div>
      </div>
    </div>
  );
}
