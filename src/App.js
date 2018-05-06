import React, { Component } from 'react';
import logo from './logo.svg';

import {
  foto,
  Divider,
  FontIcon,
  List,
  ListItem,
  Subheader,
  Avatar
} from 'react-md';

const InfoIcon = () => <FontIcon>info</FontIcon>;
const StarIcon = () => <FontIcon>star</FontIcon>;

class App extends Component {
  render() {
    let amigos = [
      { nombre: 'Irure', color: 'red', foto: 'irure.jpg', tel: '948678987' },
      { nombre: 'Iván', color: 'green', foto: 'ivan.png', tel: '948678987' },
      { nombre: 'Barreto', color: 'blue', foto: 'barreto.png', tel: '948678987' },
    ];

    return (
      <div className="md-grid">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to My App</h1>
        </header>

        <ul>
          {amigos.map(unAmigo => { return <li style={{ color: unAmigo.color }}>{unAmigo.nombre}|{unAmigo.tel}| <img src={'./imgs/' + unAmigo.foto} /></li> })}
        </ul>

        <List className="md-cell md-paper md-paper--1">
          <Subheader primaryText="Contacts" primary />
          {amigos.map(unAmigo => { return (
            <ListItem
            leftAvatar={ <Avatar suffix="deep-purple" src="./imgs/irure.jpg"></Avatar>}
             rightIcon={<StarIcon />}
             primaryText={unAmigo.nombre}
             secondaryText={unAmigo.tel}
             threeLines
           />  
          );})}

          <ListItem
           leftAvatar={ <Avatar suffix="deep-purple" src="./imgs/irure.jpg"></Avatar>}
            rightIcon={<StarIcon />}
            primaryText="Irure"
            secondaryText={'8785743598'}
            threeLines
          />
          <ListItem
            foto={'ivan.png'}
            rightIcon={<StarIcon />}
            primaryText="Ivan"
            secondaryText={'9871469726'}
            threeLines
          />
          <ListItem
            foto={'barreto.png'}
            rightIcon={<StarIcon />}
            primaryText="Barreto"
            secondaryText="3847983743"
            threeLines
          />
        </List>

      </div>
    );
  }
}

export default App;
