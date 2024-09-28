import Modal from './Modal'
import Image from 'next/image'
import { Search, Cancel } from 'iconoir-react'
import { AnimatePresence } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import template from '@/public/album.webp'
import YouTube from "react-youtube";
import { Spotify } from "react-spotify-embed";
interface ModalContentProps {
  isModalOpen: boolean
  close: () => void
}

const variants = {
  hidden: { opacity: 0, y: -20 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 }
}

export default function ModalContent({
  isModalOpen,
  close
}: ModalContentProps) {
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const ref = useRef<HTMLInputElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTimeout(() => setInput(e.target.value), 500)
  }

  const handleClearInput = () => {
    setInput('')
    if (ref.current) {
      ref.current.value = ''
    }
  }

  const handleFocus = () => {
    ref.current?.focus()
  }

  useEffect(() => {
    setIsTyping(false)

    if (input !== '') {
      setIsTyping(true)
    }
  }, [input])

  const videoOnReady = (event: any) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const playVideo = (event: any) => {
    // access to player in all event handlers via event.target
    console.log("Discofy video player started");
  };

  const opts = {
    height: "400",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      allowFullscreen: true
    }
  };

const getSuggestions = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    return response
    console.log(response)
}

  return (
    <AnimatePresence mode="wait" initial={false}>
      {isModalOpen && (
        <Modal handleClose={close}>
          <div className="flex flex-col gap-4 w-full items-center">
            <div className="flex flex-col items-center justify-between gap-8 p-8 w-full rounded-[10px] relative">
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-4">
                  <h1 className="font-bold text-4xl">Hi I am Vibey,</h1>
                  <h1 className="text-zinc-100">I am your personal music AI assistant. I can help you find the right music for your mood.</h1>
                </div>
              </div>
            </div>
            <div className="relative mt-8">
              <input
                autoFocus={true}
                onChange={handleChange}
                placeholder="How you feeling today?"
                ref={ref}
                className="w-full md:w-96 h-12 px-3 shados rounded-[10px] border-2 dark:border-black hover:border-black/40  active:shadow-none focus:border-black/40 hover:bg-gray-100 dark:bg-[#212121] transition duration-300 focus:outline-none input"
              />
              <div className="flex items-center absolute right-[10px] top-3">
                {input !== '' ? (
                  <button
                    onClick={() => {
                      handleClearInput()
                      handleFocus()
                    }}
                  >
                    <Cancel className="text-gray-500" />
                  </button>
                ) : null}

                <button>
                  <Search className="text-gray-500" onClick={getSuggestions}/>
                </button>
              </div>
            </div>
            <AnimatePresence mode="wait">
              {isTyping ? (
                <motion.div
                  variants={variants}
                  initial="hidden"
                  animate="enter"
                  exit="exit"
                  className="bg-white dark:bg-black w-full h-full rounded-[10px] customShadowMedium relative p-5 "
                >

                  <YouTube
                    className="bg-white dark:bg-black w-full h-full"
                    videoId="4NRXx6U8ABQ"
                    opts={opts}
                    styles={opts}
                    onReady={videoOnReady}
                    onPlay={(e:any) => playVideo(e)}
                  />
                  <div className="flex flex-row pl-9">

                    <Spotify className="p-3" link="https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b" />

                    <Spotify className="p-3" link="https://open.spotify.com/album/4yP0hdKOZPNshxUOjY0cZj" />

                  </div>
                  <Cancel
                    onClick={() => {
                      close()
                      handleClearInput()
                    }}
                    className="absolute top-4 right-4 cursor-pointer"
                  />
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </Modal>
      )}
    </AnimatePresence>
  )
}
