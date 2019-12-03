import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// /* eslint-disable import/no-extraneous-dependencies */
// import React from "react";
// import ReactDOM from "react-dom";
// import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
// import ReactFullpage from "@fullpage/react-fullpage";

// import "./styles.css";

// class FullpageWrapper extends React.Component {
//   onLeave(origin, destination, direction) {
//     console.log("Leaving section " + origin.index);
//   }
//   afterLoad(origin, destination, direction) {
//     console.log("After load: " + destination.index);
//   }
//   render() {
//     return (
//       <ReactFullpage
//         scrollOverflow={true}
//         sectionsColor={["orange", "purple", "green"]}
//         onLeave={this.onLeave.bind(this)}
//         afterLoad={this.afterLoad.bind(this)}
//         render={({ state, fullpageApi }) => {
//           return (
//             <div id="fullpage-wrapper">
//               <div className="section section1">
//                 <h3>Section 1</h3>
//               </div>
//               <div className="section">
//                 <div className="slide">
//                   <h3>Slide 2.1</h3>
//                 </div>
//                 <div className="slide">
//                   <h3>Slide 2.2</h3>
//                 </div>
//                 <div className="slide">
//                   <h3>Slide 2.3</h3>
//                 </div>
//               </div>
//               <div className="section">
//                 <h3>Section 3</h3>
//                 <button onClick={() => fullpageApi.moveTo(1, 0)}>
//                   Move top
//                 </button>
//               </div>
//             </div>
//           );
//         }}
//       />
//     );
//   }
// }

// ReactDOM.render(<FullpageWrapper />, document.getElementById("root"));

// export default FullpageWrapper;
