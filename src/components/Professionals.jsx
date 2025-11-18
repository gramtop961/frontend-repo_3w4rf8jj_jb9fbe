import { Star, MapPin, MessageSquare } from 'lucide-react'

const samplePros = [
  {
    id: 1,
    name: 'Alex Carter',
    role: 'Web Designer',
    location: 'Remote',
    rating: 4.9,
    reviews: 128,
    price: '$45/hr',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop',
    tags: ['Figma', 'Landing pages', 'Branding'],
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Plumber',
    location: 'San Francisco, CA',
    rating: 4.8,
    reviews: 96,
    price: '$80/hr',
    avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400&auto=format&fit=crop',
    tags: ['Pipes', 'Leak repair', 'Installations'],
  },
  {
    id: 3,
    name: 'Diego Fernández',
    role: 'Personal Trainer',
    location: 'Austin, TX',
    rating: 4.7,
    reviews: 210,
    price: '$60/hr',
    avatar: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=400&auto=format&fit=crop',
    tags: ['Strength', 'Weight loss', 'Mobility'],
  },
  {
    id: 4,
    name: 'Mia Chen',
    role: 'Tax Accountant',
    location: 'Remote',
    rating: 5.0,
    reviews: 54,
    price: '$120/hr',
    avatar: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=400&auto=format&fit=crop',
    tags: ['Taxes', 'Bookkeeping', 'Advisory'],
  },
]

function Professionals({ query = '' }) {
  const filtered = samplePros.filter((p) => {
    const hay = `${p.name} ${p.role} ${p.tags.join(' ')}`.toLowerCase()
    return hay.includes(query.toLowerCase())
  })

  return (
    <section id="professionals" className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl md:3xl font-bold text-slate-900">Top professionals</h2>
            <p className="text-slate-600 mt-1">Browse featured experts ready to help.</p>
          </div>
          <a href="#how" className="text-blue-600 hover:text-blue-700">How hiring works →</a>
        </div>

        {query && (
          <p className="mt-4 text-sm text-slate-600">Showing results for “{query}”.</p>
        )}

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((p) => (
            <article key={p.id} className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden flex flex-col">
              <img src={p.avatar} alt={p.name} className="h-40 w-full object-cover" />
              <div className="p-4 flex-1 flex flex-col">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-slate-900">{p.name}</h3>
                  <span className="text-slate-700 font-medium">{p.price}</span>
                </div>
                <p className="text-slate-600 text-sm">{p.role}</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-slate-600">
                  <MapPin className="h-4 w-4" /> {p.location}
                </div>
                <div className="mt-2 flex items-center gap-1 text-amber-500">
                  <Star className="h-4 w-4 fill-amber-400" />
                  <span className="text-slate-700">{p.rating}</span>
                  <span className="text-slate-500">({p.reviews})</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="px-2 py-1 text-xs rounded-md bg-slate-100 text-slate-700">{t}</span>
                  ))}
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <button className="px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">Hire</button>
                  <button className="px-3 py-2 rounded-md border border-slate-200 text-slate-700 hover:bg-slate-50 inline-flex items-center justify-center gap-2">
                    <MessageSquare className="h-4 w-4" /> Message
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Professionals
