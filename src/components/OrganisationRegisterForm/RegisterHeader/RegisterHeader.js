import React from 'react';
import s from './RegisterHeader.module.css'
import whiteLogo from '../../../assets/image/whiteLogo.png'
import {Typography} from "antd";

const {Title, Paragraph} = Typography;

const RegisterHeader = ({type}) => {
    return (
        <div className={s.header}>
            <img src={whiteLogo} alt={'white logo'}/>
            <Typography className={s.textBox}>
                <Title level={3}>Welcome to Your Better Wellness</Title>
                {type && type === "login" && <Paragraph>Already sign up? <b>Login</b></Paragraph>}
                {type && type === "signUp" && <Paragraph>Don't have an account? <b>Sign up</b> <b>Login</b></Paragraph>}
                {type && type === "finish" && <Paragraph>To finish registration process fill the room</Paragraph>}
            </Typography>
        </div>
    );
};

export default RegisterHeader;
