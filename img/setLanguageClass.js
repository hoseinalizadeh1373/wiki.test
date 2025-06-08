// src/js/setLanguageClass.js

function setLanguageClass() {
    const currentLocale = document.documentElement.lang; // 'en' یا 'fa'
  
    // حذف کلاس‌های قبلی
    document.body.classList.remove('lang-en', 'lang-fa');
  
    // اضافه کردن کلاس جدید بر اساس زبان
    if (currentLocale === 'en') {
      document.body.classList.add('lang-en');
    } else if (currentLocale === 'fa') {
      document.body.classList.add('lang-fa');
    }
  }
  
  // اجرای تابع پس از بارگذاری صفحه
  document.addEventListener('DOMContentLoaded', setLanguageClass);
  