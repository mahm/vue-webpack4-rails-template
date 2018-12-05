import initApp from 'client/application'
import 'stylesheets/application'

require.context('images', true, /\.(png|jpg|jpeg|svg|gif)$/)

initApp()
