import React, { Component } from "react";
import "./App.css"
import Mulher from './assets/mullher.jpg'

class App extends Component{

 state = {
   shortsFeminino: [
     {
      marca: "Puma",
      cor: "Vermelho",
      tamanho: ["M", "G"],
      composição: "85% poliéster, 15% elastano"
     },
     {
      marca: "Adidas",
      cor: "Preto",
      tamanho: ["P", "M", "G"],
      composição: "100% poliéster" 
     },
     {
      marca: "Lacoste",
      cor: "Verde Militar",
      tamanho: ["P", "G"],
      composição: "Algodão"
     },
     {
       marca: "Nike",
       cor: "Rosa",
       tamanho: ["M", "G"],
       composição: "100% poliéster"
     },
     {
       marca: "Marisa",
       cor: "Azul",
       tamanho: ["P", "M", "G", "GG"],
       composição: "Jeans"
     },
     {
       marca: "Fila",
       cor: "Marrom",
       tamanho: "P",
       composição: "Poliéster"
     }
   ]
 }

  render(){
    return(
      <div>
        <h1>Shorts Feminino</h1>
        <img src={Mulher} class="box-intro" alt="mulher"/>
        {this.state.shortsFeminino.map((item) => (
          <div className="intro">
              <p>Marca: {item.marca}</p>
              <p>Cor: {item.cor}</p>
              <p>Tamanho: {item.tamanho}</p>
              <p>Composição: {item.composição}</p>
          </div>
        ))}
      </div>
    )
  }
}

export default App;