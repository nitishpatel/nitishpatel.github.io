import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Routes from './Routes';
import "animate.css"
import { ChakraProvider } from "@chakra-ui/react"

ReactDOM.render(<ChakraProvider><Routes /></ChakraProvider>,document.getElementById('root'));