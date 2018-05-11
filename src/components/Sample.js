import React from 'react';
import Logo from '../images/Logo.svg';



const Sample = () => {
    return(
        <div className="intro">
            <img src={Logo} className="logo" alt=""/>
            <h2>The Perfect Starter React Boilerplate for Newbies (with Webpack 4)</h2>
            <p>With Hot Module Reload, Babel-loader, Sass-loader, Autoprefixer, Image Bundling ...</p>
        </div>
    )
}


export default Sample;