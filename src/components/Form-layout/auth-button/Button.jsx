import React from 'react';
import GoogleLogin from 'react-google-login';

const styles={
    body:{
        width:'100%',
        backgroundColor:'transparent',
        display:'flex',
        flexFlow:'row',
        justifyContent:'center'
    },
}

const responseGoogle = (response) =>{
    console.log("Bienvenido");
    console.log(response.profileObj.email);
    console.log(response.Au.jf);
}

const Button = () => {
    return (
        <div style={styles.body}>
            <GoogleLogin
                clientId="546200629320-prnpegq6b4sgf1ncpttv7ld9vtq6s2r9.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    );
};

export default Button;