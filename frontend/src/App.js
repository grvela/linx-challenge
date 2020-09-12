import React from 'react';
import './App.css'


import logo from './assets/logo-chaordic.png';
import twitter from './assets/icon-twitter.png';
import facebook from './assets/icon-facebook.png';


function App() {
  return (
    <div className="App">
      <div className="container-fluid">

        <header className="menubar">
          <img id="logo-menubar" alt="logo-chaordic" src={logo}/>
        </header>

        <main>

          <header className="container-centered banner">            
            <section className="container-centered message-banner">
              <article id="message">
                <h1 className="title-Slab">Encurte seus links.</h1>
                <p className="article-Roboto">
                  Links são longos. Encurte os links que você deseja compartilhar, <br/>
                  e acompanhe enquanto viaja através da internet
                </p>
                <form className="submit-link">
                  <input id="url-input" placeholder="Cole o seu link aqui"></input>
                  <button id="submit-button"><h3 className="article-Roboto">ENCURTAR</h3></button>
                </form>
              </article>
            </section>
          </header>

          <main className="container-centered ranked">
            <div className="top5-ranked">
              <h1 className="title-Slab font-red">TOP 5</h1>
              <main className="table-list">
                <div className="item">
                  <div id="url" className="title-Slab font-red" >https://chrome.by.com</div>
                  <div id="likes" className="title-Slab">7.999</div>
                </div>
              </main>
            </div>
          </main>         

          <footer className="container-centered hits-div">
            <div className="container-text">
              <div><h1 className="title-Slab font-red">HITS</h1> </div>
              <span id ="main-number-back" className="article-Roboto font-red">357.564.738</span>
              <p className="article-Roboto">Clique em links.</p>
            </div>
          </footer>

        </main>


        <footer className="footh">
            <div id="text-logo" className="article-Roboto font-red">chr.dc</div>
            <div id="redes-sociais">
              <img src={twitter}/>
              <img src={facebook}/>
            </div>
        </footer>  






      </div>
    </div>
    
  );
}

export default App;
