import React, { Component, createContext } from 'react'

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = { 
        isLightTheme: false,
        light:{text:'#sss', ui: '#ddd', bg: '#eee'},
        dark: {text: '#f5f0f0', ui: '#fff', bg:'#050201'}
     }

     //setting up context updater
     toggleTheme = () => {
        this.setState({
            isLightTheme: !this.state.isLightTheme
        });
    
}
    render() { 
        return ( 
            <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
{this.props.children}

            </ThemeContext.Provider>
         );
    }
}
 
export default ThemeContextProvider