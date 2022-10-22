import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import { defaultTheme } from './styles/themes/default';
import { ProductContextProvider } from './contexts/ProductContext';
import { GlobalStyle } from './styles/global';
import { Router } from './Router';
import { OrderContextProvider } from './contexts/OrderContext';

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <ProductContextProvider>
          <OrderContextProvider>
            <Router />
          </OrderContextProvider>
        </ProductContextProvider>
        <GlobalStyle />
        <ToastContainer />
      </BrowserRouter>
    </ThemeProvider>
  );
};
