import { createPortal } from "react-dom";

interface PortalProps {
  children: React.ReactNode;
  domNode?: HTMLElement;
}

export const Portal = (props: PortalProps) => {
  const { children, domNode = document.body } = props;

  return createPortal(children, domNode);
};
