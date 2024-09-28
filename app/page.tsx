import GrainyFilter from './components/GrainyFilter'
import Navbar from './components/Navbar'
import Link from 'next/link'
import { MusicNoteAdd } from 'iconoir-react'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="grid place-items-center h-screen overflow-hidden items-center w-full before:bg-[#8c8c8c] loginBody">
        <div className="blur-[150px] absolute -top-[50px] -left-[300px] w-full h-full overflow-hidden -z-20">
          <div className="gradient absolute rounded-[100%] blob gradient-1 w-[700px] h-[700px] opacity-30 left-[60%] top-[40%] -z-20 bg-[#FF0080]" />
          <div className="gradient absolute rounded-[100%] blob gradient-2 w-[600px] h-[600px] opacity-80 left-[40%] top-[60%] -z-10 bg-[#4A2560]" />
          <div className="gradient absolute rounded-[100%] blob gradient-3 w-[500px] h-[500px] opacity-50 left-[50%] top-[50%] -z-30 bg-[#C17710]" />
        </div>
        <div className="grid place-items-center absolute ml-auto mr-auto left-0 right-0 text-center py-12">
          <div className="w-max text-center flex flex-col gap-8 items-center text-zinc-900">
            <h1 className="text-7xl font-bold flex flex-col discofy">
              Get lost in the music 🪩
            </h1>
            <span className="text-xl">
              - Meet Vibey, get vibified with personal recommendations and start streaming on our web player today.
            </span>
            <Link
              href="/player"
              className="w-max px-10 py-3 inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-900/90 active:translate-y-0.5 active:bg-black outline-none customShadowMedium text-white rounded-md font-semibold transition-all duration-200"
            >
              Get started <MusicNoteAdd />
            </Link>
          </div>
        </div>
        <div />
      </div>
      <GrainyFilter />
    </>
  )
}
