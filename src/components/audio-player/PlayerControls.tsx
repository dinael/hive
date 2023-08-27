import { FC } from 'react'

import Button from '../button/Button'

import './audio-player.scss'

export type PlayControlsProps = {
  duration?: number
  elapsed?: number
  isPlaying?: boolean
  isRepeating?: boolean
  isShuffling?: boolean
  isFirstTrack?: boolean
  isLastTrack?: boolean
  togglePlay?: () => void
  toggleBackward?: () => void
  toggleForward?: () => void
  toggleSkipBackward?: () => void
  toggleSkipForward?: () => void
  toggleShuffle?: () => void
  toggleRepeat?: () => void
}

export const PlayControls: FC<PlayControlsProps> = ({
  duration,
  elapsed,
  isPlaying,
  isRepeating,
  isShuffling,
  isFirstTrack,
  isLastTrack,
  togglePlay,
  toggleBackward,
  toggleForward,
  toggleSkipBackward,
  toggleSkipForward,
  toggleShuffle,
  toggleRepeat,
  ...props
}) => {

  const buttonVariant = 'ghost'

  return (
    <div
      className='player-controls'
      {...props}>
      <Button
        className={`player-button backward`}
        description="Skip previous track"
        icon='backward'
        size="l"
        text="Backward"
        variant={buttonVariant}
        kind='rounded'
        disabled={isFirstTrack}
        onClick={toggleSkipBackward} />
      <Button
        className='player-button fast-backward'
        description="Rewind by 10 seconds"
        icon='fast-backward'
        size="l"
        text="Fast backward"
        variant={buttonVariant}
        kind='rounded'
        disabled={!isPlaying}
        onClick={toggleBackward} />
      <Button
        className={`player-button play ${isPlaying && 'active'}`}
        description={isPlaying ? 'Pause' : 'Playing'}
        icon={isPlaying ? 'pause' : 'play'}
        size="l"
        text={isPlaying ? 'Pause' : 'Playing'}
        variant={buttonVariant}
        kind='rounded'
        onClick={togglePlay} />
      <Button
        className='player-button fast-forward'
        description='Advance by 10 seconds'
        icon='fast-forward'
        size="l"
        text='Fast forward'
        variant={buttonVariant}
        disabled={!isPlaying}
        kind='rounded'
        onClick={toggleForward} />
      <Button
        className='player-button forward'
        description='Skip next track'
        icon='forward'
        size="l"
        text='Forward'
        variant={buttonVariant}
        kind='rounded'
        disabled={isLastTrack}
        onClick={toggleSkipForward} />
      <Button
        className={`player-button shuffle`}
        description='Shuffle'
        icon='shuffle'
        size="l"
        text='Shuffle'
        variant={buttonVariant}
        kind='rounded'
        onClick={toggleShuffle} />
      <Button
        className={`player-button repeat ${isRepeating && 'active'}`}
        description='Repeat'
        icon='repeat'
        size="l"
        text='Repeat'
        variant={buttonVariant}
        kind='rounded'
        disabled={!isPlaying}
        onClick={toggleRepeat} />
    </div>
  );
};

export default PlayControls;
