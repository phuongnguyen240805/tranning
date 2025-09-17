'use client';
import { Modal } from '@mantine/core';
import { ReactNode } from 'react';

interface ModalWrapperProps {
  opened: boolean;
  onClose?: () => void;
  title?: string;
  children?: React.ReactNode;
  width?: string;
  height?: string;
  className?: string;
  padding?: string;
  showCloseButton?: boolean;
}

export const ModalWrapper = ({
  opened,
  onClose,
  title,
  children,
  width = '950px',
  height = '100vh',
  className,
  padding,
  showCloseButton,
}: ModalWrapperProps) => {
  return (
    <Modal
      className={`overflow-hidden scroll-smooth h-[${height}] ${className}`}
      opened={opened}
      onClose={onClose}
      title={
        title && <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      }
      withCloseButton={showCloseButton}
      size="xl"
      centered
      styles={{
        modal: {
          maxWidth: width,
          width: width,
          padding: 0,
          borderRadius: 14,
        },
        header: { borderBottom: 'none', padding: 'none', paddingBottom: 0 },
        body: {
          padding: `${padding}`,
          maxHeight: '685px',
          overflowY: 'hidden',
          // Custom scrollbar for modern look
          scrollbarWidth: 'thin',
          scrollbarColor: '#ccc #f1f5f9',
          '&::-webkit-scrollbar': {
            width: 8,
          },
          '&::-webkit-scrollbar-track': {
            background: '#f1f5f9',
            borderRadius: 4,
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#ccc',
            borderRadius: 4,
          },
        },
        close: {
          color: 'gray',
          background: 'transparent',
          boxShadow: '0 2px 8px #eee',
          borderRadius: '50%',
          width: 40,
          height: 40,
          right: 24,
          top: 24,
        },
      }}
    >
      {children}
    </Modal>
  );
};
