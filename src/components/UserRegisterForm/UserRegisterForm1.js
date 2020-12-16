import React from 'react';
import {useDispatch} from "react-redux";
import {Button, Checkbox, Form, Input} from "antd";
import s from "../OrganisationRegisterForm/RegisterForm.module.css";
import RegisterHeader from "../OrganisationRegisterForm/RegisterHeader/RegisterHeader";
import InfoCircleOutlined from "@ant-design/icons/lib/icons/InfoCircleOutlined";
import google from "../../assets/image/google.png";
import {Typography} from "antd";

const {Paragraph} = Typography;



const validateMessages = {
    required: 'Please fill out this field',
    types: {
        email: 'Please enter a correct email',
    }
};

const UserRegisterForm = () => {

    const dispatch = useDispatch();
    const [form] = Form.useForm();

    const onFinish = values => {
        console.log('Success:', values);
        // dispatch((values))
        form.resetFields();
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (<section className={s.section}>

            <RegisterHeader/>

            <Form validateMessages={validateMessages}
                  name="UserRegisterForm"
                  initialValues={{remember: true}}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  form={form}
            >
                <Form.Item
                    name="Name"
                    rules={[{required: true}]}
                >
                    <Input placeholder="Name" suffix={<InfoCircleOutlined/>}/>
                </Form.Item>

                <Form.Item
                    name="Email"
                    hasFeedback

                    rules={[
                        {
                            required: true,
                            type: "email",
                        },
                    ]}
                >
                    <Input placeholder="Email Address" suffix={<InfoCircleOutlined/>}/>
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input.Password placeholder="Password"/>
                </Form.Item>

                <Form.Item
                    name="confirm"
                    dependencies={['password']}
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({getFieldValue}) => ({
                            validator(rule, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject('The two passwords that you entered do not match!');
                            },
                        }),
                    ]}
                >
                    <Input.Password placeholder="Confirm Password"/>
                </Form.Item>

                <div className={s.footer}>
                    <Paragraph>
                        By signing up you agree to our <b>Terms of Use</b> and <b>Privacy Policy</b>
                    </Paragraph>

                    <Form.Item initialValue={false} name="ReceiveEmails" valuePropName="checked">
                        <Checkbox>I want to receive emails from Symptomaticall Teams</Checkbox>
                    </Form.Item>

                    <Form.Item>
                        <Button block shape={"round"} className={s.signUp} type="primary" htmlType="submit">
                            Sign Up
                        </Button>
                    </Form.Item>

                    <Form.Item>
                        <Button block shape={"round"} className={`${s.signUp} ${s.google}`} type="primary">
                            <div className={s.btnInsides}><img className={s.googleImg} src={google}
                                                               alt={"google"}/> Sign Up with Google
                            </div>
                        </Button>
                    </Form.Item>
                </div>

            </Form>

        </section>
    );
};

export default UserRegisterForm;
