import React from 'react';
import {
  makeStyles,
  shorthands,
  tokens,
  Body1,
  Switch,
  Label,
} from '@fluentui/react-components';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.padding('20px'),
    gap: '20px',
    backgroundColor: tokens.colorNeutralBackground1,
    // minHeight: '100vh', // Removed as layout handles height
  },
  settingItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    ...shorthands.padding('10px', '0'),
    ...shorthands.borderBottom('1px', 'solid', tokens.colorNeutralStroke2),
    '&:last-child': {
      ...shorthands.borderBottom('none'),
    },
  },
  settingLabel: {
    fontWeight: '600',
  },
});

export default function Settings() {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <Body1 className={styles.settingLabel}>Settings</Body1>

      <div className={styles.settingItem}>
        <Label htmlFor="darkModeToggle">Dark Mode</Label>
        <Switch
          id="darkModeToggle" /* checked={isDarkMode} onChange={toggleDarkMode} */
        />
      </div>

      {/* Add more settings items here */}
    </div>
  );
}
