


import "./index.scss";

import { WingBlank, WhiteSpace, Button, InputItem, List } from 'antd-mobile';

import {axios} from "&"
import {connect} from "react-redux"
import {getUserInfo} from "../../actions"
import { store } from "../../store"

export const mReg = /^1(3|5|7|8|9)\d{9}$/;
export const cReg = /^\d{4}$/; 

let timer = null


@connect()
export class Login extends Component {
    constructor() {
        super()
        this.state = {
            // 验证码不可点击
            codeBtnDis: true,
            loginBtnDis: true,
            txt: "获取验证码",
            count: 60,
            flag: true
        }
    }
    // 输入手机号 获取验证码就高亮
    checkMobile = (mobile) => {

        // var mValue = this.mobile.state.value;

        var code = this.code.state.value

        // 为 true 才能 手机号控制验证码高亮
        if (this.state.flag) {
            this.setState({
                codeBtnDis: !mReg.test(mobile),
                loginBtnDis:!(mReg.test(mobile)&&(cReg.test(code)))
            })
        }
    }

    
      // 验证 验证码 60s内失效
      loginAuto =()=>{
        axios.post("/react/checkCode",{
            mobile:this.mobile.state.value,
            code:this.code.state.value
        }).then(res=>{
            console.log(res.data)
            console.log(this.state)
            if(!!res.data.type){
              
                var token = res.data.token
                sessionStorage.token = token
                // // 登录成功
                // action  带 token mobile
                console.log(store)
                this.props.dispatch(getUserInfo({
                    isLogin:true,
                    mobile:this.mobile.state.value,
                    token:res.data.token,
                }))
                this.props.history.push("/app/mine")
            }else{
                sessionStorage.token =""
            }
        })
    }

    // 输入手机号 验证码倒计时
    start = () => {
        this.sendCode()
        timer = setInterval(() => {
            if (this.state.count > 0) {
                this.setState({
                    codeBtnDis: true,
                    count: --this.state.count,
                    txt: `剩余 ${this.state.count} s`,
                    flag: false
                })
            } else {
                clearInterval(timer);
                this.setState({
                    codeBtnDis: false,
                    count: 60,
                    txt: `获取验证码`,
                    flag: true
                })
            }
        }, 1000)
    }
    // 发送验证码
    sendCode =()=>{
        axios.post("/react/sendCode",{
            mobile:this.mobile.state.value
        }).then(res=>{
            console.log(res)
        })
    }

    // 手机号 验证码同时输入 控制登录高亮
    checkCode =(code)=>{
        var mobile = this.mobile.state.value

        this.setState({
            loginBtnDis:!(mReg.test(mobile)&&cReg.test(code))
        })
      
    }
    goback =()=>{
        history.go(-1)
    }
    render() {
        const {
            codeBtnDis,
            loginBtnDis,
            txt
        } = this.state
        return (
            <div>
                  <div className="head">
                    <i className="iconfont icon-mjiantou-copy" onClick={this.goback}></i>
                    <span>登录</span>
                </div>
                <WingBlank>
                    <List>
                        <WhiteSpace />
                        <InputItem
                            type="tel"
                            placeholder="请输入手机号"
                            clear
                            onChange={this.checkMobile}
                            ref={el => this.mobile = el}
                        >手机号</InputItem>
                        <WhiteSpace />
                        <InputItem
                            type="number"
                            placeholder="请输入验证码"
                            clear
                            onChange={this.checkCode}
                            ref={el => this.code = el}
                        >验证码 </InputItem>
                        <Button type="warning" disabled={codeBtnDis} inline className="l-btn" onClick={this.start}> {txt}</Button>
                        <WhiteSpace />
                        <Button type="primary" disabled={loginBtnDis} onClick={this.loginAuto}> 马上登录 </Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}