import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';


const CustomTitle = () => {
  if (ExecutionEnvironment.canUseDOM) {
  const { siteConfig } = useDocusaurusContext();
  
  const currentLocale = document.documentElement.lang;
  siteConfig.title = " "
  if(currentLocale ==="fa-IR"){
    siteConfig.title = "مستندات سیموتل"
  }
  else 
  siteConfig.title = "Simotel Docs"

  siteConfig.titleDelimiter ="|"
  
  return ""
}
  // تغییر تایتل صفحه به زبان جاری
};

export default CustomTitle;
