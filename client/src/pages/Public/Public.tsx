import { FC } from 'react';

export interface PublicProps {}

const Public: FC<PublicProps> = () => {
  return <div className="public">Public Component</div>;
};

export default Public;
