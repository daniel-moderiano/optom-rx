import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from '../../context/AuthContext';
import AddPrescriber from "./AddPrescriber";
import { HelmetProvider } from 'react-helmet-async';

it("Displays correct header", async () => {
  render(
    <BrowserRouter>
      <HelmetProvider>
        <AuthContextProvider>
          <AddPrescriber setPage={jest.fn} setToast={jest.fn} googleLoaded={true} />
        </AuthContextProvider>
      </HelmetProvider>
    </BrowserRouter>
  );

  const header = screen.getByRole('heading');

  await waitFor(() => { expect(header).toBeInTheDocument() });
});