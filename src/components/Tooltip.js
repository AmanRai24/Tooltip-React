import React from 'react';

class Tooltip extends React.Component{
    render(){
        const{displayTooltip,pos}=this.props.state;
        const{HoverTooltip}=this.props;
        return(
                <div>
                    <div className='button' 
                        onMouseOver={HoverTooltip} 
                        onMouseOut = {HoverTooltip}>
                        <div className="info">HEY!!</div>
                    </div>
                    {
                        displayTooltip
                        ? <div className={`dir-${pos} arrowdir-${pos}`}>HELLO</div>
                        :null
                    }
                </div>
            );
        }
}

export default Tooltip;