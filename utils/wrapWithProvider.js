import dva from "./dva"
import React from "react"
import { Provider } from "react-redux"
import { persistStore } from "redux-persist"
import { PersistGate } from "redux-persist/es/integration/react"
import models from '../src/Models'
export default ({ element },plugin) => {
  if (!plugin.isTheme) {
    const app = dva()
    const store = app._store
    let persistor = persistStore(store)
    return <Provider store={store}>
      {element}
    </Provider>
  }
  if (!!window&&plugin.isTheme) {
    if(!window.models){
      window.models=[]
    }
    window.models = window.models.concat(models)
  }
}
export const wrapRootProvider = ({ element }, plugin) => {

};
