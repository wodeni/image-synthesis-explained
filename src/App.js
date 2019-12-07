import * as React from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import ReactFullpage from "@fullpage/react-fullpage";
import theme from "./theme";
import { Landing } from "./Landing";
import Story from "./Story";
import Latent from "./Latent";
import LatentViz from "./LatentViz";
import ArXiv from "./ArXiv";
import Network from "./Network";
import Characters from "./Characters";
import Components from "./Components";
import DogGen from "./DogGen";
import GanIntro from "./GanIntro";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ReactFullpage
          scrollOverflow={true}
          navigation
          licenseKey={"YOUR_KEY_HERE"}
          render={({ state, fullpageApi }) => {
            return (
              <div id="fullpage-wrapper">
                <ThemeProvider theme={theme}>
                  <Landing />
                  <Characters />
                  <Story />
                  <GanIntro />
                  <Network />
                  <Components />
                  <ArXiv />
                  <DogGen />
                  <Latent />
                  <LatentViz />
                </ThemeProvider>
              </div>
            );
          }}
        />
      </div>
    );
  }
}

export default App;
