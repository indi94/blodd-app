import React from 'react'

interface Props {}

function Navbar() {

    return (
        <div>
         <div class="container-fluid">
    <nav class=" navbar navbar-expand-lg  fixed-top ">
      <a class="navbar-brand text" href="#"><strong class="navbar-text">Blood</strong></a>
      <button class="navbar-toggler navbar-toggler-button" type="button" data-toggle="collapse" data-target="#ngana" 
      aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="ngana">
        <div class="nav navbar-nav mx-auto">
          <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="index.html" style="color: white; font-size: 23px;">Accueil</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="sos.html" style="color: white; font-size: 23px;">Demande/sos</a>
              </li>
             
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="conseil.html" style="color: white; font-size: 23px;">conseil</a>
              </li>
                  
                  <li class="nav-item">
                    <i class="far fa-bell"data-toggle="modal" data-target="#modal" style="color:white;font-size: 50px;"></i>
                  </li>
                  
                  
                  <div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title">Titre</h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">x</span></button>
                        </div>
                        <div class="modal-body">
                          <p>Texte du modal + choix et actions...</p>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-dismiss="modal">SOS</button>
                          <button type="button" class="btn btn-primary">RDV</button>
                        </div>
                      </div>
                    </div>
                  </div>
               
          
               
                </ul>
        </div>
      </div>
  </nav>
  </div>
        </div>
    )
}

export default Navbar

