



import "./index.scss"
import { Carousel } from 'antd-mobile';
export class Choice extends Component {
    state = {
        data: [],
        imgHeight: 176,
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                data: ['https://cdn.motieimg.com/store/3cba4ae7be1aae11cf33dd3ebd5f2c2b.jpg', 'https://cdn.motieimg.com/store/c85fb15cc413b6d13aadd4eefebc9474.jpg', 'https://cdn.motieimg.com/store/39c144ab0e1eb4400028822e188f94e7.png'],
            });
        }, 100);
    }

    toGirl =()=>{
       this.props.history.push("/girl")
    // console.log(this)
    }
    toBoy =()=>{
        // console.log(this.props.history)
        this.props.history.push("/comeOut")
    }
    toList =()=>{
        this.props.history.push("/classify")
    }
    render() {
        return (
            <div onClick={this.toList}>
                <div id="top">
                    <span>磨铁阅读</span>
                    <span>男生</span>
                    <span onClick={this.toGirl}>女生</span>
                    <span  onClick={this.toBoy}>出版</span>
                    <i className="iconfont icon-fangdajing"></i>
                    <i className="iconfont icon-gengduo"></i>
                </div>

                {/* 轮播图 */}
                <Carousel className="banner"
                    autoplay={true}
                    infinite
                // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                // afterChange={index => console.log('slide to', index)}
                >
                    {this.state.data.map(val => (

                        <a
                            key={val}
                            // href="http://www.alipay.com"
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                            <img
                                src={`${val}`}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        </a>
                    ))}
                </Carousel>

                {/* 分类 */}
                <ul className="main">
                    <li>
                        <img src="https://cdn.motieimg.com/store/df8957907895e5afd47eb6c64e464bfc.png" alt="" />
                        <span>分类</span>
                    </li>
                    <li>
                        <img src="https://cdn.motieimg.com/store/e7e3ceaeac429214e7547f34b5bc17c4.png" alt="" />
                        <span>排行</span>
                    </li>
                    <li>
                        <img src="https://cdn.motieimg.com/store/2a8d03f1b8ee3e6168582b10c8c5bb84.png" alt="" />
                        <span>全本</span>
                    </li>
                    <li>
                        <img src="https://cdn.motieimg.com/store/aa87fbe0e4f9170feb7bb4be3a5b4e0e.png" alt="" />
                        <span>免费</span>
                    </li>
                </ul>

                {/* 主编力荐 */}
                <div className="recommend">
                    <i className="iconfont icon-shuxian1"></i>
                    <span>主编力荐</span>
                </div>
                <ul className="recommend1">
                    <li>
                        <img src="http://images.xxsy.net/img/638264.jpg" alt="" />
                        <span>京门风月</span>
                    </li>
                    <li>
                        <img src="http://images.xxsy.net/img/940813.jpg" alt="" />
                        <span>密爱追凶</span>
                    </li>
                    <li>
                        <img src="http://images.xxsy.net/img/956525.jpg" alt="" />
                        <span>七七四十九</span>
                    </li>
                </ul>

                {/* 本期主打分类 */}
                <div className="recommend">
                    <i className="iconfont icon-shuxian1"></i>
                    <span>本期主打分类</span>
                </div>
                <div className="classify">
                    <div className="classify1">
                        <img src="http://images.xxsy.net/img/967276.jpg" alt="" />
                    </div>
                    <div className="classify2">
                        <h6>全服追杀令：大神，太凶猛</h6>
                        <p>打工是不可能打工的，这辈子都不可能打工的。”陆仁贾：“十个巨龙指甲，帮忙带个副本。”夏姒寂：“来嘞！</p>
                        <div className="classify3">
                            <i className="iconfont icon-touxiang1"></i>
                            <span className="zuozhe">微风入我怀</span>
                            <span className="leixing">竞技游戏</span>
                        </div>
                    </div>
                </div>
                <div className="classify">
                    <div className="classify1">
                        <img src="http://images.xxsy.net/img/967690.jpg" alt="" />
                    </div>
                    <div className="classify2">
                        <h6>国服最强辅助，绝代双骄</h6>
                        <p>哼！我木姜子也要举起王者荣耀旗帜，做一回荣耀霸主！虽然…‘这个小青铜居然搞直播！666’‘青铜主播，别坑我…’‘菜鸡，死远点儿！’木姜子心流面条泪，怎么宅家里搞直播都被人吐槽，嘤嘤嘤！与此同时，另一个天才王者夜非白直播间，也是吐槽者甚多，不是因为他完美技术以及极致手速，而是…桀骜所致？软萌傲娇女×桀骜高冷王，且看直播夫妇横扫王者世界！...</p>
                        <div className="classify3">
                            <i className="iconfont icon-touxiang1"></i>
                            <span className="zuozhe">我不是酱紫</span>
                            <span className="leixing">竞技游戏</span>
                        </div>
                    </div>
                </div>
                <div className="classify">
                    <div className="classify1">
                        <img src="http://images.xxsy.net/img/967402.jpg" alt="" />
                    </div>
                    <div className="classify2">
                        <h6>王者荣耀之重登巅峰</h6>
                        <p>原本在英雄联盟上惊才艳艳的她，因为伤病黯然离场。阴差阳错下接触到王者荣耀，上星冲分之路居然势不可挡？再次回到电竞赛场，又会发生怎样的火花？...</p>
                        <div className="classify3">
                            <i className="iconfont icon-touxiang1"></i>
                            <span className="zuozhe">吃炸鸡会胖</span>
                            <span className="leixing">竞技游戏</span>
                        </div>
                    </div>
                </div>
                <div className="add">
                    <img src="https://cdn.motieimg.com/store/3906352e8bae293a822be060e71f1a73.jpg" alt=""/>
                </div>
                <div className="recommend">
                    <i className="iconfont icon-shuxian1"></i>
                    <span>书友收藏</span>
                </div>
                <ul className="recommend1">
                    <li>
                        <img src="http://images.xxsy.net/img/520501.jpg" alt="" />
                        <span>逆天驭兽师</span>
                    </li>
                    <li>
                        <img src="http://images.xxsy.net/img/316297.jpg" alt="" />
                        <span>特工酷女神</span>
                    </li>
                    <li>
                        <img src="http://images.xxsy.net/img/476770.jpg" alt="" />
                        <span>鬼手天医</span>
                    </li>
                </ul>
                <div style={{ height: 90 }}></div>
            </div>

        )
    }
}