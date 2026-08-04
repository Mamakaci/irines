export type Language = 'ka' | 'en';

export const translations = {
  ka: {
    navWork: 'ნამუშევრები',
    navServices: 'მიმართულებები',
    navContact: 'კონტაქტი',
    menu: 'მენიუ',
    close: 'დახურვა',
    location: 'თბილისი, საქართველო',
    discipline: 'ხატწერა, რესტავრაცია, ფრესკა და ინდივიდუალური შეკვეთები',
    heroLead: 'მხატვარი, რომლის ნამუშევარიც ეხმიანება სივრცეს, ტრადიციას და მის მფლობელს.',
    call: 'დარეკვა',
    facebook: 'Facebook-ზე მიწერა',
    commission: 'შეკვეთის განხილვა',
    scroll: 'ნამუშევრების დათვალიერება',
    selected: 'არჩეული ნამუშევრები',
    selectedNote: 'ხატწერა, რესტავრაცია და ინდივიდუალური შეკვეთები.',
    iconPainting: 'ხატწერა',
    iconRestoration: 'ხატების რესტავრაცია',
    murals: 'დეკორატიული ნამუშევრები',
    commissions: 'ინდივიდუალური ნამუშევრები',
    iconPaintingDesc: 'ახალი ხატები ეკლესიისა და კერძო სივრცისთვის.',
    iconRestorationDesc: 'არსებული ხატების მოვლა და აღდგენა.',
    muralsDesc: 'შეკვეთილი ნამუშევრები კედელზე, ტილოზე, ქაღალდზე, ხეზე და სხვა ზედაპირებზე.',
    commissionsDesc: 'აკრილი ტილოზე, ქაღალდზე, ხეზე და სხვა ზედაპირებზე.',
    workInProgress: 'ფოტო მალე',
    aboutTitle: 'მხატვრის შესახებ',
    aboutText: 'ირინე ჩუტკერაშვილი არის თბილისში მოღვაწე მხატვარი. მისი პრაქტიკა აერთიანებს ხატწერას, ხატების რესტავრაციას, კედლის მხატვრობასა და ინდივიდუალურ შეკვეთებს.',
    aboutNote: 'ვრცელი ბიოგრაფია დაემატება მალე.',
    commissionTitle: 'შეკვეთილი ნამუშევრები',
    commissionText: 'იდეიდან დასრულებულ ნამუშევრამდე: კერძო, რელიგიური და კომერციული სივრცეებისთვის.',
    commissionPrivate: 'კერძო სივრცეები',
    commissionReligious: 'რელიგიური სივრცეები',
    commissionCommercial: 'კომერციული სივრცეები',
    contactTitle: 'დავიწყოთ საუბარი',
    contactText: 'შეკითხვისთვის, თანამშრომლობისთვის ან შეკვეთის განსახილველად, დამიკავშირდით პირდაპირ.',
    emailSoon: 'ელფოსტა მალე დაემატება',
    findMe: 'სოციალური ქსელები',
    footer: 'თბილისი, საქართველო'
  },
  en: {
    navWork: 'Work',
    navServices: 'Practice',
    navContact: 'Contact',
    menu: 'Menu',
    close: 'Close',
    location: 'Tbilisi, Georgia',
    discipline: 'Icon painting, restoration, murals, and commissioned work',
    heroLead: 'An artist whose work responds to place, tradition, and the people who live with it.',
    call: 'Call',
    facebook: 'Message on Facebook',
    commission: 'Discuss a commission',
    scroll: 'Explore the work',
    selected: 'Selected Work',
    selectedNote: 'Icon painting, restoration, and custom commissioned artwork.',
    iconPainting: 'Icon Painting',
    iconRestoration: 'Icon Restoration',
    murals: 'Decorative artpieces',
    commissions: 'Commissioned Paintings',
    iconPaintingDesc: 'New icons for churches and private spaces.',
    iconRestorationDesc: 'Care and restoration of existing icons.',
    muralsDesc: 'Commissioned artwork for walls, canvas, paper, wood, and other surfaces.',
    commissionsDesc: 'Acrylic work on canvas, paper, wood, and other surfaces.',
    workInProgress: 'Image coming soon',
    aboutTitle: 'About the Artist',
    aboutText: 'Irine Chutketashvili is an artist based in Tbilisi. Her practice brings together icon painting, icon restoration, murals, and commissioned work.',
    aboutNote: 'A fuller biography will be added shortly.',
    commissionTitle: 'Commissioned Work',
    commissionText: 'From the first conversation to a finished work for private, religious, and commercial spaces.',
    commissionPrivate: 'Private spaces',
    commissionReligious: 'Religious spaces',
    commissionCommercial: 'Commercial spaces',
    contactTitle: 'Start a Conversation',
    contactText: 'For an enquiry, collaboration, or commission, get in touch directly.',
    emailSoon: 'Email will be added soon',
    findMe: 'Find Irine online',
    footer: 'Tbilisi, Georgia'
  }
} as const;

export const phone = '+995579579779';
export const phoneDisplay = '+995 579 57 97 79';
export const facebookUrl = 'https://www.facebook.com/irine.chutkerashvili';
export const instagramUrl = 'https://www.instagram.com/iriar_tt/';

export const practicePages = [
  {
    slug: 'icon-painting',
    key: 'iconPainting',
    image: '/images/icon-painting.webp',
    alt: 'Painted Georgian icon of Saint George',
    ka: {
      title: 'ხატწერა',
      label: 'ხატწერა და საეკლესიო მხატვრობა',
      intro: 'ხატები ეკლესიისა და კერძო სივრცეებისთვის, ტრადიციული ვიზუალური ენის პატივისცემით.',
      processTitle: 'პროცესი',
      process: 'თითოეული ნამუშევარი იწყება სივრცის, მასშტაბის და სასურველი სახის განხილვით. ეს ტექსტი მოგვიანებით ჩანაცვლდება კონკრეტული პროექტების აღწერით.',
      galleryTitle: 'ნამუშევრები',
      galleryNote: 'აქ დაემატება დასრულებული ხატების ფოტოები.',
      cta: 'ხატზე საუბარი'
    },
    en: {
      title: 'Icon Painting',
      label: 'Icon painting and religious art',
      intro: 'Icons for churches and private spaces, made with respect for traditional visual language.',
      processTitle: 'Process',
      process: 'Each work begins with a conversation about the space, scale, and subject. This text will be replaced with details of individual projects.',
      galleryTitle: 'Selected work',
      galleryNote: 'Finished icon paintings will be added here.',
      cta: 'Discuss an icon'
    }
  },
  {
    slug: 'icon-restoration',
    key: 'iconRestoration',
    image: '/images/restoration.webp',
    alt: 'Before and after icon restoration',
    ka: {
      title: 'ხატების რესტავრაცია',
      label: 'ხატების მოვლა და აღდგენა',
      intro: 'არსებული ხატების ფრთხილი მოვლა, კონსერვაცია და რესტავრაცია.',
      processTitle: 'პროცესი',
      process: 'რესტავრაციის დაწყებამდე ფასდება ნამუშევრის მდგომარეობა და განისაზღვრება საჭირო მიდგომა. დეტალური შემთხვევების აღწერები მოგვიანებით დაემატება.',
      galleryTitle: 'რესტავრაციები',
      galleryNote: 'აქ დაემატება „მანამდე და შემდეგ“ ნამუშევრები.',
      cta: 'რესტავრაციის განხილვა'
    },
    en: {
      title: 'Icon Restoration',
      label: 'Care and restoration of icons',
      intro: 'Careful conservation and restoration of existing icons.',
      processTitle: 'Process',
      process: 'Before restoration begins, the work is assessed and an appropriate approach is agreed. Case studies will be added here later.',
      galleryTitle: 'Restoration work',
      galleryNote: 'Before-and-after projects will be added here.',
      cta: 'Discuss restoration'
    }
  },
  {
    slug: 'custom-art',
    key: 'murals',
    image: '/images/order.webp',
    alt: 'Custom hand-painted decorative boards on a wooden surface',
    ka: {
      title: 'დეკორატიული ნამუშევრები',
      label: 'კერძო შეკვეთები',
      intro: 'ინდივიდუალური ნამუშევრები კედელზე, ტილოზე, ქაღალდზე, ხეზე და სხვა ზედაპირებზე.',
      processTitle: 'პროცესი',
      process: 'იდეა, სივრცე და მასალა განიხილება ერთად, რათა ნამუშევარი ზუსტად მოერგოს მის მომავალ ადგილს. პროექტების მაგალითები მალე დაემატება.',
      galleryTitle: 'კერძო შეკვეთები',
      galleryNote: 'აქ დაემატება შეკვეთით შესრულებული ნამუშევრები.',
      cta: 'შეკვეთის განხილვა'
    },
    en: {
      title: 'Decorative artpieces',
      label: 'Private commissions',
      intro: 'Individual works for walls, canvas, paper, wood, and other surfaces.',
      processTitle: 'Process',
      process: 'The idea, space, and material are considered together so the finished work belongs naturally in its new setting. Project examples will be added soon.',
      galleryTitle: 'Private commissions',
      galleryNote: 'Commissioned projects will be added here.',
      cta: 'Discuss a commission'
    }
  },
  {
    slug: 'commissioned-paintings',
    key: 'commissions',
    image: '/images/individual.webp',
    alt: 'Single painted artwork on a decorative board',
    ka: {
      title: 'ინდივიდუალური ნამუშევრები',
      label: 'აკრილის ფერწერა',
      intro: 'აკრილის ფერწერა ტილოზე, ქაღალდზე, ხეზე და სხვა ზედაპირებზე.',
      processTitle: 'პროცესი',
      process: 'შეკვეთა იწყება იდეითა და სასურველი ფორმატით. აქ მოგვიანებით დაემატება დასრულებული ნამუშევრებისა და მათი ისტორიების არჩევანი.',
      galleryTitle: 'ნამუშევრები',
      galleryNote: 'აქ დაემატება ინდივიდუალური ნამუშევრების ფოტოები.',
      cta: 'ნამუშევრის შეკვეთა'
    },
    en: {
      title: 'Commissioned Paintings',
      label: 'Acrylic painting',
      intro: 'Acrylic work on canvas, paper, wood, and other surfaces.',
      processTitle: 'Process',
      process: 'A commission begins with an idea and a preferred format. A selection of finished works and their stories will be added here later.',
      galleryTitle: 'Selected work',
      galleryNote: 'Individual artwork photographs will be added here.',
      cta: 'Commission a painting'
    }
  }
] as const;
