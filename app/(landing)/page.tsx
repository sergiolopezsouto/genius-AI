import { Button } from '@/components/ui/button'
import Link from 'next/link'


const LandingPage = () => {

  return (
    <>
      <p>Landing Page (unprotected)</p>
      <div>
        <Link href="/sign-up">
          <Button>Register</Button>
        </Link>
        <Link href="/sign-in">
          <Button>Login</Button>
        </Link>        
      </div>
    </>
  )
}

export default LandingPage