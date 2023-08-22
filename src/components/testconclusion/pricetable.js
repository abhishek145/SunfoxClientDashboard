import React, { useState } from 'react';
import '../testconclusion/table.css';
const Pricet = ({ data }) => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [checked, setChecked] = useState(true);
  const dataWithIds = data.map((row) => ({
    ...row
  }));
  const dataiam= data.map((row)=>{
    console.log("row i am getting",row)
  })

  const handleCheckboxChange = (event) => {
    const { checked, value } = event.target;

    if (checked) {
    } else {
    }
  };

  const handleChange = (val) => {
    setChecked(val);
  };

  const handleSelectAll = (event) => {
    const { checked } = event.target;
    if (checked) {
      const allRowIds = dataWithIds.map((row) => row.id);
      console.log("all row ids",allRowIds);
      setSelectedRows(allRowIds);
    } else {
      setSelectedRows([]);
    }
  };


  const handleFunctionalityChange = (event, rowId) => {
    const selectedFunctionality = event.target.value;
    alert(`Selected functionality: ${selectedFunctionality} for row with ID: ${rowId}`);
  };

  const handleMonthSelect = (event, rowId) => {
    const selectedMonth = event.target.value;
    alert(`Selected month: ${selectedMonth} for row with ID: ${rowId}`);
  };

  return (
    <>
  <p className='checkinvoice'>ECG Tests</p>
    <div className='tabledatashow'>
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" onChange={handleSelectAll} />
            </th>
            <th>Test Type</th>
            <th>Device Name</th>
            <th>Total</th>
            <th>Payment Status</th>
            <th>
              <select>
                <option>june</option>
                <option>july</option>
                <option>august</option>
              </select>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedRows.includes(row.id)}
                  onChange={handleCheckboxChange}
                />
              </td>
              <td>{row.testtype}</td>
              <td>{row.DeviceName}</td>
              <td>{row.totalPrice}</td>
              <td>{row.paymentStatus}</td>
              <td>
                <button className='invoice'>Check Invoice</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </>
  );
};

export default Pricet;
