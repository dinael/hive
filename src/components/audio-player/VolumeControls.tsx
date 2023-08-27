import { FC } from 'react';
import Button from '../button/Button';

export type VolumeControlsProps = {
  volume: number;
  mute: boolean;
  onVolumeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onMuteToggle: () => void;
}

export const VolumeControls: FC<VolumeControlsProps> = ({
  volume,
  mute,
  onVolumeChange,
  onMuteToggle,
  ...props
}) => {
  const getVolumeIcon = () => {
    if (mute) return 'volume-mute';
    if (volume <= 1) return 'volume-off';
    if (volume <= 5) return 'volume-zero';
    if (volume <= 20) return 'volume-down';
    if (volume <= 75) return 'volume';
    return 'volume';
  }

  const buttonVariant = 'ghost';

  return (
    <div
      className='volume-controls'
      {...props}>
      <Button
        className={`volumen-button ${mute && 'active'}`}
        description={ mute ? 'unmute' : 'mute' }
        icon={getVolumeIcon()}
        size="l"
        text="Backward"
        variant={buttonVariant}
        kind='rounded'
        onClick={ onMuteToggle } />
      <input
        type="range"
        min={0}
        max={100}
        value={volume}
        disabled={mute}
        onChange={onVolumeChange}
      />
      <output aria-live="polite">
        {!mute ? volume : 'muted'}
      </output>
    </div>
  );
}

export default VolumeControls;
