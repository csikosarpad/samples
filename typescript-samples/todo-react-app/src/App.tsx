import React from 'react'
import './App.css';

import Form from './components/Form';
import List from './components/List';

const App: React.FC = () => {
  return (
    <>
      <h1>TODO - React / Vite </h1>
      <Form />
      <List />
    </>
  )
}

export default App
