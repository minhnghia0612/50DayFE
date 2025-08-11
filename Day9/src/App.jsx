import Button from './components/Button';
import './App.css';
import applause from './sound/applause.mp3';
import boo from './sound/boo.mp3';
import gasp from './sound/gasp.mp3';
import tada from './sound/tada.mp3';
import victory from './sound/victory.mp3';
import wrong from './sound/wrong.mp3';
import { useRef } from 'react';
function App() {
  const currentAudio = useRef(null);

  const ds = [
    {text:"applause", audio: applause},
    {text:"boo", audio: boo},
    {text:"gasp", audio: gasp},
    {text:"tada", audio: tada},
    {text:"victory", audio: victory},
    {text:"wrong", audio: wrong},]

    const handlePlay =(audio) => {
      if (currentAudio.current) {
        currentAudio.current.pause();
        currentAudio.current.currentTime = 0;
      }
      const sound = new Audio(audio);
      currentAudio.current = sound;
      sound.play();
    }
  return (
    <>
      {ds.map((item, index ) =>(
       <Button key = {index} onPlay={() => handlePlay(item.audio)} >
          {item.text}
        </Button>
      ))}
    </>
  )
}

export default App
