import React, { Component} from 'react';

// IMPORTA MATERIAL UI
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

//IMPORTA MODULOS
import muiTheme from './pages/modules/theme';

// IMPORTA MAIN CONTAINER
import MainContainer from "./pages/modules/containers/MainComponent";

const theme = createMuiTheme(muiTheme);
class App extends Component {
  
  render(){
    return (
      <React.Fragment>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <MainContainer/>
        </MuiThemeProvider>
      </React.Fragment>
    )
  }

//   componentDidCatch(error, info) {
// 		console.log('App Error:', error);
// 		console.log('App Error Info:', info);
//   }
}

export default App;