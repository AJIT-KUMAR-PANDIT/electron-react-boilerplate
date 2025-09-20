import React from 'react';
import { Button } from '@fluentui/react-components';
import {
  Chat24Regular,
  Subtract24Regular,
  Square24Regular,
  Dismiss24Regular,
} from '@fluentui/react-icons';
import { makeStyles, shorthands, tokens } from '@fluentui/react-components';

const useStyles = makeStyles({
  titleBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '32px',
    backgroundColor: 'transparent',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    ...shorthands.padding('0', '16px'),
    zIndex: 1000,
    WebkitAppRegion: 'drag',
  },
  titleBarLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '12px',
    fontWeight: '400',
    color: tokens.colorNeutralForeground2,
  },
  titleBarControls: {
    display: 'flex',
    WebkitAppRegion: 'no-drag',
  },
  titleBarButton: {
    width: '46px',
    height: '32px',
    minWidth: '46px',
    ...shorthands.borderRadius('0'),
    backgroundColor: 'transparent',
    color: tokens.colorNeutralForeground2,
    '&:hover': {
      backgroundColor: tokens.colorNeutralBackground1Hover,
    },
  },
  closeButton: {
    '&:hover': {
      backgroundColor: '#c42b1c',
      color: 'white',
    },
  },
});

interface TitleBarProps {
  onClose?: () => void;
  onMinimize?: () => void;
  onMaximize?: () => void;
}

export default function TitleBar({ onClose, onMinimize, onMaximize }: TitleBarProps) {
  const styles = useStyles();

  return (
    <div className={styles.titleBar}>
      <div className={styles.titleBarLeft}>
        <Chat24Regular style={{ fontSize: '14px' }} />
        <span>LiveLM Studio</span>
      </div>
      <div className={styles.titleBarControls}>
        <Button
          icon={<Subtract24Regular />}
          className={styles.titleBarButton}
          appearance="subtle"
          onClick={onMinimize}
        />
        <Button
          icon={<Square24Regular />}
          className={styles.titleBarButton}
          appearance="subtle"
          onClick={onMaximize}
        />
        <Button
          icon={<Dismiss24Regular />}
          className={`${styles.titleBarButton} ${styles.closeButton}`}
          appearance="subtle"
          onClick={onClose}
        />
      </div>
    </div>
  );
}