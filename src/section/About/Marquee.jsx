import React from "react";

export default function MarqueeSection() {
  return (
  <section className="marquee-section pt-0">
    <div className="marquee">
      <div className="marquee-group">
        <div className="text" data-text="BOOKING">INTERIOR DESIGN</div>
        <div className="text" data-text="TOUR">ARCHITECTURE.</div>
        <div className="text" data-text="ONLINE">DESIGN.</div>
        <div className="text" data-text="PRE- BOOKING">Rooms & Suites</div>
      </div>
      <div className="marquee-group">
        <div className="text" data-text="BOOKING">INTERIOR DESIGN</div>
        <div className="text" data-text="TOUR">ARCHITECTURE.</div>
        <div className="text" data-text="ONLINE">DESIGN.</div>
        <div className="text" data-text="PRE- BOOKING">Rooms & Suites</div>
      </div>
    </div>
  </section>
  );
}