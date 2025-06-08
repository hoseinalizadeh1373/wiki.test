import React from 'react';
import { useHistory } from '@docusaurus/router';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import faFlag from '../img/fa-flag.png'; // مسیر عکس پرچم فارسی
import enFlag from '../img/en-flag.png'; // مسیر عکس پرچم انگلیسی

const LanguageSwitcherButton = () => {
  if (ExecutionEnvironment.canUseDOM) {
    const { i18n } = useDocusaurusContext();
    const history = useHistory();
    const currentLocale = document.documentElement.lang;

    const handleLanguageSwitch = () => {
      const newLocale = currentLocale === "fa-IR" ? 'en' : 'fa';
      const newPath = newLocale === 'fa' 
        ? `/fa${window.location.pathname}` 
        : window.location.pathname.replace('/fa', ''); // حذف '/fa' از مسیر

      history.push(newPath);
      window.location.reload();
    };

    return (
      <button 
        onClick={handleLanguageSwitch} 
        
        class={'languageSwitcher'}
      >
        <img 
          src={currentLocale === "fa-IR" ? enFlag : faFlag} 
          alt={currentLocale === "fa-IR" ? 'English Flag' : 'Persian Flag'} 
          style={{ width: '16px', height: '16px', marginRight: '12px' }} 
        />
        {currentLocale === "fa-IR" ? 'English' : 'فارسی '}
      </button>
    );
  }
  return null; // اگر در محیط DOM نیست
};

export default LanguageSwitcherButton;
