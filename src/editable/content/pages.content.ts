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
    badge: 'Our Story',
    title: 'A calmer, clearer way to explore content.',
    description: `${slot4BrandConfig.siteName} is built to make long-form articles, editorial discovery, and thoughtful publishing feel like one unified experience.`,
    paragraphs: [
      'Instead of splitting ideas into noisy grids, the site keeps article discovery deliberate, visual, and easy to follow.',
      'Readers can move from a headline to a full piece, then into related articles, search results, or contributor pages without losing context.',
      'For contributors, the publishing flow stays simple: create an account, prepare the article, and keep the focus on the writing.',
    ],
    values: [
      {
        title: 'Reading-first experience',
        description: 'We prioritize clarity, pacing, and structure so people can read, browse, and discover without noise.',
      },
      {
        title: 'Connected content surfaces',
        description: 'Articles, topics, categories, and related reads stay connected so discovery feels natural across the site.',
      },
      {
        title: 'Simple and trustworthy',
        description: 'We focus on clean navigation and clear page structure to help visitors find useful content faster.',
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
