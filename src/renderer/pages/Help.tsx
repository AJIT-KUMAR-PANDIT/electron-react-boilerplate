import React from 'react';
import {
  makeStyles,
  shorthands,
  tokens,
  Body1,
} from '@fluentui/react-components';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.padding('20px'),
    gap: '20px',
    backgroundColor: tokens.colorNeutralBackground1,
  },
  title: {
    fontWeight: '600',
    fontSize: '24px',
  },
});

export default function Help() {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <Body1 className={styles.title}>Help</Body1>
      {/* Add help content here */}
      <p>This is the Help page.</p>
    </div>
  );
}
