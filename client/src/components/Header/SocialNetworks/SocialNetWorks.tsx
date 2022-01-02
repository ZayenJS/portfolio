import { FC } from 'react';

import classes from './SocialNetWorks.module.scss';

interface SocialNetWorksProps {
  className?: string;
}

const SocialNetWorks: FC<SocialNetWorksProps> = ({ className }) => (
  <ul className={`${classes.SocialNetWorks} ${className ?? ''}`}>
    <li className={classes.SocialNetWorks__Malt}>
      <a href="https://www.malt.fr/profile/davidnogueira" rel="noreferrer noopener" target="_blank">
        Malt <span />
      </a>
    </li>
    <li className={classes.SocialNetWorks__Github}>
      <a href="https://github.com/ZayenJS" rel="noreferrer noopener" target="_blank">
        Github <span />
      </a>
    </li>
    <li className={classes.SocialNetWorks__Twitter}>
      <a href="https://twitter.com/ZayenJS" rel="noreferrer noopener" target="_blank">
        Twitter <span />
      </a>
    </li>
  </ul>
);

export default SocialNetWorks;
