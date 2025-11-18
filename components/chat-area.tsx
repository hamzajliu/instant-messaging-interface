'use client';

import { useState, useEffect, useRef } from 'react';
import ChatHeader from './chat-header';
import MessageList from './message-list';
import MessageInput from './message-input';
import { mockConversations, Message } from '@/lib/mock-data';

interface ChatAreaProps {
  conversationId: number;
}

export default function ChatArea({ conversationId }: ChatAreaProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const conversation = mockConversations.find(c => c.id === conversationId);

  // Load initial messages
  useEffect(() => {
    setIsLoading(true);
    // Simulate loading delay
    setTimeout(() => {
      setMessages(conversation?.messages || []);
      setIsLoading(false);
    }, 300);
  }, [conversationId, conversation]);

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    const newMessage: Message = {
      id: messages.length + 1,
      sender: 'You',
      content: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isOwn: true,
    };

    setMessages([...messages, newMessage]);

    // Simulate reply after 1 second
    setTimeout(() => {
      const replyMessage: Message = {
        id: messages.length + 2,
        sender: conversation?.name || 'Friend',
        content: getRandomReply(),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isOwn: false,
      };
      setMessages(prev => [...prev, replyMessage]);
    }, 1000);
  };

  const getRandomReply = () => {
    const replies = [
      'That sounds great! 😊',
      'I agree with you!',
      'Haha, nice one! 😄',
      '👍',
      'Thanks for letting me know!',
      'That\'s awesome!',
      'Tell me more! 🤔',
    ];
    return replies[Math.floor(Math.random() * replies.length)];
  };

  if (!conversation) {
    return (
      <div className="hidden sm:flex flex-1 items-center justify-center bg-background">
        <div className="text-center">
          <p className="text-foreground/50">Select a conversation to start chatting</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 hidden sm:flex flex-col bg-background">
      {/* Header */}
      <ChatHeader conversation={conversation} />

      {/* Messages */}
      <MessageList 
        messages={messages} 
        isLoading={isLoading}
        messagesEndRef={messagesEndRef}
      />

      {/* Input */}
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
}
