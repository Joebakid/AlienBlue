import React, { useEffect, useRef, useState } from "react";
import { gsap, Power3 } from "gsap";

export default function Header() {
  const titleRef = useRef(null);
  const subHeadingRef = useRef(null);
  const btnRef = useRef(null);
  const imgRef = useRef(null);
  const copyBtnRef = useRef(null);
  const [copied, setCopied] = useState(false);

  const contractAddress = "0x52E0D3c27CC9e3607C1Ca7914b9049bE3d5e9C41";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    });
  };

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: "-30%" },
      { opacity: 1, y: "0%", duration: 2, ease: Power3.easeOut }
    )
      .fromTo(
        subHeadingRef.current,
        { opacity: 0, y: "30%" },
        {
          opacity: 1,
          y: "0%",
          duration: 2,
          ease: Power3.easeOut,
        },
        "<25%"
      )
      .fromTo(
        btnRef.current,
        { opacity: 0, y: "30%" },
        {
          opacity: 1,
          y: "0%",
          duration: 1,
          ease: Power3.easeOut,
        },
        "<25%"
      )
      .fromTo(
        imgRef.current,
        { opacity: 0, x: "30%" },
        {
          opacity: 1,
          x: "0%",
          duration: 1.5,
          ease: Power3.easeOut,
        },
        "<25%"
      )
      .fromTo(
        copyBtnRef.current,
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: Power3.easeOut,
        },
        "<25%"
      );
  }, []);

  return (
    <section>
      <div className="container header">
        <div className="grid-header" id="header">
          <div className="flex-header">
            <h1 className="title-lg" ref={titleRef}>
              The Token from Outer Space
            </h1>
            <p className="text-lg" ref={subHeadingRef}>
              Meet Blu a degenerate alien in search of new frens!
            </p>
            <a
              className="btn"
              target="_blank"
              href="https://app.uniswap.org/swap?chain=base&inputCurrency=NATIVE&outputCurrency=0x52e0d3c27cc9e3607c1ca7914b9049be3d5e9c41"
              ref={btnRef}
              rel="noreferrer"
            >
              Join the Galactic Mission
            </a>
            <div className="copy-contract">
              <button
                className="btn-copy"
                ref={copyBtnRef}
                onClick={copyToClipboard}
              >
                Copy Contract Address
              </button>
              {copied && <span className="copied-msg">Copied!</span>}
            </div>
          </div>

          <div>
            <img
              className="header-img flip-horizontal width"
              src="img/welcome-img.png"
              alt="welcome img"
              ref={imgRef}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
