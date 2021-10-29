import { render, screen, fireEvent } from "@testing-library/react";
import FormField from './FormField'

describe('Alert tests', () => {
  test('Alert is not rendered by default', () => {
    render(
      <FormField 
        name="name"
        label="Name" 
      />
    );
    const alert = screen.queryByText(/test alert/i);
    expect(alert).not.toBeInTheDocument();
  });

  test('Alert renders when passed appropriate prop', () => {
    render(
      <FormField 
        name="name"
        label="Name" 
        alert={{ message: 'test alert', type: 'error' }}
      />
    );
    const alert = screen.getByText(/test alert/i);
    expect(alert).toBeInTheDocument();
  });

});