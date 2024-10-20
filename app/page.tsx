"use client"
import React from 'react'
import App from './components/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
function page() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
    <App/>
    </QueryClientProvider>
  )
}

export default page
