import { FC, useState, useEffect, useRef } from 'react'
import PlayerControls from './PlayerControls'
import VolumeControls from './VolumeControls'
import TrackControls from './TrackControls'

export type AudioPlayerProps = {
  trackList?: string[]
}

export const AudioPlayer: FC<AudioPlayerProps> = ({ trackList }) => {
  const audioPlayer = useRef<HTMLAudioElement | null>(null)
  const [playlist, setPlaylist] = useState(trackList)
  const [index, setIndex] = useState(0)
  const [currentSong, setCurrentSong] = useState<string>(playlist ? playlist[index] : '')
  const [isPlaying, setIsPlaying] = useState(false)
  const [isShuffling, setIsShuffling] = useState(false)
  const [isRepeating, setIsRepeating] = useState(false)
  const [elapsed, setElapsed] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(30)
  const [mute, setMute] = useState(false)

  useEffect(() => {
    if (audioPlayer.current) {
      audioPlayer.current.volume = volume / 100
    }

    if (isPlaying) {
      const intervalId = setInterval(() => {
        const _duration = Math.floor(audioPlayer?.current?.duration || 0)
        const _elapsed = Math.floor(audioPlayer?.current?.currentTime || 0)

        setDuration(_duration)
        setElapsed(_elapsed)
      }, 100)

      return () => clearInterval(intervalId)
    }
  }, [volume, isPlaying])

  useEffect(() => {
    setElapsed(0)
    const handleSongEnd = () => {
      let newIndex = index + 1;

      if (playlist) {

        if (isShuffling) {
          newIndex = Math.floor(Math.random() * playlist.length)
        }

        if (newIndex >= playlist.length) {
          newIndex = 0;
        }

        setIndex(newIndex)

        if (isRepeating) {
          audioPlayer.current!.currentTime = 0;
          audioPlayer.current!.play();
        } else {
          audioPlayer.current!.src = playlist[index]
          audioPlayer.current!.play();

          setCurrentSong(playlist[newIndex])
        }
      }
    };

    audioPlayer.current!.addEventListener('ended', handleSongEnd)

    return () => {
      audioPlayer.current!.removeEventListener('ended', handleSongEnd)
    }
  }, [index, playlist, isShuffling, isRepeating])

  const togglePlay = () => {
    !isPlaying ? audioPlayer.current!.play() : audioPlayer.current!.pause()
    setIsPlaying(prev => !prev)
  }

  const toggleForward = () => {
    audioPlayer.current!.currentTime += 10
  }

  const toggleBackward = () => {
    audioPlayer.current!.currentTime -= 10
  }

  const toggleSkipForward = () => {
    let newIndex = index + 1
    if (playlist) {
      newIndex = newIndex >= playlist.length ? (isShuffling ? 0 : playlist.length - 1) : newIndex;

      setIndex(newIndex)
      audioPlayer.current!.src = playlist ? playlist[newIndex] : ''
      audioPlayer.current!.play()

      setIsPlaying(true)
    }
  }

  const toggleSkipBackward = () => {
    let newIndex = index - 1
    if (playlist) {
      newIndex = newIndex < 0 ? (isShuffling ? playlist.length - 1 : 0) : newIndex;

      setIndex(newIndex)
      audioPlayer.current!.src = playlist ? playlist[newIndex] : ''
      audioPlayer.current!.play()

      setIsPlaying(true)
    }
  }

  const toggleShuffle = () => {
    setIsShuffling(prev => !prev)

    if (!isShuffling) {
      if (playlist) {
      const shuffledPlaylist = [...playlist]
        for (let i = shuffledPlaylist.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1))
          const temp = shuffledPlaylist[i]
          shuffledPlaylist[i] = shuffledPlaylist[j]
          shuffledPlaylist[j] = temp
        }

        setIndex(0)
        audioPlayer.current!.src = shuffledPlaylist[0]
        setPlaylist(shuffledPlaylist)

        audioPlayer.current!.play()
      } else {
        setIndex(0)
        if (playlist) {
          audioPlayer.current!.src = playlist[0]
          setPlaylist([playlist[0]])

          audioPlayer.current!.play()
        }
      }
    }
  }

  const toggleRepeat = () => {
    setIsRepeating(prev => !prev);
  };

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10)
    if (audioPlayer.current) {
      audioPlayer.current.currentTime = newValue
      setElapsed(newValue)
    }
  }

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseInt(event.target.value, 10)
    setVolume(newVolume)
    if (audioPlayer.current) {
      audioPlayer.current.volume = newVolume / 100
    }
  }

  const currentFileName = playlist?.[index]?.split('/').pop()?.replace(/\.[^/.]+$/, '') || '';
  const isFirstTrack = index === 0
  const isLastTrack = playlist && index === playlist.length - 1

  return (
    <figure>
      <audio
        className='sr-only'
        src={currentSong}
        ref={audioPlayer}
        muted={mute}
>
        Your browser does not support the audio element.
      </audio>
      <figcaption>
        {currentFileName}
      </figcaption>
      <div className=''>
        <PlayerControls
          isPlaying={isPlaying}
          isRepeating={isRepeating}
          isShuffling={isShuffling}
          togglePlay={togglePlay}
          toggleBackward={toggleBackward}
          toggleForward={toggleForward}
          toggleSkipBackward={toggleSkipBackward}
          toggleSkipForward={toggleSkipForward}
          toggleRepeat={toggleRepeat}
          toggleShuffle={toggleShuffle}
          isFirstTrack={isFirstTrack}
          isLastTrack={isLastTrack}
          duration={duration}
          elapsed={elapsed}
        />
      </div>
      <div>
        <VolumeControls
          volume={volume}
          mute={mute}
          onVolumeChange={handleVolumeChange}
          onMuteToggle={() => setMute(!mute)}
        />
      </div>
      <div>
        <TrackControls
          duration={duration}
          progress={elapsed}
          handleProgress={handleSliderChange}/>
      </div>
    </figure>
  )
}

export default AudioPlayer
