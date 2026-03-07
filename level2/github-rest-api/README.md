# GitHub Profile Checker

A React-based GitHub profile explorer that fetches and displays comprehensive user data using the **GitHub REST API**. Search for any GitHub username to view their profile, public repositories, starred repos, and language analytics — all in a responsive, modern interface.

**Live Demo:** 
https://githubprofilechecker.vercel.app

---

## Features

- **Profile Overview** — Avatar, name, bio, join date, location, blog, and Twitter links with formatted follower/following/repo counts (e.g., 1.5k, 1.2M)
- **Public Repositories** — Grid display of the 8 most recent repos with star count, fork count, language badge, and direct GitHub links
- **Starred Repositories** — Scrollable list of all repositories the user has starred, with a sticky header
- **Activity & Analytics** — Total contribution count and an interactive donut chart showing language distribution across all public repos
- **Search by Username** — URL-param-based search (`?username=...`) enabling shareable and bookmarkable profile links
- **Loading Skeletons** — Shimmer-animated placeholder cards while data is being fetched
- **Error Handling** — User-friendly messages when a profile or data cannot be retrieved
- **Responsive Layout** — Mobile-first design that adapts from stacked single-column to a sidebar layout on desktop

---

## Tech Stack

| Layer            | Technology                                                 |
| ---------------- | ---------------------------------------------------------- |
| **Framework**    | React 19 · TypeScript 5.9                                  |
| **Build Tool**   | Vite 7                                                     |
| **Styling**      | Tailwind CSS 4                                             |
| **Charts**       | Recharts 3                                                 |
| **Icons**        | Lucide React                                               |
| **Linting**      | ESLint 9 · typescript-eslint · react-hooks & react-refresh |

---

## API Endpoints

| Endpoint                                                   | Purpose                          |
| ---------------------------------------------------------- | -------------------------------- |
| `api.github.com/users/{username}`                          | User profile data                |
| `api.github.com/users/{username}/repos`                    | Public repositories              |
| `api.github.com/users/{username}/starred`                  | Starred repositories             |
| `github-contributions-api.jogruber.de/v4/{username}`       | Total contribution count         |

---

## Project Structure

```
src/
├── App.tsx                        # Main layout — search form, profile + repos grid
├── main.tsx                       # Entry point — renders React app to DOM
├── index.css                      # Tailwind config, theme variables, shimmer animation
│
├── components/
│   ├── Profile.tsx                # User profile card with stats and details
│   ├── Repos.tsx                  # Grid of the 8 most recent public repositories
│   ├── RepoCard.tsx               # Individual repo card (stars, forks, language badge)
│   ├── StarredRepos.tsx           # Scrollable starred repositories list
│   ├── Activity.tsx               # Contributions count + pie chart + language legend
│   ├── PieChart.tsx               # Donut chart for language distribution (Recharts)
│   └── loadingSkeletons/
│       ├── ProfileSkeleton.tsx    # Shimmer placeholder for profile card
│       └── RepoCardSkeleton.tsx   # Shimmer placeholder for repo cards
│
├── hooks/
│   ├── useUser.tsx                # Fetches user profile from GitHub API
│   ├── useRepos.tsx               # Fetches public repositories
│   ├── useStarredRepos.tsx        # Fetches starred repositories
│   └── useAnalytics.tsx           # Fetches total contributions from external API
│
└── types/
    └── type.ts                    # TypeScript interfaces (UserType, RepoType, etc.)
```

---

## Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **pnpm** (recommended) or npm / yarn

### Installation

```bash
# Clone the repository
git https://github.com/SAMCOM-07/codveda-tasks.git
cd level2/github-rest-api

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

## Architecture

### Data Fetching

Each data concern is encapsulated in a dedicated custom hook:

| Hook                | Returns                                      | Source                        |
| ------------------- | -------------------------------------------- | ----------------------------- |
| `useUser()`         | `{ user, loadingUser, error }`               | GitHub Users API              |
| `useRepos()`        | `{ repos, loadingRepos, error }`             | GitHub Repos API              |
| `useStarredRepos()` | `{ starredRepos, loadingStarredRepos, error }`| GitHub Starred API           |
| `useAnalytics()`    | `{ contributions, loadingAnalytic }`         | External Contributions API    |

### State Management

- **No global store** — state is managed at the component level via React hooks
- **URL-driven search** — the username is stored in URL search params (`?username=...`), making profiles shareable and bookmarkable
- **Hooks abstract side effects** — each hook encapsulates its own loading, error, and data state

### Language Analytics

The pie chart tracks language distribution across all public repositories, covering **HTML**, **CSS**, **JavaScript**, **TypeScript**, **Python**, **Java**, **C++**, and an **Other** category — each color-coded with percentage labels.

---

## Data Model

```typescript
interface UserType {
  login: string;
  id: number;
  avatar_url: string;
  name: string;
  bio: string;
  blog: string;
  followers: number;
  following: number;
  public_repos: number;
  created_at: string;
  location: string;
  twitter_username: string;
  html_url: string;
  message?: string;         // Present on API errors
}

interface RepoType {
  id: number;
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  homepage: string;
}
```

---

## Author

**Samuel Shonde** — Frontend Developer (Intern)

---

## License

This project is part of the **Codveda Internship** program and is open-source for learning and practice.
