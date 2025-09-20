import React, { useState } from 'react';
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
import ChatContainer from '../components/ChatContainer';

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
  toolbar: {
    display: 'flex',
    justifyContent: 'center',
    ...shorthands.padding('10px'),
    ...shorthands.gap('10px'),
  },
  mainContent: {
    display: 'flex',
    flexGrow: 1,
  },
  videoContent: {
    flexGrow: 1,
  },
  chatSidebar: {
    width: '30%',
    height: '70vh',
    overflowY: 'auto',
    borderLeft: '1px solid #ccc',
    padding: '10px',
    boxSizing: 'border-box',
  },
});

function StreamChat(): React.ReactElement {
  const styles = useStyles();
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleToggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className={styles.chatContainer}>
      <div className={styles.mainContent}>
        <div className={styles.videoContent}>
          {/* Placeholder for live stream content */}
          <p>Stream Chat content goes here...</p>
          <p>This is where the live stream and chat will be displayed.</p>
          <p>Screen sharing functionality will be integrated here.</p>
        </div>
        {isChatOpen && (
          <div className={styles.chatSidebar}>
            <ChatContainer />
          </div>
        )}
      </div>
      <Toolbar className={styles.toolbar}>
        <ToolbarGroup>
          <ToolbarButton icon={<MicRegular />} aria-label="Toggle microphone" />
          <ToolbarButton icon={<VideoRegular />} aria-label="Toggle camera" />
          <ToolbarButton
            icon={<ShareScreenStartRegular />}
            aria-label="Share screen"
          />
          <ToolbarButton
            icon={<ChatRegular />}
            aria-label="Open chat"
            onClick={handleToggleChat}
          />
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
