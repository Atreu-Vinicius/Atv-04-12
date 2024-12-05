import React from 'react';
import Header from './components/Header';
import TaskContainer from './components/TaskContainer';

function App() {
    return (
      <div className="App">
          <header className='task'></header>
          <Header />
          <TaskContainer />
      </div>
    );
  }

export default App;
