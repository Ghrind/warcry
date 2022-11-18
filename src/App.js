import React from 'react';
import { Roster } from './features/roster/Roster';
import { Compendium } from './features/compendium/Compendium';
import { useSelector } from 'react-redux'
import 'semantic-ui-css/semantic.min.css'
import { Grid, Header } from 'semantic-ui-react'

function App() {
  const state = useSelector( (state) => state);
  return (
    <div className="App">
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <Header as="h1">Compendium</Header>
            <Compendium />
          </Grid.Column>
          <Grid.Column>
            <Header as="h1">Roster</Header>
            <Roster />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default App;
