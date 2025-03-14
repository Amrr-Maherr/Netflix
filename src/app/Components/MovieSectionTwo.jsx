"use client";
import { useState } from "react";

export default function MovieSectionTwo() {
  const [moviesPoster, setmoviesPoster] = useState([
    {
      url: "/Assets/jon.jpg",
      title: "John Wick",
      text: "Baba Yaga is back. This time, no one is safe. Prepare for a world of assassins and unrelenting vengeance.",
      button: "Watch Now",
    },
    {
      url: "/Assets/batman.jpg",
      title: "The Dark Knight",
      text: "Chaos reigns. Justice hangs in the balance. Can Batman save Gotham from the grip of a terrifying new evil?",
      button: "More Details",
    },
    {
      url: "/Assets/gozela.jpg",
      title: "Godzilla",
      text: "Titans clash. Humanity trembles. The king of monsters rises to face an ancient and unstoppable threat.",
      button: "Discover the Story",
    },
    {
      url: "/Assets/spiderman.jpg",
      title: "Miles Morales",
      text: "A new Spider-Man. A new dimension of danger. Miles must rise to protect everything he holds dear.",
      button: "Get Tickets",
    },
    {
      url: "/Assets/grinsh.jpg",
      title: "The Grinch",
      text: "He's mean, he's green, and he hates Christmas. Can the Grinch's heart be changed before it's too late?",
      button: "Learn More",
    },
    {
      url: "/Assets/Aladdin.jpg",
      title: "Aladdin",
      text: "A street rat. A genie. A whole new world of adventure awaits. Get ready to believe in magic again.",
      button: "See the Trailer",
    },
    {
      url: "/Assets/Skywalker.jpg",
      title: "Star Wars",
      text: "A galaxy far, far away... The saga continues. Join the rebellion and fight for hope against the darkness.",
      button: "Explore Now",
    },
  ]);
  return (
    <>
      {moviesPoster.map((item, index) => {
        console.log(`Image ${index + 1}:`, item.img);
        return (
          <section
            key={index}
            className="relative h-dvh  bg-cover bg-center text-white flex flex-col justify-end items-center p-6"
            style={{ backgroundImage: `url(${item.url})` }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 text-center">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                {item.title}
              </h2>
              <p className="mb-4">{item.text}</p>
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                {item.button}
              </button>
            </div>
          </section>
        );
      })}
    </>
  );
}
