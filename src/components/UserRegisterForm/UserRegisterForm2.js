import React from 'react';
import s from "../OrganisationRegisterForm/RegisterForm.module.css";
import RegisterHeader from "../OrganisationRegisterForm/RegisterHeader/RegisterHeader";
import {Button, Checkbox, Form, Input, Select, Typography} from "antd";
import InfoCircleOutlined from "@ant-design/icons/lib/icons/InfoCircleOutlined";
import google from "../../assets/image/google.png";
import {useDispatch, useSelector} from "react-redux";
import {setUserIsFirstPartDone, setUserIsSecondPartDone} from "../../redux/reducers/UserDataReducer";
import {Redirect} from "react-router-dom";

const validateMessages = {
    required: 'Please fill out this field',
};

const UserRegisterForm2 = () => {
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const isUserSecondPartDone = useSelector(state => state.user.isSecondPartDone)

    const onFinish = values => {
        console.log('Success:', values);
        dispatch(setUserIsSecondPartDone(values))
        form.resetFields();
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    if (isUserSecondPartDone) {
       return <Redirect to={'/userRegister3'}/>
    }
    return (
        <section className={s.section}>

            <RegisterHeader type={"finish"}/>

            <Form validateMessages={validateMessages}
                  name="UserRegisterForm"
                  initialValues={{remember: true}}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  form={form}
            >
                <Form.Item
                    name={"Province"}
                    rules={[{required: true}]}
                >
                    <Select placeholder={"Province"}>
                        <Select.Option value="Minsk Oblast">Minsk Oblast</Select.Option>
                        <Select.Option value="Mogilev Oblast">Mogilev Oblast</Select.Option>
                        <Select.Option value="Gomel Oblast">Gomel Oblast</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    name="CityOfSchool"
                    rules={[{required: true}]}
                >
                    <Input placeholder="City of school" suffix={<InfoCircleOutlined/>}/>
                </Form.Item>
                <Form.Item
                    name="SchoolLocation"
                    rules={[{required: true}]}
                >
                    <Input placeholder="School location" suffix={<InfoCircleOutlined/>}/>
                </Form.Item>
                <Form.Item
                    name="SchoolName"
                    rules={[{required: true}]}
                >
                    <Input placeholder="School name" suffix={<InfoCircleOutlined/>}/>
                </Form.Item>
                <Form.Item
                    name="TypeOfSchool"
                    rules={[{required: true}]}
                >
                    <Input placeholder="Type of school" suffix={<InfoCircleOutlined/>}/>
                </Form.Item>
                <Form.Item
                    name="SchoolEmail"
                >
                    <Input placeholder="School email if available" suffix={<InfoCircleOutlined/>}/>
                </Form.Item>
                <Form.Item
                    name="YourPosition"
                    rules={[{required: true}]}
                >
                    <Input placeholder="Your position" suffix={<InfoCircleOutlined/>}/>
                </Form.Item>

                <Form.Item
                    name={"Number of students"}
                    rules={[{required: true}]}
                >
                    <Select placeholder={"Number of students"}>
                        <Select.Option value="50">50</Select.Option>
                        <Select.Option value="100">100</Select.Option>
                        <Select.Option value="1000">1000</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item>
                    <Button block shape={"round"} className={s.signUp} type="primary" htmlType="submit">
                        Confirm
                    </Button>
                </Form.Item>

            </Form>

        </section>
    );
};

export default UserRegisterForm2;
