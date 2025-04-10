import React from 'react';


function NavbarSite() {

    const nav_style = {
        backgroundColor: "#FF7F19",
        color: "#fff",
        padding: "10px",
        textAlign: "center",
        fontSize: "24px",
        fontWeight: "bold",

        height: "10vh",
    }

    return (
        <nav className="navbar" style={nav_style}>
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">✅ Two Du Listi TESTEEEEEEEEEE</span>
            </div>
        </nav>
    )
    

}

export default NavbarSite;