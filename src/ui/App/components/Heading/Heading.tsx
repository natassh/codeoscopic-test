import React from 'react';

const Heading: React.FC<HeadingProps> = ({ className="", children, tag="h2" }) => {
  const classes = `${className} Heading`
  const Tag = `${tag}` as keyof JSX.IntrinsicElements;
  return (
     <Tag className={classes}>{children}</Tag>
  )
};

export {Heading};

type HeadingProps = {
  className?: string,
  children: React.ReactNode,
  tag: string
}



