import {Theme} from '@material-ui/core/styles'
import {createMuiTheme} from '@material-ui/core'
import {ThemeOptions} from '@material-ui/core/styles/createMuiTheme';


export const createTheme = (prefersDarkMode?: boolean, options?: ThemeOptions, ...args: object[]): Theme => {
  return createMuiTheme({...options, palette: {...options?.palette, type: prefersDarkMode ? 'dark' : 'light'}}, ...args)
}
