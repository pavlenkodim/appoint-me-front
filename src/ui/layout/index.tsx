import Link from "next/link";
import { FC, HTMLAttributes, ReactNode } from "react";

interface IWrapper extends HTMLAttributes<HTMLDivElement> {}
interface IHeader extends HTMLAttributes<HTMLHeadElement> {
  logo?: ReactNode;
  description?: ReactNode;
}

const Wrapper: FC<IWrapper> = ({ children }) => {
  return (
    <main className="max-w-[900px] w-full h-full flex flex-col mt-[80px]">
      {children}
    </main>
  );
};

const Conteiner: FC<IWrapper> = ({ children }) => {
  return (
    <div className="p-3 w-full flex flex-col items-center justify-between gap-3">
      {children}
    </div>
  );
};

const Header: FC<IHeader> = ({ children, logo, title, description }) => {
  return (
    <header className="h-[80px]">
      <div className="flex gap items-center">
        {logo}
        <div>
          <h1>{title}</h1>
          <span>{description}</span>
        </div>
      </div>

      <div>{children}</div>
    </header>
  );
};

const Footer: FC<IWrapper> = ({ children }) => {
  return <footer className="h-[100px]">{children}</footer>;
};

export default { Wrapper, Conteiner, Header, Footer };
