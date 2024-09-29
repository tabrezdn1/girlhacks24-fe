import Modal from "./Modal";
import { Search, Cancel } from "iconoir-react";
import { AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import YouTube from "react-youtube";
import { Spotify } from "react-spotify-embed";

interface ModalContentProps {
  isModalOpen: boolean;
  close: () => void;
}

const variants = {
  hidden: { opacity: 0, y: -20 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

interface Recommendation {
  song_name: string;
  artist: string;
  youtube_link: string;
  spotify_link: string;
  album: string;
  language: string;
  release_year: number;
}

interface AIresponse {
  greeting: string;
  recommendations: Recommendation[];
}

export default function ModalContent({
  isModalOpen,
  close,
}: ModalContentProps) {
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

  const [DiscofyResponse, setDicsofyResponse] = useState<AIresponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showAIResponse, setShowAIResponse] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0); // New state for current index

  const getSuggestions = async () => {
    if (isLoading) return;

    setIsLoading(true);
    const url = "https://909e-128-235-159-74.ngrok-free.app/process-song";
    const data = { input };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response not ok");
      }

      const result: AIresponse = await response.json();
      console.log(`returned result: ${JSON.stringify(result)}`);
      setDicsofyResponse(result);
      setShowAIResponse(true);
      setCurrentIndex(0); // Reset index when new data is fetched
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTimeout(() => setInput(e.target.value), 500);
  };

  const handleClearInput = () => {
    setInput("");
    setDicsofyResponse(null);
    setShowAIResponse(false);
    setError(null);
    setCurrentIndex(0); // Reset index when input is cleared
    if (ref.current) {
      ref.current.value = "";
    }
  };

  const handleFocus = () => {
    ref.current?.focus();
  };

  useEffect(() => {
    setIsTyping(false);

    if (input !== "") {
      setIsTyping(true);
    }
  }, [input]);

  const videoOnReady = (event: any) => {
    event.target.pauseVideo();
  };

  const playVideo = (event: any) => {
    console.log("Discofy video player started");
  };

  const opts = {
    height: "400",
    width: "100%",
    playerVars: {
      autoplay: 0,
      allowFullscreen: true,
    },
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      {isModalOpen && (
        <Modal handleClose={close}>
          <div className="flex flex-col items-center w-full gap-4 z-50">
            <div className="flex flex-col items-center justify-between gap-8 p-2 w-full rounded-[10px] relative">
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-4">
                  <h1 className="text-4xl font-bold">Hi, I am DiscoGPT</h1>
                  <h1 className="text-zinc-100">
                    I am your personal music assistant. I can help you find the
                    right music for your mood.
                  </h1>
                </div>
              </div>
            </div>
            <div className="relative w-full">
              <input
                autoFocus={true}
                onChange={handleChange}
                placeholder="How are you feeling today?"
                ref={ref}
                className="w-full h-12 px-3 shadow rounded-[10px] border-2 dark:border-black hover:border-black/40 active:shadow-none focus:border-black/40 hover:bg-gray-100 dark:bg-[#212121] transition duration-300 focus:outline-none input"
              />
              <div className="flex items-center absolute right-[10px] top-3">
                {input !== "" && (
                  <button
                    onClick={() => {
                      handleClearInput();
                      handleFocus();
                    }}
                  >
                    <Cancel className="text-gray-500" />
                  </button>
                )}

                <button
                  onClick={getSuggestions}
                  disabled={isLoading}
                  className={`ml-2 ${
                    isLoading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  <Search className="text-gray-500" />
                </button>
              </div>

              
            </div>
            <AnimatePresence mode="wait">
              {isTyping && showAIResponse && DiscofyResponse && (
                <motion.div
                  variants={variants}
                  initial="hidden"
                  animate="enter"
                  exit="exit"
                  className="bg-white dark:bg-black w-full h-full rounded-[10px] customShadowMedium relative p-2"
                >
                  <YouTube
                    className="w-full bg-white dark:bg-black"
                    videoId={
                      DiscofyResponse.recommendations[currentIndex]?.youtube_link
                        ?.split("v=")[1]
                        ?.split("&")[0] || ""
                    }
                    opts={opts}
                    onReady={videoOnReady}
                    onPlay={playVideo}
                  />
                  <div className="flex flex-row p-2 mt-10">
                    <Spotify
                      wide
                      link={DiscofyResponse.recommendations[currentIndex]?.spotify_link}
                    />
                  </div>
                  <Cancel
                    onClick={() => {
                      close();
                      handleClearInput();
                    }}
                    className="absolute cursor-pointer top-4 right-4"
                  />
                </motion.div>
              )}
            </AnimatePresence>
            {error && (
              <div className="mt-1 text-red-500">
                <p>Error: {error}</p>
              </div>
            )}
            {showAIResponse && DiscofyResponse && (
                <>
                  <h1 className="mt-1 text-zinc-100">
                    {DiscofyResponse.greeting}
                  </h1>
                  <h1 className="text-zinc-100">
                    Here's a song from {DiscofyResponse.recommendations[currentIndex]?.song_name} by{" "}
                    {DiscofyResponse.recommendations[currentIndex]?.artist}.
                  </h1>
                  <p className="mt-1 text-zinc-400">
                    Recommendation {currentIndex + 1} of {DiscofyResponse.recommendations.length}
                  </p>
                  
                  {/* Navigation Buttons */}
                  <div className="flex justify-center gap-4 mt-1">
                    <button
                      onClick={() => setCurrentIndex((prev) => prev - 1)}
                      disabled={currentIndex === 0}
                      className={`px-1 py-1 rounded ${
                        currentIndex === 0
                          ? "bg-gray-300 cursor-not-allowed"
                          : "bg-blue-500 text-white hover:bg-blue-600"
                      }`}
                    >
                      Previous
                    </button>
                    <button
                      onClick={() => setCurrentIndex((prev) => prev + 1)}
                      disabled={currentIndex === DiscofyResponse.recommendations.length - 1}
                      className={`px-1 py-1 rounded ${
                        currentIndex === DiscofyResponse.recommendations.length - 1
                          ? "bg-gray-300 cursor-not-allowed"
                          : "bg-blue-500 text-white hover:bg-blue-600"
                      }`}
                    >
                      Next
                    </button>
                  </div>
                </>
              )}
          </div>
        </Modal>
      )}
    </AnimatePresence>
  );
}
