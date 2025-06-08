const getNavbarConfig = (locale) => {
    const translations = {
      en: {
        title: 'Docs Center',
        simotel: 'Contact Center',
        developers: 'Developers',
        autodialer: 'Mass Dialer',
        softphone: 'Softphone',
        blog: 'Blog',
        knowledgeBase: 'Knowledge Base'
      },
      fa: {
        title: 'مرکز مستندات',
        simotel: 'مرکز تماس',
        developers: 'توسعه‌دهندگان',
        autodialer: 'تماس انبوه',
        softphone: 'سافت‌فون',
        blog: 'بلاگ',
        knowledgeBase: 'پایگاه دانش'
      }
    };
  
    return {
      hideOnScroll: true,
      title: translations[locale].title,
      logo: {
        alt: 'SimoTel',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'localeDropdown',
          position: 'left',
        },
        {
          type: 'doc',
          docId: 'simotel/introsimotel',
          position: 'left',
          label: translations[locale].simotel,
        },
        {
          to: 'docs/developers/api/introapi',
          label: translations[locale].developers,
        },
        {
          type: 'doc',
          docId: 'autodialer/introad',
          position: 'left',
          label: translations[locale].autodialer,
        },
        {
          to: '/intro-softphone',
          label: translations[locale].softphone,
          position: 'left',
        },
        {
          to: '/blog',
          label: translations[locale].blog,
          position: 'left',
        },
        {
          href: 'https://forum.mysup.ir',
          label: translations[locale].knowledgeBase,
          position: 'right',
        },
      ],
    };
  };
  
  module.exports = getNavbarConfig;
  
