import { extendTheme,ThemeConfig } from "@chakra-ui/react";

const config:ThemeConfig={
    initialColorMode:'dark'
}
const theme=extendTheme({
    config,
    colors:{
        gray:{
           50: '#bfbfbf',
           100: '#d9d9d9',
           200: '#bfbfbf',
           300: '#a6a6a6',
           400: '#7095a7',
           500: '#737373',
           600: '#595959',
           700: '#404040',
           800: '#262626',
           900: '#0d0d0d',
        },
        White:{
            50: '#bfbfbf',
            100: '#d9d9d9',
        }
    }
})
export default theme;