import React from 'react';

import Typewriter from 'typewriter-effect';

const Type = () => (
  <>
    <Typewriter
      options={{
        strings: ['Full Stack Web Developer', 'And an IT Engineer'],
        autoStart: true,
        loop: true,
        deleteSpeed: 20,
        typeSpeed: 20,
      }}
    />
  </>
);

export default Type;
