import React from 'react';

class Di extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            //numsides pulls the variable numSides out of props and assigns itself the value
            numSides: this.props.numSides,
            result: 0,
        }

        this.handleNumSides = this.handleNumSides.bind(this);
        this.handleRoll = this.handleRoll.bind(this);
    }

    handleNumSides = (e) => {
        this.setState({numSides: e.target.value});
    };

    handleRoll = (e) => {
        e.preventDefault();
        this.setState({result:  Math.floor(Math.random() * this.state.numSides + 1)})
    };

    // function spin(){
    //     const testDi = document.getElementById('testDi');
    //     testDi.classList.add("spinning")
    
    //     setTimeout(function(){ 
    //     testDi.classList.remove("spinning")}, 1000);
    //     };
    // }

    render(){

        // use map fx here
        return(
            <>
                <div className="di-container">
                    <div className="sidesNum">{this.state.numSides} sides</div>
                    <div className="di">{this.state.result}</div>

                    {/* <input type="number" min="1" max="20" onChange={this.handleNumSides} /> */}

                    <button id="roll_btn" onClick={this.handleRoll}>Roll</button>
                </div>
            </>
        );
    };
};

export default Di;