import React, { lazy } from "react";
import { Link } from "react-router-dom";  
import label from './label/hero-bg.jpg';
import ts1 from '../components/ts1.png';
import ts2 from '../components/task/ts2.png';
import ts3 from '../components/task/ts3.png';
import './web.css';  
import  image  from "../components/task/image.jpg";
import task from '../components/task/client.png';
import t1 from '../components/guards/t1.jpg';
import t2 from'../components/guards/t2.jpg';
import t3 from'../components/guards/t3.jpg';


export default function Tag1() {
  return (
    <div className="container">  
        <div className="style">
        <ul>
          <li><a href="About">Location</a>
          <Link to="/loc" src={label}  alt="icon1-jpg"> </Link></li>
          <li><a href="#">cell: 9749472657</a></li>
          <li><a href="#">visiter@mail.com</a></li>
        </ul>
        </div>
        <div className="About">
          <h1>Guarder</h1> 
          <div className="clas">
          <h2>YOUR SAFTEY</h2>
          <h3>OUR RESPONSIBILITY</h3>
          <p>Your safety is our responsibility and we prioritize it above. with a commitment to excellence,we ensure reliable measures to protect you at every step.</p>
          <button>Read more</button>
          <button1>Get a Quote</button1>
          </div>
          <ul>
          <li><a href="#home">HOME</a></li>
          <li><a href="#">ABOUT</a></li>
          <li><a href="#">SERVICE</a></li>
          <li><a href="#">GUARDS</a></li>
          <li><a href="#">CONTACT</a></li>
          </ul>
          </div>
          <div class="para">
          <h1>WHO ARE WE? </h1>
          <p1>This individual dressed in formal attire. seems to be on duty.ensuring readiness and situational awareness. the background reveals a vehicle suggesting an outdoor or transportation related setting.the scene rellects the importance of maintaining seamless communicatin, likely in high-stakes or orgnized environments walkie-talkies are essential tools for real-time updates.</p1>
           <img src={image}alt="image.jpg" />
           </div>
           <div className="About1">
            <h4>OUR SERVICES</h4>
            <div className="take">
            <img src={ts1} alt="ts1.png"></img>
            <a>home secrity</a>
            <p2>Home security refers to measures taken to protect a home from burglary, vandalism, and other threats. It includes systems such as alarm systems, surveillance cameras, motion detectors, and secure locks. Effective home security also involves proper lighting, neighborhood watch programs, and ensuring doors and windows are properly secured.</p2 >
            <div className="take2">
            <img src={ts2} alt="ts2.png"></img>
            <a1>office secrity</a1>
            <p3>Office security involves measures to protect employees, assets, and information from theft, unauthorized access, or damage. Key strategies include access control systems, surveillance cameras, cybersecurity protocols, secure filing systems, and regular staff training. A secure office environment promotes productivity, ensures confidentiality, and reduces risks of physical or digital threats.
</p3>
          <div className="take3">
            <img src={ts3} alt="ts3.png"></img>
            <a2>body guard</a2>
            <p4>A bodyguard is a trained professional responsible for protecting individuals from potential threats, including physical harm or harassment. They ensure safety through strategic planning, surveillance, and quick response to emergencies.</p4>
          </div>
            </div>
           </div>
          </div>
          <div className="profile">
            <h1>WHAT IS SAYS OUR CLIENT</h1>
          </div>
          <div className="photo">
            <img src={task} alt="client.png"></img>
            <h1>minim venlam</h1>
            <p5>A bodyguard is a highly trained security professional responsible for protecting individuals from physical harm, threats, or harassment. They ensure the safety of clients by assessing potential risks, implementing preventive measures, and offering discreet, reliable protection in various environments.</p5>
          </div>
          <div className="get">
            <h1>GET IT TOUCH</h1>
            <ul>
            <li><input type="text" name="name" placeholder="enter your name"></input></li>
            <li><input type="mail" name="mail" placeholder="enter your mail"></input></li>
            <li><input type="text" name="phone" placeholder="phone number"></input></li>
            <li><input type="text" name="message" placeholder="message"></input></li>
            </ul>
            <button type="submit" name="button" className="send">Send</button>
          </div>
          <div className="guards">
            <h1>OUR GUARDS</h1>
            <p>This will give you a clean, modern green button that changes color when hovered over. You can adjust the color, padding, and other styles to fit your design needs.
             Let me know if you need further adjustments</p>
            <div className="guards1">
            <img src={t1}alt="t1.jpg" />
            {/* <h1>Martin Anderson</h1>
            <p>Supervisor</p> */}
            </div>
            <div className="guards2">
              <img src={t2}alt="t2.jpg"></img>
            </div>
            <div className="guards3">
              <img src={t3}alt="t3.jpg"></img>
            </div>
            <button type="sumbit" name="button" className="view">view All</button>
          </div>
          <div className="details">
            <h1>Guarder</h1>
            <p>dolor sit amet, consectetur magna aliqua. Ut enim ad minim veniam, quisdotempor incididunt r</p>
            <h2>Useful link</h2>
            <p1>dolor sit amet, consectetur
                 magna aliqua. Ut enim ad
                  minim veniam,
                   quisdotempor incididunt r</p1>
<h3>Contact us</h3>
<ul>
  <li>location:coimbatore</li>
  <li>call: 87782444755</li>
  <li>mail@gmail.com</li>
</ul>
<h4>Newsletter</h4>
<input type="text" name="name" placeholder="enter your email"></input>
<button type="text" name="subsribe">subsribe</button>

          </div>
          </div>
    

  );
}
