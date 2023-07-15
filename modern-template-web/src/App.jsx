import Navbar from "./components/Navbar"

const App = () => (
  <div className=" min-h-full bg-primary overflow-hidden">
    <div className="flex justify-center items-center md:px-16 px-6">
      <div className="w-full xl:min-w-[1280px]">
        <Navbar />
      </div>
    </div>
  </div>
)

export default App
