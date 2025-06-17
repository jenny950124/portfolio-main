import { Outlet, useLocation } from 'react-router-dom';
import MainNav from './MainNav';
import Footer from './Footer';

function Layout() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className={isHome ? 'home-page' : ''}>
      <MainNav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
