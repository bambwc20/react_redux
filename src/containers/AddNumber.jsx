import AddNumber from "../Components/AddNumber";
import { connect } from "react-redux";

export default connect()(AddNumber);

// import React, { Component } from "react";
// import AddNumber from "../Components/AddNumber";
// import store from "../store";

// export default class extends Component {
//   render() {
//     return (
//       <AddNumber
//         onClick={(size) => {
//           store.dispatch({ type: "INCREMENT", size: size });
//         }}
//       />
//     );
//   }
// }
