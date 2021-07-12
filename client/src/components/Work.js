import React from "react";
const Work = () => {
  return (
    <div className="work-page" id="work">
      <h1 className="work-head">Work History</h1>
      <div className="work-content">
        <p>
          My goal is to become a full-time web developer Lorem, ipsum dolor sit
          amet consectetur adipisicing elit. Asperiores quam exercitationem qui
          molestias cumque, voluptas quidem nobis a vitae ipsum, adipisci quae
          id sequi vel. Eligendi accusantium repellendus quos, repudiandae
          quaerat veniam! Sint, quibusdam odit? Rerum recusandae, sapiente et
          dignissimos perspiciatis libero vitae vel sint! Repudiandae architecto
          illum ipsam sed!
        </p>
        <div className="work-hist">
          <h2>Work experience prior to web development</h2>
          <section>
            <h3>Vermont Teddy Bear</h3>
            <h5>Shelburne, VT | Dec 2020 - Feb 2021</h5>
            <p>
              <i>Renowned producer and seller of handcrafted teddy bears.</i>
            </p>
            <p>
              Seasonal Warehouse Worker Hand processed large orders as well as
              returns; worked at the end of the production line packing boxes
              into trucks.
            </p>
          </section>
          <section>
            <h3>Spencer Group Inc</h3>
            <h5>Burlington, VT | Sep 2019 – Mar 2020</h5>
            <p>
              <i>
                A Burlington based company that assists organizations, primarily
                schools, with fundraising and enhancing donor engagement.
              </i>
            </p>
            <p>
              Hand processed large orders as well as returns; worked at the end
              of the production line packing boxes into trucks.
            </p>
          </section>
          <section>
            <h3>Service Industry Experience</h3>
            <p>
              Quarry Hill Club | South Burlington, VT | Bartender, Cook, Server,
              Landscaper | Summer 2018 & Summer/Fall 2020
            </p>
            <p>
              The Copper Grouse | Manchester, VT | Busser and Room Service
              Server | May 2016 – Aug 2016
            </p>
            <p>
              Barrows House Inn & Restaurant | Dorset, VT | Busser | May 2015 –
              Aug 2015
            </p>
          </section>
        </div>
        <div className="resume-download">
          <a href="/assets/IanFrenchResume.pdf" download>
            <img className="resume-img" src="../images/resume-img.png"></img>
          </a>
          <p>Download My Resume Here</p>
        </div>
      </div>
    </div>
  );
};

export default Work;
