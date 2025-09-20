import React from 'react';
import { Dropdown, Option } from '@fluentui/react-components';
import { Sparkle24Filled } from '@fluentui/react-icons';
import { makeStyles, shorthands, tokens } from '@fluentui/react-components';

const useStyles = makeStyles({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexShrink: 0,
    ...shorthands.padding('48px', '32px', '16px'),
    backgroundColor: 'transparent',
    backdropFilter: 'blur(30px)',
    ...shorthands.borderBottom('1px', 'solid', tokens.colorNeutralStroke2),
  },
  headerTitle: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    fontSize: '24px',
    fontWeight: '600',
    color: tokens.colorNeutralForeground1,
    letterSpacing: '-0.01em',
  },
  dropdown: {
    ...shorthands.borderRadius('6px'),
    backgroundColor: tokens.colorNeutralBackground3,
    ...shorthands.border('1px', 'solid', tokens.colorNeutralStroke2),
    fontSize: '14px',
    minWidth: '180px',
  },
});

export default function Header() {
  const styles = useStyles();

  return (
    <header className={styles.header}>
      <div className={styles.headerTitle}>
        <Sparkle24Filled
          style={{
            color: tokens.colorBrandForeground1,
            fontSize: '28px',
          }}
        />
        <h1>LiveLM</h1>
      </div>
      <Dropdown
        defaultValue="LiveLM 2.5 Flash"
        defaultSelectedOptions={['flash']}
        className={styles.dropdown}
      >
        <Option text="LiveLM 2.5 Flash" value="flash">
          LiveLM 2.5 Flash
        </Option>
        <Option text="LiveLM 2.0 Pro" value="pro">
          LiveLM 2.0 Pro
        </Option>
      </Dropdown>
    </header>
  );
}