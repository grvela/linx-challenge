import React from 'react';
import './App.css'


import Card from './Components/Card/Card';
import Input from './Components/Input/Input';

import logo from './Assets/logo-chaordic.png';
import twitter from './Assets/icon-twitter.png';
import facebook from './Assets/icon-facebook.png';


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
                <Input></Input>
              </article>
            </section>
          </header>

          <main className="container-centered ranked">
            <div className="container-ranked">
              <h1 className="title-Slab font-red">TOP 5</h1>
              <main className="ranked-list">
                
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>

              </main>
            </div>
          </main>         

          <footer className="container-centered container-hits">
            <main className="main-hits">
              <div id="title-hits" ><h1 className="title-Slab font-red">HITS</h1></div>
              <span id ="number-hits" className="article-Roboto font-red">357.564.738</span>
              <p className="article-Roboto">Clique em links.</p>
            </main>
          </footer>

        </main>


        <footer className="container-footer">
            <div id="text-logo" className="article-Roboto font-red">chr.dc</div>
            <div id="social-medias">
              <img src={twitter} alt="twitter-icon"/>
              <img src={facebook} alt="twitter-icon"/>
            </div>
        </footer>  






      </div>
    </div>
    
  );
}

export default App;
