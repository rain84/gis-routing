import { Switch, Route, Redirect } from 'react-router-dom';
import { URLS } from './urls';
import { RouteStub } from './main-content.stub';
import { Map } from 'features/map';

export const MainContent = () => (
  <Switch>
    <Route exact path={URLS.LEVEL1.home} component={Map} />
    <Route path={URLS.LEVEL1['show-map']} component={Map} />
    { RouteStub }
    <Route path='*'>
      <Redirect to={URLS.LEVEL1.home}   />
    </Route>
  </Switch>
);
