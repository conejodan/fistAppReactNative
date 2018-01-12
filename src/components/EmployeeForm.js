import React, {Component} from 'react';
import {View, Picker, Text} from 'react-native';
import { CardSection, Input} from './common';
import {connect} from 'react-redux';
import {employeeUpdate} from '../actions';

class EmployeeForm extends Component{
    render(){
        console.log("EmployeeForm",this.props);
        return (
            <View>
                <CardSection>
                    <Input
                    label="Nombre"
                    placeholder="Daniel"
                    value={this.props.name}
                    onChangeText = {value => this.props.employeeUpdate({prop: 'name', value})}
                    />
                </CardSection>

                <CardSection>
                    <Input
                    label="Telefono"
                    placeholder="9932-123456"
                    value={this.props.phone}
                    onChangeText = {text => this.props.employeeUpdate({prop: 'phone', value: text})}
                    />
                </CardSection>
                
                <CardSection style={{ flexDirection: 'row'}}>
                    <Text style={styles.pickerTextStyle}>Shift</Text>
                    <Picker
                        style={{flex:2}}
                        selectedValue={this.props.shift}
                        onValueChange = {value => this.props.employeeUpdate({prop: 'shift', value})}
                    >
                        <Picker.Item label="" value="" />
                        <Picker.Item label="Lunes" value="Lunes" />
                        <Picker.Item label="Martes" value="Martes" />
                        <Picker.Item label="Miercoles" value="Miercoles" />
                        <Picker.Item label="Jueves" value="Jueves" />
                        <Picker.Item label="Viernes" value="Viernes" />
                    </Picker>
                </CardSection>
            </View>
        );
    }
}

const styles ={
    pickerTextStyle:{
        fontSize:18,
        paddingLeft:20,
        flex:1
    }
}

const mapStateToProps = (state)=>{
    const {name, phone, shift} = state.employeeForm
    return {name, phone, shift};
}

export default connect(mapStateToProps, {employeeUpdate})(EmployeeForm);