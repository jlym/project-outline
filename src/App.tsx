import * as React from 'react';
import { ApolloProvider } from "react-apollo";
import { createClient } from "./apollo";
import './App.css';
import Grid from './Grid';

class App extends React.Component {

  public render() {
    return (
      <ApolloProvider client={createClient()}>
        <div className="App">
          <header className="App-header">
            Project Outline
          </header>
          <main className="main">
            <Grid/>
          </main>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
