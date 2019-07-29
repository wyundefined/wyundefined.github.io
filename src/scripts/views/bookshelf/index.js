

import "./index.scss"
export class BookShelf extends Component {
    render() {
        return (
            <div>
                <div className="head">
                    <p>我的书架</p>
                </div>

                {/* 内容 */}
                <div className="main">
                    <div className="main1">
                        <img src="http://images.xxsy.net/img/967276.jpg" alt="" />
                    </div>
                    <div className="main2">
                        <h6>全服追杀令：大神，太凶猛</h6>
                        <p>打工是不可能打工的，这辈子都不可能打工的。”陆仁贾：“十个巨龙指甲，帮忙带个副本。”夏姒寂：“来嘞！</p>
                        <div className="main3">
                            <i className="iconfont icon-touxiang1"></i>
                            <span className="zuozhe">微风入我怀</span>
                            <span className="leixing">已收藏</span>
                            <i className="iconfont icon-shanchu-copy"></i>
                        </div>
                    </div>
                </div>

                <div className="main">
                    <div className="main1">
                        <img src="http://images.xxsy.net/img/638264.jpg" alt="" />
                    </div>
                    <div className="main2">
                        <h6>京门风月</h6>
                        <p>南秦倾了一个谢，半壁江山塌一空。忠勇侯府被株连，世代名门望族一朝灰飞烟灭。谢芳华这个娇房嫡女碾碎芳华，零落成尘。</p>
                        <div className="main3">
                            <i className="iconfont icon-touxiang1"></i>
                            <span className="zuozhe">西子情</span>
                            <span className="leixing">已收藏</span>
                            <i className="iconfont icon-shanchu-copy"></i>
                        </div>
                    </div>
                </div>
                <div className="main">
                    <div className="main1">
                        <img src="http://images.xxsy.net/img/967914.jpg" alt="" />
                    </div>
                    <div className="main2">
                        <h6>这个影帝又上线了</h6>
                        <p>孟亦秋是大满贯影帝，是令无数男女疯狂的盛世美颜，是所有人可望而不可即的存在。</p>
                        <div className="main3">
                         
                                <i className="iconfont icon-touxiang1"></i>
                                <span className="zuozhe">倚舟</span>
                     

                            <span className="leixing">已收藏</span>
                            <i className="iconfont icon-shanchu-copy"></i>
                        </div>
                    </div>
                </div>
                <div className="main">
                    <div className="main1">
                        <img src="http://images.xxsy.net/img/689179.jpg" alt="" />
                    </div>
                    <div className="main2">
                        <h6>盛世医妃</h6>
                        <p>继《盛世嫡妃》、《盛世谋臣》之后，盛世三部曲之三——《盛世医妃》幸运的人有相同的幸运，倒霉的人却各有各的倒霉。他是生父不详的鬼眼世子，她是生而克母的国公千金。他被全京城的人畏惧嫌弃，她被父兄所弃隐居乡野。</p>
                        <div className="main3">
                            <i className="iconfont icon-touxiang1"></i>
                            <span className="zuozhe">凤轻</span>
                            <span className="leixing">已收藏</span>
                            <i className="iconfont icon-shanchu-copy"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}