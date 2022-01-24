import React from "react";
import "./App.less";
import GitHubButton from "react-github-btn";
import { Routes } from "./routes";

function App() {
  return (
    <div className="App">

      <Routes />
      
      <div className="social-buttons">
        <GitHubButton
          href="https://github.com/GarudaProjects/SolSwap/"
          data-color-scheme="no-preference: light; light: light; dark: light;"
          data-icon="octicon-star"
          data-size="large"
          data-show-count={true}
          aria-label="Star SolSwap on GitHub"
        >
          Star
        </GitHubButton>
      </div>
    </div>
  );
}

export default App;
