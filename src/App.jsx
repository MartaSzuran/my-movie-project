import AppRoutes from './AppRoutes/AppRoutes';
import MainHeader from './components/MainHeader/MainHeader';
import TitleHeader from './components/TitleHeader/TitleHeader';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div>
      <MainHeader />
      <TitleHeader />
      <div className="mainContainer">
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
