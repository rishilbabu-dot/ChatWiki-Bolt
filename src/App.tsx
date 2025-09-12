import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { WikiContent } from './components/WikiContent';
import { ChatPanel } from './components/ChatPanel';
import { wikiPages, chatMessages, users } from './data/mockData';
import { WikiPage, ChatMessage } from './types';

function App() {
  const [pages, setPages] = useState<WikiPage[]>(wikiPages);
  const [messages, setMessages] = useState<ChatMessage[]>(chatMessages);
  const [selectedPageId, setSelectedPageId] = useState<string>('1');
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);

  const selectedPage = pages.find(page => page.id === selectedPageId) || pages[0];
  const pageMessages = messages.filter(msg => msg.pageId === selectedPageId);
  const onlineUsers = users.filter(user => user.status === 'online').length;

  const handlePageSelect = (pageId: string) => {
    setSelectedPageId(pageId);
    // Auto-close chat when switching pages on smaller screens
    if (window.innerWidth < 1200) {
      setIsChatOpen(false);
    }
  };

  const handlePageUpdate = (pageId: string, content: string) => {
    setPages(prevPages =>
      prevPages.map(page =>
        page.id === pageId
          ? {
              ...page,
              content,
              lastModified: new Date(),
              author: 'You' // In a real app, this would be the current user
            }
          : page
      )
    );
  };

  const handleSendMessage = (content: string) => {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      pageId: selectedPageId,
      author: 'You', // In a real app, this would be the current user
      content,
      timestamp: new Date(),
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    };

    setMessages(prevMessages => [...prevMessages, newMessage]);
  };

  const handleChatToggle = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="h-screen flex bg-gray-50">
      {/* Sidebar */}
      <Sidebar
        pages={pages}
        selectedPageId={selectedPageId}
        onPageSelect={handlePageSelect}
        onlineUsers={onlineUsers}
      />

      {/* Main Content */}
      <div className="flex-1 flex">
        <WikiContent
          page={selectedPage}
          onPageUpdate={handlePageUpdate}
          onChatToggle={handleChatToggle}
          isChatOpen={isChatOpen}
          messageCount={pageMessages.length}
        />

        {/* Chat Panel */}
        {isChatOpen && (
          <ChatPanel
            pageId={selectedPageId}
            pageTitle={selectedPage.title}
            messages={pageMessages}
            onSendMessage={handleSendMessage}
            onClose={() => setIsChatOpen(false)}
            isOpen={isChatOpen}
          />
        )}
      </div>
    </div>
  );
}

export default App;