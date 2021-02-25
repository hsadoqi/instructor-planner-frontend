import Welcome from './Welcome'
import { Route, Switch } from 'react-router-dom'
import SignUpForm from './SignUpForm'

function App() {
  return (
    <>
      <Route path={process.env.PUBLIC_URL} component={Welcome}/>
      <Switch>
        <Route path="/signup" component={SignUpForm}/>
      </Switch>
    </>
  );
}

export default App;
