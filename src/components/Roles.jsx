import { Shield, Briefcase, User, Lifebuoy } from 'lucide-react'

const roles = [
  {
    icon: Shield,
    title: 'Admin',
    description: 'Manage platform settings, user roles, and service listings.',
  },
  {
    icon: Briefcase,
    title: 'Professional',
    description: 'Create a profile, list services, and interact with clients.',
  },
  { icon: User, title: 'User', description: 'Search, hire, and review professionals.' },
  {
    icon: Lifebuoy,
    title: 'Customer Support',
    description: 'Assist with inquiries and resolve issues for a smooth experience.',
  },
]

function Roles() {
  return (
    <section id="roles" className="py-16 md:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Who uses FlamesHire</h2>
        <p className="text-slate-600 mt-2">Clear roles designed for a smooth marketplace experience.</p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map(({ icon: Icon, title, description }) => (
            <div key={title} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
              <div className="h-10 w-10 rounded-lg bg-blue-600 text-white flex items-center justify-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="text-slate-600 text-sm mt-1">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Roles
