import * as React from 'react';
import Typed from 'typed.js';

const Typing = (props) => {

  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);
  // Create reference to store the Typed instance itself
  const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
      strings: [
        props.var,
      ],
      typeSpeed: 5,
      backSpeed: 0,
      fadeOut: true,
      loop: false
    };

    typed.current = new Typed(el.current, options);

    return () => {

    }
  })


  return (
    <span ref={el} />
  );
}

export default Typing;
