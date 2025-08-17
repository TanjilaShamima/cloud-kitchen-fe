// components/CommonModal.tsx
import {
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Button,
    IconButton,
  } from "@material-tailwind/react";
  import { ReactNode } from "react";
  
  type CommonModalProps = {
    open: boolean;
    onClose: () => void;
    title?: string;
    children: ReactNode;
    showFooter?: boolean;
    confirmText?: string;
    cancelText?: string;
    onConfirm?: () => void;
    confirmDisabled?: boolean;
    className?: string;
  };
  
  export default function Modal({
    open,
    onClose,
    title,
    children,
    showFooter = true,
    confirmText = "Confirm",
    cancelText = "Cancel",
    onConfirm,
    confirmDisabled = false,
    className
  }: CommonModalProps) {
    return (
      <Dialog open={open} handler={onClose} size="sm" className={className}>
        <div className="flex items-center justify-between px-4 pt-4">
          <DialogHeader>{title}</DialogHeader>
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={onClose}
            className="mr-2"
          >
            ✕
          </IconButton>
        </div>
        <DialogBody className="px-4">{children}</DialogBody>
  
        {showFooter && (
          <DialogFooter className="px-4">
            {cancelText && <Button variant="text" color="gray" onClick={onClose}>
              {cancelText}
            </Button>}
            {confirmText && <Button
              variant="filled"
              color="red"
              onClick={onConfirm}
              disabled={confirmDisabled}
              className="ml-2"
            >
              {confirmText}
            </Button>}
          </DialogFooter>
        )}
      </Dialog>
    );
  }
  