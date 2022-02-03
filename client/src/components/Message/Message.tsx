import React, { CSSProperties, FC } from 'react';

interface MessageProps {
  message: string;
  hasError: boolean;
  className?: string;
  style?: CSSProperties;
}

const Message: FC<MessageProps> = ({ message, hasError, style, className }) => (
  <div className={className} style={style}>
    {message}
  </div>
);

export default Message;
