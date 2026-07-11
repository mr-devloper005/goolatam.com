import Link from 'next/link'
import { ArrowRight, BookOpen, PenLine, Search, Sparkles } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import Ads from '@/lib/ads/ads'

const highlights = [
  { icon: BookOpen, label: 'Read deeply', text: 'Calm pages and clear hierarchy make longer stories feel inviting.' },
  { icon: Search, label: 'Follow ideas', text: 'Search, topics, and related reads turn one useful article into a journey.' },
  { icon: PenLine, label: 'Share a voice', text: 'A simple contributor path keeps the attention on the writing.' },
]

export default function AboutPage() {
  return (
    <EditableSiteShell>
      <main className="editable-page">
        <section className="border-b border-[var(--editable-border)] bg-[var(--slot4-surface-bg)]">
          <div className="mx-auto grid max-w-[var(--editable-container)] lg:grid-cols-[130px_minmax(0,1.1fr)_minmax(340px,0.9fr)]">
            <div className="hidden items-center justify-center border-r border-[var(--editable-border)] bg-white lg:flex">
              <span className="editable-serif rotate-180 text-[clamp(4rem,8vw,8rem)] leading-none text-[#b9a487] [writing-mode:vertical-rl]">Our story</span>
            </div>
            <article className="p-7 sm:p-10 lg:p-14">
            <p className="editable-kicker text-[var(--slot4-accent)]">{pagesContent.about.badge}</p>
            <h1 className="editable-serif mt-5 text-5xl font-normal leading-[0.98] text-[var(--slot4-accent)] sm:text-6xl lg:text-7xl">{pagesContent.about.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-[var(--slot4-muted-text)]">{pagesContent.about.description}</p>
            <div className="mt-8 space-y-5 border-l border-[var(--editable-border)] pl-6 text-base leading-8 text-[var(--slot4-muted-text)]">
              {pagesContent.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <Link href="/article" className="mt-9 inline-flex items-center gap-2 bg-[var(--slot4-dark-bg)] px-6 py-3 text-sm font-black text-[var(--slot4-dark-text)]">Explore the journal <ArrowRight className="h-4 w-4" /></Link>
          </article>

          <aside className="grid border-l border-[var(--editable-border)]">
            {pagesContent.about.values.map((value, index) => (
              <div key={value.title} className={`${index === 1 ? 'editable-green' : 'bg-[var(--slot4-surface-bg)] text-[var(--slot4-page-text)]'} border-b border-[var(--editable-border)] p-7 lg:p-9`}>
                <Sparkles className="h-5 w-5 text-[var(--slot4-accent)]" />
                <h2 className="editable-serif mt-4 text-3xl font-normal text-[var(--slot4-accent)]">{value.title}</h2>
                <p className="mt-3 text-sm leading-7 opacity-75">{value.description}</p>
              </div>
            ))}
          </aside>
          </div>
        </section>

        <section className="border-b border-[var(--editable-border)] bg-[var(--slot4-page-bg)]">
          <div className="mx-auto max-w-6xl px-4 py-8 sm:py-10">
            <Ads slot="in-feed" showLabel className="mx-auto w-full" />
          </div>
        </section>

        <section className="mx-auto grid max-w-[var(--editable-container)] md:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.label} className="border-r border-[var(--editable-border)] bg-white/35 p-7 sm:p-9">
              <item.icon className="h-5 w-5 text-[var(--slot4-accent)]" />
              <h3 className="editable-serif mt-4 text-3xl font-normal text-[var(--slot4-accent)]">{item.label}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--slot4-muted-text)]">{item.text}</p>
            </div>
          ))}
        </section>
      </main>
    </EditableSiteShell>
  )
}
