'use client';

import React, { useState } from 'react';
import { SideMenu } from './SideMenu';
import { MenuItem } from './types';
import { Icons } from './icons';
import * as PageComponents from './components';
import SearchAlatLayout from './components/SearchAlatContents/SearchAlatLayout';

const menuItems: MenuItem[] = [
  {
    id: 'content-list',
    icon: <Icons.FileText />,
    label: 'Content List',
    component: <PageComponents.ContentList />,
  },
  {
    id: 'create-content',
    icon: <Icons.Plus />,
    label: 'Create Content',
    component: <PageComponents.CreateContent />,
  },
  {
    id: 'ai-video',
    icon: <Icons.Video />,
    label: 'AI - Text to Video',
    component: <PageComponents.AIVideo />,
  },
  {
    id: 'video-editor',
    icon: <Icons.List />,
    label: 'Video Editor',
    component: <PageComponents.VideoEditor />,
  },
  {
    id: 'liked-content',
    icon: <Icons.Smile />,
    label: 'Liked Content',
    component: <PageComponents.LikedContent />,
  },
  {
    id: 'interactions',
    icon: <Icons.Trending />,
    label: 'Interactions',
    component: <PageComponents.Interactions />,
  },
  {
    id: 'running-ads',
    icon: <Icons.Ad />,
    label: 'Running Ads',
    component: <PageComponents.RunningAds />,
  },
  {
    id: 'trending',
    icon: <Icons.Trending />,
    label: 'Trending',
    component: <PageComponents.Trending />,
  },
  {
    id: 'douyin',
    icon: <Icons.Tiktok />,
    label: 'Manage Douyin',
    component: <PageComponents.Douyin />,
  },
  {
    id: 'tiktok',
    icon: <Icons.Tiktok />,
    label: 'Manage TikTok',
    component: <PageComponents.TikTok />,
  },
  {
    id: 'threads',
    icon: <Icons.Threads />,
    label: 'Manage Threads',
    component: <PageComponents.Threads />,
  },
  {
    id: 'instagram',
    icon: <Icons.Instagram />,
    label: 'Instagram',
    component: <PageComponents.Instagram />,
  },
  {
    id: 'content genius',
    icon: <Icons.Note />,
    label: 'Content Genius',
    component: <PageComponents.ContentGenius />,
    // layout: SearchAlatLayout,
  },
  {
    id: 'text layout',
    icon: <Icons.Refresh />,
    label: 'Text Layout',
    component: <PageComponents.TextLayout />,
  },
  {
    id: 'onpage audit',
    icon: <Icons.File />,
    label: 'Onpage Audit',
    component: <PageComponents.OnpageAudit />,
  },
  {
    id: 'topical maps',
    icon: <Icons.Topic />,
    label: 'Topical Maps',
    component: <PageComponents.TopicalMaps />,
  },
  {
    id: 'content planner',
    icon: <Icons.Menu />,
    label: 'Content Planner',
    component: <PageComponents.ContentPlanner />,
  },
  {
    id: 'scholar',
    icon: <Icons.Generate />,
    label: 'Scholar',
    component: <PageComponents.Scholar />,
  },
  {
    id: 'meta generator',
    icon: <Icons.LightBulb />,
    label: 'Meta Generator',
    component: <PageComponents.MetaGenerator />,
  },
  {
    id: 'ai content templates',
    icon: <Icons.LightBulb />,
    label: 'AI Content Templates',
    component: <PageComponents.AIContentTemplates />,
  },
  {
    id: 'content rewriting',
    icon: <Icons.Refresh />,
    label: 'Content Rewriting',
    component: <PageComponents.ContentRewriting />,
  },
];

const SmartContentComponent = () => {
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

export default SmartContentComponent;
