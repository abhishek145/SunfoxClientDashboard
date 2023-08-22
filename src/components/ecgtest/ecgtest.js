import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Blank from './ecgcomponents/12lead';
import { changeView } from '../../store/uiSlice';
import '../../../src/components/Dashboard/dasshboardcss/grid.css';
import Img from '../ecgtest/icon.jpg';
import Dashboard from '../Dashboard';
export default function Deviceused({data}) {
  const dispatch = useDispatch();
  const handleNavigationClick = (viewName,item) => {
    dispatch(changeView({ viewName: 'Dashboard',data:item }));
  };
  const uiState = useSelector((state) => state.ui);
  let activeComponent;
  console.log("current state",uiState)
  if (uiState.Blank) {
    activeComponent = <Blank />;
  }
  return (
    <>
      <br/><br/>
       <div className='componentdevice'><h5>ECG Tests</h5></div>
      <div className="ecgtests">
        {data.map((item) => (
          <>
          <div key={item.id} className="tlead">
          <div className='icons'><img src={Img}/></div>
          <div className='datashown'> <h4 className='ecgtesttitle'>Test: {item.testtype}</h4><p className='ecgtestdevive'>Device used: {item.DeviceName}</p>
          <p className='ecgtestdevive'>Test taken: {item.TestTaken}</p><button onClick={() => handleNavigationClick('Blank',item)} className='btnclick'>Tap To View More</button></div> 
           </div>
          </>
        ))}
      </div>
      {activeComponent}
    </>
  );
}
