import React, { useEffect, useState } from 'react';
import api from './Services/api';
import './App.css'


import Card from './Components/Card/Card';


import logo from './Assets/logo-chaordic.png';
import twitter from './Assets/icon-twitter.png';
import facebook from './Assets/icon-facebook.png';



function App() {

  const [Ranked, SetRanked] = useState([]);
  const [Hits, SetHits] = useState({});
  const [url, setUrl] = useState('');

  useEffect(() => {
    async function LoadRanked(){
      const response = await api.get('/');
      SetRanked(response.data);
    }
  
    async function LoadHits(){
      const response = await api.get('/hits');
      SetHits(response.data);
    }
    LoadRanked();
    LoadHits();
  }, [url]);


  async function SubmitUrl(event){
    event.preventDefault();
    const object = await api.post('/', {
        link: url
    })
    setUrl(object.data.ShortLink);  
  }

  async function handleClick(object){
    await api.post('/hits', {
      link: object.Link
    })
    setUrl(object.Link);
  }

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
                <form className="submit-link" onSubmit={SubmitUrl} autoComplete="off">
                  <input 
                    id="url-input"
                    url={url}
                    placeholder="Cole o seu link aqui" 
                    value={url}
                    onChange={event => setUrl(event.target.value)}
                    required>
                  </input>
                  <button id="submit-button"><h3 className="article-Roboto">ENCURTAR</h3></button>
                </form> 
              </article>
            </section>
          </header>

          <main className="container-centered ranked">
            <div className="container-ranked">
              <h1 className="title-Slab font-red">TOP 5</h1>
              <main className="ranked-list">
                {
                  Ranked.map(obj => (
                    <Card onClick={event => handleClick(obj)} key={obj._id} object={obj}></Card>
                  ))
                }
              </main>
            </div>
          </main>         

          <footer className="container-centered container-hits">
            <main className="main-hits">
              <div id="title-hits" ><h1 className="title-Slab font-red">HITS</h1></div>
              <span id ="number-hits" className="article-Roboto font-red">{Hits.total}</span>
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
