export type UserType = {
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
  message?: string;
};

export type RepoType = {
  id: number;
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  homepage: string;
};

export interface UserDetailsType {
  label: string;
  value: number;
  topIcon: React.ReactNode;
  bottomIcon: React.ReactNode;
  bgGradient: string;
}
