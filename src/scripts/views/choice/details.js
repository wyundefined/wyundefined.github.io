

import "./index.scss"
// import axios from "_axios@0.19.0@axios";
import {axios} from "&";
export class Details extends Component {


        state = {
            good: {}

        }

    componentDidMount(){
        // console.log(this.props.match.params)
        axios.post("/react/detail",{
             goodsId:this.props.match.params.goodsId
        }).then(res=>{
            // console.log(res)
           this.setState({
               good:res.data.result
           })
        })
    }
    goback = () => {
        history.go(-1);
    }
    gohome =()=>{
        this.props.history.push("/choice")
    }
    toBook=()=>{{
       
    }}
    collect = (goodsId)=>{
        this.props.history.push(`/app/bookshelf/${goodsId}`)
    }
    render() {
        const {
          good
        } = this.state;
        // console.log(11,good)
        return (
            <div style={{ background: '#fff' }}>
                {/* 头部 */}
                <div className="header">
                    <i className="iconfont icon-mjiantou-copy"  onClick={this.goback}></i>
                    <span>作品详情</span>
                    <i className="iconfont icon-zhuye" onClick={this.gohome}></i>
                 
                </div>
                {/* 开始阅读 */}
                <div className="content">
                    <div className="content1">
                        <img src={good.img} alt="" />
                    </div>
                    <div className="content2">
                        <h6>{good.name}</h6>
                        <p>点击数：{good.dianji}+</p>
                        <p>字数 &nbsp;：{good.zishu}+</p>
                        <p>作者 &nbsp;：{good.zuozhe}</p>
                        <h4>更新 &nbsp;：{good.shijian}</h4>
                    </div>
                </div>
                <div className="pushButton">
                    <button className="btn" onClick={()=>this.collect(good._id)}>立即收藏</button>
                    <button className="submit">立即阅读</button>
                </div>
                <div className="recommend">
                    <i className="iconfont icon-shuxian1"></i>
                    <span>简介</span>
                </div>
                <p className="jianjie">{good.jianjie}</p>
                {/* 书评 */}
                <div className="comment">
                    <i className="iconfont icon-shuxian1"></i>
                    <span>书评区</span>
                    <span className="book">写书评</span>
                    <i className="iconfont icon-iconshuping01" onClick={this.toBook}></i>
                </div>
                <ul className="discuss">
                    <li>
                            <i className="iconfont icon-touxiang1"></i>
                            <span>用户名</span>
                            <h5>
                                
                        <p className="inp">你就大方慷慨的防空雷达</p>
                            </h5>
                        <p>
                            <i className="iconfont icon-huifu"></i>
                            <span className="num">0</span>
                        </p>
                    </li>

                </ul>
            </div>
        )
    }
}