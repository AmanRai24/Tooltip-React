import React from 'react';
import Tooltip from './Tooltip';

class App extends React.Component{
    constructor(){
        super();
        this.state={
            displayTooltip:false,
            pos:"top"
        }
    }

        HoverTooltip=()=>{
            const {displayTooltip}=this.state;
            let pos=document.getElementById("direction").value;
            this.setState({
                displayTooltip:!displayTooltip,
                pos
            });
        }

        render(){
            return(
                <div className="App">
                   <h1 id="title">Tooltip Design</h1>
                    <div className="select">
                        <select id="direction">
                            <option value="top">TOP</option>
                            <option value="right">RIGHT</option>
                            <option value="bottom">BOTTOM</option>
                            <option value="left">LEFT</option>
                        </select>
                    </div>

                    <Tooltip
                    state={this.state}
                    HoverTooltip={this.HoverTooltip}
                    />
                </div>  
            );
        }
    }

export default App;