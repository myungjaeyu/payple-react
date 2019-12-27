import React from 'react'
import ReactDOM from 'react-dom'
import Payple from '../src/index'

const root = document.createElement('div')

document.body.append(root)

ReactDOM.render(<Payple text='test' />, root)