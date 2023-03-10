import React from 'react';
import './App.css';
import { Header } from './components/Header';
import Balance from './components/Balance';
import IncExp from './components/IncExp';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
      </div>
      <IncExp />
      <TransactionList />
      <AddTransaction />
    </GlobalProvider>

  );
}

export default App;
