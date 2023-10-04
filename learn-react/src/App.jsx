import React from 'react';
import Dv from './dv.jsx';
import Guide from './guide.jsx';

function MyComponent() {
  const divElements = Array.from({ length: 3600 }, (value, index) => (
    <Dv key={index} />
  ));

  return (
    <>
        <Guide />
        {divElements}
    </>
  );
}

export default MyComponent;




