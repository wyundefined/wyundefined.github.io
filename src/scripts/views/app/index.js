

import "./index.scss"
import { Route, Redirect, Switch} from "react-router-dom"
import { Choice } from "../choice";
import { BookShelf } from "../bookshelf";
import { Mine } from "../mine";

import {Foot} from "~/components/foot";



export class App extends Component {
    render() {
        return (
            <div>
       
                <Switch>

                    <Route path="/app/choice" component={Choice}/>
                    <Route path="/app/bookshelf" component={BookShelf}/>
                    <Route path="/app/mine" component={Mine}/>
                    
                 
                    <Route render={() => <Redirect to="/app/choice" />} />
                </Switch>
                <Foot></Foot>
            </div>
        )
    }
}