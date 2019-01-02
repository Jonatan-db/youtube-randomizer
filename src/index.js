import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Results from "./components/Result";
import Footer from "./components/Footer";

import "./styles.css";

class App extends React.Component {
  state = {
    url: "",
    cantidad: 0,
    image: ""
  };

  handleSearch = () => {
    const txtimage = "http://i.ytimg.com/i/" + this.state.url + "/1.jpg";
    console.log(txtimage);
  };
  handleChangeUrl = e => {
    this.setState({ url: e });
  };
  handleChangeCantidad = e => {
    this.setState({ cantidad: e });
  };

  render() {
    return (
      <div className="Principal">
        <Header />
        <Main
          onSearch={this.handleSearch}
          onChangeUrl={this.handleChangeUrl}
          onChangeCantidad={this.handleChangeCantidad}
        />
        <Results />
        <Footer />
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
