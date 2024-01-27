import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import TaskBoard from "./components/TaskBoard";

function App() {
  return (
    <div className="bg-[#191D26] font-[Inter] text-white">
      <Header />
      <HeroSection />
      <TaskBoard />
      <Footer />
    </div>
  );
}

export default App;
