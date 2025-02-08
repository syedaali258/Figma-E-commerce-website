// src/app/page.tsx
import Header from "./components/header";
import Hero from "./components/hero";


export default function HomePage() {
  return (
    <>
    <Header />
      <Hero /> {/* This will render Sec1 to Sec6 only on the homepage */}
      
    </>
  );
}