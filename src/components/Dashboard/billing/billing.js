import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';
import '../../testconclusion/table.css';
import Pricet from '../../testconclusion/pricetable';
import { useEffect,useState } from 'react';
import axios from 'axios';
import Liveprice from '../../dataone/liveprice';
export default function BillingChart() {
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
  const data = [
    {
      name: 'Jan',
      value1: 120,
      value2: 180,
      value3: 70,
    },
    {
      name: 'Feb',
      value1: 230,
      value2: 120,
      value3: 85,
    },
    {
      name: 'Mar',
      value1: 60,
      value2: 300,
      value3: 130,
    },
    {
      name: 'Apr',
      value1: 90,
      value2: 100,
      value3: 50,
    },
    {
      name: 'May',
      value1: 180,
      value2: 270,
      value3: 90,
    },
    {
      name: 'Jun',
      value1: 200,
      value2: 80,
      value3: 120,
    },
    {
      name: 'Jul',
      value1: 150,
      value2: 250,
      value3: 110,
    },
    {
      name: 'Aug',
      value1: 70,
      value2: 200,
      value3: 60,
    },
    {
      name: 'Sep',
      value1: 280,
      value2: 150,
      value3: 70,
    },
    {
      name: 'Oct',
      value1: 50,
      value2: 320,
      value3: 130,
    },
    {
      name: 'Nov',
      value1: 110,
      value2: 140,
      value3: 40,
    },
    {
      name: 'Dec',
      value1: 220,
      value2: 230,
      value3: 120,
    }];

  return (
    <>
    <div style={{ width: '100%', height: 500 , marginTop:'0%'}} className='billinginfo'>
      <p className='customization'>Billing Information</p>
      <div className='filter'>
        <div className='year'><div className='sortby'>Sort By</div><div className='selected'><li className='seletedmonth'>Monthly</li></div></div>
        <div className='filtervalues'><ul>
          <li>All</li>
        <li>12 Lead</li>
        <li>7 Lead</li>
        <li>2 Lead</li>
        <li>HRV</li>
        </ul></div>
      </div>
      <div className='amountshow'>
        <div className='totalamount'></div>
        <div className='grappoints'></div>
      </div>
      <ResponsiveContainer  className='chartshow'>
        <BarChart
          data={data}
          className='chart'
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name">
            <Label value="Month" offset={0} position="bottom" />
          </XAxis>
          <YAxis>
            <Label value="No. of Total Tests" offset={0} position="left" angle={-90} />
          </YAxis>
          <Tooltip />
          <Legend />
          <Bar dataKey="value1" stackId="stack" fill="#0F70C8" barSize={30} />
          <Bar dataKey="value2" stackId="stack" fill="#F17808" />
          <Bar dataKey="value3" stackId="stack" fill="#ffc658" radius={[5, 5, 0, 0]} label={{ position: 'outside', fill: '#fff' }}/>
        </BarChart>
      </ResponsiveContainer>
      </div>
    {/* <Pricet data={apiData}/> */}
    </>
  );
}
