import AddNumber from "../Components/AddNumber";
import { connect } from "react-redux";

const mapReduxDispatchToReactProps = (dispatch) => {
  //처음 애플리케이션이 로드될때 딱 한번만 호출됨 feat.이벤트라서 한번만 해도 됨
  return {
    onClick: (size) => {
      dispatch({ type: "INCREMENT", size: size });
    },
  };
};

export default connect(null, mapReduxDispatchToReactProps)(AddNumber);

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
