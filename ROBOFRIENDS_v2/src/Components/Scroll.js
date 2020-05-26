import React from 'react';

const Scroll=(props)=>{
    return (
        <div style={{overflow:'scroll',border:'1px',height:'800px'}}>
            {/* {//Every Prop has Propety Called Childern . Here Children is Cardlist.} */}
            {props.children}
        </div>
        )
}

export default Scroll;
