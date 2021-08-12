import { atom } from 'recoil';

export type Field = {
  id: string;
  label: string;
};

export const SOCIAL_DATA: Field[] = [
  { id: 'facebook', label: 'facebook.com/<username>' },
  { id: 'twitter', label: 'twitter.com/<username>' },
  { id: 'instagram', label: 'instagram.com/<username>' },
  { id: 'linkedin', label: 'linkedin.com/in/<username>' },
  { id: 'youtube', label: 'youtube.com/<username>' },
  { id: 'pinterest', label: 'pinterest.com/<username>' },
  { id: 'twitch', label: 'twitch.com/<username>' },
  { id: 'vimeo', label: 'vimeo.com/<username>' },
];

const socialAtom = atom({
  key: 'detailsState',
  default: SOCIAL_DATA,
});

export default socialAtom;
