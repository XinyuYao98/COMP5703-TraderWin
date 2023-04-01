import React, { useState } from 'react';
import { Image } from 'antd';
import {
    Avatar,
    Button,
    Checkbox,
    Col,
    Form,
    Input,
    Row,
    Select,
    Space,
    Typography
} from 'antd';

const { Title } = Typography;
const { Option } = Select;

interface DataNodeType {
    value: string;
    label: string;
    children?: DataNodeType[];
}


const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};

const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};
const url ='time-is-money.png'

const Register: React.FC = () => {

    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select style={{ width: 70 }}>
                <Option value="61">+61</Option>
            </Select>
        </Form.Item>
    );

    // const suffixSelector = (
    //     <Form.Item name="suffix" noStyle>
    //         <Select style={{ width: 70 }}>
    //             <Option value="USD">$</Option>
    //             <Option value="CNY">¥</Option>
    //         </Select>
    //     </Form.Item>
    // );

    const [autoCompleteResult, setAutoCompleteResult] = useState<string[]>([]);

    // const onWebsiteChange = (value: string) => {
    //     if (!value) {
    //         setAutoCompleteResult([]);
    //     } else {
    //         setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
    //     }
    // };

    // const websiteOptions = autoCompleteResult.map((website) => ({
    //     label: website,
    //     value: website,
    // }));

    return (
        <Row justify="center">
            <Col span={7}></Col>
            <Col span={8} >
                <Row justify="center">
                    <Col span={5}>
                        <Image
                        width={200}
                        hight={200}
                        src="/Users/gaozihang/WebstormProjects/5703/myapp/src/assets/time-is-money.png"
                    />
                    </Col>

                    <Col><Title level={2} italic={true} justify="center">TraderWin</Title></Col>
                </Row>
                <Form
                    {...formItemLayout}
                    form={form}
                    name="register"
                    onFinish={onFinish}
                    initialValues={{ residence: ['zhejiang', 'hangzhou', 'xihu'], prefix: '86' }}
                    style={{ maxWidth: 600 }}
                    scrollToFirstError
                >
                    <Form.Item
                        name="email"
                        label="E-mail"
                        rules={[
                            {
                                type: 'email',
                                message: 'The input is not valid E-mail!',
                            },
                            {
                                required: true,
                                message: 'Please input your E-mail!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        label="Password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        label="Confirm Password"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="Username"
                        label="Username"
                        tooltip="Will be used for login"
                        rules={[{ required: true, message: 'Please input your username!', whitespace: true }]}
                    >
                        <Input />
                    </Form.Item>

                    {/*<Form.Item*/}
                    {/*    name="residence"*/}
                    {/*    label="Habitual Residence"*/}
                    {/*    rules={[*/}
                    {/*        { type: 'array', required: true, message: 'Please select your habitual residence!' },*/}
                    {/*    ]}*/}
                    {/*>*/}
                    {/*    <Cascader options={residences} />*/}
                    {/*</Form.Item>*/}

                    <Form.Item
                        name="phone"
                        label="Phone Number"
                        rules={[{ required: true, message: 'Please input your phone number!' }]}
                    >
                        <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                    </Form.Item>

                    {/*<Form.Item*/}
                    {/*    name="donation"*/}
                    {/*    label="Donation"*/}
                    {/*    rules={[{ required: true, message: 'Please input donation amount!' }]}*/}
                    {/*>*/}
                    {/*    <InputNumber addonAfter={suffixSelector} style={{ width: '100%' }} />*/}
                    {/*</Form.Item>*/}

                    {/*<Form.Item*/}
                    {/*    name="website"*/}
                    {/*    label="Website"*/}
                    {/*    rules={[{ required: true, message: 'Please input website!' }]}*/}
                    {/*>*/}
                    {/*    <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="website">*/}
                    {/*        <Input />*/}
                    {/*    </AutoComplete>*/}
                    {/*</Form.Item>*/}

                    {/*<Form.Item*/}
                    {/*    name="intro"*/}
                    {/*    label="Intro"*/}
                    {/*    rules={[{ required: true, message: 'Please input Intro' }]}*/}
                    {/*>*/}
                    {/*    <Input.TextArea showCount maxLength={100} />*/}
                    {/*</Form.Item>*/}

                    <Form.Item
                        name="gender"
                        label="Gender"
                        rules={[{ required: true, message: 'Please select gender!' }]}
                    >
                        <Select placeholder="select your gender">
                            <Option value="male">Male</Option>
                            <Option value="female">Female</Option>
                            <Option value="other">Other</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item label="Captcha" extra="We must make sure that your are a human.">
                        <Row gutter={8}>
                            <Col span={12}>
                                <Form.Item
                                    name="captcha"
                                    noStyle
                                    rules={[{ required: true, message: 'Please input the captcha you got!' }]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Button>Get captcha</Button>
                            </Col>
                        </Row>
                    </Form.Item>

                    <Form.Item
                        name="agreement"
                        valuePropName="checked"
                        rules={[
                            {
                                validator: (_, value) =>
                                    value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                            },
                        ]}
                        {...tailFormItemLayout}
                    >
                        <Checkbox>
                            I have read the <a href="">agreement</a>
                        </Checkbox>
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">
                            Register
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
            <Col span={8}></Col>
        </Row>

    );
};

export default Register;