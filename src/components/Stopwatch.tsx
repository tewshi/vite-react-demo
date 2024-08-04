import { useEffect, useRef, useState } from 'react'
import Button from '@/components/Button'
import styles from '@/components/stopwatch.module.css'

enum StopwatchState {
  idle,
  running,
  paused,
}

function Stopwatch() {
  const [time, setTime] = useState(0)
  const intervalId = useRef(0)
  const [state, setState] = useState<StopwatchState>(StopwatchState.idle)

  useEffect(() => {
    if (state === StopwatchState.running) {
      intervalId.current = setInterval(() => {
        setTime((t) => t + 10)
      }, 10)
    }

    return () => clearInterval(intervalId.current)
  }, [state])

  const onStart = () => {
    setState(StopwatchState.running)
  }

  const onPause = () => {
    setState(StopwatchState.paused)
  }

  const onResume = () => {
    setState(StopwatchState.running)
  }

  const onReset = () => {
    setState(StopwatchState.idle)
    setTime(0)
  }

  const formatTime = () => {
    const hours = Math.floor(time / 1000 / 60 / 60)
      .toString()
      .padStart(2, '0')
    const minutes = Math.floor((time / 1000 / 60) % 60)
      .toString()
      .padStart(2, '0')
    const seconds = Math.floor((time / 1000) % 60)
      .toString()
      .padStart(2, '0')

    return `${hours}:${minutes}:${seconds}`
  }

  return (
    <div className={styles.stopwatch}>
      <div className={styles.time}>{formatTime()}</div>
      <div className={styles.controls}>
        <Button
          disabled={state !== StopwatchState.idle}
          onClick={onStart}
        >
          Start
        </Button>
        {state !== StopwatchState.paused && (
          <Button
            color="secondary"
            disabled={state === StopwatchState.idle}
            onClick={onPause}
          >
            Pause
          </Button>
        )}
        {state === StopwatchState.paused && (
          <Button
            color="info"
            onClick={onResume}
          >
            Resume
          </Button>
        )}
        <Button
          color="destructive"
          disabled={state === StopwatchState.idle}
          onClick={onReset}
        >
          Reset
        </Button>
      </div>
    </div>
  )
}

export default Stopwatch
