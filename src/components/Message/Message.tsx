import React, { CSSProperties, FC } from 'react';

interface MessageProps {
  content: string;
  className?: string;
  style?: CSSProperties;
}

const Message: FC<MessageProps> = ({ content, style, className }) => (
  <div className={className} style={style}>
    {content}
  </div>
);

export default Message;
