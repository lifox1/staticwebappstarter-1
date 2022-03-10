import React from 'react';
import './styles/globals.css'
import Header from './Header';
import Body from './Body';

function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Body />
    </>
  )
}

export default App

