
import immutable from "immutable"
const defaultState = immutable.fromJS({
userInfo:{
    isLogin: false,
    token: "",
    mobile: "",
    avatar: ""
    }
})

export const user = (state = defaultState, action) => {
    switch (action.type) {

        case "getUserInfo":
            // return state.set("token", action.obj)
            // return {...state,userInfo:action.obj}

            return state.set("userInfo",action.obj)

            break;
        default:
            // return {...state};
            return state
            break

    }
} 