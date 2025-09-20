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

export default function RecentChats() {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <Body1 className={styles.title}>Recent Chats</Body1>
      {/* Add recent chats content here */}
      <p>This is the Recent Chats page.</p>
    </div>
  );
}
