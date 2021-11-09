import React from "react";
import "./Footer.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

function Footer(){

    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <p> 
                Copyright © {currentYear}
                &nbsp;
                <FacebookIcon />
                &nbsp;
                <TwitterIcon />
                &nbsp;
                <InstagramIcon />
                &nbsp;
                <LinkedInIcon />
            </p>
        </footer>
        );
}

export default Footer;