export type Language = 'en' | 'ar';

export interface EpgItem {
  title: string;
  start: string;
  end: string;
}

export interface Channel {
  id: number;
  name: string;
  category: string;
  logo: string;
  quality: string;
  language: 'Arabic' | 'English' | 'Arabic / English';
  streamUrl: string;
  isHd: boolean;
  tags: string[];
  epg: EpgItem[];
}

export interface Movie {
  id: number;
  title: string;
  genre: string;
  duration: string;
  poster: string;
  rating: number;
}

export interface Series {
  id: number;
  title: string;
  season: string;
  episodes: number;
  poster: string;
  genre: string;
}

export interface SettingsState {
  playlistUrl: string;
  xtreamUrl: string;
  username: string;
  password: string;
  parentalLock: boolean;
  autoplay: boolean;
  theme: 'dark' | 'light';
}
