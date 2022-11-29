import RootNavigation from "./src/navigations/rootNavigation"
import { Provider } from 'react-redux';
import store from "./src/store";

export default function App(){
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  )
}