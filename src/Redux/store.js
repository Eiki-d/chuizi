/*export default new Vuex.Store({
    state :{
        isShow:true,
        list:[]
    },
    mutation:{

    },
    action:{

    }
})
*/
import { createStore,applyMiddleware,compose } from 'redux'
import reducer from './Reducers'
import reduxPromise from 'redux-promise'
import reduxThunk from 'redux-thunk'
//reducer 唯一修改状态
// prevState = {isShow:true,list:[],a:[]}  {isShow:false}
        
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(applyMiddleware(reduxPromise,reduxThunk)))
// const store = createStore(reducer,applyMiddleware(reduxPromise,reduxThunk))

export default store


/*
    纯函数
     1. 不对外界产生副作用 
     2. 同样的输入得到同样的输出

     //纯
    var name ="kerwin"
    function test(name){
      name ="xiaoming"
    }
    test(name)


    //不纯
    var obj = {
        name:"kerwin"
    }
    function test(obj){
      obj.name ="xiaoming"
    }
    test(obj)


    //纯
    var obj = {
        name:"kerwin"
    }
    function test(obj){
      var newobj = {...obj}
      newobj.name="xiaoming"
    }
    test(obj)

    function test(a,b){
        return a+b+Date.now()
    }
    test(1,2)

*/