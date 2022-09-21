import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {
          missions.map(({ name, year, country, destination }) => (
            <li key={ name }>
              <MissionCard
                name={ name }
                year={ year }
                country={ country }
                destination={ destination }
              />
            </li>
          ))
        }
      </div>

    );
  }
}

export default Missions;
