import React from "react";

function About() {
  return (
    <div className="about-page" id="about">
      <div>
        <div >
          {/* main header */}
          <h1 className="about-head">Who Am I?</h1>
        </div>
        {/* content below header */}
        <div className="about-content">
          <p>
            I am a 24 year old aspiring software developer living in Burlington, Vermont
            starting my career in the coding industry. I grew up in a small town in southern Vermont, and spent a few years in Florida. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Iusto natus voluptatibus a error
            tempore saepe eius distinctio molestiae quis perspiciatis reiciendis
            ullam alias maxime ut, molestias officiis hic possimus ipsam
            corporis cumque delectus pariatur cupiditate expedita ipsum?
            Distinctio, labore eveniet totam dignissimos maiores nobis, vero,
            quibusdam numquam sapiente rerum delectus!
          </p>
        </div>
      </div>
      {/* hobbies */}
      <div className="about-interests">
        <h3 className="interests-head">When I'm not coding...</h3>
        <ul className="interests-list">
          <li>Guitar and Piano</li>
          <li>Digital Art</li>
          <li>Video Games</li>
          <li>Skiing/hiking</li>
          <li>Chilling with my cats</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
