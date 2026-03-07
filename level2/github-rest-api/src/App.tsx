import Profile from "./components/Profile";
import Repos from "./components/Repos";
import Activity from "./components/Activity";
import StarredRepos from "./components/StarredRepos";
import useUser from "./hooks/useUser";

import githubLogo from "./assets/github-logo.png";


function App() {

  const { user, error, loadingUser } = useUser();

  const currentUrl = new URL(window.location.href);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const username = formData.get('username')?.toString().trim();

    // i don't want to use react router for this app, so i'm just updating the url with search params and using that to fetch data in the hooks so as to explore other ways

    window.location.href = `${currentUrl.origin}${currentUrl.pathname}${username ? `?username=${username}` : ''}`;
  };

  return (
    <div className="min-h-screen bg-muted/85 p-6">
      <div className="max-w-6xl w-full mx-auto">

        {/* search input */}
        <header className="flex gap-2 items-center">
          <form onSubmit={handleSearch} className="flex-1 flex gap-2 items-center">
            <input type="text" placeholder="Search github username . . ." className="flex-1 rounded-full bg-background text-muted-foreground py-2 px-6 outline-0 focus:ring-2 focus:ring-primary/75 shadow-sm"
              name="username" />
            <button
              type="submit"
              className="px-6 py-2 bg-primary2 hover:bg-primary2/70 active:bg-primary2 text-background rounded-full transition-colors duration-300 shadow-sm">
              Search
            </button>
          </form>
        </header>

        {/* main content */}
        {
          user.login && !user?.message && !error && !loadingUser ?

            <main className="flex flex-col md:flex-row md:items-start gap-3 mt-4">

              {/* profile and repositories */}
              <section className="w-full">

                {/* profile section */}
                <Profile />

                {/* repositories */}
                <Repos />

              </section>

              {/* side contents */}
              <aside className="md:min-w-[35%] md:max-w-[35%] w-full mt-8 md:mt-0 grid grid-cols-1 gap-2">

                {/* starred repos */}
                <StarredRepos />

                {/* activity display + piechart */}
                <Activity />
              </aside>
            </main> :
            <div className="w-full mx-auto flex flex-col gap-6 mt-6">
              <img src={githubLogo} alt="github logo" className="w-48 self-center" />
              <main className="card mt-6 p-6 text-sm text-muted-foreground text-center">
                Please enter a github username to see the profile analytics.
              </main>
            </div>
        }

      </div>
    </div>
  )
}

export default App
