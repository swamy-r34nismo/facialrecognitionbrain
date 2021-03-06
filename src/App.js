import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
const Clarifai = require('clarifai');


const app = new Clarifai.App({
  apikey : '9924b6f6b6814a1f953980bcdd8cd836'
});

const particlesOptions  = 
  {
    particles: {
      number:{
        value:30,
        density:{
          enable: true,
          value_area: 800
        }
      }
    }
  }


class  App extends React.Component {

  constructor(){
    super();
    this.state = {
      input:''
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onSubmit = () => {
    console.log('click');
    app.models.predict("a403429f2ddf4b49b307e318f00e528b", "https://samples.clarifai.com/face-det.jpg").then(
    function(response) {
      // do something with response
    },
    function(err) {
      // there was an error
    }
  );
  }
  
  render() {
    return (
      <div className="App">
        <Particles className='particles'
                params={particlesOptions}
              />
       < Navigation/>
       < Logo/>
       <Rank />
       < ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
      {/*
      < FacialRecognition/> */}
      </div>
    );
  }


}

export default App;
