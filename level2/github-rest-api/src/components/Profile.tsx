import type { UserDetailsType } from '../types/type';
import { Calendar, GithubIcon, Link, ListTodo, MapPin, SquareCheckBig, TwitterIcon, UserCheck, UserRound, UserSearch, UsersRound } from 'lucide-react';
import useUser from '../hooks/useUser';
import ProfileSkeleton from './loadingSkeletons/ProfileSkeleton';

const Profile = () => {

  const { user, loadingUser } = useUser();

  const details = [
    { label: "Repos", value: user?.public_repos || 0, topIcon: <ListTodo size={22} />, bottomIcon: <SquareCheckBig size={32} />, bgGradient: "bg-gradient-to-br from-primary to-primary/65" },
    { label: "Followers", value: user?.followers || 0, topIcon: <UsersRound size={22} />, bottomIcon: <UserCheck size={32} />, bgGradient: "bg-gradient-to-br from-green to-green/65" },
    { label: "Following", value: user?.following || 0, topIcon: <UserSearch size={22} />, bottomIcon: <UserRound size={32} />, bgGradient: "bg-gradient-to-br from-primary2 to-primary2/65" },
  ] as UserDetailsType[];


  return (
    <>{
      loadingUser ? <ProfileSkeleton /> :
        <section>
          {/* profile info card */}
          <div className="card flex gap-4 overflow-hidden">
            <img src={user?.avatar_url || "https://avatars.githubusercontent.com/u/123456789?v=4"} alt="Profile Picture" className="w-24 h-24 rounded-full" />
            <div className="space-y-1">
              <h2 className="text-xl font-semibold">{user?.name || "Full Name"}</h2>
              <span className="block text-muted-foreground">@{user?.login || "Login"}</span>
              <p className="text-sm text-muted-foreground leading-4 line-clamp-3">{user?.bio || "Bio"}</p>
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
            {user?.created_at &&
              <div className="card text-muted-foreground flex items-center gap-2">
                <Calendar size={18} />
                <p className="">Joined: {user?.created_at ? new Date(user.created_at).toLocaleDateString(
                  "en-US", { year: "numeric", month: "short", day: "numeric", }
                ) : "Unknown"}</p>
              </div>
            }
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
        </section>}
    </>
  )
}

export default Profile



// import { lazy, Suspense } from 'react';
// import type { UserDetailsType } from '../types/type';
// import { Calendar, GithubIcon, Link, ListTodo, MapPin, SquareCheckBig, TwitterIcon, UserCheck, UserRound, UserSearch, UsersRound } from 'lucide-react';
// import useUser from '../hooks/useUser';

// // Lazy load ProfileSkeleton component
// const ProfileSkeleton = lazy(() => import('./loadingSkeletons/ProfileSkeleton'));

// const Profile = () => {
//   const { user, loadingUser } = useUser();

//   const details = [
//     { label: "Repos", value: user?.public_repos || 0, topIcon: <ListTodo size={22} />, bottomIcon: <SquareCheckBig size={32} />, bgGradient: "bg-gradient-to-br from-primary to-primary/65" },
//     { label: "Followers", value: user?.followers || 0, topIcon: <UsersRound size={22} />, bottomIcon: <UserCheck size={32} />, bgGradient: "bg-gradient-to-br from-green to-green/65" },
//     { label: "Following", value: user?.following || 0, topIcon: <UserSearch size={22} />, bottomIcon: <UserRound size={32} />, bgGradient: "bg-gradient-to-br from-primary2 to-primary2/65" },
//   ] as UserDetailsType[];

//   return (
//     <Suspense fallback={<ProfileSkeleton />}>
//       <section>
//         {/* Profile Info Card */}
//         <div className="card flex gap-4 overflow-hidden">
//           <img src={user?.avatar_url || "https://avatars.githubusercontent.com/u/123456789?v=4"} alt="Profile Picture" className="w-24 h-24 rounded-full" />
//           <div className="space-y-1">
//             <h2 className="text-xl font-semibold">{user?.name || "Full Name"}</h2>
//             <span className="block text-muted-foreground">@{user?.login || "Login"}</span>
//             <p className="text-sm text-muted-foreground leading-4 line-clamp-3">{user?.bio || "Bio"}</p>
//             <a
//               href={user?.html_url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-fit mt-2 flex items-center gap-2 bg-primary text-muted px-2 py-1 rounded-lg"
//             >
//               <GithubIcon size={20} className="fill-foreground bg-background rounded-full p-0.5" />
//               <span className="text-xs font-semibold">View on Github</span>
//             </a>
//           </div>
//         </div>

//         {/* Repos + Followers Details */}
//         <section className="grid grid-cols-3 gap-2 mt-3">
//           {details && details.length > 0 && details.map((detail, index) => (
//             <div key={index} className={`rounded-lg flex items-center gap-2 justify-between ${detail.bgGradient} p-3 py-2`}>
//               <div className="space-y-1">
//                 <div className="flex items-center gap-2">
//                   <span className="text-muted">{detail.topIcon}</span>
//                   <span className="text-2xl font-semibold text-background">
//                     {detail.value >= 1000000 ? `${(detail.value / 1000000).toFixed(1)}M` : detail.value >= 1000 ? `${(detail.value / 1000).toFixed(1)}k` : detail.value}
//                   </span>
//                 </div>
//                 <p className="text-sm text-muted">{detail.label}</p>
//               </div>
//               <span className="text-background/30">{detail.bottomIcon}</span>
//             </div>
//           ))}
//         </section>

//         {/* Date Joined, Location + Socials */}
//         <section className="mt-3 grid grid-cols-2 lg:grid-cols-4 gap-2 text-xs">
//           {user?.created_at && (
//             <div className="card text-muted-foreground flex items-center gap-2">
//               <Calendar size={18} />
//               <p>
//                 Joined: {user?.created_at ? new Date(user.created_at).toLocaleDateString(
//                   "en-US", { year: "numeric", month: "short", day: "numeric", }
//                 ) : "Unknown"}
//               </p>
//             </div>
//           )}
//           {user?.location && (
//             <div className="card text-muted-foreground flex items-center gap-2">
//               <MapPin size={18} className="text-primary2" />
//               <p className="text-muted-foreground">{user.location}</p>
//             </div>
//           )}
//           {user?.blog && (
//             <div className="card text-muted-foreground flex items-center gap-2 min-w-0">
//               <Link size={18} className="text-primary2 shrink-0" />
//               <a href={user.blog} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:underline hover:text-primary truncate">
//                 {user?.blog}
//               </a>
//             </div>
//           )}
//           {user?.twitter_username && (
//             <div className="card text-muted-foreground flex items-center gap-2">
//               <TwitterIcon size={18} className="text-transparent fill-primary" />
//               <a href={`https://x.com/${user.twitter_username}`} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:underline hover:text-primary">
//                 Twitter
//               </a>
//             </div>
//           )}
//         </section>
//       </section>
//     </Suspense>
//   );
// };

// export default Profile;
