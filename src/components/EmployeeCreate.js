import React, {Component} from 'react';
import { connect } from 'react-redux';
import {employeeCreate} from '../actions';
import {Card, CardSection, Button} from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component{

    onButtonPress(){
        const {name, phone, shift} = this.props;
        this.props.employeeCreate({name, phone, shift: shift || 'Lunes'});
    }

    render(){
        console.log("EmployeeForm", this.props);
        return (
            <Card>
                <EmployeeForm {...this.props} />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Crear
                    </Button>
                </CardSection>
            </Card>
        );
    }
}
const mapStateToProps = (state)=>{
    const {name, phone, shift} = state.employeeForm
    return {name, phone, shift};
}

export default connect(mapStateToProps, {employeeCreate})(EmployeeCreate);