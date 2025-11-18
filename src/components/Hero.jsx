function Hero({ onSearch }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-100 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-cyan-100 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 items-center gap-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
              Find and hire the right professional for your needs
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Connect with trusted experts across dozens of services — from home repairs and design to tech help and coaching.
            </p>

            <div className="mt-6 bg-white border border-slate-200 rounded-xl p-2 shadow-sm flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                placeholder="Search for plumbers, designers, tutors..."
                className="flex-1 px-4 py-3 rounded-md outline-none"
                onKeyDown={(e) => e.key === 'Enter' && onSearch?.(e.target.value)}
              />
              <select className="px-4 py-3 rounded-md border border-slate-200">
                <option>Near me</option>
                <option>Remote</option>
                <option>Within 10km</option>
                <option>Within 25km</option>
              </select>
              <button
                onClick={() => {
                  const input = document.querySelector('input[type="text"]')
                  onSearch?.(input?.value || '')
                }}
                className="px-5 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700"
              >
                Search
              </button>
            </div>

            <p className="mt-3 text-sm text-slate-500">Popular: Plumber, Web Designer, Personal Trainer, Accountant</p>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1200&auto=format&fit=crop"
              alt="Professionals collaborating"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
