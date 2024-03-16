import React from "react";
import "./About.css";

function About() {
  return (
    <div className="aboutContainer">
      <div className="aboutImage">
        <img src="./src/About/About Assets/about.png" alt="" />
      </div>
      <div className="aboutDescription">
        <div className="aboutSection">
          <h2>About Wikipurrdia</h2>
          <div className="content">
            <p>
              Wikipurrdia is a comprehensive online encyclopedia dedicated to
              everything related to cats. Whether you're a seasoned cat owner or
              just a cat enthusiast, Wikipurrdia offers a wealth of information
              about our beloved feline companions.
            </p>
          </div>
        </div>

        <div className="aboutSection ">
          <h3>Our Mission</h3>
          <div className="content missionContainer">
            <p>
              Our mission at Wikipurrdia is to provide accurate, reliable, and
              up-to-date information about cats. We aim to educate cat owners
              and enthusiasts, promote responsible cat ownership, and celebrate
              the unique bond between humans and cats.
            </p>
            <div className="missionImg">
              <img src="./src/About/About Assets/ourMission.png" alt="" />
            </div>
          </div>
        </div>

        <div className="aboutSection">
          <h3>Who is Behind Wikipurrdia?</h3>
          <div className="content">
            <p>
              Wikipurrdia is created and maintained by a passionate team of cat
              lovers, writers, editors, and contributors from around the world.
              We are dedicated to ensuring that Wikipurrdia remains a valuable
              resource for cat enthusiasts everywhere.
            </p>
          </div>
        </div>

        <div className="aboutSection">
          <h3>What Do We Offer?</h3>
          <div className="content offerContainer">
            <p>
              Wikipurrdia offers a vast array of articles, guides, and resources
              covering a wide range of topics, including cat breeds, behavior,
              health, nutrition, grooming, and more. Whether you're looking for
              tips on caring for a new kitten, information about a specific cat
              breed, or advice on solving common cat behavior problems,
              Wikipurrdia has you covered.
            </p>
            <div className="offerImg">
              <img src="./src/About/About Assets/AboutOffer.png" alt="" />
            </div>
          </div>
        </div>

        <div className="aboutSection">
          <h3>How Can You Get Involved?</h3>
          <div className="content">
            <p>
              We welcome contributions from cat lovers like you! Whether you're
              interested in writing articles, editing existing content, adding
              photos, or sharing your own cat-related experiences, there are
              many ways to get involved with Wikipurrdia. Join our community and
              help us make Wikipurrdia the ultimate destination for cat lovers
              everywhere!
            </p>
          </div>
        </div>

        <div className="aboutSection">
          <h3>Connect With Us</h3>
          <div className="content">
            <p>
              Stay connected with Wikipurrdia by following us on social media
              and joining our online community. You can also subscribe to our
              newsletter to receive updates, tips, and exclusive content
              straight to your inbox.
            </p>
            <div className="aboutConnect">
              <i className="bi bi-facebook"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-twitter"></i>
              <i className="bi bi-youtube"></i>
            </div>
          </div>
        </div>

        <div className="aboutSection">
          <h3>Contact Us</h3>
          <div className="content">
            <p>
              If you have any questions, comments, or suggestions, please don't
              hesitate to <a href="/contact">contact us</a>. We value your
              feedback and are always eager to hear from our users.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
