import React from 'react'
import Skill from './Skill';

const Skills = () => {
    return ( 
        <div className="skills" id='skills '>
            <div className="container">
                <div className="section-title">
                    <h3>Skills</h3>
                    <hr />
                </div>
                <div className="row">
                    <Skill p="React is one of my favourite tools. I am 
                    a React enthusiast. I also use React Native as well to make mobile apps for android and ios." title="React" img="images/icons8-react-native-144.png" />
                    <Skill p="JavaScript happens to be my most used langugage. I use JavaScript alot with React and React Native." title="JavaScript" img="images/icons8-javascript-144.png"  />
                    <Skill p="YO" title="Java" img="images/icons8-java-150.png"  />
                    <Skill p="Python is one of my most proficient laguages. I tend use python alot when dealing with data structures and algorithms." title="Python" img="images/icons8-python-144.png"  />
                    <Skill p="I am experienced with Flask python framework along with Jinja2 and WTForms in making web applications." title="Flask" img="images/icons8-flask-150.png" />
                </div>
                
            </div>
      </div>  
     );
}
 
export default Skills;