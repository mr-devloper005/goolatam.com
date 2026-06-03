import { BookOpen, PenLine, Search, Sparkles } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { slot4BrandConfig } from '@/editable/theme/brand.config'

const highlights = [
  { icon: BookOpen, label: 'Long-form reading', text: 'Article pages are tuned for pacing, hierarchy, and uninterrupted reading.' },
  { icon: Search, label: 'Better discovery', text: 'Search, related reads, and archive cards help readers find the next useful idea.' },
  { icon: PenLine, label: 'Contributor friendly', text: 'Writers get a clear path from account creation to article submission.' },
]

export default function AboutPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[var(--slot4-page-bg)] px-4 py-12 text-[var(--slot4-page-text)] sm:px-6 lg:px-8">
        <section className="mx-auto grid max-w-[var(--editable-container)] gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="border border-[var(--editable-border)] bg-[var(--slot4-surface-bg)] p-7 lg:p-12">
            <p className="editable-kicker text-[var(--slot4-accent)]">{pagesContent.about.badge}</p>
            <h1 className="editable-serif mt-5 text-5xl font-normal leading-[0.98] text-[var(--slot4-accent)] sm:text-6xl">About {slot4BrandConfig.siteName}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-[var(--slot4-muted-text)]">{pagesContent.about.description}</p>
            <div className="mt-8 space-y-5 border-l border-[var(--editable-border)] pl-6 text-base leading-8 text-[var(--slot4-muted-text)]">
              {pagesContent.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </article>

          <aside className="grid gap-4">
            {pagesContent.about.values.map((value, index) => (
              <div key={value.title} className={`${index === 1 ? 'editable-green' : 'bg-[var(--slot4-surface-bg)] text-[var(--slot4-page-text)]'} border border-[var(--editable-border)] p-6`}>
                <Sparkles className="h-5 w-5 text-[var(--slot4-accent)]" />
                <h2 className="editable-serif mt-4 text-3xl font-normal text-[var(--slot4-accent)]">{value.title}</h2>
                <p className="mt-3 text-sm leading-7 opacity-75">{value.description}</p>
              </div>
            ))}
          </aside>
        </section>

        <section className="mx-auto mt-8 grid max-w-[var(--editable-container)] gap-4 md:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.label} className="border border-[var(--editable-border)] bg-white/55 p-5">
              <item.icon className="h-5 w-5 text-[var(--slot4-accent)]" />
              <h3 className="mt-4 text-sm font-black uppercase tracking-[0.18em]">{item.label}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--slot4-muted-text)]">{item.text}</p>
            </div>
          ))}
        </section>
      </main>
    </EditableSiteShell>
  )
}
