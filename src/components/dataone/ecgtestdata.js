import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeView } from '../../store/uiSlice';
import axios from 'axios';
import Testdata from "../MAINECGTEST/ecgtestdata";

export default function EcgTestdata() {
  const [apiData, setApiData] = useState([]);
  const dispatch = useDispatch();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://s0oeu1909d.execute-api.ap-south-1.amazonaws.com/test/gettabledata');
        console.log('API Response:', response.data);
        setApiData(response.data.body);

        dispatch(changeView({ viewName: "testdata", value: true }));
        dispatch(changeView({ viewName: "ecgTest", value: true }));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  const uiState = useSelector((state) => state.ui);
  let activeComponent;
  console.log("current state", uiState);
  if (uiState.ecgtest) {
    activeComponent = <Testdata />;
  }
  return (
    <>
      {activeComponent}
      <Testdata data={apiData} />
    </>
  );
}
