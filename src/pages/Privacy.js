import React, { Component } from 'react'

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
import privacy from './modules/static/docs/privacy.md';



class PagePrivacy extends Component {
  constructor(props) {
    super(props)

    this.state = { md: "" }
  }

  componentWillMount() {
    fetch(privacy)
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
              Privacy
            </Typography>

            <div>
              <Markdown >{md}</Markdown>
            </div>
          </Box>
        </Container>

        <AppFooter />
      </React.Fragment>
    )
  }
}

export default PagePrivacy;