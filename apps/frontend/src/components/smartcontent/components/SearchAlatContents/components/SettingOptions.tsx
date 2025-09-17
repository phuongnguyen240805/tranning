import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import React from 'react';

interface ReusablePopoverProps {
  trigger: React.ReactNode;
  content: React.ReactNode;
  contentClassName?: string;
  side?: 'top' | 'right' | 'bottom' | 'left';
  align?: 'start' | 'center' | 'end';
}

export default function ReusablePopover({
  trigger,
  content,
  contentClassName = '',
  side = 'bottom',
  align = 'start',
}: ReusablePopoverProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>{trigger}</PopoverTrigger>
      <PopoverContent
        className={`bg-white border-none text-sm space-y-2 ${contentClassName}`}
        side={side}
        align={align}
      >
        {content}
      </PopoverContent>
    </Popover>
  );
}
