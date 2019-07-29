
import ReactDom,{render} from "react-dom"
import {MainView} from "./views"
import { Provider } from "react-redux"
import  store from "./store"

const rootEle = document.getElementById("app")

const hotRender = ()=>{
    render(
        <Provider store={store}>
        <MainView/>
        </Provider>
        ,
        rootEle
    )
}

hotRender()

store.subscribe(hotRender)

