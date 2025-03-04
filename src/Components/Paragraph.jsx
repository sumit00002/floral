import React from "react";

function Paragraph() {
  return (
    <div
      id="paragraphDiv"
      className="px-[11vw] mt-[10vw] w-full flex flex-col gap-[10vw] items-end"
    >
      {/* Sections */}
      {[
        {
          title: "Unique Pottery Designs",
          description:
            "Discover our unique pottery designs that blend traditional craftsmanship with modern aesthetics. Each piece is handcrafted to perfection.",
        },
        {
          title: "High-Quality Materials",
          description:
            "We use only the highest quality clay and glazes to ensure that our pottery is not only beautiful but also durable and long-lasting.",
        },
        {
          title: "Custom Orders",
          description:
            "We offer custom orders to bring your vision to life. Whether it’s a personalized gift or a custom piece for your home, we’ve got you covered.",
        },
      ].map((feature, index) => (
        <div
          key={index}
          className="w-[40%] flex flex-col justify-start"
          data-aos="fade-up"
        >
          <h5 className="leading-tight text-5xl">{feature.title}</h5>
          <p className="leading-normal text-xl mt-[2vw]">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Paragraph;
