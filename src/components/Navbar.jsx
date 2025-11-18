import { Menu, Search } from 'lucide-react'

function Navbar() {
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 font-semibold text-slate-900">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-blue-600 text-white font-bold">F</span>
          <span className="tracking-tight">FlamesHire</span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          <a href="#roles" className="text-slate-600 hover:text-slate-900">Roles</a>
          <a href="#professionals" className="text-slate-600 hover:text-slate-900">Professionals</a>
          <a href="#how" className="text-slate-600 hover:text-slate-900">How it works</a>
          <a href="/test" className="text-slate-600 hover:text-slate-900">Test</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-slate-200 text-slate-700 hover:bg-slate-50">
            <Search className="h-4 w-4" />
            <span>Search</span>
          </button>
          <button className="px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">Sign in</button>
        </div>

        <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-slate-700">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  )
}

export default Navbar
