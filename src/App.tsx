import { FireworksBackground } from "@/components/animate-ui/components/backgrounds/fireworks"


function App() {
  return (
    <div className=" w-full h-screen overflow-hidden">
      <h1 className="absolute top-56 left-1/2 transform -translate-x-1/2 text-4xl font-bold text-black z-10 font-serif">
        Coming soon
      </h1>
      <FireworksBackground className="w-full h-full" />
    </div>
  )
}

export default App
