import Link from "next/link";
import { FC, HTMLAttributes, ReactNode } from "react";

interface IWrapper extends HTMLAttributes<HTMLDivElement> {}
interface IHeader extends HTMLAttributes<HTMLHeadElement> {
  logo?: ReactNode;
}

const Wrapper: FC<IWrapper> = ({ children }) => {
  return (
    <main className="max-w-[900px] w-full h-full flex flex-col">
      {children}
    </main>
  );
};

const Conteiner: FC<IWrapper> = ({ children }) => {
  return (
    <div className="p-5 w-full flex flex-col items-center justify-between">
      {children}
    </div>
  );
};

const Header: FC<IHeader> = ({ children, logo }) => {
  return (
    <header className="flex w-full justify-between items-center min-h-[50px] border-b gap-3 border-[#333] px-5">
      <div>{logo}</div>
      <h1>{children}</h1>
      <div>
        <ul className="flex gap-2">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

const Footer: FC<IWrapper> = ({ children }) => {
  return (
    <footer className="flex w-full justify-between items-center min-h-[50px] border-t border-[#333] px-5">
      {children}
    </footer>
  );
};

export default { Wrapper, Conteiner, Header, Footer };
