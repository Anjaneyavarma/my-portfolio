import React from 'react';
import logo3 from './images/logo3.png'
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import cover1 from './images/code1.svg'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import About from './About';
import Footer from './footer';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));


const App = () => {

  const classes = useStyles();

  return (
    <div className="App" >

          <header className="app_header" id='home'>
            <Avatar
              className={classes.large}
              alt="Anjaneya varma" 
              src={logo3}
            />
            <nav>
              <ul className='navlist'>
                <li><a href='#home' className='navlink'><span>Home</span></a></li>
                <li><a href='https://github.com/Anjaneyavarma' target='_blank' className='navlink'><span>Projects</span></a></li>
                <li><a href='#about' className='navlink'><span>About me</span></a></li>
              </ul>
            </nav>
          </header>
          <section className='intro-section'>
            <div className='intro'>
              <div className='introduction'>
                <h1>Hello World!</h1>
                <h1 class='intro-h1'><span></span></h1>
              </div>

              <div className='bta'>                          
                <button className='btaselect'><a style={{textDecoration:'none'}}href='https://drive.google.com/file/d/1o8_fB8WRe_EjldiRE78SFZ1UqZHTagEa/view?usp=sharing' target="_blank">Resume</a></button>
                <button className='message'><a style={{textDecoration:'none'}} href='mailto:anjivarma.penmatsa@gmail.com' target="_blank">Contact Me</a></button>
              </div>
               

            </div>
          </section>
          <div className='scrolldown'>
            <a href='#about' className='scrollsmooth'><ArrowDownwardIcon fontSize='large'/></a>
          </div>
          <section class='about'>
            <div>
              <About/>
              <div class='footer'>
                <Footer/>
              </div>
            </div>
          </section>
    </div>
  );
}

export default App;