import React from 'react';
import Di from './Di'

class DiceBoard extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            diceBag: [],
            newDi: 0
        }
    }

    handleNewDi = (e) => {
        this.setState({newDi: e.target.value})
    };
    handleAddDi = (e) => {
        e.preventDefault();
        this.setState({ diceBag: [...this.state.diceBag, this.state.newDi] }); 
    };
    handleReset = (e) => {
        this.setState({diceBag: []})
    }

    render(){
        const di = this.state.diceBag.map(di => 

            // numSides can be named anything, being passed current index of the array
            // this is passed up through the constructor props which the Di component can now access
            <Di numSides={di}/>
        );

        return(
            <>
                <input id="sides_input" type="number" onChange={this.handleNewDi}/>
                <button id="add_di_btn" className="btn" type="button" onClick={this.handleAddDi}>Create Di</button>
                <button id="reset_btn" className="btn" type="button" onClick={this.handleReset}>Reset Dice</button>
                <div id="dice_board">
                    {di}
                </div>
            </>

        );
    };
};

export default DiceBoard;