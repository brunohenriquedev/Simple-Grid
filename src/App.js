import React, {Component} from 'react';
import {Container, Row, Column} from "./components/Grid/index";

class App extends Component {
  render() {

  return (
    <Container>
      <Row>
        <Column color='#FFF' backgroundColor='#0095ff' mobile='6' tablet='12' desktop='6'>1 <div>mobile 6 tablet 12 desktop 6</div></Column>
        <Column color='#FFF' backgroundColor='#8844ee' mobile='6' tablet='6' desktop='6'>2 <div>mobile 6 tablet 6 desktop 6</div></Column>
        <Column color='#FFF' backgroundColor='tomato' mobile='12' tablet='6' desktop='12'>3 <div>mobile 12 tablet 6 desktop 12</div></Column>
      </Row>
      <Row>
        <Column color='#FFF' backgroundColor='#8844ee' mobile='6' tablet='6' desktop='6'>4 <div>mobile 6 tablet 6 desktop 6</div></Column>
        <Column color='#FFF' backgroundColor='tomato' mobile='12' tablet='6' desktop='12'>5 <div>mobile 12 tablet 6 desktop 12</div></Column>
        <Column color='#FFF' backgroundColor='#0095ff' mobile='6' tablet='12' desktop='6'>6 <div>mobile 6 tablet 12 desktop 6</div></Column>
      </Row>
      <Row>
        <Column color='#FFF' backgroundColor='tomato' mobile='12' tablet='6' desktop='12'>7 <div>mobile 12 tablet 6 desktop 12</div></Column>
        <Column color='#FFF' backgroundColor='#0095ff' mobile='6' tablet='12' desktop='6'>8 <div>mobile 6 tablet 12 desktop 6</div></Column>
        <Column color='#FFF' backgroundColor='#8844ee' mobile='6' tablet='6' desktop='6'>9 <div>mobile 6 tablet 6 desktop 6</div></Column>
      </Row>
    </Container>
  );
  }
}

export default App;
