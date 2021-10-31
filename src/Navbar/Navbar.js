import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import { FiLogIn } from "react-icons/fi";

export default function App() {
  

  return (
    <nav class="navbar navbar-expand-lg bg-transperant navbar-light">
  <div class="container-fluid">
        <h2><Link class ="nav-link text-dark" to ="/home">Welcome</Link></h2>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        
        
        
       
      </ul>
      <form class="d-flex">
        
        <Link  to = "/stslogin"type="button" class="btn"><h1><FiLogIn/></h1></Link>
      </form>
    </div>
  </div>
</nav>
  );
}