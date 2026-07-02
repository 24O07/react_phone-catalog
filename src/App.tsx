import { AppRoutes } from './AppRoutes';
import './styles/globals.scss';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

export const App = () => {
  return (
    <div className="app">
      <Header />

      <main className="main-content ">
        <AppRoutes />
      </main>

      <Footer />
    </div>
  );
};
