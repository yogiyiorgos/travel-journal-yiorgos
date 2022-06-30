import React from 'react';
import Header from './components/Header';
import Card from './components/Card';
import './styles.css';
import data from './data';

function App() {
  const cardElements = data.map((entry) => (
    <Card key={entry.title} entry={entry} />
  ));
  return (
    <div>
      <Header />
      <section className='cards-list'>{cardElements}</section>
    </div>
  );
}

export default App;
