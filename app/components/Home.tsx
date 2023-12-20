"use client";
import React, { useState } from "react";
import Image from "next/image";
import Title from "./Title";
import ServiceCard from "./ServiceCard";
import CategoryCard from "./CategoryCard";
import CustomerImage from "./CustomerImage";
import SlideShow from "./SlideShow";
import Accordion from "./Accordion";
import Button from "./Button";
import Feather from "./Feather";

const Home = () => {
  const serviceList = [
    {
      image: "/service1.png",
      title: "Cool feature title",
      description: "Learning curve network effects return on investment 1.",
    },
    {
      image: "/service2.png",
      title: "Cool feature title 2",
      description: "Learning curve network effects return on investment 2.",
    },
    {
      image: "/service3.png",
      title: "Cool feature title 3",
      description: "Learning curve network effects return on investment 3.",
    },
  ];
  const categoryList = [
    {
      image: "/category1.png",
      title: "Category 1",
      description: "Pitch termsheet backing validation focus release.",
      date: "November 22, 2020",
      avatar: "/avatar1.png",
      userName: "Chandler Bing",
    },
    {
      image: "/category2.png",
      title: "Category 2",
      description:
        "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
      date: "November 22, 2021",
      avatar: "/avatar2.png",
      userName: "Rachel Green",
    },
    {
      image: "/category3.png",
      title: "Category 3",
      description:
        "Beta prototype sales iPad gen-z marketing network effects value proposition",
      date: "November 22, 2022",
      avatar: "/avatar3.png",
      userName: "Monica Geller",
    },
    {
      image: "/category1.png",
      title: "Category 4",
      description: "Pitch termsheet backing validation focus release.",
      date: "November 22, 2020",
      avatar: "/avatar1.png",
      userName: "Chandler Bing",
    },
    {
      image: "/category2.png",
      title: "Category 5",
      description:
        "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
      date: "November 22, 2021",
      avatar: "/avatar2.png",
      userName: "Rachel Green",
    },
    {
      image: "/category3.png",
      title: "Category 6",
      description:
        "Beta prototype sales iPad gen-z marketing network effects value proposition",
      date: "November 22, 2022",
      avatar: "/avatar3.png",
      userName: "Monica Geller",
    },
  ];
  const customerServicesList = [
    { label: "We connect our customers with the best.", icon: "/feather.svg" },
    { label: "Advisor success customer launch party.", icon: "/eye.svg" },
    { label: "Business-to-consumer long tail.", icon: "/sun.svg" },
  ];
  const accordionList = [
    {
      title: " We connect our customers with the best?",
      content:
        "This is the content for: We connect our customers with the best?",
    },
    {
      title: "Android research & development rockstar?",
      content:
        "This is the content for: Android research & development rockstar?",
    },
  ];
  const [maxCategories, setMaxCategories] = useState(3);
  const [currentShowOption, setCurrentShowOption] = useState("more");
  const handleShowCategories = () => {
    currentShowOption === "more"
      ? (setCurrentShowOption("less"), setMaxCategories(categoryList.length))
      : (setCurrentShowOption("more"), setMaxCategories(3));
  };
  return (
    <div className="flex flex-col items-center w-full h-fit bg-white py-82">
      <div className="flex flex-col items-center justify-center px-20 md:px-50 lg:px-100">
        <p className="text-grey text-20 leading-32 font-sans">Our Services</p>
        <div className="w-3/5">
          <Title
            label="Handshake infographic mass market crowdfunding iteration."
            color="black"
            position="center"
          />
        </div>
        <div className="flex flex-wrap max-w-full justify-center items-center pt-82">
          {serviceList.map((item, index) => (
            <ServiceCard
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
      {/*--------------------------------------------------------------------------------------- */}
      <div className="flex flex-wrap justify-center max-w-full">
        <CustomerImage image="/customer1.png" graph="/graph1.png" />
        <div className="flex flex-col w-500 mb-120 lg:mx-25 xl:mx-75">
          <Title
            label="We connect our customers with the best, and help them keep up-and stay open."
            color="black"
            size="small"
          />
          <div className="space-y-24 mt-40 mb-56">
            {customerServicesList.map((item) => (
              <div key={item.label} className="flex space-x-27">
                <Image
                  src="/tick.svg"
                  alt="tick"
                  width={36}
                  height={36}
                  style={{ height: "auto" }}
                />
                <p className="font-sans text-black text-20 leading-32">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
          <Button label="Start now" fontColor="white" bgColor="darkBlue" />
        </div>
      </div>
      {/*--------------------------------------------------------------------------------------- */}
      <div className="flex flex-wrap justify-center max-w-full">
        <div className="flex flex-col w-500 mb-120 lg:mx-25 xl:mx-75">
          <Title
            label="We connect our customers with the best, and help them keep up-and stay open."
            color="black"
            size="small"
          />
          <div className="space-y-24 mt-64">
            {customerServicesList.map((item) => (
              <div
                key={item.label}
                className="flex items-center w-full h-68 pl-22 space-x-12 shadow-default rounded group hover:bg-darkBlue cursor-pointer"
              >
                <Feather />
                <p className="font-sans text-black group-hover:text-white text-20 leading-32">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <CustomerImage image="/customer2.png" graph="/graph2.png" />
      </div>
      {/*--------------------------------------------------------------------------------------- */}
      <div className="flex flex-col items-center w-full h-fit bg-darkBlue py-100">
        <div className="lg:w-2/3 xl:w-1/2 mb-64">
          <Title
            label="An enterprise template to ramp up your company website"
            position="center"
          />
        </div>
        <SlideShow />
      </div>
      {/*--------------------------------------------------------------------------------------- */}
      <div className="flex flex-col items-center my-120">
        <Image
          src="/workingSpace.png"
          alt="work"
          width={1100}
          height={403}
          style={{ objectFit: "contain", height: "auto" }}
        />
        <div className="flex flex-wrap justify-center">
          <div className="w-full sm:w-500 mx-20 lg:mx-25 xl:mx-50 mt-56">
            <Title
              label="We connect our customers with the best, and help them keep up-and stay open."
              color="black"
              size="small"
            />
          </div>
          <div className="flex flex-col w-full sm:w-500 mx-20 lg:mx-25 xl:mx-50 space-y-32 mt-56">
            {accordionList.map((item, index) => (
              <Accordion
                key={index}
                title={item.title}
                content={item.content}
              />
            ))}
          </div>
        </div>
      </div>
      {/*--------------------------------------------------------------------------------------- */}
      <div className="flex flex-col items-center justify-center">
        <p className="text-grey text-20 leading-32 font-sans">Our Blog</p>
        <div className="w-3/5">
          <Title
            label="Value proposition accelerator product management venture"
            color="black"
            position="center"
          />
        </div>
        <div className="flex flex-wrap justify-center pt-82">
          {categoryList
            .filter((category, index) => index < maxCategories)
            .map((item) => (
              <CategoryCard
                key={item.title}
                image={item.image}
                title={item.title}
                description={item.description}
                date={item.date}
                avatar={item.avatar}
                userName={item.userName}
              />
            ))}
        </div>
        <Button
          label={currentShowOption === "more" ? "Load more" : "Load less"}
          type="transparent"
          borderColor="darkBlue"
          onClick={() => handleShowCategories()}
        />
      </div>
      {/*--------------------------------------------------------------------------------------- */}
      <div className="w-full px-20 md:px-40 lg:px-100">
        <div className="relative overflow-hidden flex flex-col items-center w-full h-fit bg-darkBlue rounded-12 mt-120 mb-85 py-74 space-y-50">
          <div className="absolute z-0 right-0 -top-[360px] w-[600px] h-[600px] rounded-bl-full bg-blue" />
          <div className="w-8/10 lg:w-[716px] z-10">
            <Title
              label="An enterprise template to ramp up your company website"
              position="center"
            />
          </div>
          <div className="flex flex-wrap justify-center z-10">
            <input
              type="email"
              className="sm:w-370 h-56 rounded-240 px-32 border-2 border-white placeholder-black mb-12 mr-12"
              placeholder="Your email address"
            />
            <Button label="Start now" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
