export interface Message {
  id: number;
  sender: string;
  content: string;
  timestamp: string;
  isOwn: boolean;
}

export interface Conversation {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  messages: Message[];
}

export const mockConversations: Conversation[] = [
  {
    id: 0,
    name: 'Creative Director',
    avatar: 'CD',
    lastMessage: 'That presentation was amazing! 👏',
    time: '2:45 PM',
    messages: [
      {
        id: 1,
        sender: 'Creative Director',
        content: 'Hey! Did you get a chance to review the designs?',
        timestamp: '1:20 PM',
        isOwn: false,
      },
      {
        id: 2,
        sender: 'You',
        content: 'Yes! They look fantastic. Really impressed with the color palette.',
        timestamp: '1:25 PM',
        isOwn: true,
      },
      {
        id: 3,
        sender: 'Creative Director',
        content: 'Thanks! I spent a lot of time on that. What do you think about the typography?',
        timestamp: '1:30 PM',
        isOwn: false,
      },
      {
        id: 4,
        sender: 'You',
        content: 'The typography is clean and modern. Perfect for our brand.',
        timestamp: '1:32 PM',
        isOwn: true,
      },
      {
        id: 5,
        sender: 'Creative Director',
        content: 'That presentation was amazing! 👏',
        timestamp: '2:45 PM',
        isOwn: false,
      },
    ],
  },
  {
    id: 1,
    name: 'Design Team',
    avatar: 'DT',
    lastMessage: 'See you tomorrow for the meeting!',
    time: '1:15 PM',
    messages: [
      {
        id: 1,
        sender: 'Design Team',
        content: 'Quick sync: Did everyone see the new guidelines?',
        timestamp: '10:00 AM',
        isOwn: false,
      },
      {
        id: 2,
        sender: 'You',
        content: 'Yes, they look great! Really helpful.',
        timestamp: '10:05 AM',
        isOwn: true,
      },
      {
        id: 3,
        sender: 'Design Team',
        content: 'See you tomorrow for the meeting!',
        timestamp: '1:15 PM',
        isOwn: false,
      },
    ],
  },
  {
    id: 2,
    name: 'Sarah Chen',
    avatar: 'SC',
    lastMessage: 'Let\'s catch up next week! 😊',
    time: '12:30 PM',
    messages: [
      {
        id: 1,
        sender: 'Sarah Chen',
        content: 'How\'s your day going?',
        timestamp: '9:15 AM',
        isOwn: false,
      },
      {
        id: 2,
        sender: 'You',
        content: 'Going well! Just finished a big project. How about you?',
        timestamp: '9:20 AM',
        isOwn: true,
      },
      {
        id: 3,
        sender: 'Sarah Chen',
        content: 'That\'s awesome! Let\'s catch up next week! 😊',
        timestamp: '12:30 PM',
        isOwn: false,
      },
    ],
  },
  {
    id: 3,
    name: 'Alex Rodriguez',
    avatar: 'AR',
    lastMessage: 'Perfect! Thanks again.',
    time: '11:45 AM',
    messages: [
      {
        id: 1,
        sender: 'Alex Rodriguez',
        content: 'Thanks for the help with the project!',
        timestamp: '10:30 AM',
        isOwn: false,
      },
      {
        id: 2,
        sender: 'You',
        content: 'Happy to help! Let me know if you need anything else.',
        timestamp: '10:35 AM',
        isOwn: true,
      },
      {
        id: 3,
        sender: 'Alex Rodriguez',
        content: 'Perfect! Thanks again.',
        timestamp: '11:45 AM',
        isOwn: false,
      },
    ],
  },
  {
    id: 4,
    name: 'Emma Wilson',
    avatar: 'EW',
    lastMessage: 'Looking forward to it!',
    time: '10:20 AM',
    messages: [
      {
        id: 1,
        sender: 'Emma Wilson',
        content: 'Are you available for a call later?',
        timestamp: '9:00 AM',
        isOwn: false,
      },
      {
        id: 2,
        sender: 'You',
        content: 'How about 3 PM?',
        timestamp: '9:05 AM',
        isOwn: true,
      },
      {
        id: 3,
        sender: 'Emma Wilson',
        content: 'Looking forward to it!',
        timestamp: '10:20 AM',
        isOwn: false,
      },
    ],
  },
];
