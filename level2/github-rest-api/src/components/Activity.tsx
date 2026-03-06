import RepoPieChart from './PieChart'
import useAnalytics from '../hooks/useAnalytics';

const Activity = () => {

  const { contributions, loadingAnalytic } = useAnalytics();


  return (
    <div className="card">
      <h1 className="font-medium border-b border-border pb-2 mb-2">Activity</h1>

      {contributions > 0 ?
        <p className="text-sm text-muted-foreground mb-4">{contributions} Contributions</p> : loadingAnalytic ? <div className='w-1/2 h-6 mb-3 shimmer bg-muted'/> : <p className="text-sm text-muted-foreground mb-4">No contributions found.</p>
      }

      <div className="flex items-start gap-3">

        {/* left-side */}
        <div className="max-w-[70%] w-full">
          
         <RepoPieChart />
          
          <span className="block"></span>
        </div>

        {/* right-side  */}
        <div className="max-w-[30%] w-full">
          {
            ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Python', 'Other'].map((language, index) => (
              <div key={index} className="flex items-center gap-2 mb-3">
                <span className={`min-w-3 min-h-3 rounded-full ${language === 'HTML' ? 'bg-orange-500' : language === 'CSS' ? 'bg-purple-700' : language === 'JavaScript' ? 'bg-yellow-500' : language === 'TypeScript' ? 'bg-blue-600' : language === 'Python' ? 'bg-blue-400' : 'bg-gray-400'}`}></span>
                <span className='text-sm text-muted-foreground'>{language}</span>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Activity
