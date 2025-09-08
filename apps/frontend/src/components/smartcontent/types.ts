import { LayoutProps } from 'apps/frontend/.next/types/app/(app)/layout';

export interface MenuItem {
  id: string;
  icon: React.ReactNode;
  label: string;
  component: React.ReactNode;
}
