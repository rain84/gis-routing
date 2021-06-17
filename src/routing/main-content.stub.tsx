import { Route } from 'react-router-dom';
import { navigation, profile } from 'components/shell/stacked-layouts.resources';

const implementedInMVP = ['Карта'];
const views = [...navigation, ...profile].filter(({ item }) => !implementedInMVP.includes(item));

export const RouteStub = views.map(({ href, item }) => (
  <Route path={href} key={href}>
    <p>{item}</p>
    <p>To be implemented..</p>
  </Route>
));
