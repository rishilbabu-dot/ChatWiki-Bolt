export interface WikiPage {
  id: string;
  title: string;
  content: string;
  lastModified: Date;
  author: string;
  tags: string[];
  category: string;
}

export interface ChatMessage {
  id: string;
  pageId: string;
  author: string;
  content: string;
  timestamp: Date;
  avatar?: string;
}

export interface User {
  id: string;
  name: string;
  avatar?: string;
  status: 'online' | 'offline' | 'away';
}

export interface WikiCategory {
  id: string;
  name: string;
  icon: string;
  color: string;
}