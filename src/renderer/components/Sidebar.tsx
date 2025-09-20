import React from 'react';
import { Button, Dropdown, Option } from '@fluentui/react-components';
import {
  Add24Regular,
  History24Regular,
  Settings24Regular,
  QuestionCircle24Regular,
  Chat24Regular,
} from '@fluentui/react-icons';
import { makeStyles, shorthands, tokens } from '@fluentui/react-components';

const useStyles = makeStyles({
  sidebar: {
    display: 'flex',
    flexDirection: 'column',
    width: '320px',
    backgroundColor: tokens.colorNeutralBackground2,
    backdropFilter: 'blur(30px)',
    ...shorthands.padding('48px', '16px', '16px'),
    boxSizing: 'border-box',
    position: 'relative',
  },
  sidebarHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    ...shorthands.padding('8px', '12px', '24px'),
    fontSize: '20px',
    fontWeight: '600',
    letterSpacing: '-0.01em',
  },
  navButton: {
    width: '100%',
    justifyContent: 'flex-start',
    ...shorthands.padding('12px', '16px'),
    height: '40px',
    fontSize: '14px',
    fontWeight: '400',
    ...shorthands.borderRadius('6px'),
    ...shorthands.margin('2px', '0'),
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: tokens.colorNeutralBackground1Hover,
    },
  },
  primaryButton: {
    backgroundColor: tokens.colorBrandBackground,
    color: tokens.colorNeutralForegroundOnBrand,
    '&:hover': {
      backgroundColor: tokens.colorBrandBackgroundHover,
    },
    marginBottom: '8px',
  },
  sidebarFooter: {
    marginTop: 'auto',
    ...shorthands.padding('16px', '0'),
  },
  dropdown: {
    ...shorthands.borderRadius('6px'),
    backgroundColor: tokens.colorNeutralBackground3,
    ...shorthands.border('1px', 'solid', tokens.colorNeutralStroke2),
    fontSize: '14px',
    minWidth: '180px',
  },
});

interface SidebarProps {
  onThemeChange: (event: any, data: any) => void;
}

export default function Sidebar({ onThemeChange }: SidebarProps) {
  const styles = useStyles();

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <Chat24Regular style={{ fontSize: '24px' }} />
        <span>LiveLM Studio</span>
      </div>
      <Button
        icon={<Add24Regular />}
        className={`${styles.navButton} ${styles.primaryButton}`}
      >
        New Chat
      </Button>
      <Button
        icon={<History24Regular />}
        className={styles.navButton}
        appearance="subtle"
      >
        Recent chats
      </Button>
      <Button
        icon={<Settings24Regular />}
        className={styles.navButton}
        appearance="subtle"
      >
        Settings
      </Button>
      <Button
        icon={<QuestionCircle24Regular />}
        className={styles.navButton}
        appearance="subtle"
      >
        Help & support
      </Button>
      <div className={styles.sidebarFooter}>
        <Dropdown
          defaultValue="Dark Theme"
          onOptionSelect={onThemeChange}
          className={styles.dropdown}
        >
          <Option text="Dark Theme" value="dark">
            Dark Theme
          </Option>
          <Option text="Light Theme" value="light">
            Light Theme
          </Option>
        </Dropdown>
      </div>
    </div>
  );
}