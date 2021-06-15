import { Switch, Route } from 'react-router-dom';
import { navigation, profile } from 'components/shell/stacked-layouts.resources';
import { URLS } from './urls';

const implementedInMVP = ['Карта'];

const views = [...navigation, ...profile].filter(({ item }) => !implementedInMVP.includes(item));

export const MainContent = () => (
  <Switch>
    <Route exact path={URLS.LEVEL1.home}>
      <p>Home</p>
    </Route>

    {views.map(({ href, item }) => (
      <Route path={href} key={href}>
        <p>{item}</p>
        <p>To be implemented..</p>
      </Route>
    ))}
  </Switch>
);
