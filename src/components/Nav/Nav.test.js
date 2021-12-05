import { render, screen, fireEvent } from "@testing-library/react";
import { AuthContext } from "../../context/AuthContext";
import Nav from './Nav';
import { BrowserRouter } from 'react-router-dom';

describe('Dropdown menu tests', () => {

  beforeEach(() => {
    render(
      <BrowserRouter>
        <AuthContext.Provider value={{ user: { uid: '1' } }}>
          <Nav/>
        </AuthContext.Provider>
      </BrowserRouter>
    );
  })

  test('Dropdown menu hidden by default', () => {
    const menu = screen.queryByTestId('userMenu');
    expect(menu).not.toBeInTheDocument();
  });

  test('Dropdown menu appears on click of dropdown btn', () => {
    const dropdownBtn = screen.getByRole('button', { name: 'Dropdown' });
    fireEvent.click(dropdownBtn);
    const menu = screen.getByTestId('userMenu');
    expect(menu).toBeInTheDocument()
  });

  test('Dropdown menu closes on outside click', () => {
    const title = screen.getByRole('list');
    const dropdownBtn = screen.getByRole('button', { name: 'Dropdown' });
    fireEvent.click(dropdownBtn);
    const menu = screen.getByTestId('userMenu');
    fireEvent.click(title);
    expect(menu).not.toBeInTheDocument()
  });

  test('Dropdown menu closes on re-click of dropdown btn', () => {
    const dropdownBtn = screen.getByRole('button', { name: 'Dropdown' });
    fireEvent.click(dropdownBtn);
    fireEvent.click(dropdownBtn);
    const menu = screen.queryByTestId('userMenu');
    expect(menu).not.toBeInTheDocument()
  });

  test('Dropdown menu stays open on click of the menu itself (but not a link)', () => {
    const dropdownBtn = screen.getByRole('button', { name: 'Dropdown' });
    fireEvent.click(dropdownBtn);
    const menu = screen.getByTestId('userMenu');
    fireEvent.click(menu);
    expect(menu).toBeInTheDocument()
  });

  test('Dropdown menu closes on menu link click', () => {
    const dropdownBtn = screen.getByRole('button', { name: 'Dropdown' });
    fireEvent.click(dropdownBtn);
    const menu = screen.getByTestId('userMenu');
    const menuLink = screen.getByRole('link', { name: 'Return Home' })
    fireEvent.click(menuLink);
    expect(menu).not.toBeInTheDocument()
  });
});