// LanguageRedirect.js
import { useEffect } from 'react';
import { useLocation } from '@docusaurus/router';

function LanguageRedirect() {
  const location = useLocation();
  // console.log("asdas")
  useEffect(() => {
    const currentLang = window.location.pathname.split('/')[1];
    const selectedLang = currentLang === 'fa' ? 'fa' : 'en';

    console.log(currentLang +"//"+selectedLang)
    if (selectedLang !== currentLang) {
      // حذف زبان فعلی و افزودن زبان جدید
      const newPath = location.pathname.replace(`/${currentLang}`, `/${selectedLang}`);
      window.history.replaceState({}, '', newPath);
    }
  }, [location]);

  return null;
}

export default LanguageRedirect;
