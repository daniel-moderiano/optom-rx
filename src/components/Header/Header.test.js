import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe('Header tests', () => {
  test('Header renders the correct hardcoded title', () => {
    render(<Header />);
    const headerElement = screen.getByRole('heading', { name: /optomrx/i });
    expect(headerElement).toBeInTheDocument();
  });
});