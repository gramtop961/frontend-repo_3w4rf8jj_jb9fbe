function CTA() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white/10 p-8 md:p-12 border border-white/20">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Join FlamesHire today</h3>
              <p className="mt-2 text-white/90">Create your account in minutes and start hiring or offering services with confidence.</p>
            </div>
            <div className="flex gap-3 md:justify-end">
              <button className="px-4 py-2 rounded-md bg-white text-blue-700 font-semibold hover:bg-blue-50">I'm a client</button>
              <button className="px-4 py-2 rounded-md bg-slate-900/80 text-white font-semibold hover:bg-slate-900">I'm a professional</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
