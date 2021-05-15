import React /* , { Component } */ from 'react';

/* 
class Componente extends Component {
  render() {
    return <h2>{this.props.msg}</h2>;
  }
}
*/

/* 
export default function Componente(props) {
  return <h2>{props.msg}</h2>;
}
*/

const Componente = (props) => <p>{props.msg}</p>;

export default Componente;
