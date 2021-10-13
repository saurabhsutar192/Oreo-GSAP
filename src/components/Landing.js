import "../css/landing.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Landing() {
  let landingImg = useRef();
  gsap.registerPlugin(CSSRulePlugin);
  let brown = CSSRulePlugin.getRule(".landingContainer::after");

  let landingAnim = gsap.timeline();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    window.scrollTo(0, 0);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".landingContainer",
        start: "top top",
        end: "bottom top",
        // markers: true,
        scrub: true,
      },
    });
    const depth = landingImg.current.dataset.depth;
    const movement = landingImg.current.offsetHeight / depth;
    tl.to(landingImg.current, { y: movement });

    landingAnim
      .from(".titleContainer span", {
        opacity: 0,
        y: 100,
        stagger: 0.05,
      })
      .to(brown, 1.5, {
        cssRule: {
          scaleY: 0,
        },
        ease: "circ.in",
      })
      .fromTo(
        ".imgContainer",
        1.5,
        {
          width: "18%",
          height: "50%",
        },
        {
          width: "100%",
          height: "100%",
          ease: "expo.inOut",
        }
      )
      .from(
        ".fixedBar",
        1,
        {
          opacity: 0,
        },
        "<"
      )
      .delay(0.5);
  }, []);

  return (
    <section className="landingContainer">
      <div className="fixedBar">
        <span>
          Scroll to explore
          <br /> Oreo renders.
        </span>
        <span>Exploration©</span>
      </div>
      <div className="imgContainer">
        <img
          ref={landingImg}
          src="https://uploads-ssl.webflow.com/6092b421e0419d1699b058a6/60ae09867154ce258eb8cff1_Cookie_Render13-p-3200.jpeg"
          alt="x"
          data-depth="2.5"
        />
      </div>
      <div className="titleContainer">
        <span>№</span>
        <span>0</span>
        <span>0</span>
        <span>1</span>
      </div>
    </section>
  );
}

export default Landing;
