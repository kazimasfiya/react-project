import React from 'react'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';

import Home from './Home';

function Header() {

	
    return (
        
            <>
<header className="w3l-header">
	<div className="container">

	<nav className="navbar navbar-expand-lg navbar-light fill px-lg-0 py-0 px-sm-3 px-0">
			<Link className="navbar-brand" to="/">
				<span className="fa fa-newspaper-o"></span> NewsBlog</Link>
               
			
						

			
			<button className="navbar-toggler collapsed" type="button" data-toggle="collapse"
				data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
				aria-label="Toggle navigation">
				 <span className="navbar-toggler-icon"></span> 
				<span className="fa icon-expand fa-bars"></span>
				<span className="fa icon-close fa-times"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<nav className="mx-auto">
					<div className="search-bar">
						<form className="search">
							<input type="search" className="search__input" name="search" placeholder="Discover news, articles and more"
								 required />
							<span className="fa fa-search search__icon"></span>
						</form>
					</div>
				</nav>
				<ul className="navbar-nav">
					<li className="nav-item active">
						<Link className="nav-link" to="/">Home</Link>
					</li>
					<li className="nav-item dropdown @@pages__active">
						<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
							data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							More <span className="fa fa-angle-down"></span>
						</a>
						<div className="dropdown-menu" aria-labelledby="navbarDropdown">
							<a className="dropdown-item @@b__active" href="beauty.html">Beauty</a>
							<a className="dropdown-item @@fa__active" href="fashion.html">Fashion & Style</a>
						</div>
					</li>
					<li className="nav-item @@contact__active">
						<Link className="nav-link" to="/contact">Contact</Link>
					</li>
				</ul>
			</div>
		
			<div className="mobile-position">
				<nav className="navigation">
					<div className="theme-switch-wrapper">
						<label className="theme-switch" >
							<input type="checkbox" id="checkbox" />
							<div className="mode-container">
								<i className="gg-sun"></i>
								<i className="gg-moon"></i>
							</div>
						</label>
					</div>
				</nav>
			</div>
			</nav>
		</div>
	
	
</header>
            </>
        
    )
}

export default Header
