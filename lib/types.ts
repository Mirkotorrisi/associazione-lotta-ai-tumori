export type Stat = { label: string; value: string }

export type NewsItem = {
  title: string
  slug: string
  date: string
  excerpt?: string
  body?: string
  image?: string
}

export type EventItem = {
  title: string
  slug: string
  date: string
  location: string
  category?: string
  excerpt?: string
  body?: string
  image?: string
}

export type ProjectItem = {
  title: string
  slug: string
  excerpt?: string
  image?: string
}

export type ServiceItem = {
  title: string
  slug: string
  excerpt?: string
  image?: string
}

export type ContactInfo = {
  email: string
  phone: string
  address: string
  mobile: string
  fiscalCode: string
}

export type PageContent = {
  html: string
  [key: string]: unknown
}
