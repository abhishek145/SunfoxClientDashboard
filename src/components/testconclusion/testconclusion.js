import React, { useState } from 'react';
import '../testconclusion/table.css';
import ReactSwitch from 'react-switch';
import Editicon from './ediicon';

const TableWC = ({ data }) => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [checked, setChecked] = useState(true);

  const handleCheckboxChange = (event, rowId) => {
    const { checked } = event.target;

    if (checked) {
      setSelectedRows([...selectedRows, rowId]);
    } else {
      setSelectedRows(selectedRows.filter(id => id !== rowId));
    }
  };

  const handleChange = (val) => {
    setChecked(val);
  };

  const handleSelectAll = (event) => {
    const { checked } = event.target;

    if (checked) {
      const allRowIds = data.map((row) => row.id);
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
      <p className='customization'>Test Customization</p>
    <div className='tabledatashow'>
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" onChange={handleSelectAll} />
            </th>
            <th>Test Type</th>
            <th>Device Name</th>
            <th>Test/Price</th>
            <th>Functionality</th>
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
            <tr key={row.id} className='maindata'>
              <td>
                <input
                  type="checkbox"
                  checked={selectedRows.includes(row.id)}
                  onChange={(event) => handleCheckboxChange(event, row.id)}
                />
              </td>
              <td className='rowselectes'>{row.testtype}</td>
              <td className='rowselectes'>{row.DeviceName}</td>
              <td className='rowselectes'>{row.price}</td>
              <td>
                <label>
                  <ReactSwitch checked={checked} checkedIcon=" " uncheckedIcon=" " onChange={handleChange} />
                </label>
              </td>
              <td>
                <button className='editp'>
                  <Editicon />edit price
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </>
  );
};

export default TableWC;
