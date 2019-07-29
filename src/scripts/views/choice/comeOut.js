



import "./index.scss"
export class ComeOut extends Component {
    toBoy = () => {
        this.props.history.push("/choice")
    }
    toGirl = () => {
        this.props.history.push("/girl")
    }
    render() {
        return (
            <div>
                <div id="top">
                    <span>磨铁阅读</span>
                    <span onClick={this.toBoy}>男生</span>
                    <span  onClick={this.toGirl}>女生</span>
                    <span>出版</span>
                    <i className="iconfont icon-fangdajing"></i>
                    <i className="iconfont icon-gengduo"></i>
                </div>

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

                {/* 重磅好书 */}
                <div className="recommend">
                    <i className="iconfont icon-shuxian1"></i>
                    <span>重磅好书</span>
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

                {/* 文学小说 */}
                <div className="recommend">
                    <i className="iconfont icon-shuxian1"></i>
                    <span>文学小说</span>
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
                {/* 热销合集 */}
                <div className="recommend">
                    <i className="iconfont icon-shuxian1"></i>
                    <span>热销合集</span>
                </div>
                <div className="classify">
                    <div className="classify1">
                        <img src="http://images.xxsy.net/img/969848.jpg" alt="" />
                    </div>
                    <div className="classify2">
                        <h6>于是我和宿敌结婚了</h6>
                        <p>慕优这是第三次重生了。知道受尽欺侮的陆戎日后会成为京城首屈一指的大BOSS，并且害得自己家破人亡。前两次重生，慕优首先想到的就是干掉陆戎，结果每次的结局都是暗算不成反被干掉。第三次重生以后，慕优悟了，此路行不通。慕优决定先取得信任，再干掉他。于是慕优的日常变成了，黏着陆戎，保护陆戎，变着法儿的讨好陆戎。但是，陆戎看他的眼神怎么越来越诡异了呢？#能屈能伸万人迷富二代×醋坛子黑化真大佬...</p>
                        <div className="classify3">
                            <i className="iconfont icon-touxiang1"></i>
                            <span className="zuozhe">华衣落雪</span>
                            <span className="leixing">古代言情</span>
                        </div>
                    </div>
                </div>
                <div className="classify">
                    <div className="classify1">
                        <img src="http://images.xxsy.net/img/575053.jpg" alt="" />
                    </div>
                    <div className="classify2">
                        <h6>空间之丑颜农女</h6>
                        <p>【种田】【异能】*【空间改造容貌】【一对一】【温馨】【美食】【男强女强，女主不圣母，不包子，虐极品脑残】都市女白领莫青璃因意外穿越成7岁农家丑萝莉，家有破屋三间，薄田两亩，一天两顿糙米稀饭，食不果腹。好在有神奇空间在手，闲来种种田，养养花，小日子依然悠闲自得爹是秀才，不重男轻女娘亲温柔知礼大哥腹黑，三哥跳脱，二姐嘛，泼辣麻利，小弟听话懂事吉祥七宝奏起，我们就是幸福的一家某面瘫黑衣男：还有我呢？莫青璃…一句话简介：从丑颜农女到绝色将军夫人的华丽蜕变种田为主，主打温馨，男主身心干净，一对一，专情，某莲从来是题目简介无能，大家试读两章，坑品有保障..."</p>
                        <div className="classify3">
                            <i className="iconfont icon-touxiang1"></i>
                            <span className="zuozhe">乱莲</span>
                            <span className="leixing">古代言情</span>
                        </div>
                    </div>
                </div>
                <div className="classify">
                    <div className="classify1">
                        <img src="http://images.xxsy.net/img/916846.jpg" alt="" />
                    </div>
                    <div className="classify2">
                        <h6>施主请成仙</h6>
                        <p>她灵鹤成妖，名唤翎歌，姿容双绝一好妖，好不容易和一只凤凰谈了个恋爱，却惨遭射杀，魂魄飘荡阴阳之界成了一只鬼。为所爱所恨，她闯冥界，见鬼帝，转世重生再修仙道。仙途漫漫，偏偏这位菩提弟子，步步引导，处处相护，纵然是心如铁石，又怎能倾心相许。看一只妖如何修炼成仙，搅乱六界风云，掀起怒海狂涛。..."</p>
                        <div className="classify3">
                            <i className="iconfont icon-touxiang1"></i>
                            <span className="zuozhe">初妆妍</span>
                            <span className="leixing">仙侠奇缘</span>
                        </div>
                    </div>
                </div>
                <div className="classify">
                    <div className="classify1">
                        <img src="http://images.xxsy.net/img/1073571.jpg" alt="" />
                    </div>
                    <div className="classify2">
                        <h6>蜜恋警婚：早安，冷太太</h6>
                        <p>【冷酷无情女刑警腹黑闷骚男总裁=发人深思的悬疑，温馨甜美的爱情】中学生接连死亡，当红女团惨遭杀害，孤儿院频现意外，失孤父母相继被害，拍卖现场惊现死尸，知名博主离奇去世……一桩桩扑朔迷离的案件，被揭开面纱下的可鄙和丑陋，是心灵的腐蚀与堕落，还是我们生活的本来面目？*辛凡，刑警队队长，断案惊绝，手段狠辣，人送外号“灭绝师太”。相传灭绝师太结了婚，对方还是a市首富，实至名归的高富帅，刑警队众猜纷纭。“全天下的男人谁敢娶她？灭绝师太肯定拿枪逼迫人家了。”“听说人家还闹离婚，那套天价豪宅估计是分手费。”“人家前两天拍卖会上又拍了一件天价项链送给灭绝师太，估计是害怕她手里的那把枪，我看这婚难离。”……而事实是：某高富帅携恩求嫁，为引起工作狂妻子注意自导自演了一场离婚烂戏，实力演绎“嘴上一时爽，追妻火葬场”的经典画面。...</p>
                        <div className="classify3">
                            <i className="iconfont icon-touxiang1"></i>
                            <span className="zuozhe">贝小舟</span>
                            <span className="leixing">悬疑灵异</span>
                        </div>
                    </div>
                </div>
                <div className="classify">
                    <div className="classify1">
                        <img src="http://images.xxsy.net/img/871494.jpg" alt="" />
                    </div>
                    <div className="classify2">
                        <h6>枭宠灵师纨绔妻</h6>
                        <p>灵师——连接阴阳，驭灵驱鬼，手段通天。家族一脚踢开的弃女，竟是天赋异禀的灵师奇才。生父对她避之不及，亲姐更是毒如蛇蝎。原潇遥手一指：“若这家族容不下我，那又何须留恋。”她的人生又岂会束缚在这样人心丑恶满是算计的世家之中。——灵师这个行当，与那些风水先生、驱鬼大师有些不同，他们不仅帮活人做事，有时候也帮死人。他是帝国之王，性情孤冷，阴狠毒辣，却甘愿为她放弃一切。人生路上，若是无她，那还有何意思所在？遇怨魂，夺法器，咒术凶险，性命攸关，原潇衣袖一挥，既然没得选择，那便拼尽全力。她为的不只是自己，还有那些疼她、爱她之人！……………【小剧场】“放手！”原潇一声怒吼。“不放。”拎着原潇的某男五指一动，抓的更紧。“再不放开我让冤魂吞了你！”原潇更怒。“我若放手便让你吃了我如何？”某男话落脸上笑得更邪。————1对1宠文不虐————...</p>
                        <div className="classify3">
                            <i className="iconfont icon-touxiang1"></i>
                            <span className="zuozhe">楚胤</span>
                            <span className="leixing">悬疑灵异</span>
                        </div>
                    </div>
                </div>
              

                <div style={{ height: 90 }}></div>
            </div>

        )
    }
}