import React from 'react'


class ContextContainer extends React.Compenent {

    constructor(props){
        super(props)
        this.state = {

        }
    }

    childContextTypes = {
        name: React.PropTypes.string,
        print: React.PropTypes.func
    }

    // getChildContext 指定的传递给子组件的属性需要先通过 childContextTypes 来指定，否则会报错
    getChildContext(){
        return {
            name: "Miwa",
            print: (m) => m
        };
    }
    render(){
        return(
            <div>
                {/*<Parent>
                    <Children />
                </Parent>*/}
            1212
            </div>
        )
    }
}

// Parent component
class Parent extends React.Component {
    contextTypes = {
        name: React.PropTypes.string
    }

    childContextTypes = {
        name: React.PropTypes.number,
        age: React.PropTypes.string
    }

    getChildContext(){
        return {
            name: 'Miwa Parent',
            age: 21
        }
    }
    render(){
        return (
            <div>
                {`from ContextContainer compenent: ${this.context.name}`}
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

// Children component
class Children extends React.Component {
    constructor(props, context){
        super(props, context);
        this.state = {
            name: this.context.name
        }
    }

    contextTypes = {
        name: React.PropTypes.string,
        age: React.PropTypes.number,
        print: React.PropTypes.func
    }

    render(){
        return (
             <ul>
                <li>
                {`child context is: ${this.context.age}`} // child context is: 18
                </li>
                <li>
                {`state from context: ${this.state.name}`} // state from context: mars
                </li>
                <li>
                {`print age: ${this.context.print(this.context.age)}`} // print age: 18
                </li>
            </ul>
        )
    }
}


module.exports = ContextContainer;
