import { render, screen } from "@testing-library/react";
import PrescriberDetails from './PrescriberDetails';
import { AuthContext } from '../../context/AuthContext';
import { BrowserRouter } from 'react-router-dom';

// Prevent errors from clogging the console
beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation(jest.fn());
});

const setData = () => {}

// let mockResponse = {
//   documents: ['prescriber 1'],
//   isPending: false,
//   error: null,
// };

let mockResponse;

jest.mock("../../hooks/useCollection", () => ({
  useCollection: () => ({ ...mockResponse })
}));

// beforeEach(() => {
//   render(
//     <BrowserRouter>
//       <AuthContext.Provider value={{ user: { uid: '1' } }}>
//         <PrescriberDetails setData={setData}/>
//       </AuthContext.Provider>
//     </BrowserRouter>
//   )
// })


test('React select is rendered when prescribers are fetched', () => {
  mockResponse = {
    documents: ['prescriber 1'],
    isPending: false,
    error: null,
  };
  render(
    <BrowserRouter>
      <AuthContext.Provider value={{ user: { uid: '1' } }}>
        <PrescriberDetails setData={setData}/>
      </AuthContext.Provider>
    </BrowserRouter>
  )
  const select = screen.getByRole('combobox');
  expect(select).toBeInTheDocument();
});

test('Spinner is shown while prescribers are loading', () => {
  mockResponse = {
    documents: null,
    isPending: true,
    error: null,
  };
  render(
    <BrowserRouter>
      <AuthContext.Provider value={{ user: { uid: '1' } }}>
        <PrescriberDetails setData={setData}/>
      </AuthContext.Provider>
    </BrowserRouter>
  )
  const spinner = screen.getByRole('status');
  expect(spinner).toBeInTheDocument();
});

test('Add prescriber btn is rendered when prescribers are fetched but none exist', () => {
  mockResponse = {
    documents: [],
    isPending: false,
    error: null,
  };
  render(
    <BrowserRouter>
      <AuthContext.Provider value={{ user: { uid: '1' } }}>
        <PrescriberDetails setData={setData}/>
      </AuthContext.Provider>
    </BrowserRouter>
  )
  const btn = screen.getByRole('link');
  expect(btn).toBeInTheDocument();
});


