import React from "react";
import Links from "./Links";
import "../App.css";

const Home = () => {
  const hidden = true;

  return (
    <section className="page">
      <div className="profile">
        <div className="container">
          <div className="profile-top">
            <div className="nonso">
              <img
                className="profile-image"
                src="./Nonso.jpg"
                alt="user"
                id="profile__img"
              ></img>

            <div className="twitter">
            <p id="twitter" style={{fontWeight:"bold"}}>Mazi__Nonso</p>
              <p id="slack">{hidden ? "" : "Nnanna"}</p>
            </div>
            </div>

            <div className="profile-top-icon">
                <img src="./icon.png" alt="icon"></img>
            </div>
          </div>
          <div className="profile-links">
            <Links to="https://twitter.com/Mazi__nonso">
              <button className="links-btn" >Twitter Link</button>
            </Links>
            <Links to="https://training.zuri.team/" id="btn__zuri">
              <button className="links-btn">Zuri Team</button>
            </Links>
            <Links to="http://books.zuri.team" id="books">
              <button className="links-btn">Zuri Books</button>
            </Links>
            <Links to="https://books.zuri.team/python" id="book__python">
              <button className="links-btn">Python Books</button>
            </Links>
            <Links to="https://background.zuri.team" id="pitch">
              <button className="links-btn">Background Check for Coders</button>
            </Links>
            <Links to="https://books.zuri.team/design-rules" id="book__design">
              <button className="links-btn">Design Books</button>
            </Links>
          </div>
          <div className="dev-icons">
            <img src="./slack.png" alt="slack" style={{width:'3%'}}></img>
            <img src="./github.png" alt="github"></img>
          </div>
          <footer className="profile-footer">
            <div >
            <img src="./zuri.internship_logo.png" alt="zuri"></img>
            <p>HNG Internship 9 Frontend Task</p>
            <img src="./I4g.png" alt="dunno"></img>
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default Home;
