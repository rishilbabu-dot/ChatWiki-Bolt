import React, { useState } from 'react';
import { Edit3, Save, X, Clock, User, Hash, MessageCircle } from 'lucide-react';
import { WikiPage } from '../types';
import { categories } from '../data/mockData';
import { clsx } from 'clsx';

interface WikiContentProps {
  page: WikiPage;
  onPageUpdate: (pageId: string, content: string) => void;
  onChatToggle: () => void;
  isChatOpen: boolean;
  messageCount: number;
}

export const WikiContent: React.FC<WikiContentProps> = ({
  page,
  onPageUpdate,
  onChatToggle,
  isChatOpen,
  messageCount,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(page.content);

  const handleSave = () => {
    onPageUpdate(page.id, editContent);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditContent(page.content);
    setIsEditing(false);
  };

  const formatContent = (content: string) => {
    // Simple markdown-like formatting
    return content
      .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold mb-4 text-gray-900">$1</h1>')
      .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-semibold mb-3 text-gray-800 mt-6">$1</h2>')
      .replace(/^### (.*$)/gm, '<h3 class="text-xl font-medium mb-2 text-gray-700 mt-4">$1</h3>')
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
      .replace(/`(.*?)`/g, '<code class="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">$1</code>')
      .replace(/^> (.*$)/gm, '<blockquote class="border-l-4 border-primary-500 pl-4 italic text-gray-600 my-4">$1</blockquote>')
      .replace(/^- (.*$)/gm, '<li class="ml-4">$1</li>')
      .replace(/^\d+\. (.*$)/gm, '<li class="ml-4">$1</li>')
      .replace(/\n\n/g, '</p><p class="mb-4">')
      .replace(/^(?!<[h|l|b])/gm, '<p class="mb-4">')
      .replace(/\n/g, '<br>');
  };

  const getCategoryInfo = () => {
    return categories.find(cat => cat.id === page.category) || categories[0];
  };

  const categoryInfo = getCategoryInfo();

  return (
    <div className="flex-1 flex flex-col h-full bg-white">
      {/* Header */}
      <div className="border-b border-gray-200 p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl font-bold text-gray-900">{page.title}</h1>
              <span className={clsx('px-3 py-1 rounded-full text-sm font-medium', categoryInfo.color)}>
                {categoryInfo.icon} {categoryInfo.name}
              </span>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                <span>by {page.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>Updated {page.lastModified.toLocaleDateString()}</span>
              </div>
              {page.tags.length > 0 && (
                <div className="flex items-center gap-1">
                  <Hash className="w-4 h-4" />
                  <div className="flex gap-1">
                    {page.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            {!isEditing ? (
              <>
                <button
                  onClick={() => setIsEditing(true)}
                  className="btn-ghost px-4 py-2 text-sm"
                >
                  <Edit3 className="w-4 h-4 mr-2" />
                  Edit
                </button>
                <button
                  onClick={onChatToggle}
                  className={clsx(
                    'btn px-4 py-2 text-sm relative',
                    isChatOpen ? 'btn-primary' : 'btn-secondary'
                  )}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat
                  {messageCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {messageCount > 9 ? '9+' : messageCount}
                    </span>
                  )}
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={handleCancel}
                  className="btn-ghost px-4 py-2 text-sm"
                >
                  <X className="w-4 h-4 mr-2" />
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="btn-primary px-4 py-2 text-sm"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Save
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <div className="p-6">
          {isEditing ? (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Content (Markdown supported)
                </label>
                <textarea
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                  className="w-full h-96 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent font-mono text-sm resize-none"
                  placeholder="Enter your content here..."
                />
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Markdown Quick Reference:</h4>
                <div className="grid grid-cols-2 gap-4 text-xs text-gray-600">
                  <div>
                    <p><code># Heading 1</code></p>
                    <p><code>## Heading 2</code></p>
                    <p><code>**Bold text**</code></p>
                    <p><code>*Italic text*</code></p>
                  </div>
                  <div>
                    <p><code>`Code`</code></p>
                    <p><code>> Blockquote</code></p>
                    <p><code>- List item</code></p>
                    <p><code>1. Numbered item</code></p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="prose prose-lg max-w-none">
              <div
                dangerouslySetInnerHTML={{
                  __html: formatContent(page.content)
                }}
                className="animate-fade-in"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};