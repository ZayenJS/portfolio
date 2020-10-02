import React, { FC, useState } from 'react';
import styles from './SearchBar.module.scss';

interface SearchBarProps {}

const SearchBar: FC<SearchBarProps> = () => {
  const [value, setValue] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={
        isHovered ? [styles.SearchBar, styles.SearchBar__Hovered].join(' ') : styles.SearchBar
      }>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onBlur={() => setValue('')}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        placeholder="Taper ici pour rechercher"
      />
    </div>
  );
};

export default SearchBar;
