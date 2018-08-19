import ApolloClient from "apollo-boost";
import * as React from 'react';
import { ApolloProvider } from "react-apollo";
import './App.css';
import Grid from './Grid';

const client = new ApolloClient();

class App extends React.Component {

  public render() {
    return (
      <ApolloProvider client={client}>
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
