import React from 'react';
import HelloWorld from './state-drills/HelloWorld'
import Bomb from './state-drills/Bomb'
import RouletteGun from './state-drills/RouletteGun'

class App extends React.Component {
  render() {
    return <main>
      <HelloWorld friend = 'Friend' react = 'React' world = 'World' />
      <Bomb />
      <RouletteGun bulletsInChamber = {8}/>
    </main>
  }
}

export default App