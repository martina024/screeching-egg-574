import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom"
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import { AppProvider } from './context/productContext';
import { FilterContextProvider } from './context/filter_context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <ChakraProvider>
     <BrowserRouter>
        <Provider store={store}>
         <AppProvider>
            <FilterContextProvider>
            <App />
            </FilterContextProvider>
          </AppProvider>
        </Provider>
      </BrowserRouter>
  </ChakraProvider>
 

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
