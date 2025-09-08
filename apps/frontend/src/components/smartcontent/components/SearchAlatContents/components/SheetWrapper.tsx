import {
  Sheet,
  SheetBody,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';
import { useDirection } from '@radix-ui/react-direction';

type SheetWrapperProps = {
  sheetTrigger: React.ReactNode;
  sheetBody?: React.ReactNode;
  sheetFooter?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
};

export default function SheetWrapper({
  sheetTrigger,
  sheetBody,
  sheetFooter,
  title = '',
  description = '',
}: SheetWrapperProps) {
  const direction = useDirection();

  return (
    <Sheet>
      <SheetTrigger asChild>{sheetTrigger}</SheetTrigger>
      <SheetContent dir={direction} className='bg-white w-[80%]'>
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription>{description}</SheetDescription>
        </SheetHeader>
        <SheetBody>{sheetBody}</SheetBody>
        <SheetFooter>{sheetFooter}</SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
