import React from 'react';

import styles from './search.module.scss';

import searchIcon from '../../assets/icons/searchIcon.svg';
import closeIcon from '../../assets/icons/closing.svg';

export default function Search({ searchValue, setSearchValue }) {
  const inputRef = React.useRef();

  const clearSearchInput = () => {
    setSearchValue('');
    inputRef.current.focus();
  };

  return (
    <div className={styles.root}>
      <img className={styles.icon} src={searchIcon} alt='searching' />
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        ref={inputRef}
        className={styles.input}
        placeholder='Поиск пицц...'
      />
      {searchValue ? (
        <img
          onClick={() => clearSearchInput()}
          className={styles.close}
          src={closeIcon}
          alt='close'
        />
      ) : (
        ''
      )}
    </div>
  );
}
