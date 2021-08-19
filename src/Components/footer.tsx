import React from 'react'

interface Props {}

function Footer(props: Props) {
    const {} = props

    return (
        <div>
            <div class="container-fluid footer">
  <div class="container-fluid  text-white text-center">
    <div class="container">
      <div class="row pt-3 pb-3">
        <div class="col-12">
           <h5>Blood Donnation</h5>
          <p>copyright©2021</p>
              <div class="footer">
                <button type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModal" 
                data-whatever="@mdo" style="border: solid 1px white;">Nous contacter</button>
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
    
                    
                    <div class="modal-content text-left">
                      <div class="modal-header bg-white text-dark">
                        <h5 class="modal-title" id="exampleModalLabel">Nous contacter</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      
                      <div class="modal-body">
                        <div class="form">
                          <label for="recipient-name" class="col-form-label bg-white text-dark">Name</label>
                          <input type="text" class="form-control" id="recipient-name">
                        </div>
    
                          <div class="form-group">
                            <label for="recipient-name" class="col-form-label bg-white text-dark">Email</label>
                            <input type="text" class="form-control" id="recipient-name">
                          </div>
                          <div class="form-group">
                            <label for="message-text" class="col-form-label bg-white text-dark">Message</label>
                            <textarea class="form-control" id="message-text"></textarea>
                          </div>
                          <button type="button" class="btn btn-success btn-lg btn-block">Envoyer</button>
                        </div>
                      </div>
              </div>
                >
                </div>
              </div>
            </div>
          </div>
        </div>
  </div>
</div>
        </div>
    )
}

export default Footer
