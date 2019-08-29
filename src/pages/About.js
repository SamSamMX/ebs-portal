import React from 'react';

function About(props) {
  return (
    <div >
        {props.definition()}
        {props.domains()}
        {props.footer()}
    </div>
  );
}

export default About;

