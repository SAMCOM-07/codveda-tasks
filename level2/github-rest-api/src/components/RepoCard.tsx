import { GitFork, Star } from 'lucide-react'
import type { RepoType } from '../types/type'

const RepoCard = ({ repo, style }: { repo: RepoType, style?: string }) => {
  return (
    <div key={repo.id} className={`card hover:bg-accent transition-colors ${style || ''}`}>
      <a href={repo.html_url} target="_blank" className="inline-block">
        <h4 className="font-semibold text-primary hover:underline line-clamp-1">{repo.name}</h4>
      </a>
      <p className="text-sm text-muted-foreground line-clamp-1">{repo.description || "No description provided."}</p>
      <div className="flex items-center justify-between flex-wrap">
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
        {
          repo.language &&
          <div className="bg-muted px-1.5 py-0.5 rounded-full flex items-center gap-2 mt-2 w-fit">
            <span className={`block w-2 h-2 rounded-sm ${repo.language === 'HTML' ? 'bg-destructive' : repo.language === 'JavaScript' ? 'bg-orange' : 'bg-primary'}`} />
            <span className="text-xs text-muted-foreground ">{repo.language}</span>
          </div>
        }
      </div>
    </div>
  )
}

export default RepoCard
