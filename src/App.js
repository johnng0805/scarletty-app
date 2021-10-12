import './App.css';
import Navbar from 'components/Navbar/Navbar';
import Header from 'components/Header/Header';
import CardContainer from 'components/Container/CardContainer';
import CardWrapper from 'components/Wrapper/CardWrapper';
import CardWrapperSquare from 'components/Wrapper/CardWrapperSquare';
import CardSquare from 'components/Card/CardSquare';

function App() {
  return (
    <>
      <Navbar />
      <div className="page__content">
        <Header title="Scarletty" />
        <CardContainer title="Fresh up your day">
          <CardWrapper img={'assets/images/header_2.jpg'} name="Pastel Red Tower" price="$5.99" desc="Silky smooth, non-imflammatory tower. Give your skin the touches it deserves." />
        </CardContainer>
        <CardContainer title="Colors to your voice">
          <CardWrapperSquare>
            <CardSquare img={'assets/images/header_2.jpg'} name="Rose Gold Lipstick" price="$3.99" />
            <CardSquare img={'assets/images/header_2.jpg'} name="Rose Gold Lipstick" price="$3.99" />
          </CardWrapperSquare>
        </CardContainer>
      </div>
    </>
  );
}

export default App;
