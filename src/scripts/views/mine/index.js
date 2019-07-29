



import "./index.scss"
import axios from "_axios@0.19.0@axios";
export class Mine extends Component {


    toLogin =()=>{
        this.props.history.push('/login')
    }
    render() {
        return (
            <div className="mine">
                {/* 头部 */}
                <div className="top">
                    <img src="https://pic.motieimg.com/web-wechat/dist/static/img/i-cover.0a73f86.jpg" alt="" className="bagk" />
                    <img src="http://cdn.motieimg.com/people/mt_person_ico.png?x-oss-process=style/user_big" alt="" className="touxiang" />
                    <p>用户</p>
                    <h4>123456789</h4>
                    <i className="iconfont icon-shezhi-copy"></i>
                    <span className="out" onClick={this.toLogin}>登录</span>
                </div>

                {/* 我的账户 */}
                <div className="money">
                    <div className="recommend">
                        <i className="iconfont icon-wodezhanghu"></i>
                        <span>我的账户</span>
                    </div>
                    <ul className="page">
                        <li>
                            <span>0</span>
                            <p>磨铁币</p>
                        </li>
                        <li>
                            <span>11</span>
                            <p>阅读券</p>
                        </li>
                        <li>
                            <span>100</span>
                            <p>推荐票</p>
                        </li>
                    </ul>
                </div>

                {/* 充值记录 */}
                <ul className="my">
                    <li>
                        <i className="iconfont icon-xiaofeijilu"></i>
                        <span>充值记录</span>
                        <i className="iconfont icon-iconfontyoujiantou-copy-copy-copy-copy"></i>
                    </li>
                    <li>
                        <i className="iconfont icon-chongzhijilu"></i>
                        <span>消费记录</span>
                        <i className="iconfont icon-iconfontyoujiantou-copy-copy-copy-copy"></i>
                    </li>
                    <li>
                        <i className="iconfont icon-dingyue"></i>
                        <span>自动订阅</span>
                        <i className="iconfont icon-iconfontyoujiantou-copy-copy-copy-copy"></i>
                    </li>
                    <li>
                        <i className="iconfont icon--"></i>
                        <span>我的活动</span>
                        <i className="iconfont icon-iconfontyoujiantou-copy-copy-copy-copy"></i>
                    </li>
                    <li>
                        <i className="iconfont icon-wodetoupiao"></i>
                        <span>我的投票</span>
                        <i className="iconfont icon-iconfontyoujiantou-copy-copy-copy-copy"></i>
                    </li>
                    <li>
                        <i className="iconfont icon-zuojia"></i>
                        <span>作家专区</span>
                        <i className="iconfont icon-iconfontyoujiantou-copy-copy-copy-copy"></i>
                    </li>
                    <li>
                        <i className="iconfont icon-guanyuwomen"></i>
                        <span>关于我们</span>
                        <i className="iconfont icon-iconfontyoujiantou-copy-copy-copy-copy"></i>
                    </li>
                </ul>

                {/* 退出登录 */}
                <p className="btn">退出登录</p>
            </div>
        )
    }
}