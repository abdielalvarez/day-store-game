import React from 'react';

const Text = ({ tag, children, color }) => {
  const Component = tag || 'p';
  return <Component
    className={`text__${tag}`}
    style={{
      color: color ? color : '#333333'
    }}
  >{children}</Component>;
};

export default Text;
