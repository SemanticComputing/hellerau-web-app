import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import SemanticPortal from '../containers/SemanticPortal'
// import deepPurple from '@material-ui/core/colors/deepPurple'
// import teal from '@material-ui/core/colors/teal'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#7f0000'
    }
  },
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: '1 rem'
      }
    },
    MuiAccordion: {
      root: {
        '&$expanded': {
          marginTop: 8,
          marginBottom: 8
        }
      }
    },
    MuiButton: {
      endIcon: {
        marginLeft: 0
      }
    },
    MuiIconButton: {
      root: {
        padding: 4
      }
    },
    MuiTableCell: {
      sizeSmall: {
        paddingTop: 2,
        paddingBottom: 2
      }
    }
  }
})

const App = () => (
  <MuiThemeProvider theme={theme}>
    <SemanticPortal />
  </MuiThemeProvider>
)

export default App
