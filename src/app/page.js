import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Card from "./components/Card/Card";
import CardsGrid from "./components/CardsGrid/CardsGrid";
import Footer from "./components/Footer/Footer";
import FetchGrid from "./components/FetchGrid/FetchGrid";

export default function Home() {
  const data = [
    {
      title: "Card 1",
      description: "Description Card 1",
      image: "/images/avion1.jpg",
    },
    {
      title: "Card 2",
      description: "Description Card 2",
      image: "/images/avion2.jpg",
    },
    {
      title: "Card 3",
      description: "Description Card 3",
      image: "/images/avion3.jpg",
    },
    {
      title: "Card 3",
      description: "Description Card 3",
      image: "/images/avion3.jpg",
    },
    {
      title: "Card 3",
      description: "Description Card 3",
      image: "/images/avion3.jpg",
    },
    {
      title: "Card 3",
      description: "Description Card 3",
      image: "/images/avion3.jpg",
    },
  ];

  const menuItems = [
    {
      item: "Home",
      link: "/",
    },
    {
      item: "About",
      link: "/about/",
    },
    {
      item: "Contact",
      link: "/contact/",
    },
  ];

  return (
    <main className={styles.main}>
      <Navbar title={`Vuelos.com`} menu={menuItems} />
      <Hero mainText={`Vuelos.com`} />
      <CardsGrid cards={data} />
      <Footer />
      <FetchGrid />
    </main>
  );
}