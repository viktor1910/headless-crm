import React from 'react';
import { Container } from 'react-bootstrap';
import Text from '../Text';

interface SectionProps {
  title: React.ReactNode;
  subTitle?: string;
  children: React.ReactNode;
}

const Section = ({ title, children, subTitle }: SectionProps) => {
  return (
    <section>
      <Text
        type="title"
        style={{
          textAlign: 'center',
        }}
      >
        {title}
      </Text>
      {subTitle && (
        <Text
          type="title"
          style={{
            textAlign: 'center',
          }}
        >
          {subTitle}
        </Text>
      )}
      <hr
        style={{
          width: '20%',
          margin: '20px auto',
        }}
      />
      <div className="my-5">{children}</div>
    </section>
  );
};

export default Section;
