'use client';

import { MoreVertical, Phone, Video } from 'lucide-react';
import { Conversation } from '@/lib/mock-data';

interface ChatHeaderProps {
  conversation: Conversation;
}

export default function ChatHeader({ conversation }: ChatHeaderProps) {
  return (
    <div className="border-b border-border bg-card p-4 sm:p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-semibold text-primary-foreground">
            {conversation.avatar}
          </div>
          <div>
            <h2 className="font-semibold text-foreground">{conversation.name}</h2>
            <p className="text-xs text-foreground/50">Active now</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          
          
           
          <button className="p-2 hover:bg-muted rounded-full transition-colors" aria-label="More options">
            <MoreVertical className="w-5 h-5 text-foreground/70" />
          </button>
        </div>
      </div>
    </div>
  );
}
