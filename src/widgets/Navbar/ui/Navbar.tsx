import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

import { Button, Modal } from "shared/ui";

import css from "./Navbar.module.css";

interface NavbarProps {
  className?: string;
}

export const Navbar = (props: NavbarProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const [isOpenAuthModal, setIsOpenAuthModal] = useState(false);

  const toggleModal = useCallback(() => {
    setIsOpenAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={clsx(css.Navbar, className)}>
      <Button onClick={toggleModal} theme="clear_inverted">
        {t("login")}
      </Button>
      <Modal isOpen={isOpenAuthModal} onClose={toggleModal}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid sunt
          obcaecati, perferendis nam nobis itaque cupiditate asperiores id, quod
          aspernatur cum, repellat harum amet commodi debitis neque fugiat
          doloremque molestias?
        </p>
      </Modal>
    </div>
  );
};
