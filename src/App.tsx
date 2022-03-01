import React from 'react';
import './App.css';

// // Functional Component - stateless

// function App() {
//   return (
//     <div className="App">
//       <p>Hello World!</p>
//     </div>
//   );
// }

// Generic Types

// interface Pair<K,V> {
//   key: K;
//   value: V;
// }

// let month: Pair<string, string> = {
//   key: "ritik",
//   value: "kumar"
// }

// let year: Pair<number, string> = {
//   key: 10,
//   value: "ritik"
// }

// Class Component - stateful component

interface CarProps {
  text: string; value: string;
  favColor?: string;
}

interface CarState {
  color: string;
  show: boolean;
}

// Lifecycle methods
// Mounting, Updating, Unmounting phase

/**
 * Mounting
 * constructor()
 * getDerivedStateFromProps()
 * render()
 * componentDidMount()
 */

/**
 * getDrivedStateFromProps()
 * shouldComponentUpdate()
 * render()
 * getSanpshotBeforeUpdate()
 * componentDidUpdate()
 */

/**
 * Unmounting
 * componentWillUnmount()
 */

// Service/API 

class Ford extends React.Component<{}, {}> {
  constructor() {
    super({});
  }

  componentWillUnmount() {
    console.log('Ford is getting unmounted');
  }

  render() {
    return <p>Hello World</p>
  }
}

class Car extends React.Component<CarProps, CarState> {

  constructor(props: CarProps) {
    super(props);
    this.state = {color: 'loading...', show: true};
    console.log('contructor');
  }

  changeColor = () => {
    // this.setState({show: !this.state.show});
    console.log('In change color');
    this.setState({color: "blue"});
  }

  // static getDerivedStateFromProps(props: CarProps, state: CarState) {
  //   console.log('derived state');
  //   return { color: props.favColor };
  // }

  // componentDidMount() {
  //   console.log('Component mounted');
  //   setTimeout(() => {
  //     this.setState({color: 'green'});
  //   }, 5000);
  // }

  // shouldComponentUpdate() {
  //   return false;
  // }

  // getSnapshotBeforeUpdate(prevProps: CarProps, prevState: CarState) {
  //   console.log(prevProps, " ", prevState);
  // }

  // componentDidUpdate() {
  //   console.log('Component mounted');
  //   setTimeout(() => {
  //     this.setState({color: 'green'});
  //   }, 5000);
  // }

  render() {
    return (
    <div>
      <Data/>
      {/* {this.state.show ? <Ford/>: <></>}
      <p>Hello from {this.props.text} {this.props.value} times. </p>
      <p> My color is {this.state.color}</p>
      <button type="button" onClick={this.changeColor}>Click Button</button> */}
    </div>
    )
  }

}

class Data extends React.Component<{}, {user: string}> {
  constructor() {
    super({});
    this.state = { user: "loading..." };
  }

  async componentDidMount() {
    // fetch('https://api.github.com/users').then(async data => {
    //   const users = await data.json();
    //   console.log(users);
    //   this.setState({user: users[0].login})
    // }).catch(err => {
    //   console.log(err);
    // })

    let data;
    try {
      data = await fetch('https://api.github.com/users');
    }
    catch(err) {
      console.log(err);
    }

    const users = await data!.json();
    console.log(users);
    this.setState({user: users[0].login});
  }

  render() {
    return (
      <p>The user is {this.state.user}</p>
    )
  }
}

// component - props - passed when use the component(Immutable), state - component maintains(Mutable)

export default Car;
