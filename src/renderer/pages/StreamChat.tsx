import React from 'react';
import {
  makeStyles,
  shorthands,
  Button,
  Toolbar,
  ToolbarButton,
  ToolbarGroup,
} from '@fluentui/react-components';
import {
  MicRegular,
  VideoRegular,
  ShareScreenStartRegular,
  CallEndRegular,
  ChatRegular,
} from '@fluentui/react-icons';

const useStyles = makeStyles({
  chatContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    ...shorthands.padding('10px'),
    boxSizing: 'border-box',
  },
  chatContent: {
    flexGrow: 1,
    ...shorthands.padding('10px'),
    ...shorthands.border('1px', 'solid', '#ccc'),
    ...shorthands.borderRadius('5px'),
    marginBottom: '10px',
    overflowY: 'auto',
  },
  chatInput: {
    display: 'flex',
    ...shorthands.gap('10px'),
  },
  inputField: {
    flexGrow: 1,
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'center',
    ...shorthands.padding('10px'),
    ...shorthands.gap('10px'),
  },
});

function StreamChat(): React.ReactElement {
  const styles = useStyles();

  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatContent}>
        {/* Placeholder for chat messages */}
        <p>Stream Chat content goes here...</p>
        <p>This is where the live stream and chat will be displayed.</p>
        <p>Screen sharing functionality will be integrated here.</p>
      </div>
      <Toolbar className={styles.toolbar}>
        <ToolbarGroup>
          <ToolbarButton icon={<MicRegular />} aria-label="Toggle microphone" />
          <ToolbarButton icon={<VideoRegular />} aria-label="Toggle camera" />
          <ToolbarButton
            icon={<ShareScreenStartRegular />}
            aria-label="Share screen"
          />
          <ToolbarButton icon={<ChatRegular />} aria-label="Open chat" />
        </ToolbarGroup>
        <ToolbarGroup>
          <Button
            icon={<CallEndRegular />}
            appearance="primary"
            color="danger"
            aria-label="End call"
          >
            End Call
          </Button>
        </ToolbarGroup>
      </Toolbar>
    </div>
  );
}

export default StreamChat;
