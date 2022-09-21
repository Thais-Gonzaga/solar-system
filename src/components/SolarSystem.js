import React, { Component } from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends Component {
  render() {
    console.log(planets);
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {planets.map(({ name, image }) => (
          <li key={ image }>
            <PlanetCard planetName={ name } planetImage={ image } />
          </li>
        ))}
      </div>

    );
  }
}

export default SolarSystem;
