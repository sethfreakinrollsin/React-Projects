import React from 'react';

const Card=(props)=>{
    //const Card =({name, email,id})=>{
    return(
        // const {name,email,id}=props
        <div className='tc bg-light-green dib br3 pa2 ma2 grow bw2 shadow-5'>
            <img alt='Robot' src={'https://robohash.org/'+props.id+'?200x200'} />
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    );
}

export default Card;