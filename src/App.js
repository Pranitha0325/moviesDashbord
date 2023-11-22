import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import TopRated from './components/TopRated'
import UpComming from './components/UpComming'

import './App.css'

// write your code here
const App = () => (
  <>
    <Route exact path="/" component={Home} />
    <Route exact path="/top-rated" component={TopRated} />
    <Route exact path="/upcoming" component={UpComming} />
  </>
)

export default App
