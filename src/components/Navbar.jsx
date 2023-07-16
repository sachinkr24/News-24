import React from "react";
import { Link } from "react-router-dom";




  const linkStyle = {
    fontWeight: 'bold',
    color: 'red',
    textDecoration: 'none',
    fontFamily: 'Roboto'
    
  };

  const hoverStyle = {
    color: 'blue',
  };

export const Navbar =()=>{ 
    return <div>
        <nav className="navbar navbar-expand-lg  bg-white " style={{marginBottom:"-16px"}} >
  <div className="container-fluid"> 
    <Link className="navbar-brand " to="/" style={{ ...linkStyle, fontFamily: 'Roboto', fontSize: '25px' }}
      hoverStyle={hoverStyle} >News 24<br/><p  style={{fontSize:"7px",marginLeft:"13px",marginTop:"-6px"}}> EXPLORE THE WORLD <br/> <p style={{color:"red", marginLeft:"-2px",marginTop: "-8px"}}>________________________</p></p> </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">

        <Link
      className="nav-link active"
      aria-current="page"
      to="/"
      style={linkStyle}
      hoverStyle={hoverStyle}
    >
      Home
    </Link>

        </li>
        <li className="nav-item">
          <Link className="nav-link active " aria-current="page" to="/general" style={linkStyle}
      hoverStyle={hoverStyle}>General</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active " aria-current="page" to="/business" style={linkStyle}
      hoverStyle={hoverStyle}>Business</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active " aria-current="page" to="/entertainment" style={linkStyle}
      hoverStyle={hoverStyle}>Entertainment</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active " aria-current="page" to="/health" style={linkStyle}
      hoverStyle={hoverStyle}>Health</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active " aria-current="page" to="/science" style={linkStyle}
      hoverStyle={hoverStyle}>Science</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active=" aria-current="page" to="/sports" style={linkStyle}
      hoverStyle={hoverStyle}>Sports</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active " aria-current="page" to="/technology" style={linkStyle}
      hoverStyle={hoverStyle}>Technology</Link>
        </li>
       
       
        
      </ul>
     
    </div>
  </div>
</nav>
    </div>
}