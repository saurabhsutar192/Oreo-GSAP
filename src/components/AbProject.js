import React, { useEffect } from "react";
import "../css/abProject.css";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

function AbProject() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".ab",
        start: "top 85%",
        end: "90% bottom",
        // markers: true,
        scrub: true,
      },
    });

    let elements = gsap.utils.toArray(".abTitle span");

    for (let i = 0; i < elements.length; i++) {
      tl.from(
        elements[i],
        {
          xPercent: 5 + i * 7,
        },
        "<"
      );
    }
  }, []);
  return (
    <section className="abContainer">
      <div className="ab">
        <section className="left">
          <p>© 07.06.2021</p>
        </section>
        <section className="right">
          <h5>About Project</h5>
          <div className="abTitle">
            <span>EXPLORING A</span>
            <span> DISPLACEMENT</span>
            <span> MAP TO CREATE</span>
            <span> A OREO COOKIE </span>
            <span>TEXTURE WITH</span>
            <span>OCTANE.</span>
          </div>
          <p className="abDesc">
            BELOW IS AN EXAMPLE OF AN IMAGE SEQEUNCE CREATED USING AFTER EFFECTS
            AND BODYMOVIN TO GENERATE A JSON FILE.
          </p>
        </section>
      </div>
    </section>
  );
}

export default AbProject;
