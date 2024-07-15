import DefaultTheme from 'vitepress/theme'
import * as components from './components'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    for (const component of Object.keys(components)) {
      app.component(component, components[component])
    }
  },
}
