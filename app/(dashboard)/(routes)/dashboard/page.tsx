import { UserButton } from '@clerk/nextjs'


const DashboardPage = () => {

  return (
    <div>
      <p className='text-6xl text-green-500'>Dashboard Page (protected)</p>
      <UserButton afterSignOutUrl='/'/>
    </div>
  )
}

export default DashboardPage