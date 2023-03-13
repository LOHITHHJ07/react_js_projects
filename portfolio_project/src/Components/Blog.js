import React from "react";
import bad from "../images/bad.png";
import game from "../images/game.jpeg";
import ev from "../images/ev.jpeg";
import "./Blog.css";

function Blog() {
  return (
    <div id="blog">
      <h1 className="blogheading">My blogs</h1>
      <div className="bloglist">
        <div>
          <h2>Games That Help Me Get Through The Pandemic</h2>
          <img src={game} alt="game" height="200" />
          <p>
            Since the outbreak of the pandemic, there has been a significant
            effect on peoples’ mental health. The main reason for this is the
            increased levels of stress and anxiety that people are experiencing.
            This is due to the uncertain nature of the situation, as well as the
            fear of contracting the virus. Animal Crossing: This game is all
            about building my own little world and taking care of it. It’s a
            relaxing and fun game that can help take my mind off of the stress
            of the outside world. In addition, the social interaction in this
            game can be really beneficial. I got to create my houses. I was also
            able to celebrate Christmas and New Years’ eve with my online
            friends.
          </p>
        </div>
        <div>
          <h2>Addicted to Bad News</h2>
          <img src={bad} alt="badnews" height="200" />
          <p>
            It has become a part of my daily routine. I turn on my little
            Bluetooth speaker and listen to one of the major news channels while
            I tidy the kitchen after dinner. As I scrub a grease-covered pan,
            something along the lines of "another mass shooting" plays over the
            speaker. Or something about how there have been more lives lost to
            some natural disaster somewhere. Or whatever else - there doesn't
            seem to be a shortage of bad news lately.
          </p>
        </div>
        <div>
          <h2>Electric Vehicles Are The Future.</h2>
          <img src={ev} alt="electric vechiles" height="200" />
          <p>
            The shift to electrified mobility started nearly two decades ago
            with the arrival of the first hybrid vehicles. Although most car
            buyers were not initially comfortable with the idea of a
            gas-electric powertrain, hybrids continued to gain popularity.
            Eventually, they served as a bridge to more sophisticated and
            sustainable offerings, such as plug-in hybrid electric vehicles
            (PHEVs) and battery electric vehicles (BEVs), with ranges currently
            surpassing 300 miles on a single charge.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Blog;
