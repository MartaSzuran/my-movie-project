import AppRoutes from './AppRoutes/AppRoutes';
import MainHeader from './components/MainHeader/MainHeader';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div>
      <MainHeader />
      <div className="mainContainer">
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
