import React, { Component } from 'react';

class TestComp extends Component {

    render() {   

        return (
            <>
                <h1>Static element</h1>
                {this.props.children.map(child => <div>{child}</div>)}
            </>
        ) 
    }
};

export default TestComp;
