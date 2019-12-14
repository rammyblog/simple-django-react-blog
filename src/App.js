import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import BaseRouter from './routes';
import 'antd/dist/antd.css'; 
import CustomLayout from './components/containers/Layout';




function App() {
  return (
    <Router>
      <CustomLayout>
        <BaseRouter />
      </CustomLayout>
    </Router>
  );
}

export default App;
