import React, { useEffect, useRef, useState } from 'react';
import {
  IoShareSocialOutline,
  IoAppsOutline,
  IoColorPaletteOutline,
  IoReaderOutline,
  IoGridOutline,
} from 'react-icons/io5';
import classNames from 'classnames';
import dynamic from 'next/dynamic';

import IconButton from '../components/button-icon';

const Sidebar = () => {
  const [selected, setSelected] = useState(SidebarItems[0].id);
  const indicatorRef = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    // after ref mounted and html rendered, set the indicator to the selected tab
    const selectedTab = document.getElementById(selected);
    if (!selectedTab) return;
    moveIndicator(selectedTab.offsetLeft);
  }, [indicatorRef, selected]);

  const onTabSelect = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const { currentTarget } = e;

    setSelected(currentTarget.id);
    moveIndicator(currentTarget.offsetLeft);
  };

  const moveIndicator = (offsetLeft: number) => {
    indicatorRef.current.style.transform = `translate3d(${
      offsetLeft - OFFSET_SELECTED_SHADOW
    }px, 0, 0)`;
  };

  const TabDataComponent = SidebarItems.find(
    (item) => item.id === selected
  )?.value;
  return (
    <div className="min-w-max bg-white h-screen">
      <div className="relative bg-gray-100 shadow flex justify-around py-2">
        <div
          ref={indicatorRef}
          className="absolute left-1 rounded-xl w-16 h-16 bg-yellow-300 text-gray-800 transition duration-500 ease-in"
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
      <div className="overflow-y-scroll overflow-x-hidden p-6 ">
        <TabDataComponent />
      </div>
    </div>
  );
};

const SidebarItems = [
  {
    id: 'details',
    label: 'Details',
    icon: <IoReaderOutline />,
    value: dynamic(() => import('../components/tabs/details/details')),
  },
  {
    id: 'social',
    label: 'Social',
    icon: <IoShareSocialOutline />,
    value: dynamic(() => import('../components/tabs/social')),
  },
  {
    id: 'template',
    label: 'Template',
    icon: <IoGridOutline />,
    value: dynamic(() => import('../components/tabs/template')),
  },
  {
    id: 'design',
    label: 'Design',
    icon: <IoColorPaletteOutline />,
    value: dynamic(() => import('../components/tabs/design')),
  },
  {
    id: 'apps',
    label: 'Apps',
    icon: <IoAppsOutline />,
    value: dynamic(() => import('../components/tabs/apps')),
  },
];

const OFFSET_SELECTED_SHADOW = 10;

export default Sidebar;
