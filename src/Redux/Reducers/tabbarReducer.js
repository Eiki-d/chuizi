const tabbarReducer = (prevState={isShow:true},action)=>{
    // console.log(action)
    // 接受老状态， 深copy 返回新状态
    let  {type,payload} = action
    switch(type){
        case "SHOW_Tabbar":
            return {...prevState,...{isShow:payload}}
        case "HIDE_Tabbar":
            return {...prevState,...{isShow:payload}}
        // case "LIST_ADD"
        default:
            return prevState
    }

    return prevState
}

export default tabbarReducer