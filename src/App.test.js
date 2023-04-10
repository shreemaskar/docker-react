import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders learn react link', () => {
  const div = document.createElement('div');
  render(<App />);
  ReactDOM.unmountComponentAtNode(div);
});