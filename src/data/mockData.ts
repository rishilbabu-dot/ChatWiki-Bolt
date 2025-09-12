import { WikiPage, ChatMessage, User, WikiCategory } from '../types';

export const categories: WikiCategory[] = [
  { id: 'general', name: 'General', icon: '📚', color: 'bg-blue-100 text-blue-800' },
  { id: 'technical', name: 'Technical', icon: '⚙️', color: 'bg-green-100 text-green-800' },
  { id: 'guides', name: 'Guides', icon: '📖', color: 'bg-purple-100 text-purple-800' },
  { id: 'api', name: 'API', icon: '🔌', color: 'bg-orange-100 text-orange-800' },
];

export const users: User[] = [
  { id: '1', name: 'Alex Chen', avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop', status: 'online' },
  { id: '2', name: 'Sarah Johnson', avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop', status: 'online' },
  { id: '3', name: 'Mike Rodriguez', avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop', status: 'away' },
  { id: '4', name: 'Emma Wilson', avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop', status: 'online' },
];

export const wikiPages: WikiPage[] = [
  {
    id: '1',
    title: 'Welcome to ChatWiki',
    category: 'general',
    content: `# Welcome to ChatWiki 🎉

ChatWiki is a collaborative knowledge platform that combines the power of wiki-style documentation with real-time chat functionality. Here you can create, edit, and discuss content with your team in one seamless experience.

## Key Features

### 📝 **Collaborative Editing**
- Real-time content editing with markdown support
- Version history and change tracking
- Rich text formatting capabilities

### 💬 **Integrated Chat**
- Page-specific discussions
- Real-time messaging
- User presence indicators

### 🔍 **Smart Organization**
- Categorized content structure
- Powerful search functionality
- Tag-based organization

### 🎨 **Modern Interface**
- Clean, intuitive design
- Responsive layout for all devices
- Dark/light theme support

## Getting Started

1. **Browse Pages**: Use the sidebar to navigate through different wiki pages
2. **Edit Content**: Click the edit button to modify any page content
3. **Join Discussions**: Open the chat panel to discuss pages with other users
4. **Create New Pages**: Add new content to expand the knowledge base

## Best Practices

> **Tip**: Use clear, descriptive titles and organize content with headers for better readability.

- Keep content concise and well-structured
- Use tags to improve discoverability
- Engage in discussions to clarify complex topics
- Regular updates keep information current

---

*Happy collaborating! 🚀*`,
    lastModified: new Date('2024-01-15T10:30:00'),
    author: 'Alex Chen',
    tags: ['welcome', 'getting-started', 'overview'],
  },
  {
    id: '2',
    title: 'Project Architecture',
    category: 'technical',
    content: `# Project Architecture 🏗️

This document outlines the technical architecture and design decisions behind ChatWiki.

## Technology Stack

### Frontend
- **React 18** with TypeScript for type safety
- **Tailwind CSS** for styling and responsive design
- **Lucide React** for consistent iconography
- **Vite** for fast development and building

### State Management
- React hooks for local state
- Context API for global state sharing
- Custom hooks for reusable logic

## Component Structure

\`\`\`
src/
├── components/
│   ├── Sidebar.tsx          # Navigation and page list
│   ├── WikiContent.tsx      # Main content display
│   └── ChatPanel.tsx        # Real-time chat interface
├── types/
│   └── index.ts            # TypeScript definitions
├── data/
│   └── mockData.ts         # Sample data and content
└── App.tsx                 # Main application component
\`\`\`

## Design Principles

### 🎯 **User-Centric Design**
- Intuitive navigation patterns
- Minimal cognitive load
- Accessible interface elements

### ⚡ **Performance First**
- Optimized rendering with React best practices
- Lazy loading for large content
- Efficient state updates

### 🔧 **Maintainable Code**
- TypeScript for type safety
- Modular component architecture
- Consistent coding standards

## Data Flow

1. **Page Selection**: User clicks on sidebar item
2. **Content Loading**: Page data is retrieved and displayed
3. **Chat Integration**: Associated chat messages are loaded
4. **Real-time Updates**: Changes are reflected across all users

## Future Enhancements

- WebSocket integration for real-time collaboration
- Database integration for persistent storage
- User authentication and permissions
- Advanced search with full-text indexing`,
    lastModified: new Date('2024-01-14T15:45:00'),
    author: 'Sarah Johnson',
    tags: ['architecture', 'technical', 'development'],
  },
  {
    id: '3',
    title: 'User Guide',
    category: 'guides',
    content: `# User Guide 📖

Learn how to make the most of ChatWiki with this comprehensive user guide.

## Navigation

### Sidebar Navigation
The sidebar provides quick access to all wiki pages:
- **Search**: Use the search bar to find specific pages
- **Categories**: Pages are organized by category with color-coded badges
- **Recent Activity**: See recently modified pages at the top

### Page Actions
Each page offers several interaction options:
- **Edit**: Modify page content with the edit button
- **Chat**: Open discussions with the chat button
- **Share**: Copy page links for easy sharing

## Content Creation

### Markdown Support
ChatWiki supports rich markdown formatting:

- **Headers**: Use \`#\`, \`##\`, \`###\` for different heading levels
- **Emphasis**: \`*italic*\` and \`**bold**\` text
- **Lists**: Numbered and bulleted lists
- **Code**: Inline \`code\` and code blocks
- **Links**: \`[link text](URL)\` format
- **Quotes**: Use \`>\` for blockquotes

### Best Practices
1. **Structure Content**: Use headers to create clear sections
2. **Add Context**: Include relevant background information
3. **Use Examples**: Provide concrete examples when possible
4. **Keep Updated**: Regular reviews ensure accuracy

## Chat Features

### Real-time Discussions
- **Page-specific**: Each page has its own chat thread
- **User Presence**: See who's currently online
- **Message History**: Full conversation history is preserved
- **Notifications**: Get notified of new messages

### Chat Etiquette
- Stay on topic for the current page
- Use @mentions to reference specific users
- Keep messages concise and clear
- Be respectful and constructive

## Tips & Tricks

### Keyboard Shortcuts
- \`Ctrl/Cmd + K\`: Quick search
- \`Ctrl/Cmd + E\`: Edit current page
- \`Ctrl/Cmd + /\`: Toggle chat panel

### Organization
- Use consistent naming conventions
- Add relevant tags to improve searchability
- Create index pages for complex topics
- Link related pages together

---

*Need help? Ask in the chat or contact the admin team!*`,
    lastModified: new Date('2024-01-13T09:20:00'),
    author: 'Mike Rodriguez',
    tags: ['guide', 'help', 'tutorial'],
  },
  {
    id: '4',
    title: 'API Documentation',
    category: 'api',
    content: `# API Documentation 🔌

Complete reference for the ChatWiki API endpoints and integration methods.

## Authentication

All API requests require authentication using Bearer tokens:

\`\`\`http
Authorization: Bearer YOUR_API_TOKEN
Content-Type: application/json
\`\`\`

## Endpoints

### Pages API

#### Get All Pages
\`\`\`http
GET /api/pages
\`\`\`

**Response:**
\`\`\`json
{
  "pages": [
    {
      "id": "1",
      "title": "Page Title",
      "content": "Page content...",
      "lastModified": "2024-01-15T10:30:00Z",
      "author": "User Name",
      "tags": ["tag1", "tag2"],
      "category": "general"
    }
  ]
}
\`\`\`

#### Get Single Page
\`\`\`http
GET /api/pages/{id}
\`\`\`

#### Create Page
\`\`\`http
POST /api/pages
Content-Type: application/json

{
  "title": "New Page Title",
  "content": "Page content...",
  "category": "general",
  "tags": ["tag1", "tag2"]
}
\`\`\`

#### Update Page
\`\`\`http
PUT /api/pages/{id}
Content-Type: application/json

{
  "title": "Updated Title",
  "content": "Updated content...",
  "tags": ["updated", "tags"]
}
\`\`\`

### Chat API

#### Get Messages
\`\`\`http
GET /api/pages/{pageId}/messages
\`\`\`

#### Send Message
\`\`\`http
POST /api/pages/{pageId}/messages
Content-Type: application/json

{
  "content": "Message content",
  "author": "User Name"
}
\`\`\`

## WebSocket Events

### Real-time Updates
Connect to \`wss://api.chatwiki.com/ws\` for real-time updates:

#### Page Updates
\`\`\`json
{
  "type": "page_updated",
  "pageId": "1",
  "content": "Updated content...",
  "author": "User Name",
  "timestamp": "2024-01-15T10:30:00Z"
}
\`\`\`

#### New Messages
\`\`\`json
{
  "type": "new_message",
  "pageId": "1",
  "message": {
    "id": "msg_123",
    "content": "Hello world!",
    "author": "User Name",
    "timestamp": "2024-01-15T10:30:00Z"
  }
}
\`\`\`

## Error Handling

### HTTP Status Codes
- \`200\`: Success
- \`201\`: Created
- \`400\`: Bad Request
- \`401\`: Unauthorized
- \`404\`: Not Found
- \`500\`: Internal Server Error

### Error Response Format
\`\`\`json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Title is required",
    "details": {
      "field": "title",
      "reason": "missing_required_field"
    }
  }
}
\`\`\`

## Rate Limiting

API requests are limited to:
- **100 requests per minute** for authenticated users
- **10 requests per minute** for unauthenticated requests

Rate limit headers are included in responses:
\`\`\`http
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1642248000
\`\`\`

## SDKs and Libraries

### JavaScript/TypeScript
\`\`\`bash
npm install @chatwiki/sdk
\`\`\`

\`\`\`javascript
import { ChatWikiClient } from '@chatwiki/sdk';

const client = new ChatWikiClient({
  apiKey: 'your-api-key',
  baseUrl: 'https://api.chatwiki.com'
});

// Get all pages
const pages = await client.pages.list();

// Create a new page
const newPage = await client.pages.create({
  title: 'My New Page',
  content: 'Hello world!',
  category: 'general'
});
\`\`\`

---

*For more examples and advanced usage, check out our [GitHub repository](https://github.com/chatwiki/examples).*`,
    lastModified: new Date('2024-01-12T14:15:00'),
    author: 'Emma Wilson',
    tags: ['api', 'documentation', 'reference'],
  },
  {
    id: '5',
    title: 'Troubleshooting',
    category: 'guides',
    content: `# Troubleshooting 🔧

Common issues and solutions for ChatWiki users.

## Common Issues

### Page Loading Problems

**Issue**: Pages not loading or showing blank content
**Solutions**:
1. Refresh the browser page
2. Clear browser cache and cookies
3. Check internet connection
4. Try a different browser

### Chat Not Working

**Issue**: Messages not sending or receiving
**Solutions**:
1. Check WebSocket connection status
2. Verify user authentication
3. Refresh the page to reconnect
4. Contact support if issues persist

### Edit Mode Issues

**Issue**: Cannot save changes or edit button not working
**Solutions**:
1. Ensure you have edit permissions
2. Check for unsaved changes in other tabs
3. Try refreshing and editing again
4. Verify content doesn't exceed size limits

## Performance Issues

### Slow Loading
- Clear browser cache
- Disable browser extensions temporarily
- Check network connection speed
- Use a supported browser version

### High Memory Usage
- Close unused browser tabs
- Restart the browser
- Update to the latest browser version
- Check for memory-intensive extensions

## Browser Compatibility

### Supported Browsers
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Known Issues
- **Internet Explorer**: Not supported
- **Older Safari**: Some features may not work
- **Mobile browsers**: Limited functionality on very old versions

## Error Messages

### "Authentication Failed"
- Check login credentials
- Clear cookies and log in again
- Contact admin for account issues

### "Permission Denied"
- Verify user permissions
- Contact page owner or admin
- Check if page is restricted

### "Connection Lost"
- Check internet connection
- Refresh the page
- Try again in a few minutes

## Getting Help

### Self-Service
1. Check this troubleshooting guide
2. Search the knowledge base
3. Review user documentation

### Contact Support
- **Email**: support@chatwiki.com
- **Chat**: Use the help chat in the bottom right
- **Phone**: +1 (555) 123-4567

### Reporting Bugs
When reporting issues, please include:
- Browser and version
- Steps to reproduce
- Error messages (if any)
- Screenshots (if helpful)

---

*Still having issues? Don't hesitate to reach out to our support team!*`,
    lastModified: new Date('2024-01-11T16:45:00'),
    author: 'Alex Chen',
    tags: ['troubleshooting', 'help', 'support'],
  },
];

export const chatMessages: ChatMessage[] = [
  {
    id: '1',
    pageId: '1',
    author: 'Sarah Johnson',
    content: 'Welcome to ChatWiki! This is a great starting point for new users.',
    timestamp: new Date('2024-01-15T10:35:00'),
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
  },
  {
    id: '2',
    pageId: '1',
    author: 'Mike Rodriguez',
    content: 'I love how the chat is integrated right into each page. Makes collaboration so much easier!',
    timestamp: new Date('2024-01-15T10:37:00'),
    avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
  },
  {
    id: '3',
    pageId: '1',
    author: 'Emma Wilson',
    content: 'The markdown support is fantastic. Really helps with formatting documentation.',
    timestamp: new Date('2024-01-15T10:40:00'),
    avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
  },
  {
    id: '4',
    pageId: '2',
    author: 'Alex Chen',
    content: 'The architecture looks solid. Should we add more details about the database layer?',
    timestamp: new Date('2024-01-14T15:50:00'),
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
  },
  {
    id: '5',
    pageId: '2',
    author: 'Sarah Johnson',
    content: 'Good point! I\'ll add a section about data persistence and caching strategies.',
    timestamp: new Date('2024-01-14T15:52:00'),
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
  },
  {
    id: '6',
    pageId: '3',
    author: 'Emma Wilson',
    content: 'This guide is really comprehensive! New users will find this super helpful.',
    timestamp: new Date('2024-01-13T09:25:00'),
    avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
  },
  {
    id: '7',
    pageId: '4',
    author: 'Mike Rodriguez',
    content: 'The API documentation is thorough. Should we add some more code examples?',
    timestamp: new Date('2024-01-12T14:20:00'),
    avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
  },
  {
    id: '8',
    pageId: '4',
    author: 'Emma Wilson',
    content: 'Great idea! I\'ll add examples for Python and cURL as well.',
    timestamp: new Date('2024-01-12T14:22:00'),
    avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
  },
];