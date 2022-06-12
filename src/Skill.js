import React from 'react'

const Skill = ( { p, title, img } ) => {
    return ( 
        <div class=" col-md-4 ">
            <div class="inner-box text-center border">
                <div class="text-center">
                    <img src={ img } alt={ title }/>
                </div>
                <h2>{ title }</h2>
                <p>{ p }</p>
            </div>
        </div>
     );
}
 
export default Skill;