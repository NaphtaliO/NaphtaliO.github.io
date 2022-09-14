import React from 'react'

const Skills = ({header, skill}) => {
    return ( 
        <div className="col-md-4 skill">
            <h4 className="skill-header">{ header }</h4>
            <ul className="list-group">
                {skill.map((skill) => (
                    <li className="list-group-item">{ skill }</li>
                ))}
            </ul>
        </div>
     );
}
 
export default Skills;