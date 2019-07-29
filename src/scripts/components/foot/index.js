

import "./index.scss"
import { NavLink } from "react-router-dom"
import { Badge } from "antd-mobile"

export const foots = [
    { txt: "书架", path: "/app/bookshelf", name: "bookshelf", icon: "icon-shujia" },
    { txt: "精选", path: "/app/choice", name: "choice", icon: "icon-jingxuan1" },
    { txt: "我的", path: "/app/mine", name: "mine", icon: "icon-wodedangxuan" }
]


export class Foot extends Component {
    render() {
        return (
            <footer>
                {
                    foots.map((foot, i) => {
                        return (
                            <div key={i}>
                                <NavLink to={foot.path} activeClassName="nav-active">
                                    <i className={"iconfont " + foot.icon}></i>
                                    <span>{foot.txt}</span>
                                    {i == 2 && <Badge/>}
                                </NavLink>
                            </div>
                        )
                    })
                }
            </footer>
        )
    }
}