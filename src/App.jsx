import { Brain, Users, Zap, LayoutDashboard, Shield, Smartphone } from 'lucide-react';

const Navbar = () => (
  <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-lg">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600 text-sm font-bold text-white">F</div>
        <span className="text-xl font-bold text-gray-900">FlowTrack</span>
      </div>
      <div className="hidden items-center gap-8 md:flex">
        <a href="#features" className="text-sm font-medium text-gray-600 hover:text-gray-900">Features</a>
        <a href="#pricing" className="text-sm font-medium text-gray-600 hover:text-gray-900">Pricing</a>
        <a href="#testimonials" className="text-sm font-medium text-gray-600 hover:text-gray-900">Testimonials</a>
      </div>
      <button className="rounded-lg bg-primary-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-primary-700">
        Get Started
      </button>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative overflow-hidden px-6 pb-24 pt-16 text-center md:pt-24">
    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary-50/50 to-white" />
    <div className="mx-auto max-w-4xl">
      <span className="inline-block rounded-full bg-primary-100 px-4 py-1.5 text-xs font-semibold text-primary-700">
        New — AI-powered project insights
      </span>
      <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
        Manage Projects,{' '}
        <span className="bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">
          Not Chaos
        </span>
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
        FlowTrack brings clarity to your workflow. Plan, track, and ship
        faster with a tool built for teams who want to move as one.
      </p>
      <div className="mt-10 flex items-center justify-center gap-4">
        <button className="rounded-lg bg-primary-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-200 transition hover:bg-primary-700">
          Start Free Trial
        </button>
        <button className="rounded-lg border border-gray-300 bg-white px-8 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50">
          Watch Demo
        </button>
      </div>
      <p className="mt-4 text-xs text-gray-400">No credit card required · 14-day free trial</p>
    </div>
  </section>
);

const features = [
  { title: 'AI-Powered Insights', desc: 'Get smart project recommendations powered by machine learning that adapt to your team.', icon: Brain },
  { title: 'Real-Time Collaboration', desc: 'Work with your team instantly — edit, comment, and see changes as they happen.', icon: Users },
  { title: 'Automated Workflows', desc: 'Save time with automation. Automate repetitive tasks and focus on what matters.', icon: Zap },
  { title: 'Custom Dashboards', desc: 'See what matters most with fully customizable dashboards tailored to your workflow.', icon: LayoutDashboard },
  { title: 'Secure & Compliant', desc: 'GDPR-ready data protection with enterprise-grade security and compliance certifications.', icon: Shield },
  { title: 'Mobile Responsive', desc: 'Manage projects anywhere with a fully responsive design that works on any device.', icon: Smartphone },
];

const Features = () => (
  <section id="features" className="px-6 py-24">
    <div className="mx-auto max-w-7xl">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Everything your team needs</h2>
        <p className="mt-4 text-gray-600">No bloat, just the tools that actually move projects forward.</p>
      </div>
      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div key={f.title} className="group rounded-2xl border border-gray-200 p-8 transition hover:border-primary-200 hover:shadow-lg hover:shadow-primary-100">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
              <f.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const tiers = [
  {
    name: 'Starter', price: '19', desc: 'Perfect for small teams getting started.',
    features: ['5 projects', '10GB storage', 'Kanban board', 'Basic reporting', 'Email support'],
    featured: false,
  },
  {
    name: 'Professional', price: '49', desc: 'For growing teams that need more power.',
    features: ['50 projects', '100GB storage', 'Timeline & Gantt', 'AI insights', 'Priority support'],
    featured: true,
  },
  {
    name: 'Enterprise', price: 'Custom', desc: 'Security and control for large orgs.',
    features: ['Unlimited projects', 'Unlimited storage', 'SSO & SAML', 'Dedicated success manager', '99.99% SLA'],
    featured: false,
  },
];

const Pricing = () => (
  <section id="pricing" className="bg-gray-50 px-6 py-24">
    <div className="mx-auto max-w-7xl">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Simple, transparent pricing</h2>
        <p className="mt-4 text-gray-600">No hidden fees. Upgrade or cancel anytime.</p>
      </div>
      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`relative rounded-2xl border-2 p-8 ${
              t.featured
                ? 'border-primary-500 bg-white shadow-xl shadow-primary-100'
                : 'border-gray-200 bg-white'
            }`}
          >
            {t.featured && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary-600 px-4 py-1 text-xs font-semibold text-white">
                Most Popular
              </span>
            )}
            <h3 className="text-lg font-semibold text-gray-900">{t.name}</h3>
            <p className="mt-1 text-sm text-gray-500">{t.desc}</p>
            <p className="mt-6 flex items-baseline gap-1">
              {t.price === 'Custom' ? (
                <span className="text-4xl font-bold text-gray-900">Custom</span>
              ) : (
                <>
                  <span className="text-4xl font-bold text-gray-900">${t.price}</span>
                  <span className="text-sm text-gray-500">/month</span>
                </>
              )}
            </p>
            <ul className="mt-8 space-y-3">
              {t.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="h-4 w-4 flex-shrink-0 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
            <button
              className={`mt-8 w-full rounded-lg py-3 text-sm font-semibold transition ${
                t.featured
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-200 hover:bg-primary-700'
                  : 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              {t.name === 'Starter' ? 'Start Free Trial' : t.name === 'Enterprise' ? 'Contact Sales' : `Start ${t.name}`}
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const testimonials = [
  { name: 'Elena Vogt', role: 'CTO, Nimbus Technologies', quote: 'FlowTrack transformed how our distributed team ships products. The real-time collaboration alone saved us hours every week.' },
  { name: 'James Okonkwo', role: 'VP of Engineering, Solara Health', quote: 'We needed a tool that could keep up with our compliance requirements without slowing us down. FlowTrack delivered on both fronts.' },
  { name: 'Yuki Tanaka', role: 'Product Lead, Atlas Robotics', quote: 'The AI-powered insights caught scheduling bottlenecks we didn\'t even know existed. It\'s like having a project analyst on the team.' },
];

const Testimonials = () => (
  <section id="testimonials" className="px-6 py-24">
    <div className="mx-auto max-w-7xl">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Loved by teams worldwide</h2>
        <p className="mt-4 text-gray-600">See what our customers have to say.</p>
      </div>
      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {testimonials.map((t) => (
          <div key={t.name} className="rounded-2xl border border-gray-200 p-8">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-gray-600">&ldquo;{t.quote}&rdquo;</p>
            <div className="mt-6 border-t border-gray-100 pt-4">
              <p className="text-sm font-semibold text-gray-900">{t.name}</p>
              <p className="text-xs text-gray-500">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const stats = [
  { value: '10k+', label: 'Teams' },
  { value: '99.9%', label: 'Uptime' },
  { value: '50M+', label: 'Tasks Tracked' },
  { value: '4.9/5', label: 'User Rating' },
];

const Stats = () => (
  <section className="border-y border-gray-100 bg-gray-50/50 px-6 py-16">
    <div className="mx-auto max-w-7xl">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="text-3xl font-bold text-gray-900 sm:text-4xl">{s.value}</p>
            <p className="mt-1 text-sm text-gray-500">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section className="px-6 py-24">
    <div className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-primary-600 to-primary-800 px-8 py-16 text-center shadow-2xl shadow-primary-200 sm:px-16">
      <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to streamline your workflow?</h2>
      <p className="mx-auto mt-4 max-w-xl text-primary-100">Join thousands of teams already shipping faster with FlowTrack. Start your free trial today.</p>
      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <button className="rounded-lg bg-white px-8 py-3 text-sm font-semibold text-primary-700 transition hover:bg-primary-50">
          Start Free Trial
        </button>
        <button className="rounded-lg border border-primary-400 px-8 py-3 text-sm font-semibold text-white transition hover:bg-primary-700">
          Talk to Sales
        </button>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t border-gray-100 bg-gray-50 px-6 py-16">
    <div className="mx-auto max-w-7xl">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary-600 text-xs font-bold text-white">F</div>
            <span className="text-lg font-bold text-gray-900">FlowTrack</span>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-gray-500">
            Project management made simple. Plan, track, and ship faster with your team.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-900">Product</h3>
          <ul className="mt-4 space-y-3">
            <li><a href="#features" className="text-sm text-gray-500 hover:text-gray-900">Features</a></li>
            <li><a href="#pricing" className="text-sm text-gray-500 hover:text-gray-900">Pricing</a></li>
            <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900">Integrations</a></li>
            <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900">Changelog</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-900">Resources</h3>
          <ul className="mt-4 space-y-3">
            <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900">Documentation</a></li>
            <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900">API Reference</a></li>
            <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900">Blog</a></li>
            <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900">Community</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-900">Company</h3>
          <ul className="mt-4 space-y-3">
            <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900">About</a></li>
            <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900">Privacy</a></li>
            <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900">Terms</a></li>
            <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 sm:flex-row">
        <p className="text-xs text-gray-400">&copy; {new Date().getFullYear()} FlowTrack, Inc. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="text-gray-400 hover:text-gray-600" aria-label="Twitter">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-600" aria-label="LinkedIn">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-600" aria-label="GitHub">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
