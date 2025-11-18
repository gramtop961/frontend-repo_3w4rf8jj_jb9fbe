import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Roles from './components/Roles'
import Professionals from './components/Professionals'
import HowItWorks from './components/HowItWorks'

function App() {
  const [query, setQuery] = useState('')

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero onSearch={setQuery} />
      <Roles />
      <Professionals query={query} />
      <HowItWorks />

      <footer className="border-t border-slate-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-600">© {new Date().getFullYear()} FlamesHire. All rights reserved.</p>
            <div className="flex items-center gap-6 text-sm text-slate-600">
              <a href="#" className="hover:text-slate-900">Privacy</a>
              <a href="#" className="hover:text-slate-900">Terms</a>
              <a href="#" className="hover:text-slate-900">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
