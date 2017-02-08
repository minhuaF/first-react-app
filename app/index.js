import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
    render(){
        return (
            <div>
                <h1> This is home page</h1>
            </div>
        );
    }
}

class MyContainer extends Component{
    constructor(props){
        super(props)
        this.state = {
            list: ["item1", "item2"],
            curItem: "item1"
        }
    }

    changeItem(item){
        this.setState({
            curItem: item
        })
    }

    render(){
        return(
            <div>
                The curItem is: {this.state.curItem}
                <List list={this.state.list}  changeItem={this.changeItem.bind(this)} />
            </div>
        )
    }
};

class List extends Component{
    onClickItem(item){
        this.props.changeItem(item);
    }

    render(){
        return(
            <ul>
                {
                    (function(){
                        let self = this;
                        return this.props.list.map(function(item, index){
                            return(
                                <li onClick={self.onClickItem.bind(self, item)} key={index}>I am {item}, click me! </li>
                            )
                        })
                    }.bind(this))()
                }

            </ul>
        )
    }
}


ReactDOM.render(<MyContainer />, document.getElementById('app'));