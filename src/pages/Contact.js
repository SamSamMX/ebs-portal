import React from 'react';

function Contact(props) {
  return (
    <div >
        {props.content()}
        {props.footer()}
    </div>
  );
}

export default Contact;