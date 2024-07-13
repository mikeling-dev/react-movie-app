import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home.js";
import Detail from "./routes/Detail.js";
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({
  /** Put theme here */
});


function App() {
  return (
    <MantineProvider theme={theme}>

      <Router>
        <Switch>
          <Route path="/movie/:id">
            <Detail />
          </Route>
          <Route path="/">
            <Home />
            </Route>
        </Switch>
      </Router>
    </MantineProvider>

  );
}

export default App;
