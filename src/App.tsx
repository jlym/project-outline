import * as React from 'react';
import './App.css';
import Grid from './Grid';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          Project Outline
        </header>
        <main className="main">
          <Grid/>
        </main>
      </div>
    );
  }
}

export default App;
