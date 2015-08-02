import 'normalize.css'
import './styles.css'

import React from 'react'
import FirstComponent from './components/FirstComponent'

React.render(<FirstComponent/>, document.getElementById('application'), () => {
  console.log('finished mounting application')
})
