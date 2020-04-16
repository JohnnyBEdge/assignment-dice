import React from 'react';

class Di extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            numSides: 1,
            result: 0,
            diceBag:[2, 4, 5, 6, 7]
        }

        this.handleNumSides = this.handleNumSides.bind(this);
    }

    handleNumSides = (e) => {
        this.setState({numSides: e.target.value});
    };

    handleRoll = (e) => {
        e.preventDefault();
        this.setState({result:  Math.floor(Math.random() * this.state.numSides + 1)})
    }

    render(){

        // use map fx here
        return(
            <>
                <div className="di-container">
                    <div className="di">{this.state.result}</div>

                    <input type="number" min="1" max="20" onChange={this.handleNumSides} />

                    <button id="roll_btn" onClick={this.handleRoll}>Roll</button>
                </div>
            </>
        );
    };
};

export default Di;