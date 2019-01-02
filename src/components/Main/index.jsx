import React from "react";

export default class Main extends React.Component {
  buscar = () => {
    this.props.onSearch();
  };
  handleUrl = e => {
    this.props.onChangeUrl(e.currentTarget.value);
  };
  handleCantidad = e => {
    this.props.onChangeCantidad(e.currentTarget.value);
  };

  render() {
    return (
      <div className="App">
        <input
          placeholder="Your Youtube Channel URL"
          onChange={this.handleUrl}
          type="text"
          id="youtube"
        />
        <input
          placeholder="Cantidad"
          type="text"
          id="cantidad"
          onChange={this.handleCantidad}
        />
        <input type="button" onClick={this.buscar} id="search" value="Buscar" />
      </div>
    );
  }
}
