
import { HashRouter, BrowserRouter, Route, Redirect,Switch } from "react-router-dom"
import { App } from "./app";
import {Foot} from "~/components/foot";
import {Classify} from "./choice/classify"
import PropTypes from "prop-types"
import {Girl} from "./choice/girl.js"
import {ComeOut} from "./choice/comeOut.js"
import {Details} from "./choice/Details.js"
import {Login} from "./login"


export class MainView extends Component {
    render() {
        return (
           
            <HashRouter>

                  <Route component={Layout} />

            </HashRouter>
          
        )
    }
}

export class Layout extends Component {
    render() {
        return (
            <div>
                <Switch>
                <Route  path="/" exact render={() => <Redirect to="/app/choice" />} />
                    <Route path="/app/" strict component={App} />
                    <Route path="/girl" component={Girl}/>
                    <Route path="/comeOut" component={ComeOut}/>
                    <Route path="/classify" component={Classify}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/details/:goodsId" component={Details}/>
                    <Route render={() => <Redirect to="/app/choice" />} />
                </Switch>
                {/* <Foot></Foot> */}
            </div>
        )
    }
}