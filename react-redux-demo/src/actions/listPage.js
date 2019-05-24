import {list} from '../mock/list'

export const getList=(data)=>{
    return function(dispatch){
        return new Promise((resolve,reject)=>{
            resolve(list)
        }).then((res)=>{
            dispatch({
                type:"UPDATE_LIST",
                payload:res
            })
        })
    }
}

export const reverseList=(data)=>({
    type:'REVERSE_LIST'
})