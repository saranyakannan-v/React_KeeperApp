import React from 'react';

function Footer(){

    const currentYear = new Date().getFullYear();
    return <footer>
        <p>
        Copy Right &#x24B8; {currentYear}
        </p>
       </footer>
}

export default Footer;