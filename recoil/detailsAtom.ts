import { atom } from 'recoil';

const fields = [
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

('Phone,Mobile,Extension,Email,Address,Fax,Skype,Hangout,Zoom,Meet,Whatsapp,Telegram');

const detailsAtom = atom({
  key: 'detailsState',
  default: fields.slice(0, 7),
});

export default detailsAtom;
