import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

const App = () => (
  <div className=" min-h-full bg-primary overflow-hidden">

    <div className="flex justify-center items-center md:px-16 px-6">
      <div className="w-full xl:max-w-[1280px]">
        <Navbar />
      </div>
    </div>

    <div className=" bg-primary flex justify-center items-start">
      <div className="w-full xl:max-w-[1280px]">
        <Hero />
      </div>
    </div>
  </div>
)

export default App
