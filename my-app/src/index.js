import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import 'semantic-ui-css/semantic.min.css';
import './style.css';
import { Container, Header } from 'semantic-ui-react';
import { Menu } from 'semantic-ui-react';
import { Dropdown } from 'semantic-ui-react';
import { Icon } from 'semantic-ui-react';
import { Image, Grid, Divider, List, Input, Item } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Image src="http://courses.ics.hawaii.edu/ics314f17/morea/ui-frameworks/hard-rock-logo.png"/>
          <Menu.Item position={"right"}>CAFES</Menu.Item>
          <Menu.Item>HOTELS</Menu.Item>
          <Menu.Item>CASINOS</Menu.Item>
          <Menu.Item>LIVE</Menu.Item>
          <Menu.Item>SHOP</Menu.Item>
          <Menu.Item>BLOG</Menu.Item>
          <Menu.Item>REWARDS</Menu.Item>
        </Menu>
    );
  }
}

class IslandSnowLogo extends React.Component {
  render() {
    return (

        <Image fluid src='http://www.hardrock.com/cafes/honolulu/files/2384/Honolulu_Entrance.jpg'/>

    );
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
        <Grid centered className="footer">
          <Grid.Row>
            <h3>HARD ROCK CAFE HONOLULU</h3>
          </Grid.Row>

          <Grid.Row>
            <Item.Content>
              <Icon name={'phone'}/>
              +1-808-955-7383 &nbsp; &nbsp; &nbsp;
            </Item.Content>
            <Item.Content>
              <Icon name={'mail'}/>
              Email US &nbsp; &nbsp; &nbsp;
            </Item.Content>
            <Item.Content>
              <Icon name={'home'}/>
              280 Beachwalk, Honolulu, HI, 96815 &nbsp; &nbsp; &nbsp;
            </Item.Content>
            <Item.Content>
              <Icon name={'twitter'}/>
              <Icon name={'facebook'}/>
              <Icon name={'pinterest'}/>
              <Icon name={'tripadvisor'}/>
            </Item.Content>
          </Grid.Row>
        </Grid>

    );
  }
}

class IslandSnow extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <IslandSnowLogo/>
          <FooterMenu/>
        </div>
    );
  }
}

ReactDOM.render(<IslandSnow/>, document.getElementById('root'));