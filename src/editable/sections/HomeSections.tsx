import Link from 'next/link'
import { ArrowRight, Search } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { getEditableExcerpt, getEditablePostImage, postHref } from '@/editable/cards/PostCards'
import { slot4BrandConfig } from '@/editable/theme/brand.config'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

function taskLabel(task: TaskKey) {
  return SITE_CONFIG.tasks.find((item) => item.key === task)?.label || task
}

function ArticlePanel({ post, href, index, tone = 'dark' }: { post: SitePost; href: string; index: number; tone?: 'dark' | 'paper' }) {
  const dark = tone === 'dark'
  return (
    <Link href={href} className={`group grid min-h-[70vh] w-[min(82vw,560px)] shrink-0 content-start border-r border-[var(--editable-border)] px-6 py-10 transition hover:bg-black/[0.03] sm:px-10 ${dark ? 'editable-green' : 'bg-[var(--slot4-surface-bg)] text-[var(--slot4-page-text)]'}`}>
      <div className="relative mx-auto aspect-[4/5] w-full max-w-[410px] overflow-hidden bg-[var(--slot4-media-bg)]">
        <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
      </div>
      <div className="mx-auto mt-7 w-full max-w-[410px]">
        <p className="editable-kicker text-[var(--slot4-accent)]">Article {String(index + 1).padStart(2, '0')}</p>
        <h3 className="editable-serif mt-3 text-3xl leading-tight text-[var(--slot4-accent)] sm:text-4xl">{post.title}</h3>
        <p className={`mt-4 line-clamp-3 text-sm leading-7 ${dark ? 'text-[#ead6c8]/72' : 'text-[#745546]'}`}>{getEditableExcerpt(post, 145)}</p>
        <span className="mt-6 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em]">
          Read article <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  )
}

function SmallIndex({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className="group block w-[280px] shrink-0 border-l border-[var(--editable-border)] px-5 py-6 transition hover:bg-white/35">
      <p className="editable-kicker text-[var(--slot4-accent)]">Note {String(index + 1).padStart(2, '0')}</p>
      <h3 className="editable-serif mt-3 text-2xl leading-tight text-[var(--slot4-page-text)]">{post.title}</h3>
      <p className="mt-3 line-clamp-3 text-sm leading-6 text-[var(--slot4-muted-text)]">{getEditableExcerpt(post, 110)}</p>
      <span className="mt-5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-[var(--slot4-page-text)]/70">
        Open <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
      </span>
    </Link>
  )
}

export function EditableHomeHero({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const heroTitle = pagesContent.home.hero.title.join(' ') || `Read latest ${taskLabel(primaryTask).toLowerCase()}`
  const feature = posts[0]
  return (
    <section className="editable-page overflow-hidden">
      <div className="editable-horizontal-strip min-h-[calc(100vh-78px)] items-stretch px-0">
        <div className="grid w-[min(92vw,1280px)] shrink-0 grid-cols-1 bg-[var(--slot4-surface-bg)] md:grid-cols-[130px_minmax(0,1fr)_minmax(360px,0.9fr)]">
          <div className="hidden items-center justify-center border-r border-[var(--editable-border)] bg-white md:flex">
            <span className="editable-serif rotate-180 text-[clamp(5rem,11vw,11rem)] leading-none text-[#b9a487] [writing-mode:vertical-rl]">{slot4BrandConfig.siteName}</span>
          </div>
          <div className="relative min-h-[42vh] overflow-hidden bg-[var(--slot4-media-bg)] md:min-h-full">
            {feature ? <img src={getEditablePostImage(feature)} alt={feature.title} className="absolute inset-0 h-full w-full object-cover" /> : null}
          </div>
          <div className="flex min-h-[60vh] flex-col justify-between border-l border-[var(--editable-border)] px-6 py-10 sm:px-10 lg:px-16">
            <div className="flex justify-end">
              <Link href="/search" className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.22em] text-[var(--slot4-accent)]"><Search className="h-4 w-4" /> Search</Link>
            </div>
            <div>
              <p className="editable-kicker text-[var(--slot4-accent)]">{pagesContent.home.hero.badge}</p>
              <h1 className="editable-serif mt-5 max-w-2xl text-5xl leading-[0.98] text-[var(--slot4-accent)] sm:text-6xl lg:text-7xl">{heroTitle}</h1>
            </div>
            <div>
              <p className="max-w-xl text-base leading-8 text-[var(--slot4-muted-text)]">{pagesContent.home.hero.description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={primaryRoute} className="inline-flex items-center gap-2 bg-[var(--slot4-dark-bg)] px-6 py-3 text-sm font-black text-[var(--slot4-dark-text)]">Browse articles <ArrowRight className="h-4 w-4" /></Link>
                <Link href="/create" className="inline-flex items-center gap-2 border border-[var(--editable-border)] px-6 py-3 text-sm font-black text-[var(--slot4-page-text)]">Submit article</Link>
              </div>
            </div>
          </div>
        </div>
        {posts.slice(1, 4).map((post, index) => (
          <ArticlePanel key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index + 1} tone={index % 2 ? 'paper' : 'dark'} />
        ))}
      </div>
    </section>
  )
}

export function EditableStoryRail({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const railPosts = posts.slice(4, 12)
  if (!railPosts.length) return null
  return (
    <section className="bg-[var(--slot4-dark-bg)] py-10 text-[var(--slot4-dark-text)]">
      <div className="editable-container mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="editable-kicker text-[var(--slot4-accent)]">Latest issue</p>
          <h2 className="editable-serif mt-2 text-4xl text-[var(--slot4-accent)] sm:text-5xl">Articles moving across the page</h2>
        </div>
        <Link href={primaryRoute} className="hidden text-xs font-black uppercase tracking-[0.18em] text-[#ead6c8]/72 sm:inline">View all</Link>
      </div>
      <div className="editable-horizontal-strip pb-8">
        {railPosts.map((post, index) => <ArticlePanel key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index + 4} />)}
      </div>
    </section>
  )
}

export function EditableMagazineSplit({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const featured = posts.slice(12, 18).length ? posts.slice(12, 18) : posts.slice(0, 6)
  if (!featured.length) return null
  return (
    <section className="bg-[var(--slot4-surface-bg)] py-12 text-[var(--slot4-page-text)]">
      <div className="editable-container grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
        <div className="border-r border-[var(--editable-border)] pr-8">
          <p className="editable-kicker text-[var(--slot4-accent)]">Curated reading</p>
          <h2 className="editable-serif mt-3 text-5xl leading-tight text-[var(--slot4-accent)]">Editorial picks with room to breathe</h2>
          <p className="mt-5 max-w-md text-sm leading-7 text-[var(--slot4-muted-text)]">Tall images, quiet dividers, and focused excerpts keep the article cards elegant without stretching the page wider than it needs to be.</p>
        </div>
        <div className="editable-horizontal-strip px-0">
          {featured.map((post, index) => <SmallIndex key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
        </div>
      </div>
    </section>
  )
}

export function EditableTimeCollections({ primaryTask, primaryRoute, posts, timeSections }: HomeSectionProps) {
  const categoryPosts = timeSections.flatMap((section) => section.posts).length ? timeSections.flatMap((section) => section.posts) : posts.slice(6)
  const picks = categoryPosts.slice(0, 10)
  return (
    <section className="bg-[var(--slot4-page-bg)] py-12 text-[var(--slot4-page-text)]">
      <div className="editable-container grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
        <div>
          <p className="editable-kicker text-[var(--slot4-accent)]">Archive search</p>
          <h2 className="editable-serif mt-3 text-5xl leading-tight text-[var(--slot4-accent)]">Find the thread inside the article archive</h2>
          <p className="mt-5 max-w-lg text-base leading-8 text-[var(--slot4-muted-text)]">Search by topic, headline, category, or phrase. The layout stays constrained, but the article stream can move horizontally when there is more to explore.</p>
        </div>
        <form action="/search" className="border border-[var(--editable-border)] bg-[var(--slot4-surface-bg)] p-4">
          <label className="flex items-center gap-3 border border-[var(--editable-border)] bg-white px-4 py-3">
            <Search className="h-5 w-5 text-[var(--slot4-accent)]" />
            <input name="q" placeholder={pagesContent.home.hero.searchPlaceholder} className="min-w-0 flex-1 bg-transparent text-sm font-bold text-[var(--slot4-page-text)] outline-none placeholder:text-[var(--slot4-muted-text)]" />
          </label>
          <button className="mt-3 inline-flex h-12 w-full items-center justify-center gap-2 bg-[var(--slot4-dark-bg)] px-5 text-sm font-black uppercase tracking-[0.18em] text-[var(--slot4-dark-text)]">Search articles</button>
        </form>
      </div>
      {picks.length ? (
        <div className="editable-horizontal-strip mt-10 pb-6">
          {picks.map((post, index) => <SmallIndex key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
        </div>
      ) : null}
    </section>
  )
}

export function EditableHomeCta() {
  return (
    <section id="get-app" className="bg-[var(--slot4-dark-bg)] py-16 text-[var(--slot4-dark-text)]">
      <div className="editable-container grid gap-8 border-y border-[var(--editable-border)] py-12 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="editable-kicker text-[var(--slot4-accent)]">Contributor desk</p>
          <h2 className="editable-serif mt-3 max-w-3xl text-5xl leading-tight text-[var(--slot4-accent)]">Have an article worth publishing?</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#ead6c8]/72">Create an account, prepare the article details, and submit a clear draft without changing the site logic behind the scenes.</p>
        </div>
        <Link href="/create" className="inline-flex items-center justify-center gap-2 bg-[#ead6c8] px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-[#0e3424]">Create article <ArrowRight className="h-4 w-4" /></Link>
      </div>
    </section>
  )
}
