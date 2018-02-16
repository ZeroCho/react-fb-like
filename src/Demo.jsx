import React from 'react';
import ReactDOM from 'react-dom';
import ReactFBLike from './ReactFBLike';

document.addEventListener('DOMContentLoaded', () => {
  const rootNode = document.createElement('div');
  document.body.appendChild(rootNode);
  ReactDOM.render(
    <div>
      <ReactFBLike language="en_US" href="https://www.zerocho.com" appId="717589285046812" />
    </div>,
    rootNode,
  );
});
