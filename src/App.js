import './App.css';
import Navbar from 'components/Navbar/Navbar';
import Header from 'components/Header/Header';

function App() {
  return (
    <>
      <Navbar />
      <div className="page__content">
        <Header title="Scarletty" />
      </div>
    </>
  );
}

export default App;
