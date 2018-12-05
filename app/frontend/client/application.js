import Rails from 'rails-ujs'
import initVue from './init_vue'
import 'babel-polyfill'

export default function() {
  Rails.start()
  initVue()
}
