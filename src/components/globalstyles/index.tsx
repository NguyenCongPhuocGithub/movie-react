import { ReactNode } from "react";
interface GlobalStyles {
  children: ReactNode;
}

function GlobalStyles({ children }: GlobalStyles) {
  return <div>{children}</div>;
}

export default GlobalStyles;
