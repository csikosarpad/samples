import React from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';

const About = React.lazy(() => import('./pages/About.tsx'));
const Dashboard = React.lazy(() => import('./pages/Dashboard.tsx'));
const Chart = React.lazy(() => import('./pages/Chart.tsx'));
const Home = React.lazy(() => import('./pages/Home.tsx'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="dashboard/*"
          element={
            <React.Suspense fallback={<>...</>}>
              <Dashboard />
            </React.Suspense>
          }
        />
        <Route
          path="chart"
          element={
            <React.Suspense fallback={<>...</>}>
              <Chart />
            </React.Suspense>
          }
        />
        <Route
          path="about"
          element={
            <React.Suspense fallback={<>...</>}>
              <About />
            </React.Suspense>
          }
        />

        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
};

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashboard/">Dashboard</Link>
          </li>
          <li>
            <Link to="/chart/">Chart</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
