import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Picker, Text } from 'react-native';
import {employeeUpdate, employeeCreate} from '../actions';
import {Card, CardSection, Input, Button} from './common';

class EmployeeCreate extends Component{

    onButtonPress(){
        const {name, phone, shift} = this.props;
        this.props.employeeCreate({name, phone, shift: shift || 'Lunes'});
    }

    render(){
        return (
            <Card>
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
                    value={this.props.phonne}
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
                
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Crear
                    </Button>
                </CardSection>
            </Card>
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

export default connect(mapStateToProps, {employeeUpdate, employeeCreate})(EmployeeCreate);