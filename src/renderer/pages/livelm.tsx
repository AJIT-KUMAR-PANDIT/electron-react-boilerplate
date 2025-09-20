import React, { useState, useRef, useEffect } from 'react';
import {
  FluentProvider,
  webDarkTheme,
  webLightTheme,
  Button,
  Input,
  Spinner,
  Dropdown,
  Option,
  makeStyles,
  shorthands,
  tokens,
} from '@fluentui/react-components';
import {
  Send24Regular,
  Add24Regular,
  History24Regular,
  Settings24Regular,
  QuestionCircle24Regular,
  Sparkle24Filled,
  Chat24Regular,
  Subtract24Regular,
  Square24Regular,
  Dismiss24Regular,
} from '@fluentui/react-icons';
import TitleBar from '../components/TitleBar';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import ChatContainer from '../components/ChatContainer';

// Windows 11 styled makeStyles with mica effects and proper spacing
const useStyles = makeStyles({
  root: {
    display: 'flex',
    height: '100vh',
    width: '100vw',
    backgroundColor: tokens.colorNeutralBackground1,
    fontFamily: 'Segoe UI Variable, Segoe UI, system-ui, sans-serif',
    overflow: 'hidden',
  },
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
  content: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    height: '100%',
    position: 'relative',
  },
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
  chatContainer: {
    flexGrow: 1,
    overflowY: 'auto',
    ...shorthands.padding('24px', '32px'),
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    backgroundColor: tokens.colorNeutralBackground1,
    '&::-webkit-scrollbar': {
      width: '8px',
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: 'transparent',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: tokens.colorNeutralStroke2,
      ...shorthands.borderRadius('4px'),
    },
    '&::-webkit-scrollbar-thumb:hover': {
      backgroundColor: tokens.colorNeutralStroke1,
    },
  },
  messageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    gap: '8px',
  },
  userMessageContainer: {
    alignItems: 'flex-end',
  },
  messageCard: {
    ...shorthands.padding('16px', '20px'),
    ...shorthands.borderRadius('12px'),
    maxWidth: '75%',
    whiteSpace: 'pre-wrap',
    lineHeight: '1.5',
    fontSize: '14px',
    boxShadow: tokens.shadow4,
    position: 'relative',
  },
  userMessage: {
    backgroundColor: tokens.colorBrandBackground,
    color: tokens.colorNeutralForegroundOnBrand,
    ...shorthands.borderRadius('12px', '12px', '4px', '12px'),
  },
  LiveLMMessage: {
    backgroundColor: tokens.colorNeutralBackground3,
    color: tokens.colorNeutralForeground1,
    ...shorthands.border('1px', 'solid', tokens.colorNeutralStroke2),
    ...shorthands.borderRadius('4px', '12px', '12px', '12px'),
  },
  messageLabel: {
    fontSize: '12px',
    color: tokens.colorNeutralForeground3,
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: '0.02em',
  },
  inputFooter: {
    position: 'sticky',
    bottom: '0',
    backgroundColor: tokens.colorNeutralBackground1,
    backdropFilter: 'blur(30px)',
    ...shorthands.padding('20px', '32px'),
    ...shorthands.borderTop('1px', 'solid', tokens.colorNeutralStroke2),
  },
  inputContainer: {
    position: 'relative',
    maxWidth: '100%',
  },
  chatInput: {
    width: '100%',
    fontSize: '14px',
    ...shorthands.borderRadius('24px'),
    ...shorthands.padding('12px', '48px', '12px', '20px'),
    minHeight: '48px',
    backgroundColor: tokens.colorNeutralBackground3,
    ...shorthands.border('1px', 'solid', tokens.colorNeutralStroke2),
    '&:focus': {
      borderColor: tokens.colorBrandStroke1,
      backgroundColor: tokens.colorNeutralBackground1,
    },
  },
  sendButton: {
    position: 'absolute',
    right: '8px',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '32px',
    height: '32px',
    minWidth: '32px',
    ...shorthands.borderRadius('50%'),
    backgroundColor: tokens.colorBrandBackground,
    color: tokens.colorNeutralForegroundOnBrand,
    '&:hover': {
      backgroundColor: tokens.colorBrandBackgroundHover,
    },
    '&:disabled': {
      backgroundColor: tokens.colorNeutralBackground4,
      color: tokens.colorNeutralForeground4,
    },
  },
  dropdown: {
    ...shorthands.borderRadius('6px'),
    backgroundColor: tokens.colorNeutralBackground3,
    ...shorthands.border('1px', 'solid', tokens.colorNeutralStroke2),
    fontSize: '14px',
    minWidth: '180px',
  },
});

// Main Component - Windows 11 LiveLM Studio UI
export default function LiveLMStudio() {
  const [theme, setTheme] = useState(webDarkTheme);
  const styles = useStyles();

  const onThemeChange = (event: any, data: any) => {
    setTheme(data.optionValue === 'dark' ? webDarkTheme : webLightTheme);
  };

  return (
    <FluentProvider theme={theme}>
      <div className={styles.root}>
        <TitleBar />
        <Sidebar onThemeChange={onThemeChange} />
        <div className={styles.content}>
          <Header />
          <ChatContainer />
        </div>
      </div>
    </FluentProvider>
  );
}
