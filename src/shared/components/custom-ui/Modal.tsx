import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/components/shadcn-ui/dialog";

const Modal = ({
  children,
  modalButton,
  modalTitle,
  modalDescription,
}: {
  children: React.ReactNode;
  modalButton: React.ReactNode;
  modalTitle: string;
  modalDescription: string;
}) => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>{modalButton}</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{modalTitle}</DialogTitle>
            <DialogDescription>{modalDescription}</DialogDescription>
            {children}
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Modal;
