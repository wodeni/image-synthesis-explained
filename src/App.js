import * as React from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { P } from "./Util";
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
import MathFoundation from "./MathFoundation";
import DogGen from "./DogGen";
import GanIntro from "./GanIntro";

const Math = () => (
  <P fontFamily="body" mb={[4, 5]} m={3}>
    <h1>something</h1>
    <ul>
      <li>
        Nash equilibrium: “GAN is based on the zero-sum non-cooperative game. In
        short, if one wins the other loses. A zero-sum game is also called
        minimax. Your opponent wants to maximize its actions and your actions
        are to minimize them. In game theory, the GAN model converges when the
        discriminator and the generator reach a Nash equilibrium. This is the
        optimal point for the minimax equation below.”
      </li>
      <li>
        The problem of convergence and different measures of divergence, along
        with the fact that real GANs are <em>not</em> optimizing towards NE, but
        rather approximating and minimizing (some measure of) divergence.
      </li>
    </ul>
  </P>
);

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
