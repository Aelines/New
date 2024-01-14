import { ReactNode, StrictMode } from 'react';

interface AppWrapperProps {
  children: ReactNode;
}

export default function AppWrapper({ children }: AppWrapperProps) {
  return <StrictMode>{children}</StrictMode>;
}
