import useStarredRepos from '../hooks/useStarredRepos';
import RepoCardSkeleton from './loadingSkeletons/RepoCardSkeleton';
import RepoCard from './RepoCard';

const StarredRepos = () => {

  const { starredRepos, loadingStarredRepos, error } = useStarredRepos();

  return (
    <div className="starred card pt-0 h-full max-h-120 overflow-hidden overflow-y-auto relative">
      <h3 className="z-50 text-lg font-semibold mb-2 sticky py-2 top-0 bg-background">Starred Repositories</h3>
      <div className="flex flex-col gap-3">
        {
          starredRepos && starredRepos.length > 0 ? starredRepos.map((repo) => (
            <RepoCard key={repo.id} repo={repo} style="bg-accent/50 shadow-none border-0" />
          )) : loadingStarredRepos ? (
            [Array.from({ length: 8 }, (_, i) => <RepoCardSkeleton key={i} />)]
          ) : error ? (
            <p className="text-sm text-muted-foreground text-center py-12">{error}</p>
          ) : (
            <p className="text-sm text-muted-foreground text-center py-12">No starred repositories found.</p>
          )
        }
      </div>
    </div>
  )
}

export default StarredRepos
