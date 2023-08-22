import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeView } from '../../store/uiSlice';
// import Blank from '../ecgtest/ecgcomponents/blank';

export default function Testdata({ data }) {
  const dispatch = useDispatch();
  const uiState = useSelector((state) => state.ui);
  const [selectedTestType, setSelectedTestType] = useState('');
  data.map((e)=>{
   console.log("items i am gettin",e.DeviceID)
  })
  const handleNavigationClick = (viewName, item) => {
    if (viewName === 'ecgTest') {
      dispatch(changeView({ viewName: 'carddata', value: true, data: item}));
    } else {
      dispatch(changeView({ viewName }));
    }
  };

  const handleButtonClick = (testType) => {
    setSelectedTestType(testType);
  };

  const filteredData = selectedTestType
    ? data.filter((item) => item.testtype === selectedTestType)
    : data;

  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const chartData = processChartData(filteredData);
    setChartData(chartData);
  }, [filteredData]);

  const processChartData = (data) => {
    const chartData = {
      labels: data.map((item, index) => `Label ${index}`),
      datasets: [
        {
          label: 'Data Plot',
          data: data.map(item => item.value), 
          borderColor: 'rgba(75,192,192,1)',
          backgroundColor: 'rgba(75,192,192,0.4)',
          fill: true,
        },
      ],
    };
    return chartData;
  };

  const testtype = '12 Lead';

  return (
    <>
    <h3 className='ECGtest' style={{marginTop:"10%"}}>ECG Tests</h3>
      <div className='btnselect'>
      <div className='filter'>
        <div className='year'><div className='sortby'>Sort By</div><div className='selected'><li className='seletedmonth'>Monthly</li></div></div>
        <div className='filtervalues'><ul>
          <li onClick={() => handleButtonClick('')}>All</li>
        <li onClick={() => handleButtonClick('12Lead')}>12 Lead</li>
        <li onClick={() => handleButtonClick('Leadtwo')}>2 Lead</li>
        <li onClick={() => handleButtonClick('HRV')}>HRV</li>
        </ul></div>
      </div>
      </div>
      <div className='showdata'>
        {filteredData.map((item) => (
          <div key={item.DeviceID} className='cards'>
            <span className='imagerender'><img src=''></img></span>
            <div className='testtype'>{item.testtype}</div>
            <div >Device Name: <span className='devicename'>{item.DeviceName}</span></div>
            {/* <div>Location: <span className='location'>{item.Location}</span></div> */}
            <div>Test Taken: <span className='testtaken'>{item.TestTaken}</span></div>
            <div><button onClick={() => handleNavigationClick('ecgTest', item)}>Tap To View More</button></div>
          </div>
        ))}
      </div>
    </>
  );
}
