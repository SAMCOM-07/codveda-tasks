const RepoCardSkeleton = () => {
  return (
    <div className="card space-y-2 h-24 bg-background rounded-lg p-3">
      <div className="h-6 bg-muted rounded w-3/4 shimmer" />
      <div className="h-4 bg-muted rounded w-full shimmer" />
      <div className="h-4 rounded w-full flex items-center gap-2 justify-between">
        <div className="h-full bg-muted rounded shimmer w-1/3" />
        <div className="h-full bg-muted rounded shimmer w-1/3" />
      </div>
    </div>
  )
}

export default RepoCardSkeleton;
