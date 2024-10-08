'use client'
import React, {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react'
import { Song } from '../lib/api-response'

interface AudioContextValue {
  audioRef: any
  currentTime: number
  shuffle: boolean
  repeat: boolean
  volume: number
  activeIndex: number | null
  isPlaying: boolean
  pause: boolean
  handleTimeUpdate: () => void
  handleSeek: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleVolumeChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleTogglePlay: () => void
  handleVolumeToggle: () => void
  handleShuffle: () => void
  handleRepeat: () => void
  handlePlaySong: (index: number) => void
  handleDoubleClick: (index: number) => void
  handleSkipNext: () => void
  handleSkipPrev: () => void
}

const AudioContext = createContext<AudioContextValue | undefined>(undefined)

interface AudioProviderProps {
  children: ReactNode
}

export const AudioProvider: React.FC<AudioProviderProps> = ({ children }) => {
  const audioRef = useRef<any>(null)
  const [currentTime, setCurrentTime] = useState(0)
  const [volume, setVolume] = useState<number>(() => {
    if (typeof localStorage !== 'undefined') {
      const savedVolume = localStorage.getItem('volume')
      return savedVolume !== null ? parseFloat(savedVolume) : 1
    }
    return 1
  })
  const [pause, setPause] = useState(true)
  const [repeat, setRepeat] = useState(true)
  const [shuffle, setShuffle] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const audioElement = audioRef.current

  const [Songs, setSongs] = useState<Song[]>([])
  useEffect(() => {
    const fetchSongsList = async () => {
      try {
        const response = await fetch('https://discofy-app-data01.s3.amazonaws.com/songs/songs.json');
        
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data: any = await response.json();
        setSongs(data);
      } catch (err: any) {
        console.log(err)
      }
    };
    fetchSongsList();
  }, []);

  const handleShuffle = () => {
    setShuffle(!shuffle)
  }

  const handleRepeat = () => {
    setRepeat(!repeat)
  }

  const handleDoubleClick = (index: number) => {
    handlePlaySong(index)
  }

  const handlePlaySong = (index: number) => {
    setActiveIndex(() => (index === activeIndex ? activeIndex : index))
    setIsPlaying(!isPlaying)
    handleTogglePlay()
  }

  const handleTogglePlay = useCallback(() => {
    setTimeout(function () {
      if (audioRef.current?.paused) {
        setPause(false)
        audioRef.current?.load()
        audioRef.current?.play()
      } else {
        audioRef.current?.pause()
        setPause(true)
      }
    }, 300)
  }, [])

  const handleSkipNext = () => {
    setActiveIndex(prevIndex => {
      const currentIndex = prevIndex ?? 0
      let newIndex = currentIndex + 1
      if (shuffle) {
        newIndex = Math.floor(Math.random() * Songs.length)
      }
      if (newIndex >= Songs.length) {
        newIndex = 0
      }
      return newIndex
    })
  }

  const handleSkipPrev = () => {
    setActiveIndex(prevIndex => {
      const currentIndex = prevIndex ?? 0
      let newIndex = currentIndex - 1
      if (newIndex < 0) {
        newIndex = Songs.length - 1
      }
      return newIndex
    })
  }

  const handleTimeUpdate = () => {
    if (audioElement) {
      setCurrentTime(audioElement.currentTime)
      if (audioElement.currentTime === audioElement.duration) {
        setCurrentTime(0)
        handleSkipNext()
      }
    }
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value)
    if (audioElement) {
      audioElement.currentTime = time
      setCurrentTime(time)
    }
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const volumeLevel = e.target.valueAsNumber
    setTimeout(
      () => localStorage.setItem('volume', volumeLevel.toString()),
      500
    )
    if (audioRef.current) {
      audioRef.current.volume = volumeLevel
      setVolume(volumeLevel)
    }
  }

  const handleVolumeToggle = () => {
    const localStorageVolume = localStorage.getItem('volume')
    if (volume === 0 && localStorageVolume !== '0') {
      if (localStorageVolume !== null) {
        const parsedVolume = parseFloat(localStorageVolume)
        setVolume(parsedVolume)
        if (audioRef.current) {
          audioRef.current.volume = parsedVolume
        }
      }
    } else {
      setVolume(0)
      if (audioRef.current) {
        audioRef.current.volume = 0
      }
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedIndex = localStorage.getItem('currentSongIndex')
      setActiveIndex(savedIndex ? Number(savedIndex) : 0)
    }
  }, [setActiveIndex])

  useEffect(() => {
    localStorage.setItem('currentSongIndex', String(activeIndex))
  }, [activeIndex])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // if (e.code === 'Space') {
      //   handleTogglePlay()
      // }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleTogglePlay])

  const contextValue: AudioContextValue = {
    audioRef,
    currentTime,
    volume,
    pause,
    handleTimeUpdate,
    handleSeek,
    handleVolumeChange,
    handleVolumeToggle,
    handleTogglePlay,
    handleShuffle,
    handleRepeat,
    shuffle,
    repeat,
    isPlaying,
    handlePlaySong,
    handleDoubleClick,
    activeIndex,
    handleSkipNext,
    handleSkipPrev
  }

  return (
    <AudioContext.Provider value={contextValue}>
      {children}
    </AudioContext.Provider>
  )
}

export const useAudioContext = (): AudioContextValue => {
  const context = useContext(AudioContext)
  if (!context) {
    throw new Error('useAudioContext must be used within an AudioProvider')
  }
  return context
}
