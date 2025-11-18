'use client';

import { useState } from 'react';
import { Search, MessageCirclePlus as MessagePlus } from 'lucide-react';
import ConversationItem from './conversation-item';
import { mockConversations } from '@/lib/mock-data';

interface SidebarProps {
  selectedId: number;
  onSelect: (id: number) => void;
}

export default function Sidebar({ selectedId, onSelect }: SidebarProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredConversations = mockConversations.filter(conv =>
    conv.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full sm:w-80 h-full bg-sidebar border-r border-sidebar-border flex flex-col">
      {/* Header */}
      <div className="p-4 sm:p-6 border-b border-sidebar-border">
        <div className="flex items-center justify-between gap-3 mb-4">
          <h1 className="text-2xl font-bold text-sidebar-foreground">Messenger</h1>
          <button className="p-2 hover:bg-sidebar-accent rounded-full transition-colors" aria-label="New message">
            <MessagePlus className="w-5 h-5 text-sidebar-primary" />
          </button>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-sidebar-foreground/50" />
          <input
            type="text"
            placeholder="Search conversations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-sidebar-accent rounded-full text-sidebar-foreground text-sm placeholder:text-sidebar-foreground/40 outline-none focus:ring-2 focus:ring-sidebar-primary transition-all"
          />
        </div>
      </div>

      {/* Conversations List */}
      <div className="flex-1 overflow-y-auto">
        {filteredConversations.length > 0 ? (
          filteredConversations.map((conversation) => (
            <ConversationItem
              key={conversation.id}
              conversation={conversation}
              isSelected={selectedId === conversation.id}
              onClick={() => onSelect(conversation.id)}
            />
          ))
        ) : (
          <div className="p-4 text-center text-sidebar-foreground/50 text-sm">
            No conversations found
          </div>
        )}
      </div>
    </div>
  );
}
