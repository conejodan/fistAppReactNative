import React, {Component} from 'react';
import {Card, CardSection, Input, Button} from './common';

class EmployeeCreate extends Component{
    render(){
        return (
            <Card>
                <CardSection>
                    <Input
                    label="Nombre"
                    placeholder="Daniel"
                    />
                </CardSection>

                <CardSection>
                    <Input
                    label="Telefono"
                    placeholder="9932-123456"
                    />
                </CardSection>
                
                <CardSection>
                </CardSection>
                
                <CardSection>
                    <Button>
                        Crear
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default EmployeeCreate;