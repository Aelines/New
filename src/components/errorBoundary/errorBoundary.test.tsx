import { render, screen } from 'test/test-utils';

import ErrorBoundary from './errorBoundary';

const ChildComponentWithError = () => {
  throw new Error();
};

describe('<ErrorBoundary />', () => {
  test('it renders children', () => {
    const text = 'child component';
    render(
      <ErrorBoundary>
        <div>{text}</div>
      </ErrorBoundary>,
    );
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  describe('on error in child component tree', () => {
    test('the outer tree is preserved, the child tree is unmounted', () => {
      // this allows not to print expected error to a console
      const spy = jest.spyOn(console, 'error');
      spy.mockImplementation(() => undefined);

      const outerText = 'outer component';
      const innerText = 'child component';

      render(
        <div>
          <div>{outerText}</div>
          <ErrorBoundary>
            <div>{innerText}</div>
            <ChildComponentWithError />
          </ErrorBoundary>
        </div>,
      );
      expect(screen.getByText(outerText)).toBeInTheDocument();
      expect(screen.queryByText(innerText)).not.toBeInTheDocument();
    });

    test('it renders provided fallback', () => {
      // this allows not to print expected error to a console
      const spy = jest.spyOn(console, 'error');
      spy.mockImplementation(() => undefined);

      const fallbackText = 'fallback content';
      const innerText = 'child component';

      render(
        <ErrorBoundary fallback={<div>{fallbackText}</div>}>
          <div>{innerText}</div>
          <ChildComponentWithError />
        </ErrorBoundary>,
      );
      expect(screen.getByText(fallbackText)).toBeInTheDocument();
      expect(screen.queryByText(innerText)).not.toBeInTheDocument();
    });

    test('it calls provided onError callback once', () => {
      // this allows not to print expected error to a console
      const spy = jest.spyOn(console, 'error');
      spy.mockImplementation(() => undefined);

      const handleError = jest.fn();
      const innerText = 'child component';

      render(
        <ErrorBoundary onError={handleError}>
          <div>{innerText}</div>
          <ChildComponentWithError />
        </ErrorBoundary>,
      );

      expect(screen.queryByText(innerText)).not.toBeInTheDocument();
      expect(handleError).toHaveBeenCalledTimes(1);
    });
  });
});
