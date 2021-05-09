import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import './footer.css'

const styles = {
  largeIcon: {
    width: 60,
    height: 60,
  },

};

const Footer =()=>{
    return(
        <div>
            <footer class='footer'>
            <div class="footer-container">
              <div class="social-container">
                <a href='https://www.facebook.com/penmatsa.varma.98/' target='_blank'><FacebookIcon fontSize="large"/></a>
                <a href='https://www.linkedin.com/in/anjaneya-varma-6812a311a/' target='_blank'><LinkedInIcon fontSize="large"/></a>
                <a href='https://twitter.com/penmatsa_varma' target='_blank'><TwitterIcon fontSize="large"/></a>
                <a href='https://github.com/Anjaneyavarma' target='_blank'><GitHubIcon fontSize="large"/></a>
              </div>
            </div>
            <div class='para'>
              <p>Developed in love ❤️ with React</p>
            </div>
            
          </footer>
        </div>
    );
}

export default Footer;