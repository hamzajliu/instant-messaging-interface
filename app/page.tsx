'use client';

import { useState, useEffect } from 'react';
import Sidebar from '@/components/sidebar';
import ChatArea from '@/components/chat-area';
import { ThemeToggle } from '@/components/theme-toggle';

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const [selectedConversation, setSelectedConversation] = useState(0);

  useEffect(() => {
    // Check for saved theme preference or system preference
    const prefersDark = localStorage.getItem('theme') === 'dark' ||
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setIsDark(prefersDark);
    applyTheme(prefersDark);
  }, []);

  const applyTheme = (dark: boolean) => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    applyTheme(newIsDark);
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
  };

  return (
    <div className="flex h-screen w-full bg-background text-foreground">
      {/* Theme Toggle */}
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
      </div>

      {/* Sidebar */}
      <Sidebar 
        selectedId={selectedConversation}
        onSelect={setSelectedConversation}
      />

      {/* Chat Area */}
      <ChatArea conversationId={selectedConversation} />
    </div>
  );
}
