import './index.css';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
 // Import Provider from react-redux
import store from './store/store'; // Import your Redux store
import Dashboard from './components/Dashboard';
import Login from './components/Login';
function App() {
  // const isUserLoggedIn = !!userInfo

  return (
    <Provider store={store}> {/* Wrap your Routes with Provider */}
      <Routes>
        {/* <Route path='/' element={isUserLoggedIn ? <Dashboard/> : <Login/>}></Route> */}
        {/* <Route path='/' element={<Login/>}></Route> */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Provider>
  );
}

export default App;
