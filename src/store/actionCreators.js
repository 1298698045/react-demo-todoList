import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM} from './action'

export const getInputChangeActon = (value)=>({
    type:CHANGE_INPUT_VALUE,
    value
})
export const getAddTodoActon = ()=>({
    type:ADD_TODO_ITEM
})
export const getDeleteTodoActon = (index)=>({
    type:DELETE_TODO_ITEM,
        index
})