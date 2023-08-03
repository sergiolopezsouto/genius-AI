import { Button } from '@/components/ui/button'
import React from 'react'

const DashboardPage = () => {

  return (
    <>
      <p className='text-6xl text-green-500'>Dashboard Page (protected)</p>
      <Button variant="destructive" size="lg">Click me</Button>
    </>
  )
}

export default DashboardPage