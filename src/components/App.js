import React from "react";
import "../styles/App.css";
import Item from './item.js';
import Input from './input.js';

class Basket extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", fruits: [] };
    this.handleChange = this.handleChange.bind(this);
    this.url =
      "https://my-json-server.typicode.com/thoughtworks-jumpstart/api/fruits/";
  }

  componentDidMount() {
    fetch(this.url)
      .then(response => {
        if (!response.ok) {
          throw new Error("Something happened");
        }
        return response.json();
      })
      .then(data => {
        this.setState({ fruits: data });
      });
    console.log(this.state.fruits);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  filterFruits = () => {
    return this.state.fruits.filter(fruit =>
      fruit.type.includes(this.state.value.toLowerCase())
    );
  };

  render() {

    const fruitList = this.filterFruits().map(fruit => {
      return <Item id={fruit.id} fruitEmoji={fruit.emoji} fruitName={fruit.type} />;
    });

    console.log("fruitList is: " + fruitList);

    return (
      <div id="container">
        <Input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="Search in fruit basket..."
        />
        <ul>{fruitList}</ul>
      </div>
    );
  }
}

function App() {
  return <Basket />
}

export default App;
