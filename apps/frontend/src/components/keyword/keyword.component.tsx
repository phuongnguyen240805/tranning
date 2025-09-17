'use client';

import React, { useState } from 'react';
import { SideMenu } from '../smartcontent/SideMenu';
import { MenuItem } from '../smartcontent/types';
import { Icons } from '../smartcontent/icons';
import { Gap, MagicTool, RankTracker, Research } from './components';

const menuItems: MenuItem[] = [
  {
    id: 'research',
    icon: <Icons.Research />,
    label: 'Keyword Research',
    component: <Research />,
  },
  {
    id: 'magic-tool',
    icon: <Icons.Magic />,
    label: 'Keyword Magic Tool',
    component: <MagicTool />,
  },
  {
    id: 'rank-tracker',
    icon: <Icons.Swap />,
    label: 'Keyword Rank Tracker',
    component: <RankTracker />,
  },
  {
    id: 'gap',
    icon: <Icons.Timeline />,
    label: 'Keyword Gap',
    component: <Gap />,
  },
];

const KeywordComponent = () => {
  const [activeItem, setActiveItem] = useState(menuItems[0].id);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleItemClick = (id: string) => {
    setActiveItem(id);
  };

  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const activeComponent = menuItems.find(
    (item) => item.id === activeItem
  )?.component;

  // const activeMenuItem = menuItems.find((item) => item.id === activeItem);

  // // Nếu có layout thì wrap component trong layout
  // const activeComponent = activeMenuItem?.layout ? (
  //   <activeMenuItem.layout>{activeMenuItem.component}</activeMenuItem.layout>
  // ) : (
  //   activeMenuItem?.component
  // );

  return (
    <div className="flex">
      <SideMenu
        items={menuItems}
        activeItem={activeItem}
        isCollapsed={isCollapsed}
        onItemClick={handleItemClick}
        onToggleCollapse={handleToggleCollapse}
      />
      <div className="flex-1 p-0 bg-blue-50">
        <div className="h-full">{activeComponent}</div>
      </div>
    </div>
  );
};

export default KeywordComponent;
