import React, { FC, useState } from 'react';
import classes from './SearchBar.module.scss';

interface SearchBarProps {}

const SearchBar: FC<SearchBarProps> = () => {
  const [value, setValue] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={
        isHovered ? [classes.SearchBar, classes.SearchBar__Hovered].join(' ') : classes.SearchBar
      }>
      <input
        tabIndex={-1}
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
