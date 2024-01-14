import './styles.css';
import React, { memo } from 'react';

import useHomePageHandlers from './useHomePageHandlers';
import { withErrorBoundary } from '../../components/errorBoundary';
interface HomePageProps {
  start: number;
}

function HomePage({ start }: HomePageProps) {
  const { counter, handleIncrementCounter, handleDecrementCounter } = useHomePageHandlers(start);

  return (
    <div className="wrapper">
      <p>
        <code>Counter:</code> {counter}.
      </p>
      <div className="btnWrapper">
        <button className="btn" onClick={handleDecrementCounter}>
          -
        </button>
        <button className="btn" onClick={handleIncrementCounter}>
          +
        </button>
      </div>
    </div>
  );
}

export default memo(
  withErrorBoundary(HomePage, {
    fallback: <div className="errorMsg">We have some trouble</div>,
  }),
);
