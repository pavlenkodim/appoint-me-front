import { FC } from "react";
import Button from "../types/button.interface";

const ButtonTextOutside: FC<Button> = ({ icon, children }) => {
  return (
    <button className="flex items-center gap-2 flex-wrap">
      <span>{children}</span> <span>{icon}</span>
    </button>
  );
};

export default ButtonTextOutside;
