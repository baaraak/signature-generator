import { atom } from "recoil";

const detailsAtom = atom({
    key: 'detailsState',
    default: [
        {id: 'name', label: 'Name', mandatory: true},
        {id: 'title', label: 'Title', mandatory: true},
        {id: 'company', label: 'Company', mandatory: false},
        {id: 'address', label: 'Address', mandatory: false},
        {id: 'phone', label: 'Phone', mandatory: false},
        {id: 'mobile', label: 'Mobile', mandatory: false},
        {id: 'website', label: 'Website', mandatory: false},
        {id: 'email', label: 'Email', mandatory: false},
        {id: 'skype', label: 'Skype', mandatory: false},
    ],
});

export default detailsAtom;