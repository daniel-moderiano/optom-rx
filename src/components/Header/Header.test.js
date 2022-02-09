import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./Header";
import { AuthContext } from '../../context/AuthContext';
import { BrowserRouter } from 'react-router-dom';

// Mock useNavigate to assess for calls in tests
const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

// Mock data and functions - all empty/blank mocks
const setPage = () => {}

// Prevent errors from clogging the console
beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation(jest.fn());
});

describe('General tests', () => {
  test('Logo click calls correct navigation function', () => {
    render(
      <BrowserRouter>
      <AuthContext.Provider value={{ user: { uid: '1' } }}>
        <Header setPage={setPage} url="/"/>
      </AuthContext.Provider>
      </BrowserRouter>
    );  
    const logo = screen.getByRole('heading');
    fireEvent.click(logo);
    expect(mockedUsedNavigate).toBeCalled();
  });

  test('Header class adjusts correctly according to non-auth url', () => {
    render(
      <BrowserRouter>
      <AuthContext.Provider value={{ user: { uid: '1' } }}>
        <Header setPage={setPage} url="/"/>
      </AuthContext.Provider>
      </BrowserRouter>
    ); 
    const header = screen.getByRole('banner');
    expect(header.classList).not.toContain('auth-header');
  });

  test('Header class adjusts correctly according to auth url', () => {
    render(
      <BrowserRouter>
      <AuthContext.Provider value={{ user: { uid: '1' } }}>
        <Header setPage={setPage} url="/login"/>
      </AuthContext.Provider>
      </BrowserRouter>
    ); 
    const header = screen.getByRole('banner');
    expect(header.classList).toContain('auth-header');
  });
});