import React from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import { connect } from 'react-redux'
import { addUser, queryUsers } from './loginAction'
import './login.less'

const FormItem = Form.Item

class Login extends React.Component {

    componentDidMount() {
        this.props.dispatch(queryUsers())
    }

    handleSubmit = (e) => {
        const { dispatch, isLogin, history } = this.props
        e.preventDefault()
        
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const callback = () => history.push('/home')
                dispatch(addUser(
                    values,
                    callback,
                ))
            }
        })
    }

    handleClickRegister = () => {
        const { dispatch, isLogin } = this.props
        dispatch({
            type: 'login_setState',
            state: {
                isLogin: !isLogin,
            }
        })
    }

    render() {
        const { form, dispatch, isLogin } = this.props
        const { getFieldDecorator } = form
        return (
            <div className="login-container">
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem>
                        {getFieldDecorator('name', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
                        )}
                    </FormItem>
                    <FormItem>
                        {
                            isLogin && getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Checkbox>记住我</Checkbox>
                            )
                        }
                        {
                            isLogin && <a className="login-form-forgot" href="">忘记密码</a>
                        }
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            {
                                isLogin ? '登录' : '注册'
                            }
                        </Button>
                            或者
                        <a
                            onClick={this.handleClickRegister}
                        >
                            {
                                isLogin ? '现在注册' : '返回登录'
                            }
                        </a>
                    </FormItem>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.login,
    }
}

export default connect(mapStateToProps)(Form.create()(Login))
