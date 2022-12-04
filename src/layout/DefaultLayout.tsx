import React from 'react';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <>
      <div>This is head layout</div>
      <main>{children}</main>
      <div>This is footer</div>
    </>
  );
};

export default PageLayout;
