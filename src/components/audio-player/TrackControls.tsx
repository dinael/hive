interface TrackControlsProps {
  duration: number
  progress: number
  handleProgress: (event: Event, newValue: number | number[]) => void
}

const TrackControls: React.FC<TrackControlsProps> = ({
  duration,
  progress,
  handleProgress,
  ...props
}) => {

  function formatTime(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);

  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedSeconds = secs.toString().padStart(2, '0');

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

  return (
    <div
      className="track-controls"
      {...props}>
      <span>
        {formatTime(progress)}
      </span>
      <input
        type='range'
        min={0}
        max={duration}
        value={progress}
        onChange={handleProgress}
      />
      <output>
        -{formatTime(duration - progress)}
      </output>
    </div>
  )
}

export default TrackControls
