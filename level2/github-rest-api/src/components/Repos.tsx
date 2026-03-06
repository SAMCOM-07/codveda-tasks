import RepoCard from './RepoCard';
import { ChevronRight } from 'lucide-react';
import useRepos from '../hooks/useRepos';
import useUser from '../hooks/useUser';
import RepoCardSkeleton from './loadingSkeletons/RepoCardSkeleton';

const Repos = () => {

  const { repos, loadingRepos, error } = useRepos();
  const { user } = useUser();

  return (
    <section className="mt-8">
      <div className="flex items-center gap-4 justify-between mb-3">
        <h3 className="text-lg font-medium">Repositories</h3>
        {repos && repos.length > 0 &&
          <a href={`${user?.html_url}?tab=repositories`} target="_blank" className="flex items-center gap-2 text-primary text-sm group cursor-pointer">View All <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" /></a>
        }
      </div>
      <div className="grid sm:grid-cols-2 gap-3">
        {
          repos && repos.length > 0 ? repos.slice(0, 8).map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          )) : error ? (
            <p className="col-span-full text-sm text-muted-foreground text-center py-24">{error}</p>
          ) : loadingRepos ? [Array.from({ length: 8 }, (_, i) => <RepoCardSkeleton key={i} />)] : (
            <p className="col-span-full text-sm text-muted-foreground text-center py-24">No repositories found.</p>
          )
        }
      </div>
    </section>
  )
}

export default Repos
