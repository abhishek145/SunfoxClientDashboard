import React, { useState } from 'react'; // Import useState
import '../css/home.css';
import profile from '../css/OIP.jpg';
import Searchicon from '../css/searchicon';
import { useDispatch, useSelector } from 'react-redux';
import { changeView } from '../store/uiSlice';

const Header = () => {
  const dispatch = useDispatch();
  const uiState = useSelector(state => state.ui);
  console.log("uistate", uiState);

  const [searchValue, setSearchValue] = useState(""); // State to hold the input value

  const handleSearch = () => { // Modify to not expect an event
    console.log("searchValue", searchValue); // Log the input value
    dispatch(changeView({ viewName: 'search', value: true, data: searchValue }));
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
      console.log("event getted", searchValue); // Log the input value
    }
  };
  function editpro(){
    dispatch(changeView({viewName:"editpro", value:true}))
  }

  return (
    <div className='headerfull'>
      <div className='headershow'>
        <div className='searchicon'>
          <div className='searchbar'>
            <input
              type="search"
              placeholder='Search anything'
              value={searchValue} // Bind input value to state
              onChange={(e) => setSearchValue(e.target.value)} // Update state on input change
              onKeyPress={handleKeyPress}
            />
            <span className='searchiconstyle' onClick={handleSearch}>
              <Searchicon />
            </span>
          </div>
        </div>
        <div className='bellicon'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* SVG path goes here */}
          </svg>
        </div>
        <div className='profile' onClick={editpro}>
          <img src={profile} alt="Profile" />
        </div>
        <span>
          <p>Abhishek Negi</p>
        </span>
      </div>
    </div>
  );
};

export default Header;
