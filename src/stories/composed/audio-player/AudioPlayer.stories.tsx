import { AudioPlayer, AudioPlayerProps } from '@/components/audio-player/AudioPlayer'

export default {
  title: 'Components/Composed/Audio-player',
  component: AudioPlayer,
  parameters: {
    vitest: {
      // testFile: "Card.test.tsx"
    }
  },
  tags: ['autodocs'],
  argType: {
    trackList: {
      name: 'Track list:',
      control: 'object'
    }
  }
}

const lastEpisodeList = [
  'https://traffic.libsyn.com/secure/jbpod/Joe_Budden_Podcast_650.mp3',
  'https://500songs.com/podcast-download/1833/episode-167-the-weight-by-the-band.mp3'
];

export const Default = (args: AudioPlayerProps) => (
  <AudioPlayer trackList={lastEpisodeList}  />
)

Default.args = {
  trackList: lastEpisodeList,
}
