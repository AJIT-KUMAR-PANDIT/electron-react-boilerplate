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

export default function Support() {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <Body1 className={styles.title}>Support</Body1>
      {/* Add support content here */}
      <p>This is the Support page.</p>
    </div>
  );
}
