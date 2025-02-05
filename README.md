/my-portfolio-blog
│
├── /app
│   ├── /Info                     // Grouped routing for info pages
│   │   ├── /about
│   │   │   └── page.js           // About page
│   │   ├── /contact
│   │   │   └── page.js           // Contact page
│   │   ├── /services
│   │   │   └── page.js           // Services page
│   │   └── /policy
│   │       └── page.js           // Policy page
│   │
│   ├── /blog
│   │   ├── /[slug]
│   │   │   └── page.js           // Dynamic blog post page
│   │   ├── /create
│   │   │   └── page.js           // Create new blog post page
│   │   ├── /edit
│   │   │   └── /[slug]
│   │   │       └── page.js       // Edit existing blog post page
│   │   └── page.js               // Blog overview page
│   │
│   ├── /admin
│   │   ├── /login
│   │   │   └── page.js           // Admin login page
│   │   └── /dashboard
│   │       ├── page.js           // Admin dashboard page
│   │       └── /manage-posts
│   │           └── page.js       // Manage existing blog posts
│   │
│   ├── /loading.js               // Loading screen component
│   ├── /error.js                 // Custom error page
│   ├── /not-found.js             // Custom not found page
│   ├── /layout.js                // Main layout component
│
├── /components                    // Reusable components
│   ├── UI                         // UI components (using ShadCN)
│   │   ├── Button.js              // ShadCN Button component
│   │   ├── Modal.js               // ShadCN Modal component
│   │   ├── Tooltip.js             // ShadCN Tooltip component
│   │   └── ...                    // Other UI components
│   ├── Header.js                  // Header component
│   ├── Footer.js                  // Footer component
│   ├── BlogPost.js                // Blog post component
│   └── Pagination.js              // Pagination component for blog overview
│
├── /redux                         // Redux store and slices
│   ├── store.js                   // Store configuration
│   └── /slices
│       ├── authSlice.js           // Authentication slice
│       ├── blogSlice.js           // Blog management slice
│       └── themeSlice.js          // Theme management slice
│
├── /api                           // API routes
│   ├── /auth                      // Authentication routes
│   │   └── route.js               // Auth handling (e.g., login, logout)
│   ├── /blogs                     // Blog management routes
│   │   ├── route.js               // CRUD operations for blog posts
│   │   └── /[slug]                // Dynamic blog actions (e.g., delete, update)
│   │       └── route.js           // Handles actions based on the blog post slug
│   └── /utils                     // Utility functions for APIs
│
├── /lib                           // Library functions (e.g., API client)
│   ├── axiosInstance.js           // Axios instance configuration
│   └── helpers.js                 // General helper functions
│
├── /styles                        // Global styles and CSS modules
│   ├── globals.css                // Global styles
│   └── /components
│       ├── Header.module.css       // Header styles
│       └── Footer.module.css       // Footer styles
│
├── /public                        // Public assets (images, etc.)
│   └── /images                    // Images folder
│
├── /tests                         // Unit and integration tests
│   ├── /components                // Component tests
│   └── /pages                     // Page tests
│
├── /utils                         // Utility functions
│   └── validation.js              // Input validation functions
│
├── /config                        // Configuration files
│   ├── index.js                   // General configurations (API URLs, secrets)
│   └── constants.js               // Constants used throughout the app
│
├── /middleware                    // Middleware functions
│   └── auth.js                    // Authentication middleware
│
├── .env                           // Environment variables
├── .gitignore                     // Git ignore file
├── package.json                   // Project metadata and dependencies
├── next.config.js                 // Next.js configuration
└── README.md                      // Project documentation
