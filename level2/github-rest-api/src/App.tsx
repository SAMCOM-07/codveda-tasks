import { useEffect, useState } from "react"
import { Calendar, ChevronRight, GitFork, GithubIcon, Link, ListTodo, MapPin, SquareCheckBig, Star, TwitterIcon, UserCheck, UserRound, UserSearch, UsersRound } from "lucide-react"

type User = {
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
}

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  homepage: string;
}

interface UserDetails {
  label: string;
  value: number;
  topIcon: React.ReactNode;
  bottomIcon: React.ReactNode;
  bgGradient: string;
}

function App() {

  const [user, setUser] = useState<User | null>(null);
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.github.com/users/SAMCOM-07");
        const data = await response.json();
        setUser(data);

        const repoRes = await fetch("https://api.github.com/users/SAMCOM-07/repos");
        const repoData = await repoRes.json();
        const filteredRepos = repoData.filter((repo: Repo) => repo.language === 'TypeScript').slice(0, 5);
        setRepos(filteredRepos);

        console.log(data);
        console.log(repoData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  const details = [
    { label: "Repos", value: user?.public_repos || 0, topIcon: <ListTodo size={22} />, bottomIcon: <SquareCheckBig size={32} />, bgGradient: "bg-gradient-to-br from-primary to-primary/65" },
    { label: "Followers", value: user?.followers || 0, topIcon: <UsersRound size={22} />, bottomIcon: <UserCheck size={32} />, bgGradient: "bg-gradient-to-br from-green to-green/65" },
    { label: "Following", value: user?.following || 0, topIcon: <UserSearch size={22} />, bottomIcon: <UserRound size={32} />, bgGradient: "bg-gradient-to-br from-primary2 to-primary2/65" },
  ] as UserDetails[];


  return (
    <div className="min-h-screen bg-muted/85 p-6">


      <div className="max-w-5xl w-full mx-auto">

        {/* search input */}
        <header>
          <input type="text" placeholder="Search github username . . ." className="w-full rounded-full bg-background text-muted-foreground py-3 px-6 outline-0 focus:ring-2 focus:ring-primary shadow-sm" />
        </header>

        {/* main content */}
        <main className="flex flex-col md:flex-row md:items-start gap-3 mt-4">
          <section>

            {/* profile info card */}
            <div className="card flex gap-4 overflow-hidden">
              <img src={user?.avatar_url || "https://avatars.githubusercontent.com/u/123456789?v=4"} alt="Profile Picture" className="w-24 h-24 rounded-full" />
              <div className="space-y-1">
                <h2 className="text-xl font-semibold">{user?.name || "John Doe"}</h2>
                <span className="block text-muted-foreground">@{user?.login || "vercel"}</span>
                <p className="text-sm text-muted-foreground leading-4 line-clamp-3">{user?.bio || "Software Developer"}</p>
                <a
                  href={user?.html_url}
                  target="_blank"
                  className="w-fit mt-2 flex items-center gap-2 bg-primary text-muted px-2 py-1 rounded-lg">
                  <GithubIcon size={20} className="fill-foreground bg-background rounded-full p-0.5" />
                  <span className="text-xs font-semibold">View on Github</span>
                </a>
              </div>
            </div>

            {/* repos  + followers details */}
            <section className="grid grid-cols-3 gap-2 mt-3">
              {
                details && details.length > 0 && details.map((detail, index) => (
                  <div key={index} className={`rounded-lg flex items-center gap-2 justify-between ${detail.bgGradient} p-3 py-2`}>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-muted">{detail.topIcon}</span>
                        <span className="text-2xl font-semibold text-background">{detail.value >= 1000000 ? `${(detail.value / 1000000).toFixed(1)}M` : detail.value >= 1000 ? `${(detail.value / 1000).toFixed(1)}k` : detail.value}</span>
                      </div>
                      <p className="text-sm text-muted">{detail.label}</p>
                    </div>
                    <span className="text-background/30">{detail.bottomIcon}</span>
                  </div>
                ))}
            </section>

            {/* date joined, location + socials */}
            <section className="mt-3 grid grid-cols-2 lg:grid-cols-4 gap-2 text-xs ">
              <div className="card text-muted-foreground flex items-center gap-2">
                <Calendar size={18} />
                <p className="">Joined: {user?.created_at ? new Date(user.created_at).toLocaleDateString(
                  "en-US", { year: "numeric", month: "short", day: "numeric", }
                ) : "Unknown"}</p>
              </div>
              {user?.location &&
                <div className="card text-muted-foreground flex items-center gap-2">
                  <MapPin size={18} className="text-primary2" />
                  <p className=" text-muted-foreground">{user.location}</p>
                </div>
              }
              {
                user?.blog &&
                <div className="card text-muted-foreground flex items-center gap-2 min-w-0">
                  <Link size={18} className="text-primary2 shrink-0" />
                  <a href={user.blog} target="_blank" className="text-muted-foreground hover:underline hover:text-primary truncate">{user?.blog}</a>
                </div>
              }
              {
                user?.twitter_username &&
                <div className="card text-muted-foreground flex items-center gap-2">
                  <TwitterIcon size={18} className="text-transparent fill-primary" />
                  <a href={`https://x.com/${user.twitter_username}`} target="_blank" className=" text-muted-foreground hover:underline hover:text-primary">Twitter</a>
                </div>
              }
            </section>

            {/* repositories */}
            <section className="mt-6">
              <div className="flex items-center gap-4 justify-between mb-4">
                <h3 className="text-lg font-medium">Repositories</h3>
                <a href={`${user?.html_url}/?tab=repositories`} target="_blank" className="flex items-center gap-2 text-primary text-sm group cursor-pointer">View All <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" /></a>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {
                  repos && repos.length > 0 ? repos.slice(0, 4).map((repo) => (
                    <div key={repo.id} className="card hover:bg-accent transition-colors">
                      <a href={repo.html_url} target="_blank" className="inline-block">
                        <h4 className="font-semibold text-primary hover:underline">{repo.name}</h4>
                      </a>
                      <p className="text-sm text-muted-foreground line-clamp-2">{repo.description || "No description provided."}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 mt-2">
                          <span className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Star size={14} />
                            {repo.stargazers_count}
                          </span>
                          <span className="flex items-center gap-1 text-xs text-muted-foreground">
                            <GitFork size={14} />
                            {repo.forks_count}
                          </span>
                        </div>
                        <div className="bg-muted px-1 py-0.5 rounded-full flex items-center gap-1 mt-2 ml-auto w-fit">
                          <span className={`block w-2 h-2 rounded-sm ${repo.language === 'HTML' ? 'bg-destructive' : repo.language === 'JavaScript' ? 'bg-orange' : 'bg-primary'}`} />
                          <span className="text-xs text-muted-foreground ">{repo.language}</span>
                        </div>
                      </div>
                    </div>
                  )) : <p className="w-full text-sm text-muted-foreground text-center py-24">No repositories found.</p>
                }
              </div>
            </section>


          </section>

          {/* side contents */}
          <aside className="md:w-[40%] w-full">
            <div className="card">
              <h3 className="text-lg font-semibold mb-2">Repositories</h3>
            </div>
          </aside>
        </main>

      </div>


    </div>
  )
}

export default App
