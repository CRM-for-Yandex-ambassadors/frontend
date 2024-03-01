import React from 'react';
import { Autocomplete, TextField } from '@mui/material';
import styles from './Filter.module.scss';
import { options } from './FilterOptions';

export default function Filter() {
  return (
    <div className={styles.filter}>
      <div className={styles.filter__container}>
        <Autocomplete
          className={styles.filter__input}
          multiple
          limitTags={1}
          id="multiple-limit-tags"
          options={options}
          renderInput={(params) => (
            <TextField {...params} label="limitTags" placeholder="Favorites" />
          )}
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={options}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Фильтр" />}
        />
      </div>
    </div>
  );
}
