"use client"; // This is a client component
import React, { useState } from "react";
import TestimonialCard from "./TestimonialCard";
import Image from "next/image";

const slideShow = () => {
  const testimonialList = [
    {
      id: 1,
      testimonial:
        "Buyer buzz partner network disruptive non-disclosure agreement business",
      user: {
        avatar: "/tesAvatar1.png",
        name: "Albus Dumbledore",
        post: "Manager @ Howarts",
      },
    },
    {
      id: 2,
      testimonial:
        "Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.",
      user: {
        avatar: "/tesAvatar2.png",
        name: "Severus Snape",
        post: "Manager @ Slytherin",
      },
    },
    {
      id: 3,
      testimonial:
        "Release facebook responsive web design business model canvas seed money monetization.",
      user: {
        avatar: "/tesAvatar3.png",
        name: "Harry Potter",
        post: "Team Leader @ Gryffindor",
      },
    },
    {
      id: 4,
      testimonial:
        "Buyer buzz partner network disruptive non-disclosure agreement business",
      user: {
        avatar: "/tesAvatar1.png",
        name: "Albus Dumbledore 1",
        post: "Manager @ Howarts",
      },
    },
    {
      id: 5,
      testimonial:
        "Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.",
      user: {
        avatar: "/tesAvatar2.png",
        name: "Severus Snape 1",
        post: "Manager @ Slytherin",
      },
    },
    {
      id: 6,
      testimonial:
        "Release facebook responsive web design business model canvas seed money monetization.",
      user: {
        avatar: "/tesAvatar3.png",
        name: "Harry Potter 1",
        post: "Team Leader @ Gryffindor",
      },
    },
  ];
  const [slideIndex, setSlideIndex] = useState(1);
  const CardsPerSlide = 3;
  const MaxSlides = Math.ceil(testimonialList.length / CardsPerSlide);
  const swipeSlide = (action: string) => {
    !!(slideIndex < MaxSlides) &&
      action === "next" &&
      setSlideIndex(slideIndex + 1);
    !!(slideIndex > 1) &&
      action === "previous" &&
      setSlideIndex(slideIndex - 1);
  };
  return (
    <div className="flex flex-col space-y-24">
      <div className="flex justify-center items-center space-x-24 w-full">
        <button
          onClick={() => swipeSlide("previous")}
          className="flex justify-center items-center w-72 h-72 bg-white rounded-full"
          disabled={slideIndex === 1}
        >
          <Image
            src="/arrow-right.svg"
            alt="arrow"
            width={36}
            height={39}
            className="rotate-180"
            style={{ height: "auto" }}
          />
        </button>
        <button
          onClick={() => swipeSlide("next")}
          className="flex justify-center items-center w-72 h-72 bg-white rounded-full"
          disabled={slideIndex === MaxSlides}
        >
          <Image
            src="/arrow-right.svg"
            alt="arrow"
            width={36}
            height={39}
            style={{ height: "auto" }}
          />
        </button>
      </div>
      <div className="flex flex-wrap justify-center">
        {testimonialList
          .filter(
            (testimonial, index) =>
              index >= slideIndex * CardsPerSlide - CardsPerSlide &&
              index < slideIndex * CardsPerSlide
          )
          .map((item) => (
            <TestimonialCard
              key={item.id}
              testimonial={item.testimonial}
              user={item.user}
            />
          ))}
      </div>
    </div>
  );
};

export default slideShow;
