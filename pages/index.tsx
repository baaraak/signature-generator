import Layout from '../components/layout';
import {
  IoShareSocialOutline,
  IoAppsOutline,
  IoColorPaletteOutline,
  IoReaderOutline,
  IoGridOutline,
} from 'react-icons/io5';
import React, { useEffect, useRef, useState } from 'react';
import IconButton from '../components/button-icon';
import classNames from 'classnames';

type Props = {};

const SidebarItems = [
  {
    id: 'details',
    label: 'Details',
    icon: <IoReaderOutline />,
  },
  {
    id: 'social',
    label: 'Social',
    icon: <IoShareSocialOutline />,
  },
  {
    id: 'template',
    label: 'Template',
    icon: <IoGridOutline />,
  },
  {
    id: 'design',
    label: 'Design',
    icon: <IoColorPaletteOutline />,
  },
  {
    id: 'apps',
    label: 'Apps',
    icon: <IoAppsOutline />,
  },
];

const Index = ({}: Props) => {
  const [selected, setSelected] = useState(SidebarItems[0].id);
  const indicatorRef = useRef<HTMLDivElement>(null!);

  const onTabSelect = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const { id: tabId } = e.currentTarget;
    setSelected(tabId);

    const { offsetLeft } = e.currentTarget;

    indicatorRef.current.style.transform = `translate3d(${offsetLeft}px, 0, 0)`;
  };
  return (
    <Layout>
      <div className="w-1/6 md:w-1/4 bg-white">
        <div className="relative bg-gray-100 shadow flex justify-around py-2">
          <div
            ref={indicatorRef}
            className="absolute -left-1 rounded-xl w-16 h-16 bg-yellow-300 text-gray-800 transition duration-500 ease-in"
          />
          {SidebarItems.map((item) => (
            <IconButton
              key={item.id}
              icon={item.icon}
              onClick={onTabSelect}
              id={item.id}
              className={`w-14 ${classNames({
                'text-gray-900': selected === item.id,
              })}`}
            >
              {item.label}
            </IconButton>
          ))}
        </div>
        <div>category data</div>
      </div>
    </Layout>
  );
};

export default Index;
