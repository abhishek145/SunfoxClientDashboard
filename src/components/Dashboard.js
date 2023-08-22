import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { useDashboardMutation } from '../store/apis/userApis';
import Home from './Home';
import './animation.css'
function Dashboard() {
  // const navigate = useNavigate();
  // const [dashboard, { data, isLoading, isError, error }] = useDashboardMutation();

  // const fetchDashboardData = async () => {
  //   try {
  //     await dashboard();
  //     if (error && error.status === 401) {
  //       navigate('/login');
  //     }
  //   } catch (err) {
  //     console.error('Dashboard data fetch error:', err)
  //   }
  // };

  // useEffect(() => {
  //   fetchDashboardData();
  // }, []);

  // useEffect(() => {
  //   if (!!isError && error && error.status === 401) {
  //     navigate('/');
  //   }
  // }, [isError, error]);

  return (
    <div>
      {/* {isLoading ? (
        <div>
          <div className="loading-spinner"></div>
        </div>
      ) : (
        !isError && <Home />
      )}
    </div> */}
    <Home/>
    </div>
  );
}

export default Dashboard;
