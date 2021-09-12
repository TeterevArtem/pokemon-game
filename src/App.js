import './App.css';
import Header from '../src/component/header';
import Footer from '../src/component/footer';
import Layout from '../src/component/layout';
import Bg1 from './assets/bg1.jpg';
import Bg2 from './assets/bg3.jpg';

const color = '#e2e2e2';

const App = () => {
  return (
    <>
      <Header title="This is title" descr="This is Description!"/>
      <Layout title="This is layout 1" descr="This is Description! 1" urlBg={Bg1} colorBg={color}/>
      <Layout title="This is layout 2" descr="This is Description! 2" colorBg="red"/>
      <Layout title="this is layout 3" descr="This is Description! 3" urlBg={Bg2} colorBg={color}/>
      <Footer />
    </>
  );
}

export default App;
