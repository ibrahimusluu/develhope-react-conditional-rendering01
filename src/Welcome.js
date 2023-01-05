import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component {
  static defaultProps = {
    // here defaultProps is a special keyword we must use.
    name: "stranger",
  };

  render() {
    return (
      <div>
        <p>Welcome, {this.props.name}!</p>
        <p>{this.props.age > 18 ? <Age age={this.props.age} /> : ""}</p>
        {/* Second Way */}
        {/* {this.props.age > 18 && <Age age={this.props.age} />}
        {this.props.age <= 18 && ""} */}
      </div>
    );
  }
}
