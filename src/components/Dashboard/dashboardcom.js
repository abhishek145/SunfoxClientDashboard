import './dasshboardcss/grid.css';
import { useState } from 'react';
// import Toggle from 'react-toggle';
export default function Grid({ data }) {
  data.map((item) => {
    console.log(item.DeviceName);
    return null; 
  });
  console.log(data);
  const [isToggled, setIsToggled] = useState(false);
  const handleToggle = () => {
    setIsToggled(prevState => !prevState);
  };
  return (
    <> 
<div className='componentdevice'><h4>Dashboard</h4><h5>Device</h5></div>
<div className='dashboard-container'>
  <div className='dashboard'>
    {data.map((item, index) => (
      <div className='spandanimg' key={item.id}>
        <div className='spandanimages'></div>
          <div className='spandandata'>
             <div className='DeviceName'>Spandan 4.0</div>
               <div className='testtype'>
                 Test type: <span style={{ color: 'black' }}>{item.testtype}</span>
                </div>
            <div className='Devicename'>
                  Device Name: <span style={{ color: 'red' }}>{item.DeviceName}</span>
          </div>
        <div className='Testdate'>
                Test Date: <span style={{ color: 'black' }}>{item.TestTaken}</span>
        </div>
        </div> 
      </div>
    ))}
  </div>
</div>
    </>
  );
}
