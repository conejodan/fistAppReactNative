import React from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 20 }}>
        <Scene>
        
            <Scene key="login" component={LoginForm} />
        
            <Scene key="employeeList" component={EmployeeList} title="Employees" />
        
        </Scene>
    </Router>
  );
};

export default RouterComponent;