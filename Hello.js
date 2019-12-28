import React from 'react';
import {Bootstrap, Grid, Col, Row, ToggleButton, Form} from 'react-bootstrap';
import $ from 'jquery';
import 'react-rangeslider/lib/index.css';

class Body extends React.Component{
  render(){
    let styleBut = {
      padding:"0px",
      top:"55px",
    };
    return (
      <div id="drum-machine" className="container" disabled>
        <div className="row">
          <div className="col">
            
        <Row>
          <Col>
            <Button name="Q" id="qb" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" className="drum-pad"/>
          </Col>
          <Col>
            <Button name="W" id="wb" className="drum-pad" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"/>
          </Col>
          <Col>
            <Button name="E" id="eb" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" className="drum-pad"/>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button name="A" id="ab" className="drum-pad" src=" https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"/>
          </Col>
          <Col>
            <Button name="S" id="sb" className="drum-pad" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"/>
          </Col>
          <Col>
            <Button name="D" id="db" className="drum-pad" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"/>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button name="Z" id="zb" className="drum-pad" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"/>
          </Col>
          <Col>
            <Button className="drum-pad" name="X" id="xb" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"/>
          </Col>
          <Col>
            <Button className="drum-pad" name="C" id="cb" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"/>
          </Col>
        </Row>
          </div>
          <div className="col text-align-center" id="display">
            <Dial/>
          </div>
        </div>
        
        
          
        <Row style={{top:"75px",marginLeft:"50px"}}>
          <form className="form row form-stuff">
            <div className="form-group col">
              <label className="form-label label">Power</label>
              <Toggle/>
            </div>
            <div className="form-group col">
              <label className="form-label label">Bank</label>
              <Toggle/>
            </div>
          </form>
        </Row>
        <Row>
          <Slider/>
        </Row>
        
      </div>
    )
  }
}
class Button extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleClickOut = this.handleClickOut.bind(this);
    this.playAudio = this.playAudio.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  handleKeyDown(event){
    alert(event.target.name);
  }
   handleClick(event){
     let target = event.target;
     $(target).css("color","white");
     $(target).css("background-color","rgb(19, 18, 18)");
     $(target).css("box-shadow", "10px 10px 5px -5px rgba(0,0,0,0.84)");
   }
   handleClickOut(event){
     let target = event.target;
     $(target).css("color","black");
     $(event.target).css("background-color","darkgrey");
     $(event.target).css("box-shadow","5px 5px 5px 0px rgba(0,0,0,0.75)");
   }
   playAudio(event){
     event.target.children[0].play();
   }
  render(){
    return (
      <div className="button" style={{width:"65px"}} id={this.props.id} onMouseUp   ={this.handleClickOut} onMouseDown={this.handleClick} onClick={this.playAudio} onKeyPress = {this.handleKeyDown}>
        {this.props.name}
        <audio className="clip" id={this.props.name}>
            <source src={this.props.src} type="audio/mp3"/>
        </audio>
      </div>
    );
  }
}
class Toggle extends React.Component{
  construtor(props){
    super(props);
  }
  render(){
    return(
      <div style={{margin:"0px"}}>
        <label className="switch">
          <input type="checkbox"/>
          <span className="slider round"></span>
        </label>
      </div>
    );
  }
}
class Slider extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="container row slideContainer">
        <input type="range" min="1" max="100" id="range"/>
      </div>
    );
  }
}
class Dial extends React.Component{
  render(){
    return(
      <div>
        Hello World
      </div>
    );
  }
}
export default Body;