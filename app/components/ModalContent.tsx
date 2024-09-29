import Modal from "./Modal";
import { Search, Cancel } from "iconoir-react";
import { AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import YouTube from "react-youtube";
import { Spotify } from "react-spotify-embed";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/ui/select";
import { Button } from "./ui/ui/button";
import loader from "../../public/loading.gif"
import Image from 'next/image'
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

const moods = ["Happy", "Sad", "Energetic", "Calm", "Angry"];
const tempos = ["Slow", "Medium", "Fast"];
const lyricalFoci = ["Love", "Life", "Party", "Introspective"];
const energyLevels = ["Low", "Medium", "High"];

export default function ModalContent({ isModalOpen, close }: ModalContentProps) {
  const [mood, setMood] = useState("");
  const [tempo, setTempo] = useState("");
  const [lyricalFocus, setLyricalFocus] = useState("");
  const [energyLevel, setEnergyLevel] = useState("");
  const [DiscofyResponse, setDiscofyResponse] = useState<AIresponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showAIResponse, setShowAIResponse] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const getSuggestions = async () => {
    if (isLoading) return;

    setIsLoading(true);
    const url = "https://909e-128-235-159-74.ngrok-free.app/process-song";
    const input = `I am looking for a song that is ${mood} with a ${tempo} tempo, focusing on ${lyricalFocus} lyrics, and has ${energyLevel} energy.`;
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
      setDiscofyResponse(result);
      setShowAIResponse(true);
      setCurrentIndex(0);
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

  const handleClear = () => {
    setMood("");
    setTempo("");
    setLyricalFocus("");
    setEnergyLevel("");
    setDiscofyResponse(null);
    setShowAIResponse(false);
    setError(null);
    setCurrentIndex(0);
  };

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
          <div className="z-50 flex flex-col items-center w-full gap-4">
            <div className="flex flex-col items-center justify-between gap-8 p-2 w-full rounded-[10px] relative">
              <div className="flex flex-col gap-2">
                <h1 className="text-4xl font-bold">Hi, I am DiscoGPT</h1>
                <h1 className="text-zinc-100">
                  I am your personal music assistant with Discofy. I can help you find the right music for your mood.
                </h1>
              </div>
            </div>
            <div className="flex flex-row w-full gap-2">
              <Select onValueChange={setMood} value={mood}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Mood" />
                </SelectTrigger>
                <SelectContent>
                  {moods.map((m) => (
                    <SelectItem key={m} value={m}>{m}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select onValueChange={setTempo} value={tempo}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Tempo" />
                </SelectTrigger>
                <SelectContent>
                  {tempos.map((t) => (
                    <SelectItem key={t} value={t}>{t}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select onValueChange={setLyricalFocus} value={lyricalFocus}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Lyrical Focus" />
                </SelectTrigger>
                <SelectContent>
                  {lyricalFoci.map((lf) => (
                    <SelectItem key={lf} value={lf}>{lf}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select onValueChange={setEnergyLevel} value={energyLevel}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Energy Level" />
                </SelectTrigger>
                <SelectContent>
                  {energyLevels.map((el) => (
                    <SelectItem key={el} value={el}>{el}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button onClick={getSuggestions} disabled={isLoading || !mood || !tempo || !lyricalFocus || !energyLevel}>
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
              <Button variant="outline" onClick={handleClear}>
                <Cancel className="w-4 h-4 mr-2" />
                Clear
              </Button>
            </div>
            <AnimatePresence mode="wait">
              {showAIResponse && DiscofyResponse && (
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
                      handleClear();
                    }}
                    className="absolute cursor-pointer top-4 right-4"
                  />
                </motion.div>
              )}
            </AnimatePresence>
            {isLoading ? (<Image
              src={loader}
              width="300"
              height="200"
              alt="Loader"
              className="rounded-[5%] object-cover flex-shrink-0 z-100"
            />) : null}
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
                <div className="flex justify-center gap-4 mt-1">
                  <Button
                    onClick={() => setCurrentIndex((prev) => prev - 1)}
                    disabled={currentIndex === 0}
                  >
                    Previous
                  </Button>
                  <Button
                    onClick={() => setCurrentIndex((prev) => prev + 1)}
                    disabled={currentIndex === DiscofyResponse.recommendations.length - 1}
                  >
                    Next
                  </Button>
                </div>
              </>
            )}
          </div>
        </Modal>
      )}
    </AnimatePresence>
  );
}