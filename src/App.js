import { CTA, Navbar, Brand } from './components'
import { Blog, Features, Footer, Header, WhatGPT3, Possibility } from './containers'
import './assets/styles/_styles.scss';

function App() {
  return (
    <div className="App">
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
