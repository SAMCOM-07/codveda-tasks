# Task Dashboard SPA

A modern, feature-rich task management dashboard built as a Single Page Application with **React**, **TypeScript**, and **Tailwind CSS**. Create, organize, filter, and visualize your tasks through an intuitive and responsive interface with real-time analytics.

**Live Demo:** 
https://tasksdashboard.vercel.app

---

## Features

### Task Management
- **Full CRUD Operations** — Create, read, update, and delete tasks with real-time feedback
- **Persistent Storage** — All tasks are automatically saved to `localStorage` and synced on every change
- **Rich Task Model** — Each task includes a title, description, due date, priority level, status, and category

### Filtering & Search
- **Status Filters** — View tasks by All, Completed, In Progress, or To Do
- **Priority Filters** — Filter by Low, Medium, or High priority
- **Overdue Detection** — Automatically identifies and highlights overdue tasks with pulse animations
- **Real-time Search** — Instantly search tasks by title or description

### Dashboard Analytics
- **Summary Cards** — At-a-glance metrics for Total, Completed, In Progress, and Overdue tasks
- **Status Distribution Chart** — Interactive donut chart (via Recharts) showing task completion breakdown
- **Recent Tasks** — Quick preview of the latest tasks with status indicators

### UI / UX
- **Dark / Light Theme** — Toggle between themes with preference persisted in `localStorage`
- **Fully Responsive** — Adaptive layout for mobile, tablet, and desktop viewports
- **Mobile Navigation** — Bottom hamburger menu for screens under 768px; sidebar for desktop
- **Modal Forms** — Overlay form with field validation, ESC-to-close, and outside-click dismissal
- **Toast Notifications** — Success/error alerts with 3-second auto-dismiss
- **Color-Coded Badges** — Visual indicators for task status and priority at a glance

---

## Tech Stack

| Layer              | Technology                                                    |
| ------------------ | ------------------------------------------------------------- |
| **Framework**      | React 19 · TypeScript 5.9                                     |
| **Build Tool**     | Vite 7                                                        |
| **Styling**        | Tailwind CSS 4 · clsx · tailwind-merge                        |
| **Routing**        | React Router DOM 7                                            |
| **State Mgmt.**    | React Context API + custom hooks                              |
| **Charts**         | Recharts 3                                                    |
| **Icons**          | Lucide React                                                  |
| **Linting**        | ESLint 9 · typescript-eslint · react-hooks & react-refresh    |
| **Deployment**     | Vercel (SPA rewrite configured)                               |

---

## Project Structure

```
src/
├── App.tsx                    # Root layout — Sidebar, Navbar, FormOverlay, Alert
├── main.tsx                   # Entry point — Router + TaskProvider setup
├── index.css                  # Global styles, Tailwind config, theme variables
│
├── pages/
│   ├── dashboard.tsx          # Analytics cards, pie chart, recent tasks
│   ├── tasks.tsx              # Task list with filtering, search, and CRUD
│   └── settings.tsx           # Settings page (placeholder)
│
├── components/
│   ├── Navbar.tsx             # Top navigation bar with page title & theme toggle
│   ├── Sidebar.tsx            # Desktop sidebar navigation
│   ├── HamburgerMenu.tsx      # Mobile bottom navigation
│   ├── TasksTable.tsx         # Data table with filters, search, and actions
│   ├── Filter.tsx             # Reusable dropdown filter component
│   ├── FormOverlay.tsx        # Modal form for creating / editing tasks
│   ├── PieChart.tsx           # Donut chart for task status distribution
│   ├── Alert.tsx              # Toast notification component
│   └── ThemeToogle.tsx        # Light / dark mode toggle switch
│
├── context/
│   ├── CreateContext.tsx      # TaskContext definition
│   └── AppContext.tsx         # TaskProvider with state & localStorage sync
│
├── hooks/
│   └── useTask.tsx            # Custom hook for consuming TaskContext
│
├── lib/
│   └── utils.ts               # cn() — className merge utility (clsx + twMerge)
│
└── types/
    └── types.ts               # TypeScript type definitions (TaskType, etc.)
```

---

## Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **pnpm** (recommended) or npm / yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/SAMCOM-07/codveda-tasks.git
cd level2/task-dashboard-spa

# Install dependencies
pnpm install
```

### Development

```bash
# Start the dev server with hot module replacement
pnpm dev
```

The application will be available at `http://localhost:5173`.

### Production Build

```bash
# Type-check and build for production
pnpm build

# Preview the production build locally
pnpm preview
```

### Linting

```bash
pnpm lint
```

---

## Routes

| Path         | Page         | Description                                  |
| ------------ | ------------ | -------------------------------------------- |
| `/`          | Dashboard    | Analytics overview with charts and summaries  |
| `/tasks`     | Tasks        | Full task management with table and filters   |
| `/settings`  | Settings     | Application settings (placeholder)            |

---

## Data Model

```typescript
interface TaskType {
  id: number;            // Unix timestamp identifier
  title: string;         // Task name (max 30 characters)
  description: string;   // Task details (max 100 characters)
  dueDate: Date;         // Deadline
  priority: "low" | "medium" | "high";
  status: "todo" | "in_progress" | "completed";
  category: "work" | "education" | "personal" | "career";
}
```

---

## Deployment

The project includes a `vercel.json` configuration that rewrites all routes to the root `index.html`, enabling client-side routing on **Vercel**:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

Deploy with a single command:

```bash
vercel --prod
```

---

## License

This project is part of the **Codveda Internship** program.
