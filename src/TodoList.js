import React,{ Component } from 'react';
import 'antd/dist/antd.css';
import { Input,Button,List } from 'antd';
import store from './store'
import { getInputChangeActon,getAddTodoActon,getDeleteTodoActon } from './store/actionCreators'

class  TodoList extends Component{
    constructor(props){
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handStoreChange = this.handStoreChange.bind(this);
        this.handClickBtn = this.handClickBtn.bind(this);
        store.subscribe(this.handStoreChange);
    }
    render(){
        return (
            <div style={{marginTop:'10px',marginLeft:'10px'}}>
                <Input onChange={this.handleInputChange} value={this.state.inputValue} style={{width:'300px',marginRight:'10px'}} placeholder={'请输入内容'} />
                <Button type="primary" onClick={this.handClickBtn}>按钮</Button>
                <List
                    style={{width:'300px',marginTop:'10px'}}
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item,index) => (
                        <List.Item key={index} onClick={this.handDelete.bind(this,index)}>{item}</List.Item>
                    )}
                />
            </div>
        )

    }
    handleInputChange(e){
        const action = getInputChangeActon(e.target.value);
        store.dispatch(action);
    }
    handStoreChange(){
        this.setState(store.getState())
    }
    handClickBtn(){
        const action = getAddTodoActon();
        store.dispatch(action);
    }
    handDelete(index){
        const action = getDeleteTodoActon(index);
        store.dispatch(action);
    }

}
export default TodoList;