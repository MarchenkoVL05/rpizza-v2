import React from 'react';

import styles from './search.module.scss';

import searchIcon from '../../assets/icons/searchIcon.svg';
import closeIcon from '../../assets/icons/closing.svg';

export default function Search({ searchValue, setSearchValue }) {
  return (
    <div className={styles.root}>
      <img className={styles.icon} src={searchIcon} alt='searching' />
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        className={styles.input}
        placeholder='Поиск пицц...'
      />
      {searchValue ? (
        <img
          onClick={() => setSearchValue('')}
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
