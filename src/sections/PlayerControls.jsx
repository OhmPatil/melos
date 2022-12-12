import React, { useEffect, useRef, useState } from 'react'
import Slider from '../components/Slider'
import playLogo from '../assets/play.svg'
import pauseLogo from '../assets/pause.svg'
import skipForward from '../assets/skip-forward.svg'
import skipBack from '../assets/skip-back.svg'
import volume from '../assets/volume.svg'


function PlayerControls(props) {

  const [progPercent, setProgPercent] = useState(0)
  const [volPercent, setVolPercent] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

  const audioRef = useRef()

  const play = () => {
    const audio = audioRef.current
    if(!isPlaying){
      setIsPlaying(true)
      audio.play()
    }
    if(isPlaying){
      setIsPlaying(false)
      audio.pause()
    }
  }

  useEffect(() => {
    const audio = audioRef.current
    audio.load()

    setProgPercent(0)
    setVolPercent(audio.volume * 100)
    isPlaying ? audio.play() : audio.pause()
    // audio.play()
  }, 
  [props.song])

  const getCurrDuration = (event) => {
    const percent = ((event.currentTarget.currentTime / event.currentTarget.duration) * 100).toFixed(2)
    const time = event.currentTarget.currentTime;
    setProgPercent(+percent)
    setCurrentTime(time.toFixed(2))
  }

  const onProgChange = (event) => {
    const audio = audioRef.current
    audio.currentTime = (audio.duration / 100) * event.target.value
    setProgPercent(event.target.value)
  }

  const onVolChange = (event) => {
    const audio = audioRef.current
    setVolPercent(event.target.value);
    audio.volume = (event.target.value/100).toFixed(2)
  }
  
  return (
    <div className='h-[20vh] w-screen fixed bottom-0 px-6 flex flex-col justify-center items-center gap-6'>
      <Slider onChange={onProgChange} percentage={progPercent}/>
      <audio ref={audioRef} src={props.song.music}
        onLoadedData = {(event) => {
          setDuration(event.currentTarget.duration.toFixed(2))
        }}
        onTimeUpdate = {getCurrDuration}></audio>
      
      <div className="flex justify-center items-center gap-14">
          <button onClick={props.prevClick}>
            <img src={skipBack} alt="" />
          </button>
          <button onClick={play}>
            {isPlaying ? (<img src={pauseLogo} alt=""/>) : (<img src={playLogo} alt=""/>)}
          </button>
          <button onClick={props.nextClick}>
            <img src={skipForward} alt="" />
          </button>
      </div>
      <div className='invisible md:visible md:w-[15%] w-[70%] flex gap-4'>
        <img src={volume} alt="" />
        <Slider onChange={onVolChange} percentage={volPercent}/>
      </div>
    </div>
  )
}

export default PlayerControls