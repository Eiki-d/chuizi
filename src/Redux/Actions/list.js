import Axios from 'axios'
export let getList = ()=>{
    return Axios.get("/mobile/classify").then(res=>{
        // console.log(res.data.data)
        return {
            type:"GET_ListData",
            payload:res.data.data
        }
    })
}

export let getListThunk = (callback)=>(dispatch)=>{
    // console.log(callback)
    Axios.get("/mobile/classify").then(res=>{
        // console.log(res.data)
        dispatch({
            type:"GET_ListData",
            payload:res.data.data
        })
        callback();
    })
}
    


/*

    function test(){

        setTimeout(()=>{
            return "1111111"
        },1000)

    }
    test()

*/