import DisplayNumber from "../Components/DisplayNumber";
import { connect } from "react-redux";

const mapReduxStateToReactProps = (state) => {
  //redux state 가 바뀔때마다 호출됨
  return { number: state.number };
};

export default connect(mapReduxStateToReactProps)(DisplayNumber);

// import React, { Component } from "react";
// import store from "../store";
// import DisplayNumber from "../Components/DisplayNumber";

// export default class extends Component {
//   constructor(props) {
//     super(props);
//     store.subscribe(() => {
//       this.setState({ number: store.getState().number });
//     });
//   }

//   state = { number: store.getState().number }; //맨처음용

//   render() {
//     return <DisplayNumber number={this.state.number} />;
//   }
// }

// const mapReduxStateToReactProps = (state) => {
//     return { number: state.number };
//   };의 뜻은 아래 3가지와 똑같은 역할을 한다.

//  state = { number: store.getState().number };

// store.subscribe(() => {
//           this.setState({ number: store.getState().number });
//         });

// number={this.state.number}
