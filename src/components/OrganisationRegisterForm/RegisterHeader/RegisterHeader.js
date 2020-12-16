import React from 'react';
import s from './RegisterHeader.module.css'
import whiteLogo from '../../../assets/image/whiteLogo.png'
import {Typography} from "antd";

const {Title, Paragraph} = Typography;

const RegisterHeader = () => {
    return (
        <div className={s.header}>
            <img src={whiteLogo} alt={'white logo'}/>
            <Typography className={s.textBox}>
                <Title level={3}>Welcome to Your Better Wellness</Title>
                <Paragraph>Already sign up? <b>Login</b></Paragraph>
            </Typography>
        </div>
    );
};

export default RegisterHeader;
