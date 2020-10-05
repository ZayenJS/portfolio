import React, { FC } from 'react';
import styles from './HTML.module.scss';

interface HTMLProps {
  tagName: string;
  attributes?: { name: string; value: string }[];
  className?: string;
  isDOCTYPE?: boolean;
  isSelfClosing?: boolean;
  isComment?: boolean;
}

const HTML: FC<HTMLProps> = ({
  tagName,
  attributes,
  className,
  isDOCTYPE = false,
  isSelfClosing = false,
  isComment = false,
  children,
}) => {
  let element = <div className={className ? className : ''}></div>;

  if (isSelfClosing) {
    element = (
      <div className={className ? className : ''}>
        <span className="tag">&lt;</span>
        <span className="tag-name">{tagName} </span>
        {attributes
          ? attributes.map((attr) => (
              <>
                <span className="attribute">{attr.name}</span>=
                <span className="string-color">"{attr.value}" </span>
              </>
            ))
          : null}

        <span className="tag">/&gt;</span>
      </div>
    );
  } else if (isDOCTYPE) {
    element = (
      <div>
        <span className="tag">&lt;! </span>
        <span className="tag-name">
          DOCTYPE <span className="attribute">html</span>
        </span>
        <span className="tag">&gt;</span>
      </div>
    );
  } else if (isComment) {
    element = (
      <div className={className ? className : ''}>
        <span className="comment-tag">&lt;!-- </span>
        <br />
        <span className="comments">{children}</span>
        <br />
        <span className="comment-tag"> --&gt;</span>
      </div>
    );
  } else {
    element = (
      <div className={className ? className : ''}>
        <span className="tag">&lt;</span>
        <span className="tag-name">{tagName}</span>
        <span className="tag">&gt;</span>
        {children}
        <span className="tag">&lt;/</span>
        <span className="tag-name">{tagName}</span>
        <span className="tag">&gt;</span>
      </div>
    );
  }
  return element;
};

export default HTML;
