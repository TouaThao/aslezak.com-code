import React, { Component } from "react";
import Img from "gatsby-image";
import styled from "react-emotion";
import heroBg from "../images/hero/hero.jpg";
import "animate.css";

const Hero = styled.div`
  padding: 10vh 0;
  background: url(${heroBg}) no-repeat
  background-position: 50% 50%;
  background-size: cover;
  background-position: fixed;
  height: 100vh;

  h1 {
    font-family: AvenirNext-Bold;
    font-size: 72px;
    color: #FFFFFF;
    line-height: 95px;
    text-shadow: 0 2px 4px rgba(0,0,0,0.47);
    text-transform: uppercase;
  }

  h2 {
      font-family: Arvo;
    font-size: 36px;
    color: #FFFFFF;
    letter-spacing: 0.62px;
    line-height: 49px;
    text-shadow: 0 2px 4px rgba(0,0,0,0.50);
  }

  h3 {
    font-family: Arvo;
    font-size: 24px;
    color: #FFFFFF;
    line-height: 32px;
    text-shadow: 0 2px 4px rgba(0,0,0,0.75);
  }
  

  @media (max-width: 414px) {
    padding: 4vh;
    height: 89vh;
    background-position: center bottom;

    h1 {
    padding: 0;
    margin: 0;
    font-size: 44px;
    line-height: 73px;
    letter-spacing: .5px;
    }

    h2 {
      font-size: 20px;
      line-height: 39px;
      letter-spacing: .8px;
      padding: 0;
       margin: 0;
    }

    h3 {
      font-size: 18px;
      line-height: 29px;
      padding: 0;
      margin: 0;
    }
  }

  @media (max-width: 375px){
   
    h1 {
      font-size: 40px;
      line-height: 65px;
      }

    h2 {
      font-size: 18px;
      line-height: 29px; 
    }
    h3 {
      font-size: 16px;
      line-height: 26px;
      font-weight: 100;
      }
    } 
`;

export default class componentName extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Hero>
        <div className="container">
          <div className="row center-lg center-md- center-sm center-xs animated fadeInUp">
            <div className="col-xs-12 col-sm-8 col-md-12 col-lg-12">
              <h3>Welcome! I'm</h3>
            </div>
            <div className="col-xs-12 col-sm-8 col-md-12 col-lg-12 animated fadeIn">
              <h1>Andy Slezak</h1>
            </div>
            <div className="col-xs-12 col-sm-8 col-md-12 col-lg-12 animated fadeIn">
              <h2>I like to design & code enjoyable web apps</h2>
            </div>
          </div>
        </div>
      </Hero>
    );
  }
}
