import Vue from 'vue'
import loadComponents from './load_components'

export default function() {
  loadComponents()

  // Use plugin
  // Vue.use(VueRouter)

  document.addEventListener('DOMContentLoaded', () => {
    const el = document.querySelector('#vue-app')

    /* eslint-disable no-new */
    new Vue({ el })
  })
}
