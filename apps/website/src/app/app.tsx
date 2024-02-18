import { Route, Routes } from 'react-router-dom';
import ROUTE_WEB from '../route.constants';
import Layout from '../layouts/layout';

export function App() {
  return (
    <Layout>
      <Routes>
        {Object.values(ROUTE_WEB).map((route, index) => {
          console.log(route);
          return (
            <Route key={index} path={route.path} Component={route.Component} />
          );
        })}
      </Routes>
      {/* END: routes */}
    </Layout>
  );
}
