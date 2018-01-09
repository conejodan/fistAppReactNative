import React from 'react';
import { Scene, Router, Stack, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
  return (
    <Router>
        <Scene key="root" hideNavBar>
          {/* <Scene key="auth">
            <Scene key="login" component={LoginForm} title="login" initial />
          </Scene> */}
          
          <Scene key="main">
            <Scene
            onRight={()=>Actions.employeeCreate()}
            rightTitle="Add"
            key="employeeList"
            component={EmployeeList}
            title="employees"
            initial
            />
            <Scene
            key="employeeCreate"
            component={EmployeeCreate}
            title="Create Employee"
            />
          </Scene>
        </Scene>
    </Router>
  );
};

export default RouterComponent;