import React from 'react';
import { Avatar, Badge } from '@mui/material';
import { red } from '@mui/material/colors';
import styles from './Header.module.scss';
import SrcIcn from '../../assets/src_icn.svg';
import NtfIcn from '../../assets/ntf_icn.svg';

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header__container}>
        <img className={styles.header__icon} src={SrcIcn} />
        <Badge color="error" badgeContent=" " variant="dot">
          <img className={styles.header__icon} src={NtfIcn} />
        </Badge>
        <Avatar
          className={styles.header__avatar}
          alt="user avatar"
          src="../../assets/avatar.jpg"
        />
      </div>
    </div>
  );
}
