import React from 'react'

const Project = ({title, description, link}) => {
    return ( 
        <div class="col-sm-4">
            <div class="card" >
                    <div class="card-body">
                    <h3 className='project-title'>{ title }</h3>
                    <hr className='project-hr'/>
                    <p>{ description }</p>
                            <p class="card-text d-flex justify-content-between">
                        <a href={link} target="_blank" rel="noreferrer noopener" class="card-link"> <img src="images/icons8-code-24.png" alt="code" />Code</a>
                        
                        </p>
                    </div>
            </div>
        </div>
    );
}
 
export default Project;