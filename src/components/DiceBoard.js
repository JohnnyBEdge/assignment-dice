import React from 'react';
import Di from './Di'

class DiceBoard extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            diceBag: [2,3,4,5,6]
        }
    }

    render(){
        const di = this.state.diceBag.map(di => 

            // numSides can be named anything, being passed current index of the array
            // this is passed up through the constructor props which the Di component can now access
            <Di numSides={di}/>
        );

        return(
            <>
                <input type="number" />
                <button type="button" onClick={this.handleNewDi}>Create Di</button>
                <div id="dice_board">
                    {di}
                </div>
            </>

        );
    };
};

export default DiceBoard;