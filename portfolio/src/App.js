import React from 'react';
import './App.css';


function App(){


  return(
<body>
    <header>
        <div class="container">
            <nav>
                <div class="logo">MrStudio</div>
                <div class="dropdown">
                <button class="dropbtn"><i class="fa-solid fa-bars"></i></button>
                <ul class="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="https://wa.me/2349031179578?text=">Contact</a></li>
                </ul>
                </div>
                <button class="contact-btn"><a href="#">Dowload CV</a></button>
            </nav>
        </div>
    </header>

    <section class="hero">
        <div class="container">
         <div class="thumbs"><img src="chis.png" alt="man holding pc"/></div>
           <div class="star"><img src="star.png" alt="man holding pc"/></div>
            <div class="hero-content">
                <div class="intro">
                    <h1>Hy! I Am Ajoku Emmanuel</h1>
                    <p>Product designer and digital creative director working in design field for 7 years, specialized in UI/UX design.</p>
                    <a href="#" class="hire-btn">Hire Me</a>
                </div>
                <div class="hero-image">
                
                    <div class="award-badge">
                        <img src="man.png" alt="man holding pc"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
     <section class="brands">
        <div class="contents">
        <h5>Works for all this Brands and Clients</h5>
        
    <div class="shapes">
       <div class="circle"><h2>&#128513;</h2></div>
         <div class="circle2">
            <img src="linkend.png" alt="man holding pc"/>
         </div>
       <div class="circle3">
           <img src="fiverr.png" alt="man holding pc"/>
        </div>
        <div class="circle4">
            <img src="upwork-logo.png" alt="man holding pc"/>
        </div>
      </div>
    </div>
     </section>
  <section class="services">
    <div class="clearfix">
        <div class="box">
           <div class="tables">
            <div class="cards">
                <h4><img src="care.png" alt="man holding pc"/>Developer</h4>
                <p1>I offer a full range of services to bring your online vision to life. </p1>
            </div>
            <div class="cards">
                <h4><img src="ui.png" alt="man holding pc"/>UI/UX</h4>
                <p>I can offer visually compelling, user-centered designs that enhance user experience.</p>
            </div>
            <div class="cards">
                <h4><img src="chis.png" alt="man holding pc"/>Designs</h4>
                <p>A Computer Engineer in View ready to work with a great vision and Understanding </p>
            </div>
           </div>
            
        </div>
        <div class="box">
            <div class="awesome">
            <h3>My Awesome </h3>
            <h4>Services</h4>
            <p>I thrive on crafting innovative and dynamic websites that blend creativity with functionality. With a strong foundation in both front-end and back-end technologies, I build seamless digital experiences that are not only visually captivating but also perform at their best. My goal is to turn complex concepts into intuitive user interfaces, ensuring that every project is both technically sound and user-friendly..</p>
            <a href="#" class="hire-btn">Hire Me</a>
        </div>
        </div>
    </div>
  </section>
  <section class="projects">
    <h4>RECENT PROJECTS</h4>

    <div class="images">
        <div> <img src="meta.jpg" alt="man holding pc"/></div>
        <div> <img src="stars.jpg" alt="man holding pc"/></div>
        <div> <img src="tree.jpg" alt="man holding pc"/></div>
    </div>

    <p>Are You Ready To Get Started ?</p>
    <div class="if">You Know About Me Now Lets </div>
    <div class="ifs"> talk about you </div>
    <div class="circle6"></div>
    <h5>I Give Discount to First Time Customers</h5>
  </section>

  <section class="tails">
      <h4>Contacts Me Through My Socials, Always ACTIVE!!! </h4>
      <div class="icons">
                        <ul>
                            <li><a href="https://www.facebook.com/emmex.aj?mibextid=ZbWKwL"><i class="fa-brands fa-facebook"></i></a></li>
                            <li><a href="https://x.com/emmanuel_ajoku?t=pqpHzAG0OcicjxuxlMw5cA&s=09"><i class="fa-brands fa-x-twitter"></i></a></li>
                            <li><a href="https;//t.me/@emmex_aj"><i class="fa-brands fa-linkedin"></i></a></li>
                            <li><a href="https://www.instagram.com/emmex_aj?igsh=MWg3ZGhzcnJhdXFjcg=="><i class="fa-brands fa-instagram"></i></a></li>
                        </ul>   
                    </div>
            <div class="circle8"></div> 
            <div class="circle9"></div>  
            <div class="circle10"></div>
            <div class="circle11"></div>    

          <div class="email"><a href="mailto:ajokuemmanuel24@gmail.com">ajokuemmanuel24@gmail.com</a></div>     
      <p>Copyright © personal-portfolio-Emmanuel All Right Reserved</p>
   
  </section>


</body>
  );
};
export default App;