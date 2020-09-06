import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import routes from '../routes';

import themeConfig from '../service/themeConfig';
import PrivateRoute from '../service/PrivateRoute';
import PublicRoute from '../service/PublicRoute';
import AppBar from './appBar/AppBar';

const App = ({ theme, isloadingContacts }) => {
  let themeState = 'light';
  theme ? (themeState = 'light') : (themeState = 'dark');

  return (
    <BrowserRouter>
      <div
        style={{
          color: themeConfig[themeState].fontColor,
          background: themeConfig[themeState].bodybg,
        }}
      >
        <AppBar />
        {/* {isloadingContacts && <h2>Loading ...</h2>} */}
        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            {routes.map(route => {
              return route.private ? (
                <PrivateRoute key={route.label} {...route} />
              ) : (
                <PublicRoute
                  key={route.label}
                  {...route}
                  restricted={route.restricted}
                />
              );
            })}
            <Redirect to="/login" />
          </Switch>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;
