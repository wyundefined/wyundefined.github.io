



import "./index.scss"
import { Carousel } from 'antd-mobile';
export class Girl extends Component {
    state = {
        data: [],
        imgHeight: 176,
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                data: ['https://cdn.motieimg.com/store/c96be9f57f71d5f755fc3ca210b32d01.jpg', 'https://cdn.motieimg.com/store/b05a332a53772114543ff6724a6b507.jpg', 'https://cdn.motieimg.com/store/c85fb15cc413b6d13aadd4eefebc9474.jpg', 'https://cdn.motieimg.com/store/a64a50c2ca6a6954a1fb8254b36e80d6.jpg', 'https://cdn.motieimg.com/store/e1a4cde1b2373862a00811bd56ebdba3.jpg'],
            });
        },100);
    }
    toBoy = () => {
        this.props.history.push("/choice")
    }
    comeOut = () => {
        this.props.history.push("/comeOut")
    }
    render() {
        return (
            <div>
                <div id="top">
                    <span>磨铁阅读</span>
                    <span onClick={this.toBoy}>男生</span>
                    <span>女生</span>
                    <span onClick={this.comeOut}>出版</span>
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
                        <img src="http://images.xxsy.net/img/968511.jpg" alt="" />
                        <span>蓝颜如画</span>
                    </li>
                    <li>
                        <img src="http://images.xxsy.net/img/968030.jpg" alt="" />
                        <span>突来险情</span>
                    </li>
                    <li>
                        <img src="http://images.xxsy.net/img/968585.jpg" alt="" />
                        <span>为你效忠</span>
                    </li>
                </ul>

                {/* 私人定制 */}
                <div className="recommend">
                    <i className="iconfont icon-shuxian1"></i>
                    <span>私人定制</span>
                </div>
                <ul className="recommend2">
                    <li>
                        <img src="http://images.xxsy.net/img/964682.jpg" alt="" />
                        <span>从饿梦中惊醒</span>
                    </li>
                    <li>
                        <img src="http://images.xxsy.net/img/638264.jpg" alt="" />
                        <span>京门风月</span>
                    </li>
                    <li>
                        <img src="http://images.xxsy.net/img/740003.jpg" alt="" />
                        <span>渣王作妃</span>
                    </li>
                    <li>
                        <img src="http://images.xxsy.net/img/969563.jpg" alt="" />
                        <span>猎魔事故</span>
                    </li>
                    <li>
                        <img src="http://images.xxsy.net/img/1098795.jpg" alt="" />
                        <span>冷艳女帝之将仆</span>
                    </li>
                    <li>
                        <img src="http://images.xxsy.net/img/967193.jpg" alt="" />
                        <span>缺钱求生指南</span>
                    </li>
                </ul>
                {/* 本期主打分类 */}
                <div className="recommend">
                    <i className="iconfont icon-shuxian1"></i>
                    <span>本期主打分类</span>
                </div>
                <div className="classify">
                    <div className="classify1">
                        <img src="http://images.xxsy.net/img/968750.jpg" alt="" />
                    </div>
                    <div className="classify2">
                        <h6>今天也要三从四得</h6>
                        <p>小甜饼√＊论系统发布的稀奇古怪的各种任务。例如终极恋爱任务，“三从四得”。三从：程璟必须对司宝宝①跟从！②随从！③听从！四得：司宝宝必须对程璟①心事懂得~②生气要忍得~③情绪要哄得~④随时要记得~司宝本宝：呵，听见没有？要听从。今天你去睡书房！程璟本璟：嗯，听见了，情绪要哄得，心事要懂得，随时要记得，嗯？司宝本宝：……...</p>
                        <div className="classify3">
                            <i className="iconfont icon-touxiang1"></i>
                            <span className="zuozhe">沈赋歌</span>
                            <span className="leixing">都市生活</span>
                        </div>
                    </div>
                </div>
                <div className="classify">
                    <div className="classify1">
                        <img src="http://images.xxsy.net/img/968825.jpg" alt="" />
                    </div>
                    <div className="classify2">
                        <h6>岐山有仙乐</h6>
                        <p>第一次，穿越不断升级打怪成妖尊，还没享两天清福——被镇压，死。第二次，重生到修仙界最牛逼轰轰三大派之一的白月宗，成了宗主——未知结果，详情请看正文。妖尊变宗主，他怎么算都觉得不划算。妖界圣器临空出世，修仙界大乱，又染腥风血雨。一桩桩的奇事，将他再次推向众矢之的。……他真的只不过是想享清福而已啊！幸好，修仙者三大巨头之一的苏乐上仙上线，扒衣服看伤口，对酌看花，游遍四海……让他在成为众矢之的前过了一把瘾。某日，妖尊终于按捺不住。祁婴：“苏乐，你能不能和我保持距离！”苏乐走远：“嗯。”（某尊暗搓搓，一把拉近，抱在怀里）祁婴：“我是说，我们再近点也行的。”...</p>
                        <div className="classify3">
                            <i className="iconfont icon-touxiang1"></i>
                            <span className="zuozhe">五月杳</span>
                            <span className="leixing">古代言情</span>
                        </div>
                    </div>
                </div>
                <div className="classify">
                    <div className="classify1">
                        <img src="http://images.xxsy.net/img/969341.jpg" alt="" />
                    </div>
                    <div className="classify2">
                        <h6>重生之美食大亨</h6>
                        <p>身为业内最年轻的厨神，尹琛被陷害身亡。重生到一富二代身上，尹琛做主厨，拿冠军，开餐厅，做网红，洗脱冤屈，啪啪打脸看轻他的群众，成为年度顶级流量。陆氏的员工一直认为陆枭战是霸道冷漠总裁，杀伐决断的商界暴君，夸张点说，一个眼刀子能杀退十万精兵。直到那一天，陆氏员工眼看总裁“夫人”提着食盒大驾光临。陆枭战低声央求：琛琛，能不能再给我一块泡芙，多加奶油那种。吸溜……吸溜……...</p>
                        <div className="classify3">
                            <i className="iconfont icon-touxiang1"></i>
                            <span className="zuozhe">越昭昭</span>
                            <span className="leixing">现代言情</span>
                        </div>
                    </div>
                </div>
                <div className="classify">
                    <div className="classify1">
                        <img src="http://images.xxsy.net/img/968910.jpg" alt="" />
                    </div>
                    <div className="classify2">
                        <h6>我师弟是妖界扛把子</h6>
                        <p>路遇抢劫拔刀相助，日常上山除魔奸邪，劝得回失足少女，救得了落水儿童……哈哈哈我简直是根正苗红仙士名流！师弟，那有个劫匪你砍一下。师弟，晶石没了你杀几个魔兽补充一下。师弟，美人儿被拐了，我去救一下！诶诶，别拉着我啊……要不你去？直到有一天，师父说我师弟是妖界扛把子，仙门大宗对他喊打喊杀。我？？师弟等等我！留只大腿给师兄抱啊！逼逼叨叨（纪长愿）×沉默是金（醉无休）【1V1甜宠别逆啦】...</p>
                        <div className="classify3">
                            <i className="iconfont icon-touxiang1"></i>
                            <span className="zuozhe">茶一凉</span>
                            <span className="leixing">玄幻言情</span>
                        </div>
                    </div>
                </div>
                <div className="classify">
                    <div className="classify1">
                        <img src="http://images.xxsy.net/img/389481.jpg" alt="" />
                    </div>
                    <div className="classify2">
                        <h6>穿书者的自我修养</h6>
                        <p>夏天作为21世纪24K纯金钢铁直男，一朝穿越，穿进了他之前看过的一篇小说里的一个小炮灰。对于穿越这件事，夏天表示：要淡定，抱紧主角大腿，什么都不是事儿。...</p>
                        <div className="classify3">
                            <i className="iconfont icon-touxiang1"></i>
                            <span className="zuozhe">衣衫半敞</span>
                            <span className="leixing">穿越时空</span>
                        </div>
                    </div>
                </div>
              

                <div style={{ height: 90 }}></div>
            </div>

        )
    }
}