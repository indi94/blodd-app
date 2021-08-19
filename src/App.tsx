import React from 'react';
import '../../style.css';
import navbar from '../navbar';
import banner from '../banner';
import inscription from '../inscription';
import sos from '../sos';
import conseil from '../conseil';
import footer from '../footer'


function App() {
  return (
    <div className="App">
      <navbar/>
      <banner/>
      <inscription/>
      <sos/>
      <conseil/>
      <footer/>
  
    </div>
  );
}

export default App;
