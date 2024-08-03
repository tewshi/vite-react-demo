import { useState } from 'react'
import Button from '@/components/Button'
import styles from '@/components/stopwatch.module.css'

function Stopwatch() {
  const [time, setTime] = useState(0)
  const [state, setState] = useState<'idle' | 'running' | 'paused'>('idle')

  const onStart = () => {
    setState('running')
  }

  const onPause = () => {
    setState('paused')
  }

  const onResume = () => {
    setState('running')
  }

  const onReset = () => {
    setState('idle')
    setTime(0)
  }

  return (
    <div className={styles.stopwatch}>
      <div className={styles.time}>00:00:00</div>
      <div className={styles.controls}>
        <Button disabled={state !== 'idle'} onClick={onStart}>Start</Button>
        {state !== 'paused' && <Button color="secondary" disabled={state === 'idle'} onClick={onPause}>Pause</Button>}
        {state === 'paused' && <Button color="info" onClick={onResume}>Resume</Button>}
        <Button color="destructive" disabled={state === 'idle'} onClick={onReset}>Reset</Button>
      </div>
    </div >
  )
}

export default Stopwatch
