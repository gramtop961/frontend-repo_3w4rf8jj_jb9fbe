function HowItWorks() {
  const steps = [
    {
      title: 'Search and discover',
      desc: 'Use keywords and filters to find professionals who match your needs.',
    },
    {
      title: 'Compare profiles',
      desc: 'Review experience, ratings, and pricing to choose the best fit.',
    },
    {
      title: 'Hire and collaborate',
      desc: 'Book the service, message the pro, and track progress in one place.',
    },
    {
      title: 'Share feedback',
      desc: 'Rate your experience to help others hire with confidence.',
    },
  ]

  return (
    <section id="how" className="py-16 md:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">How hiring works</h2>
        
        <div className="mt-8 grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <div className="h-8 w-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
                {i + 1}
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{s.title}</h3>
              <p className="text-slate-600 text-sm mt-1">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
