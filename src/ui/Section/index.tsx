import { FC, HTMLAttributes, ReactNode } from "react";

interface ITitle extends HTMLAttributes<HTMLHeadElement> {
  text?: ReactNode | string;
}
interface ISection extends HTMLAttributes<HTMLDivElement> {
  // title?: ReactNode;
}
export const Title: FC<ITitle> = ({ children, className, ...rest }) => {
  return <h2 className={"p-2" + " " + className}>{children}</h2>;
};

const Section: FC<ISection> = ({ children, title, className, ...rest }) => {
  return (
    <div className={"w-full text-center" + " " + className} {...rest}>
      <Title className="text-start">{title}</Title>
      {children}
    </div>
  );
};

export default Section;
