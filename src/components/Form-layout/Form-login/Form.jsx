import React from 'react';
import Button from '../auth-button/Button';

const styleForm = {
    Form_body:{
        display:'flex',
        flexFlow:'column',
        justifyContent:'space-evenly',
        backgroundColor:'transparent',
        width:'100%',
        height: '70%',
    },
    body:{
        width:'20vw',
        backgroundColor:'transparent',
        display:'flex',
        flexFlow:'column',
        justifyContent:'space-evenly',
    },
    buttonForm:{
        width:'50%',        
    }
}

const Form = () => {
    return (
        <div style={styleForm.body}>
            <form action="" style={styleForm.Form_body}>
                <label htmlFor="user">User:</label>
                <input type="text" name="user" />
                <label htmlFor="pass">Password:</label>
                <input type="password" name="pass" />
                <input type="button" value="Iniciar Sesion" style={styleForm.buttonForm} />
            </form>
            <Button/>
        </div>
    );
};

export default Form;