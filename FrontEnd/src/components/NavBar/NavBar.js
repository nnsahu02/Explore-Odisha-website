import React from 'react'

function NavBar() {

    return (
        <div>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            <style dangerouslySetInnerHTML={{ __html: "\nbody {font-family: Arial, Helvetica, sans-serif;}\n\n.navbar {\n  width: 100%;\n  background-color: #555;\n  overflow: auto;\n}\n\n.navbar a {\n  float: left;\n  padding: 12px;\n  color: white;\n  text-decoration: none;\n  font-size: 17px;\n}\n\n.navbar a:hover {\n  background-color: #000;\n}\n\n.active {\n  background-color: #04AA6D;\n}\n\n@media screen and (max-width: 500px) {\n  .navbar a {\n    float: none;\n    display: block;\n  }\n}\n" }} />
            <div className="navbar">
                <a className="active" href="#"><i className="fa fa-fw fa-home" /> Home</a>
                <a href="#"><i className="fa fa-fw fa-search" /> Search</a>
                <a href="#"><i className="fa fa-fw fa-envelope" /> Contact</a>
                <a href="#"><i className="fa fa-fw fa-user" /> Login</a>
            </div>
        </div>
    )
}



export default NavBar