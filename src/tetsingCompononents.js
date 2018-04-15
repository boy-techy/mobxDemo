import React from "react";
import {observable} from "mobx";
import {observer} from "mobx-react";

let store = {
    @observable count: 0,
};

store.handleIncrement = function () { ++this.count };

store.handleDecrement = function ()  { --this.count };


@observer
class MobxDemo extends React.Component {

    handleIncrement = () => store.handleIncrement();

    handleDecrement = () => store.handleDecrement();

    render(){
        return(
            <div>
                <span>{store.count}</span>
                <div>
                    <button onClick={this.handleIncrement}>Increment</button>
                    <button onClick={this.handleDecrement}>Decrement</button>
                </div>
            </div>
        )
    }
}

export default MobxDemo;
