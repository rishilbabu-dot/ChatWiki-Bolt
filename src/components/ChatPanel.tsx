import React, { useState, useRef, useEffect } from 'react';
import { Send, X, Users, Smile, Paperclip } from 'lucide-react';
import { ChatMessage, User } from '../types';
import { users } from '../data/mockData';
import { clsx } from 'clsx';

interface ChatPanelProps {
  pageId: string;
  pageTitle: string;
  messages: ChatMessage[];
  onSendMessage: (content: string) => void;
  onClose: () => void;
  isOpen: boolean;
}

export const ChatPanel: React.FC<ChatPanelProps> = ({
  pageId,
  pageTitle,
  messages,
  onSendMessage,
  onClose,
  isOpen,
}) => {
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSend = () => {
    if (newMessage.trim()) {
      onSendMessage(newMessage.trim());
      setNewMessage('');
      
      // Simulate typing indicator
      setIsTyping(true);
      setTimeout(() => setIsTyping(false), 2000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const getUser = (authorName: string): User | undefined => {
    return users.find(user => user.name === authorName);
  };

  const onlineUsers = users.filter(user => user.status === 'online');

  if (!isOpen) return null;

  return (
    <div className="w-96 bg-white border-l border-gray-200 flex flex-col h-full animate-slide-up">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 bg-gray-50">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-gray-900">Discussion</h3>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-200 rounded-lg transition-colors"
          >
            <X className="w-4 h-4 text-gray-500" />
          </button>
        </div>
        <p className="text-sm text-gray-600 truncate">{pageTitle}</p>
        
        {/* Online Users */}
        <div className="flex items-center gap-2 mt-3">
          <Users className="w-4 h-4 text-gray-400" />
          <div className="flex -space-x-2">
            {onlineUsers.slice(0, 4).map((user) => (
              <div
                key={user.id}
                className="relative"
                title={user.name}
              >
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-6 h-6 rounded-full border-2 border-white"
                />
                <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-400 border border-white rounded-full"></div>
              </div>
            ))}
            {onlineUsers.length > 4 && (
              <div className="w-6 h-6 bg-gray-200 rounded-full border-2 border-white flex items-center justify-center">
                <span className="text-xs text-gray-600">+{onlineUsers.length - 4}</span>
              </div>
            )}
          </div>
          <span className="text-xs text-gray-500">{onlineUsers.length} online</span>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-4">
        {messages.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Users className="w-6 h-6 text-gray-400" />
            </div>
            <p className="text-sm">No messages yet</p>
            <p className="text-xs text-gray-400 mt-1">Start the conversation!</p>
          </div>
        ) : (
          <>
            {messages.map((message) => {
              const user = getUser(message.author);
              return (
                <div key={message.id} className="flex gap-3 chat-message">
                  <img
                    src={message.avatar || user?.avatar || `https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop`}
                    alt={message.author}
                    className="w-8 h-8 rounded-full flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-sm text-gray-900">
                        {message.author}
                      </span>
                      <span className="text-xs text-gray-500">
                        {formatTime(message.timestamp)}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {message.content}
                    </p>
                  </div>
                </div>
              );
            })}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex gap-3 chat-message">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4 text-gray-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-sm text-gray-500">
                      Someone is typing...
                    </span>
                  </div>
                  <div className="typing-indicator">
                    <div className="typing-dot"></div>
                    <div className="typing-dot"></div>
                    <div className="typing-dot"></div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-200 bg-gray-50">
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <input
              ref={inputRef}
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type a message..."
              className="w-full px-3 py-2 pr-20 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
            />
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex gap-1">
              <button
                type="button"
                className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
                title="Add emoji"
              >
                <Smile className="w-4 h-4" />
              </button>
              <button
                type="button"
                className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
                title="Attach file"
              >
                <Paperclip className="w-4 h-4" />
              </button>
            </div>
          </div>
          <button
            onClick={handleSend}
            disabled={!newMessage.trim()}
            className={clsx(
              'px-4 py-2 rounded-lg transition-all duration-200 flex items-center gap-2',
              newMessage.trim()
                ? 'bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            )}
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Press Enter to send, Shift+Enter for new line
        </p>
      </div>
    </div>
  );
};