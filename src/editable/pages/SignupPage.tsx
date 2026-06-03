import type { Metadata } from 'next'
import Link from 'next/link'
import { BookMarked, FileText, UserRound } from 'lucide-react'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalSignupForm } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/signup', title: 'Sign up', description: pagesContent.auth.signup.metadataDescription })
}

export default function SignupPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[var(--slot4-dark-bg)] text-[var(--slot4-dark-text)]">
        <section className="mx-auto grid min-h-[calc(100vh-12rem)] max-w-[var(--editable-container)] items-center gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[0.9fr_1fr] lg:px-8">
          <div className="border border-[var(--editable-border)] bg-[#ead6c8] p-6 text-[#123524] shadow-[0_24px_70px_rgba(0,0,0,0.22)] sm:p-8">
            <h1 className="editable-serif text-4xl font-normal text-[var(--slot4-accent)]">{pagesContent.auth.signup.formTitle}</h1>
            <EditableLocalSignupForm />
            <p className="mt-5 text-sm text-[#745546]">Already have an account? <Link href="/login" className="font-black text-[#123524] underline-offset-4 hover:underline">{pagesContent.auth.signup.loginCta}</Link></p>
          </div>
          <div>
            <p className="editable-kicker text-[var(--slot4-accent)]">{pagesContent.auth.signup.badge}</p>
            <h2 className="editable-serif mt-5 max-w-xl text-5xl font-normal leading-[0.98] text-[var(--slot4-accent)] sm:text-6xl">{pagesContent.auth.signup.title}</h2>
            <p className="mt-6 max-w-lg text-base leading-8 text-[#ead6c8]/72">{pagesContent.auth.signup.description}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[UserRound, FileText, BookMarked].map((Icon, index) => (
                <div key={index} className="border border-[var(--editable-border)] bg-white/[0.06] p-4">
                  <Icon className="h-5 w-5 text-[var(--slot4-accent)]" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
