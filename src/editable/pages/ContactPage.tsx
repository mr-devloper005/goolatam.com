'use client'

import { FileText, Mail, PenLine, ShieldCheck } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableContactLeadForm } from '@/editable/components/EditableContactLeadForm'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

const lanes = [
  { icon: FileText, title: 'Article pitches', body: 'Send outlines, guest post ideas, reported pieces, explainers, and opinion drafts for review.' },
  { icon: ShieldCheck, title: 'Corrections', body: 'Share corrections, source updates, attribution notes, or requests about an existing article.' },
  { icon: PenLine, title: 'Contributor help', body: 'Ask about formatting, submission flow, author details, or editorial expectations.' },
]

export default function ContactPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[var(--slot4-page-bg)] px-4 py-12 text-[var(--slot4-page-text)] sm:px-6 lg:px-8">
        <section className="mx-auto grid max-w-[var(--editable-container)] gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="editable-kicker text-[var(--slot4-accent)]">{pagesContent.contact.eyebrow}</p>
            <h1 className="editable-serif mt-4 text-5xl font-normal leading-[0.98] text-[var(--slot4-accent)] sm:text-6xl">{pagesContent.contact.title}</h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--slot4-muted-text)]">{pagesContent.contact.description}</p>
            <div className="mt-8 grid gap-4">
              {lanes.map((lane) => (
                <div key={lane.title} className="border border-[var(--editable-border)] bg-[var(--slot4-surface-bg)] p-5">
                  <lane.icon className="h-5 w-5 text-[var(--slot4-accent)]" />
                  <h2 className="editable-serif mt-3 text-3xl font-normal text-[var(--slot4-accent)]">{lane.title}</h2>
                  <p className="mt-2 text-sm leading-7 text-[var(--slot4-muted-text)]">{lane.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-[var(--editable-border)] bg-[var(--slot4-surface-bg)] p-5">
            <div className="mb-5 flex items-center gap-3 border-b border-[var(--editable-border)] pb-5">
              <Mail className="h-5 w-5 text-[var(--slot4-accent)]" />
              <h2 className="editable-serif text-3xl font-normal text-[var(--slot4-accent)]">{pagesContent.contact.formTitle}</h2>
            </div>
            <EditableContactLeadForm />
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
