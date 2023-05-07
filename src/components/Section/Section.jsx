import React from 'react';

export const Section = ({ title, onRender }) => {
  return (
    <section>
      <h2>{title}</h2>
      {onRender}
    </section>
  );
};
