import React from 'react';
import { Transition } from 'react-transition-group';

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

function AnimationComp({ children }) {
  return (
    <Transition in={true} timeout={duration}>
      <div
        style={{
          ...defaultStyle,
          ...transitionStyles.entering,
        }}
      >
        {children}
      </div>
    </Transition>
  );
}

export default AnimationComp;
