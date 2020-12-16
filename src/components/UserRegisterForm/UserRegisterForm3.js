import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Button, Form, Input, Select} from "antd";
import {setUserData, setUserIsSecondPartDone} from "../../redux/reducers/UserDataReducer";
import {Redirect} from "react-router-dom";
import s from "../OrganisationRegisterForm/RegisterForm.module.css";
import RegisterHeader from "../OrganisationRegisterForm/RegisterHeader/RegisterHeader";
import InfoCircleOutlined from "@ant-design/icons/lib/icons/InfoCircleOutlined";

const validateMessages = {
    required: 'Please fill out this field',
};

const UserRegisterForm3 = () => {
    const dispatch = useDispatch();
    const [form] = Form.useForm();

    const onFinish = values => {
        console.log('Success:', values);
        dispatch(setUserData(values))
        form.resetFields();
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

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
                    name={"Number of users"}
                    rules={[{required: true}]}
                >
                    <Select placeholder={"Number of users"}>
                        <Select.Option value="50">50</Select.Option>
                        <Select.Option value="100">100</Select.Option>
                        <Select.Option value="1000">1000</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    name={"Province2"}
                    rules={[{required: true}]}
                >
                    <Select placeholder={"Province"}>
                        <Select.Option value="Minsk Oblast">Minsk Oblast</Select.Option>
                        <Select.Option value="Mogilev Oblast">Mogilev Oblast</Select.Option>
                        <Select.Option value="Gomel Oblast">Gomel Oblast</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    name="CityOfOrganisation"
                    rules={[{required: true}]}
                >
                    <Input placeholder="City of organisations" suffix={<InfoCircleOutlined/>}/>
                </Form.Item>
                <Form.Item
                    name="Location"
                    rules={[{required: true}]}
                >
                    <Input placeholder="Location" suffix={<InfoCircleOutlined/>}/>
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

export default UserRegisterForm3;
