
const ProfileSkeleton = () => {
  return (
    <div className='space-y-4'>

      {/* profile card */}
      <div className='card flex items-start gap-6'>
        <div className='min-w-20 min-h-20 shimmer bg-muted rounded-full' />
        <div className='space-y-2 w-full'>
          <div className='w-1/2 h-6 bg-muted shimmer rounded-md' />
          <div className='w-1/2 h-4 bg-muted shimmer rounded-md' />
          <div className=' h-4 bg-muted shimmer rounded-md' />
          <div className='w-1/3 h-8 bg-muted shimmer rounded-md' />
        </div>
      </div>

      {/* followers */}
      <div className='grid grid-cols-3 gap-2'>
        {[1, 2, 3].map((_, index) => (
          <div key={index} className='bg-muted card border-background h-16 shimmer' />
        ))}
      </div>

      <div className="mt-3 grid grid-cols-2 lg:grid-cols-4 gap-2">
         {[1, 2, 3, 4].map((_, index) => (
          <div key={index} className='h-10 rounded-md bg-background/50 shimmer' />
        ))}
      </div>
    </div>
  )
}

export default ProfileSkeleton
