import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeView } from '../store/uiSlice';
import '../css/home.css';
import DashboardIcon from '../css/assets/Dashboardicon';
import SunfoxLogo from '../css/assets/sunfoxlogo';
import Header from '../components/header';
import DashboardData from './Dashboard/dashboarddata';
import BillingData from './dataone/billingdata';
import ReportData from './dataone/reportdata';
import EcgTestData from './dataone/ecgtestdata';
import ReportIcon from '../css/assets/reporticon';
import BillingIcon from '../css/assets/billingicon';
import EcgTestIcon from '../css/assets/ecgtesticon';
import Blank from './ecgtest/ecgcomponents/12lead';
import HRV from './ecgtest/ecgcomponents/hrv';
import Searchresult from './Searchresult';
import Editpro from './editpro';

export default function Home() {
  const dispatch = useDispatch();
  const uiState = useSelector(state => state.ui);
  console.log("states", uiState)
  const handleNavigationClick = (viewName) => {
    dispatch(changeView({ viewName }));
  };

  let activeComponent;

  if (uiState.carddata && uiState.data.testtype === "12Lead") {
    console.log("blank state", uiState.carddata);
    console.log("items i am getting", uiState.data.testtype);
    console.log(uiState.deviceid);
    activeComponent = <Blank data={uiState.data} />;
  } else if (uiState.carddata && uiState.data.testtype === "HRV") {
    console.log("items i am getting", uiState.data.testtype);
    activeComponent = <HRV data={uiState.data} />;
  } 
  else if(uiState.editpro){
    activeComponent=<Editpro/>
  }else if (uiState.dashboard) {
    activeComponent = <DashboardData />;
  } else if (uiState.ecgTest) {
    activeComponent = <EcgTestData />;
  } else if (uiState.reports) {
    activeComponent = <ReportData />;
  } else if (uiState.billing) {
    activeComponent = <BillingData />;
  } else if (uiState.search) {
    activeComponent = <Searchresult data={uiState.data} />;
  }
  const datagetted =uiState.event;
  console.log("this is the current component", activeComponent);
  console.log("data from search",{datagetted})
  return (
    <div className='home'>
      <div className='mainnavigation' style={{ display: 'flex' }}>
        <div className="navigationbar">
          <div className='companylogo'>
            <SunfoxLogo />
            <ul className='elements'>
              <li className='navigatorelis' onClick={() => handleNavigationClick('dashboard')}>
                <span><DashboardIcon /></span><p>Dashboard</p>
              </li>
              <li className='navigatorelis' onClick={() => handleNavigationClick('ecgTest')}>
                <span><EcgTestIcon /></span><p>ECG tests</p>
              </li>
              <li className='navigatorelis' onClick={() => handleNavigationClick('reports')}>
                <span><BillingIcon /></span><p>Reports</p>
              </li>
              <li className='navigatorelis' onClick={() => handleNavigationClick('billing')}>
                <span><ReportIcon /></span><p>Billing</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="alldata" style={{ flex: '70%', height: '100vh', width: '100vh' }}>
          <Header className="mobileres" />
          <div className='viewalldata'>{activeComponent}</div>
        </div>
      </div>
    </div>
  );
}
