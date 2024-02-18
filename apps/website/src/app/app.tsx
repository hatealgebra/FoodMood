import { Route, Routes } from 'react-router-dom';
import ROUTE_WEB from '../route.constants';
import Layout from '../layouts/layout';
import { useScrollTop } from '~shared-utils';

const App = () => {
  useScrollTop();

  return (
    <Layout>
      <Routes>
        {Object.values(ROUTE_WEB).map((route, index) => {
          return (
            <Route key={index} path={route.path} Component={route.Component} />
          );
        })}
      </Routes>
      {/* END: routes */}
    </Layout>
  );
};

export default App;
