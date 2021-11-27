import React from "react";
import { Component } from "react";
import Api from "../api/Api";

class Product extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      quantidade:0
    };    
  }

  add(){
    
  this.setState({
    quantidade: this.state.quantidade + 1
  });

}

}



export default Pedido;
