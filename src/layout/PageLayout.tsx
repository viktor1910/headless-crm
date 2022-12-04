import React from 'react';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return <div>{children}</div>;
};

export default PageLayout;
