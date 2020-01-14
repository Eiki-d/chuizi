const listReducer = (prevState=[],action)=>{
  // 接受老状态， 深copy 返回新状态
  let  {type,payload} = action
  switch(type){
      case "GET_ListData":
          return [...prevState,...payload]
      default:
          return prevState
  }

  return prevState
}

export default listReducer