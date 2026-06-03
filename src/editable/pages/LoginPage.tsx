import type { Metadata } from 'next'
import Link from 'next/link'
import { BookOpen, PenLine, Search } from 'lucide-react'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalLoginForm } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/login', title: 'Login', description: pagesContent.auth.login.metadataDescription })
}

export default function LoginPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[var(--slot4-page-bg)] text-[var(--slot4-page-text)]">
        <section className="mx-auto grid min-h-[calc(100vh-12rem)] max-w-[var(--editable-container)] items-center gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div className="border-l border-[var(--editable-border)] pl-6">
            <p className="editable-kicker text-[var(--slot4-accent)]">{pagesContent.auth.login.badge}</p>
            <h1 className="editable-serif mt-5 max-w-xl text-5xl font-normal leading-[0.98] text-[var(--slot4-accent)] sm:text-6xl">{pagesContent.auth.login.title}</h1>
            <p className="mt-6 max-w-lg text-base leading-8 text-[var(--slot4-muted-text)]">{pagesContent.auth.login.description}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[BookOpen, Search, PenLine].map((Icon, index) => (
                <div key={index} className="border border-[var(--editable-border)] bg-white/50 p-4">
                  <Icon className="h-5 w-5 text-[var(--slot4-accent)]" />
                </div>
              ))}
            </div>
          </div>
          <div className="border border-[var(--editable-border)] bg-[var(--slot4-surface-bg)] p-6 shadow-[0_24px_70px_rgba(16,36,31,0.12)] sm:p-8">
            <h2 className="editable-serif text-4xl font-normal text-[var(--slot4-accent)]">{pagesContent.auth.login.formTitle}</h2>
            <EditableLocalLoginForm />
            <p className="mt-5 text-sm text-[var(--slot4-muted-text)]">New here? <Link href="/signup" className="font-black text-[var(--slot4-page-text)] underline-offset-4 hover:underline">{pagesContent.auth.login.createCta}</Link></p>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
