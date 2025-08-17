import MaterialTailwind from "@material-tailwind/react";

declare module "@material-tailwind/react" {
  interface ButtonProps {
    placeholder?;
    onPointerEnterCapture?;
    onPointerLeaveCapture?;
    crossOrigin?;
  }
  interface BreadcrumbsProps extends ButtonProps {}
  interface NavbarProps {
    placeholder?;
  }

  interface TypographyProps {
    placeholder?;
  }
  interface InputProps {
    onPointerEnterCapture?;
    onPointerLeaveCapture?;
    crossOrigin?;
  }

  interface TextareaProps {
    onPointerEnterCapture?;
    onPointerLeaveCapture?;
  }

  interface MenuItemProps {
    onPointerEnterCapture?;
    onPointerLeaveCapture?;
    placeholder?;
  }

  interface MenuListProps {
    onPointerEnterCapture?;
    onPointerLeaveCapture?;
    placeholder?;
  }

  interface SelectProps {
    onPointerEnterCapture?;
    onPointerLeaveCapture?;
    placeholder?;
  }

  interface SwitchProps {
    onPointerEnterCapture?;
    onPointerLeaveCapture?;
    crossOrigin?;
  }
  interface PopoverContentProps {
    placeholder?;
    onPointerEnterCapture?;
    onPointerLeaveCapture?;
  }
  interface DialogProps {
    placeholder?;
    onPointerEnterCapture?;
    onPointerLeaveCapture?;
  }
  
  interface AccordionProps {
    placeholder?;
    onPointerEnterCapture?;
    onPointerLeaveCapture?;
  }

  interface AccordionHeaderProps {
    placeholder?;
    onPointerEnterCapture?;
    onPointerLeaveCapture?;
  }

  interface RadioProps {
    crossOrigin?;
    onPointerEnterCapture?;
    onPointerLeaveCapture?;
  }
  interface ProgressProps {
    placeholder?;
    onPointerEnterCapture?;
    onPointerLeaveCapture?;
  }

  interface ModalProps {
    placeholder?;
    onPointerEnterCapture?;
    onPointerLeaveCapture?;
  }

  interface DialogHeaderProps {
    placeholder?;
    onPointerEnterCapture?;
    onPointerLeaveCapture?;
  }

  interface DialogBodyProps {
    placeholder?;
    onPointerEnterCapture?;
    onPointerLeaveCapture?;
  }

  interface DialogFooterProps {
    placeholder?;
    onPointerEnterCapture?;
    onPointerLeaveCapture?;
  }

  interface IconButtonProps {
    placeholder?;
    onPointerEnterCapture?;
    onPointerLeaveCapture?;
  }

  interface TabsHeaderProps extends ButtonProps {}

  interface TabProps extends ButtonProps {}

  interface TabsBodyProps extends ButtonProps {}
}