import React, { CSSProperties, FC } from 'react';

interface MessageProps {
  successMessage: string;
  errorMessage: string;
  hasError: boolean;
  className?: string;
  style?: CSSProperties;
}

const Message: FC<MessageProps> = ({
  successMessage,
  errorMessage,
  hasError,
  style,
  className,
}) => (
  <div className={className} style={style}>
    {hasError ? errorMessage : successMessage}
  </div>
);

export default Message;
