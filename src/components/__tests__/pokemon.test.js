import React from 'react';
import { render, screen } from '@testing-library/react';
import { BasicTable } from './../BasicTable';

test('Should render table component', () => {
    render(<BasicTable/>);
    const basicTable = screen.getByTestId('basic-table');
    expect(basicTable).toBeInTheDocument();
})


describe('BasicTable', () => {
    test('Should check if table contain header-titles', () => {
      render(<BasicTable />);
      expect(screen.getByRole('table')).toHaveTextContent('ID');
      expect(screen.getByRole('table')).toHaveTextContent('Name');
      expect(screen.getByRole('table')).toHaveTextContent('Picture');
      expect(screen.getByRole('table')).toHaveTextContent('Height');
      expect(screen.getByRole('table')).toHaveTextContent('Weight');
      expect(screen.getByRole('table')).toHaveTextContent('Primary Types');
      expect(screen.getByRole('table')).toHaveTextContent('Secondary Types');
      expect(screen.getByRole('table')).toHaveTextContent('Secondary Types');
    });
  });

  describe('BasicTable', () => {
    test("Should check that the table isn't empty", () => {
      render(<BasicTable />);
      const content = screen.getByRole('table')
      expect(content).not.toBe('')
  });
});
 







