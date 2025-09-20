import React, { useState } from 'react';
import {
  FluentProvider,
  webDarkTheme,
  webLightTheme,
  makeStyles,
  shorthands,
  tokens,
} from '@fluentui/react-components';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    height: '100vh',
    width: '100vw',
    backgroundColor: tokens.colorNeutralBackground1,
    fontFamily: 'Segoe UI Variable, Segoe UI, system-ui, sans-serif',
    overflow: 'hidden',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    height: '100%',
    position: 'relative',
  },
});

interface LayoutProps {
  children: React.ReactNode;
  pageTitle: string;
}

export default function Layout({ children, pageTitle }: LayoutProps) {
  const [theme, setTheme] = useState(webDarkTheme);
  const styles = useStyles();

  const onThemeChange = (event: any, data: any) => {
    setTheme(data.optionValue === 'dark' ? webDarkTheme : webLightTheme);
  };

  return (
    <FluentProvider theme={theme}>
      <div className={styles.root}>
        <Sidebar onThemeChange={onThemeChange} />
        <div className={styles.content}>
          <Header pageTitle={pageTitle} />
          {children}
        </div>
      </div>
    </FluentProvider>
  );
}
