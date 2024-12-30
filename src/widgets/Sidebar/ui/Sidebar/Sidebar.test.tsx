import { render, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';

describe('UI Sidebar component', () => {
  test('render Sidebar', () => {
    render(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });
});