import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Grid from './dashboardcom';
import Deviceused from '../ecgtest/ecgtest';
import TableWC from '../testconclusion/testconclusion';
import Pricet from '../testconclusion/pricetable';
import BillingChart from './billing/billing';
export default function Dashboarddata() {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://s0oeu1909d.execute-api.ap-south-1.amazonaws.com/test/gettabledata');
        console.log('API Response:', response.data);
        setApiData(response.data.body); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <Grid data={apiData}/>
      <Deviceused data={apiData}/>
      <TableWC data={apiData} />
      <BillingChart />
      <Pricet data={apiData} />
    </>
  );
}
