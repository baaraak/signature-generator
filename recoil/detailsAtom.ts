import { atom } from 'recoil';

export type Field = {
  id: string;
  label: string;
  mandatory: boolean;
};

export const DETAILS_FIELDS: Field[] = [
  { id: 'name', label: 'Name', mandatory: true },
  { id: 'title', label: 'Title', mandatory: true },
  { id: 'company', label: 'Company', mandatory: false },
  { id: 'address', label: 'Address', mandatory: false },
  { id: 'phone', label: 'Phone', mandatory: false },
  { id: 'mobile', label: 'Mobile', mandatory: false },
  { id: 'website', label: 'Website', mandatory: false },
  { id: 'email', label: 'Email', mandatory: false },
  { id: 'skype', label: 'Skype', mandatory: false },
  { id: 'extension', label: 'extension', mandatory: false },
  { id: 'fax', label: 'fax', mandatory: false },
  { id: 'hangout', label: 'hangout', mandatory: false },
  { id: 'Meet', label: 'Meet', mandatory: false },
  { id: 'whatsapp', label: 'whatsapp', mandatory: false },
  { id: 'telegram', label: 'telegram', mandatory: false },
];

const detailsAtom = atom({
  key: 'detailsState',
  default: DETAILS_FIELDS.slice(0, 7),
});

export default detailsAtom;
