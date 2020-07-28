import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import Footer from './index';

test('renders default header elements', () => {
  const { getByText } = render(
    <Router>
      <Footer />
    </Router>
  );
  expect(getByText('Toga')).toBeInTheDocument();
  expect(getByText('Claims')).toBeInTheDocument();
  expect(getByText('Repair Request')).toBeInTheDocument();
  expect(getByText('Follow us')).toBeInTheDocument();
  expect(getByText('Toga Micro-Insurance, 2020.')).toBeInTheDocument();
});
