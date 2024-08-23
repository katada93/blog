import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  test('render Button', () => {
    render(<Button>button</Button>);
    expect(screen.getByTestId('button')).toBeInTheDocument();
  });
  test('render Button with className', () => {
    render(<Button>button</Button>);
    expect(screen.getByTestId('button')).toHaveClass('Button');
  });
  test('render Button with theme "clear"', () => {
    render(<Button className='clear'>button</Button>);
    expect(screen.getByTestId('button')).toHaveClass('clear');
  });
});