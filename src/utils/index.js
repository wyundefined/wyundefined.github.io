
export {axios} from "./axios"

// export { history } from "./history";

// export { word, add } from "./demo";

// export {ajax ,http} from "./ajax";


// export {commonCss,CommonFn} from "./common"


import url from "url";  // node 自带模块 

export function getQuery(search){
    return url.parse(search,true).query;
}

