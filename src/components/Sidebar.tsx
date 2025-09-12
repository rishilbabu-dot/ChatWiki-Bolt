import React, { useState } from 'react';
import { Search, FileText, Hash, Clock, Users } from 'lucide-react';
import { WikiPage, WikiCategory } from '../types';
import { categories } from '../data/mockData';
import { clsx } from 'clsx';

interface SidebarProps {
  pages: WikiPage[];
  selectedPageId: string;
  onPageSelect: (pageId: string) => void;
  onlineUsers: number;
}

export const Sidebar: React.FC<SidebarProps> = ({
  pages,
  selectedPageId,
  onPageSelect,
  onlineUsers,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredPages = pages.filter(page => {
    const matchesSearch = page.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         page.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         page.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || page.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryInfo = (categoryId: string): WikiCategory => {
    return categories.find(cat => cat.id === categoryId) || categories[0];
  };

  const formatDate = (date: Date) => {
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    if (diffInHours < 168) return `${Math.floor(diffInHours / 24)}d ago`;
    return date.toLocaleDateString();
  };

  return (
    <div className="w-80 bg-white border-r border-gray-200 flex flex-col h-full">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
            <FileText className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">ChatWiki</h1>
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <Users className="w-3 h-3" />
              <span>{onlineUsers} online</span>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search pages..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input pl-10 text-sm"
          />
        </div>
      </div>

      {/* Category Filter */}
      <div className="p-4 border-b border-gray-100">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={clsx(
              'px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200',
              selectedCategory === 'all'
                ? 'bg-primary-100 text-primary-800 ring-2 ring-primary-200'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            )}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={clsx(
                'px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1',
                selectedCategory === category.id
                  ? `${category.color} ring-2 ring-opacity-50`
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              )}
            >
              <span>{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Pages List */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <div className="p-2">
          {filteredPages.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <FileText className="w-8 h-8 mx-auto mb-2 opacity-50" />
              <p className="text-sm">No pages found</p>
            </div>
          ) : (
            <div className="space-y-1">
              {filteredPages.map((page) => {
                const categoryInfo = getCategoryInfo(page.category);
                const isSelected = page.id === selectedPageId;
                
                return (
                  <button
                    key={page.id}
                    onClick={() => onPageSelect(page.id)}
                    className={clsx(
                      'w-full text-left p-3 rounded-lg transition-all duration-200 group',
                      isSelected
                        ? 'bg-primary-50 border border-primary-200 shadow-sm'
                        : 'hover:bg-gray-50 border border-transparent'
                    )}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className={clsx(
                        'font-medium text-sm line-clamp-2 group-hover:text-primary-700 transition-colors',
                        isSelected ? 'text-primary-900' : 'text-gray-900'
                      )}>
                        {page.title}
                      </h3>
                      <span className={clsx(
                        'text-xs px-2 py-0.5 rounded-full flex-shrink-0 ml-2',
                        categoryInfo.color
                      )}>
                        {categoryInfo.icon}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{formatDate(page.lastModified)}</span>
                      </div>
                      <span className="text-gray-400">by {page.author}</span>
                    </div>
                    
                    {page.tags.length > 0 && (
                      <div className="flex items-center gap-1 mt-2">
                        <Hash className="w-3 h-3 text-gray-400" />
                        <div className="flex flex-wrap gap-1">
                          {page.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="text-xs text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                          {page.tags.length > 2 && (
                            <span className="text-xs text-gray-400">
                              +{page.tags.length - 2}
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200 bg-gray-50">
        <div className="text-xs text-gray-500 text-center">
          <p>ChatWiki v1.0</p>
          <p className="mt-1">Collaborative knowledge platform</p>
        </div>
      </div>
    </div>
  );
};