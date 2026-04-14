const { PrismaClient } = require('@prisma/client')
const fs = require('fs')
const path = require('path')

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding data from JSON to Database...')

  // 1. Services
  const servicesPath = path.join(process.cwd(), 'lib', 'servicesData.json')
  if (fs.existsSync(servicesPath)) {
    const services = JSON.parse(fs.readFileSync(servicesPath, 'utf8'))
    for (const s of services) {
      await prisma.service.upsert({
        where: { slug: s.slug },
        update: {
          title: s.title,
          description: s.description,
          iconType: s.iconType || 'Globe'
        },
        create: {
          title: s.title,
          slug: s.slug,
          description: s.description,
          iconType: s.iconType || 'Globe'
        }
      })
    }
    console.log('Services seeded/verified.')
  }

  // 2. Testimonials
  const testimonialsPath = path.join(process.cwd(), 'lib', 'testimonialsData.json')
  if (fs.existsSync(testimonialsPath)) {
    const testimonials = JSON.parse(fs.readFileSync(testimonialsPath, 'utf8'))
    const existing = await prisma.testimonial.count()
    if (existing === 0) {
      for (const t of testimonials) {
        await prisma.testimonial.create({
          data: {
            name: t.name,
            role: t.role,
            location: t.location,
            text: t.text
          }
        })
      }
      console.log('Testimonials seeded.')
    } else {
      console.log('Testimonials already exist, skipping seed.')
    }
  }

  // 3. Gallery
  const galleryPath = path.join(process.cwd(), 'lib', 'galleryData.json')
  if (fs.existsSync(galleryPath)) {
    const gallery = JSON.parse(fs.readFileSync(galleryPath, 'utf8'))
    for (const item of gallery.uploads) {
      await prisma.galleryItem.upsert({
        where: { url: item.url },
        update: {
          isCarousel: gallery.carouselList.includes(item.url),
          description: item.description
        },
        create: {
          url: item.url,
          description: item.description,
          isCarousel: gallery.carouselList.includes(item.url)
        }
      })
    }
    console.log('Gallery seeded/verified.')
  }

  // 4. SEO
  const seoPath = path.join(process.cwd(), 'lib', 'seo.json')
  if (fs.existsSync(seoPath)) {
    const seo = JSON.parse(fs.readFileSync(seoPath, 'utf8'))
    await prisma.seoSetting.upsert({
      where: { id: 'global' },
      update: {
        title: seo.title,
        description: seo.description
      },
      create: {
        id: 'global',
        title: seo.title,
        description: seo.description
      }
    })
    console.log('SEO seeded/verified.')
  }

  console.log('Seeding complete.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
