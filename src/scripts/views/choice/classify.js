
import "./index.scss";
// import axios from "_axios@0.19.0@axios";
import {axios} from "&";
export class Classify extends Component {

    state = {
        lists: [],
        good: [],
        types: [],
        typelists:[],
    }

    componentDidMount() {
        axios.post("/react/getGoods",{
            keyword:"古代言情"
        }).then(res=>{
            this.setState({
                typelists:res.data.result
            })

        })

        // 根据字段 渲染 分类
        axios.post("/react/getGoodTypes")
            .then(res => {
                this.setState({
                    types: res.data.result
                })
            })
    }
    goback = () => {
        history.go(-1);
    }
    fantasy =(type)=>{
        axios.post("/react/getGoods",{
            keyword:type
        }).then(res=>{
            this.setState({
                typelists:res.data.result
            })

        })
    }
    toDetails =(goodsId)=>{
        this.props.history.push(`/details/${goodsId}`)
    }
    render() {
        const {
            lists,
            types,
            typelists
        } = this.state;

        return (

            <div>
                {/* 头部 */}
                <div className="head">
                    <i className="iconfont icon-mjiantou-copy" onClick={this.goback}></i>
                    <i className="iconfont icon-fangdajing"></i>
                    <span>分类</span>
                </div>
                {/* 分类选项 */}

                <div className="sort">
                    <h5>
                        <span className="typename">男生</span>
                       
                        {
                            
                            types && types.map((type, i) => {
                                return (
                                    <span key={i} 
                                    onClick={()=>this.fantasy(type.value)}
                                    >{type.value}</span>
                                )
                            })
                        }
                        <span>付费</span> 
                        <span className="typegirl">女生</span>
                        <span className="status">状态</span>
                    </h5>
                </div>
                {/* 分类 内容 */}
                {
                    typelists&&typelists.map((list, i) => {
                        return (
                            <div className="itemize" key={i}>
                                <div className="itemize1">
                                    <img src={list.img} alt="" onClick={()=>this.toDetails(list._id)}/>
                                </div>
                                <div className="itemize2">
                                    <h6>{list.name}</h6>
                                    <p>{list.jianjie}</p>
                                    <div className="classify3">
                                        <i className="iconfont icon-touxiang1"></i>
                                        <span className="zuozhe">{list.zuozhe}</span>
                                        <span className="leixing">{list.type.value}</span>
                                    </div>
                                </div>

                            </div>
                        )
                    })
                }

            </div>
        )
    }
}