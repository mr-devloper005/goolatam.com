import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const pagesContent = {
  home: {
    metadata: {
      title: 'Independent articles for curious readers',
      description: 'Explore essays, guides, opinion pieces, and image-led article features in a refined reading-first experience.',
      openGraphTitle: 'Independent articles for curious readers',
      openGraphDescription: 'Discover essays, guides, opinion pieces, and article features through a calmer reading-first experience.',
      keywords: ['article site', 'editorial platform', 'essays', 'reading', 'content discovery'],
    },
    hero: {
      badge: 'Horizontal article journal',
      title: ['Read the next', 'chapter with intent.'],
      description: 'A refined article-only reading surface for essays, explainers, opinions, interviews, and useful editorial notes.',
      primaryCta: { label: 'Read latest stories', href: '/article' },
      secondaryCta: { label: 'Explore visuals', href: '/image' },
      searchPlaceholder: 'Search articles, topics, authors, and ideas',
      focusLabel: 'Focus',
      featureCardBadge: 'latest cover rotation',
      featureCardTitle: 'Latest articles set the tone of the issue.',
      featureCardDescription: 'Fresh headlines, calm spacing, and strong reading cues keep the archive easy to enter.',
    },
    intro: {
      badge: 'About the journal',
      title: 'Built for long-form articles, careful browsing, and clear editorial discovery.',
      paragraphs: [
        'This site brings essays, guides, opinions, and features into one readable editorial space.',
        'Instead of crowding readers with heavy UI, the design gives headlines, images, excerpts, and related reads enough room to breathe.',
        'Whether someone starts with a recent article or a searched topic, they can continue reading without losing context.',
      ],
      sideBadge: 'At a glance',
      sidePoints: [
        'Reading-first homepage with article-led editorial pacing.',
        'Horizontal issue-style browsing for feature cards and latest posts.',
        'Cleaner article detail pages with focused content and related reads.',
        'Simple account flows for readers who want to submit articles.',
      ],
      primaryLink: { label: 'Browse articles', href: '/article' },
      secondaryLink: { label: 'See visuals', href: '/image' },
    },
    cta: {
      badge: 'Start exploring',
      title: 'Explore articles through one calm editorial experience.',
      description: 'Move from headline to full article to related reading without the layout feeling stretched or noisy.',
      primaryCta: { label: 'Browse Articles', href: '/article' },
      secondaryCta: { label: 'Contact Sales', href: '/contact' },
    },
    taskSection: {
      heading: 'Latest {label}',
      descriptionSuffix: 'Browse the newest posts in this section.',
    },
  },
  about: {
    badge: 'The journal behind the stories',
    title: 'Independent ideas deserve room to unfold.',
    description: `${slot4BrandConfig.siteName} is an independent editorial journal for curious readers, clear thinkers, and writers with something useful to say.`,
    paragraphs: [
      'We publish essays, explainers, opinions, interviews, and visual stories that reward attention instead of competing for it.',
      'Every page is shaped around the reading journey: discover a strong headline, settle into the full story, then follow the ideas that connect to it.',
      'Writers get a straightforward place to contribute, while readers get an archive that feels considered, human, and easy to explore.',
    ],
    values: [
      {
        title: 'Clarity over noise',
        description: 'Thoughtful hierarchy, generous pacing, and focused pages keep the story at the center.',
      },
      {
        title: 'Ideas in context',
        description: 'Topics, authors, and related reads remain connected so every article can lead somewhere meaningful.',
      },
      {
        title: 'Independent by design',
        description: 'A welcoming publishing path gives distinct voices space to share useful, original work.',
      },
    ],
  },
  contact: {
    eyebrow: `Contact ${slot4BrandConfig.siteName}`,
    title: 'Pitch an article, ask a question, or reach the editorial desk.',
    description: 'Send article ideas, contributor questions, correction requests, or partnership notes. The form is tuned for clear editorial conversations.',
    formTitle: 'Write to the editorial team',
  },

  search: {
    metadata: {
      title: 'Search',
      description: 'Search articles, topics, categories, and editorial content across the site.',
    },
    hero: {
      badge: 'Search the archive',
      title: 'Find the article you came for.',
      description: 'Use keywords, categories, and content types to discover articles from the full editorial archive.',
      placeholder: 'Search by article title, topic, or category',
    },
    resultsTitle: 'Latest articles in the archive',
  },
  create: {
    metadata: {
      title: 'Create',
      description: 'Create and submit new content for the site.',
    },
    locked: {
      badge: 'Creator access',
      title: 'Login to write and submit articles.',
      description: 'Use your reader account to open the article workspace, draft submissions, and keep your editorial details together.',
    },
    hero: {
      badge: 'Publishing workspace',
      title: 'Create a polished article submission.',
      description: 'Add a title, category, summary, featured image, source link, and body copy for a clean editorial draft.',
    },
    formTitle: 'Article details',
    submitLabel: 'Submit article',
    successTitle: 'Article submitted successfully.',
  },
  auth: {
    login: {
      metadataDescription: 'Login page for this site.',
      badge: 'Member access',
      title: 'Welcome back to your publishing space.',
      description: 'Login to continue reading, prepare article submissions, and keep your contributor profile ready.',
      formTitle: 'Login',
      submitLabel: 'Continue',
      noAccount: 'No account matched these details. Create an account first, then login.',
      success: 'Login successful. Redirecting...',
      createCta: 'Create an account',
    },
    signup: {
      metadataDescription: 'Signup page for this site.',
      badge: 'Site access',
      title: 'Create your account and start writing.',
      description: 'Create an account to access the article workspace, save contributor details, and submit editorial drafts through the site.',
      formTitle: 'Create account',
      submitLabel: 'Create account',
      passwordShort: 'Use at least 4 characters for the password.',
      success: 'Account created successfully. Redirecting...',
      loginCta: 'Login',
    },
  },
  detailPages: {
    article: {
      relatedTitle: 'Related articles',
      fallbackTitle: 'Article details',
    },
    listing: {
      relatedTitle: 'Related listings',
      fallbackTitle: 'Listing details',
    },
    image: {
      relatedTitle: 'Related visuals',
      fallbackTitle: 'Image details',
    },
    profile: {
      relatedTitle: 'Suggested articles',
      fallbackDescription: 'Profile details will appear here once available.',
      visitButton: 'Visit Official Site',
    },
  },
} as const
