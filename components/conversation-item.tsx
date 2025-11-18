'use client';

import { Conversation } from '@/lib/mock-data';

interface ConversationItemProps {
  conversation: Conversation;
  isSelected: boolean;
  onClick: () => void;
}

export default function ConversationItem({
  conversation,
  isSelected,
  onClick,
}: ConversationItemProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full px-4 py-3 flex items-center gap-3 transition-colors ${
        isSelected
          ? 'bg-sidebar-primary/10 border-l-4 border-sidebar-primary'
          : 'hover:bg-sidebar-accent'
      }`}
    >
      {/* Avatar */}
      <div className="flex-shrink-0">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold text-sm ${
          isSelected
            ? 'bg-sidebar-primary text-sidebar-primary-foreground'
            : 'bg-gradient-to-br from-primary to-accent text-primary-foreground'
        }`}>
          {conversation.avatar}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-semibold text-sidebar-foreground truncate">
            {conversation.name}
          </h3>
          <span className="text-xs text-sidebar-foreground/50 flex-shrink-0">
            {conversation.time}
          </span>
        </div>
        <p className="text-sm text-sidebar-foreground/60 truncate">
          {conversation.lastMessage}
        </p>
      </div>
    </button>
  );
}
