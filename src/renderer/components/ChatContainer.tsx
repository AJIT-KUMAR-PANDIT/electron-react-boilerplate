import React, { useState, useRef, useEffect } from 'react';
import {
  Button,
  Input,
  Spinner,
  makeStyles,
  shorthands,
  tokens,
} from '@fluentui/react-components';
import { Send24Regular } from '@fluentui/react-icons';

const useStyles = makeStyles({
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
      borderTopColor: tokens.colorBrandStroke1,
      borderRightColor: tokens.colorBrandStroke1,
      borderBottomColor: tokens.colorBrandStroke1,
      borderLeftColor: tokens.colorBrandStroke1,
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
});

interface Message {
  sender: string;
  text: string;
}

export default function ChatContainer() {
  const styles = useStyles();
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'LiveLM',
      text: "Hello! I'm LiveLM, now with a beautiful Windows 11 interface. How can I assist you today? Feel free to ask me anything!",
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = () => {
    if (input.trim() === '' || isLoading) return;
    const userMessage = { sender: 'user', text: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    setTimeout(() => {
      const LiveLMResponse = {
        sender: 'LiveLM',
        text: `Thanks for your message! This Windows 11-styled interface responds to: "${userMessage.text}". The design now features proper mica effects, rounded corners, and authentic Windows 11 typography for a native experience.`,
      };
      setMessages((prev) => [...prev, LiveLMResponse]);
      setIsLoading(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <main className={styles.chatContainer}>
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`${styles.messageContainer} ${
            msg.sender === 'user' ? styles.userMessageContainer : ''
          }`}
        >
          <div className={styles.messageLabel}>
            {msg.sender === 'user' ? 'You' : 'LiveLM'}
          </div>
          <div
            className={`${styles.messageCard} ${
              msg.sender === 'user' ? styles.userMessage : styles.LiveLMMessage
            }`}
          >
            {msg.text}
          </div>
        </div>
      ))}

      {isLoading && (
        <div className={styles.messageContainer}>
          <div className={styles.messageLabel}>LiveLM</div>
          <div className={`${styles.messageCard} ${styles.LiveLMMessage}`}>
            <Spinner size="tiny" style={{ marginRight: '8px' }} />
            Thinking...
          </div>
        </div>
      )}

      <div ref={chatEndRef} />

      <footer className={styles.inputFooter}>
        <div className={styles.inputContainer}>
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Ask me anything..."
            className={styles.chatInput}
            disabled={isLoading}
          />
          <Button
            icon={<Send24Regular />}
            onClick={handleSendMessage}
            className={styles.sendButton}
            disabled={!input.trim() || isLoading}
          />
        </div>
      </footer>
    </main>
  );
}