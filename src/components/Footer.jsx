function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-600 text-sm">© 2025 FlamesHire. All rights reserved.</p>
        <nav className="flex items-center gap-4 text-sm text-slate-600">
          <a href="#" className="hover:text-slate-900">Privacy</a>
          <a href="#" className="hover:text-slate-900">Terms</a>
          <a href="#" className="hover:text-slate-900">Support</a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
