import React from 'react'

interface Props {}

function Sos(props: Props) {
    const {} = props

    return (
        <div>
            <div class="container-fluid-sos">
                           
                           </div>
                           <div class="container-fluid-so">
                                             <div class="row">
                                               <section id="section-two">
                                                 <div class="container sectionTwo">
                                                     <form action="" class="text-center">
                                                         <div class="row">
                                                             <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 forms mb-4">
                                                               <label for="exampleFormControlInput1">Nom /Prenom</label>
                                                               <input type="" class="form-control" id="exampleFormControlInput1" placeholder="name/last Name">
                                                             </div>
                                                             <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 forms mb-4">
                                                                 <label for="exampleFormControlSelect1">groupe sanguin</label>
                                                                 <select class="form-control" id="exampleFormControlSelect1">
                                                                   <option>O-</option>
                                                                   <option>O+ </option>
                                                                   <option>A-</option>
                                                                   <option>A+</option>
                                                                   <option>B-</option>
                                                                   <option>B+ </option>
                                                                   <option>AB-</option>
                                                                   <option>AB+</option>
                                                                 </select>
                                                               </div>
                                                          
                                                               <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 forms mb-4">
                                                                 <label for="exampleFormControlInput1">Contact</label>
                                                                 <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Contact">
                                                               </div>
                                                               <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 forms mb-4">
                                                                 <label for="exampleFormControlInput1">Residence</label>
                                                                 <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Residence">
                                                               </div>
                                                               <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 forms mb-4">
                                                                 <div class="input-group">
                                                                   <span class="input-group-text form-control">raison de votre Demande</span>
                                                                   <textarea class="form-control" aria-label="With textarea"></textarea>
                                                                 </div>
                                                               </div>
                                                               <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 forms mb-4">
                                                                  <button type="button" class="btn btn-lg" style="background-color: #860301;color:white;">valider</button>
                                                                </div> 
                                                           </div>
                                                         </form>
                                                     </div>
                                                   </section>
                           </div>
        </div>
    )
}

export default Sos
