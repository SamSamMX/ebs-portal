import React, { Component } from 'react'
//import ReactMarkdown from 'markdown-to-jsx'; <--- tambien funciona pero Markdown que ya esta overrides elementos que en estetica son mejores.

// IMPORTA MATERIAL UI
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

// IMPORTA VISTAS
import AppAppBar from './modules/views/AppAppBar';
import AppFooter from './modules/views/AppFooter';

// IMPORTA COMPONENTES
import Typography from './modules/components/Typography';
import Markdown from './modules/components/Markdown';

// IMPORTA EL ESTATICO MD 
import terms from './modules/static/docs/terms.md';



class PageTerm extends Component {
  constructor(props) {
    super(props)

    this.state = { md: "" }
  }

  componentWillMount() {
    fetch(terms)
      .then((res) => res.text())
      .then((md) => {
        this.setState({ md })
      })
  }

  render() {

    let { md } = this.state

    return (
      <React.Fragment>
        <AppAppBar />

        <Container>
          <Box mt={7} mb={12}>
            <Typography variant="h3" gutterBottom marked="center" align="center">
              Terms
            </Typography>

            <div>
              {/* <ReactMarkdown children={md}/> <--- Funciona, pero hay que importar ReactMarkdown*/}
              {/* <Markdown >{md}</Markdown>  <---- Funciona igual que <Markdown children={md}/>  */} 
              <Markdown children={md}/>
            </div>
          </Box>
        </Container>

        <AppFooter />
      </React.Fragment>
    )
  }
}

export default PageTerm;