import React from 'react';
import Form from './Form-login/Form';

const stylesLayout = {
    body:{
        width:'100vw',
        height:'40vh',
        backgroundColor:'transparent',
        display:'flex',
        flexFlow:'row',
        justifyContent:'center'
    },
}

const FormLayout = () => {
    return (
        <div style={stylesLayout.body}>
            <Form/>
        </div>
    );
};

export default FormLayout;