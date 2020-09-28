import React,{useEffect} from "react";
import {
  BrowserRouter as BRouter,
  Route,
  Switch,
  Redirect,
  Link
} from "react-router-dom";
//Style
import './Style/App.scss';
import './Style/home.scss';
//Components
import NotFoundPage from './components/NotFoundPage';
import FirstBar from "./components/FirstBar";
import Nav from './components/Nav';
import Footer from './components/Footer';
import Contact from './components/Contact'
import Skate from './components/Skate'
import Snow from './components/Snow'
import Surf from './components/Surf'
import ProductSkate from './components/product/screenProductSkate'
import ProductSnow from './components/product/screenProductSnow'
import ProductSurf from './components/product/screenProductSurf'
import Cart from './components/Cart';
//Video Homepage
const youtubeVideo = "https://www.youtube.com/embed/NdGC2Yyt_aQ"


const App=()=> {
  return (
    <BRouter>
      <FirstBar/>
      <Nav/>
        <Switch>
        <Route path="/cart/:id?"><Cart></Cart></Route>
        <Route path="/skate/:id"><ProductSkate></ProductSkate></Route>
        <Route path="/snow/:id"><ProductSnow></ProductSnow></Route>
        <Route path="/surf/:id"><ProductSurf></ProductSurf></Route>
        <Route path="/skate" component={Skate}/>
        <Route path="/snow" component={Snow}/>
        <Route path="/surf" component={Surf}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/" exact component={Home}/>
            <Route path="*" component={NotFoundPage} />
            <Route path="/404" component={NotFoundPage} />
            <Route path="*" component={NotFoundPage} />
            <Route path="/skate/404" component={NotFoundPage} />
            <Route path="/snow/404" component={NotFoundPage} />
            <Route path="/surf/404" component={NotFoundPage} />
            <Redirect to="/404" />
        </Switch>
      <Footer />
    </BRouter>
  );
}

const Home=()=> {

  useEffect(() => {
  window.scrollTo({
  top: 0,
  left: 0,
  behavior: 'smooth'
});
  }, []);

  return (
  <main>
  <section className='home'>
  <h1>Get on board <br/>with us</h1>
  </section>
  <section className='shopNow'>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim diam sit amet scelerisque commodo. 
  Pellentesque quis erat quis ex tincidunt viverra. 
   pellentesque eget nisl sit amet, volutpat varius quam. Nam volutpat scelerisque fermentum. Pellentesque suscipit diam ac</p>
   <button><Link to='/'>SHOP NOW</Link></button></section>
  <section className='options'>
  <h2>EXPLORE OUR BOARDS</h2>
  <article className='options-group'>
  
  <Link to='/skate'><div className='options-item skate'><div className='transp'><h3>SKATE</h3></div></div></Link>
   <Link to='/snow'><div className='options-item snow'><div className='transp'><h3>SNOW</h3></div></div></Link>
   <Link to='/surf'><div className='options-item surf'><div className='transp'><h3>SURF</h3></div></div></Link>
  </article>
  </section>
  <section className='videoSection'>
  <h2>SNOWBOARD, SKATEBOADR AND SURF IN 24 HOURS</h2>
  <iframe src={youtubeVideo} title='youtubeVideo' frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
  </section>
  </main>  
  )
}
export default App;