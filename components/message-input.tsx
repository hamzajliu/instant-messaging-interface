'use client';

import { useState, useRef } from 'react';
import { Send, Smile, Paperclip } from 'lucide-react';

interface MessageInputProps {
  onSendMessage: (message: string) => void;
}

export default function MessageInput({ onSendMessage }: MessageInputProps) {
  const [message, setMessage] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
      inputRef.current?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="border-t border-border bg-card p-4 sm:p-6">
      <div className="flex items-center gap-3">
        {/* Emoji Button */}
        <button
          className="p-2 hover:bg-muted rounded-full transition-colors flex-shrink-0"
          aria-label="Add emoji"
        >
          <Smile className="w-5 h-5 text-foreground/70" />
        </button>

        {/* Attachment Button */}
        <button
          className="p-2 hover:bg-muted rounded-full transition-colors flex-shrink-0"
          aria-label="Attach file"
        >
          <Paperclip className="w-5 h-5 text-foreground/70" />
        </button>

        {/* Input */}
        <input
          ref={inputRef}
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Aa"
          className="flex-1 bg-muted text-foreground placeholder:text-foreground/40 rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-primary transition-all text-sm"
        />

        {/* Send Button */}
        <button
          onClick={handleSend}
          disabled={!message.trim()}
          className="p-2 hover:bg-primary bg-primary/80 disabled:bg-muted disabled:text-foreground/50 text-primary-foreground rounded-full transition-all flex-shrink-0"
          aria-label="Send message"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
