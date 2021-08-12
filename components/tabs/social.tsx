import React from 'react';
import { useRecoilState } from 'recoil';
import socialAtom from '../../recoil/socialAtom';
import Heading from '../heading';

const Social = () => {
  const [socialData, setSocial] = useRecoilState(socialAtom);

  return (
    <div className="animate__animated animate__bounceInLeft">
      <Heading className="uppercase">Social Profile</Heading>
      {socialData.map((s) => (
        <div key={s.id}>{s.label}</div>
      ))}
    </div>
  );
};

export default Social;
