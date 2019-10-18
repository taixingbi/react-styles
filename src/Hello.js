import React, { Component } from 'react';
import './cssStyles.css'
import styles from './cssStyles.css';

import styled from 'styled-components';

import inlineStyle from './inlineStyles';


const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;


class Hello extends Component {
  render() {
    console.log(inlineStyle);

    return (
      <div>

        <div className="cssdiv">
          <p> CSS stylesheet</p>
        </div>

        <div className={styles.container}>
          <p>Get started with CSS Modules style</p>
        </div>

        <div style={inlineStyle.div}>
          <p style={inlineStyle.p}>  inline Style </p>
        </div>

        <div>
          <Button>Normal</Button>
        </div>

      </div>
    );
  }
}

export default Hello;
