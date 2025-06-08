import React, { useEffect } from 'react';
import { useThemeConfig, ErrorCauseBoundary } from '@docusaurus/theme-common';
import {
  splitNavbarItems,
  useNavbarMobileSidebar,
} from '@docusaurus/theme-common/internal';
import NavbarItem from '@theme/NavbarItem';
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import SearchBar from '@theme/SearchBar';
import NavbarMobileSidebarToggle from '@theme/Navbar/MobileSidebar/Toggle';
import NavbarLogo from '@theme/Navbar/Logo';
import NavbarSearch from '@theme/Navbar/Search';
import { translate } from '@docusaurus/Translate';
import { useHistory } from '@docusaurus/router'; // اضافه کردن useHistory
import LanguageSwitcherButton from '@site/src/components/LanguageSwitcherButton';
import useWindowSize from '@site/src/components/useWindowSize';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';



import styles from './styles.module.css';

function useNavbarItems() {
  return useThemeConfig().navbar.items;
}

function NavbarItems({ items }) {

  return (
    <>
      {items.map((item, i) => {
        if (item.type === 'localeDropdown') {

          return (
            <ErrorCauseBoundary
              key={i}
              onError={(error) =>
                new Error(
                  `A theme navbar item failed to render.
                  Please double-check the following navbar item (themeConfig.navbar.items) of your Docusaurus config:
                  ${JSON.stringify(item, null, 2)}`,
                  { cause: error },
                )
              }>
              <NavbarItem {...item} />
              
            </ErrorCauseBoundary>
          );
        
      }
        if (item.type === 'doc' || !item.hasOwnProperty('type')) {
          return (
            <ErrorCauseBoundary
              key={i}
              onError={(error) =>
                new Error(
                  `A theme navbar item failed to render.
                  Please double-check the following navbar item (themeConfig.navbar.items) of your Docusaurus config:
                  ${JSON.stringify(item, null, 2)}`,
                  { cause: error },
                )
              }>
              <NavbarItem
                label={translate({
                  id: `${item.label || 'default'}`,
                  message: item.label || 'Default Label',
                })}
                to={item.to || '#'}
              />
            </ErrorCauseBoundary>
          );
        }

        return null;
      })}
    </>
  );
}


function NavbarContentLayout({ left, right }) {
  return (
    <div className="navbar__inner">
      <div className="navbar__items">{left}</div>
      <div className="navbar__items navbar__items--right">{right}</div>
    </div>
  );
}

export default function NavbarContent() {
  const mobileSidebar = useNavbarMobileSidebar();
  const items = useNavbarItems();
  const [leftItems, rightItems] = splitNavbarItems(items);
  const searchBarItem = items.find((item) => item.type === 'search');
  const { width } = useWindowSize(); // Get the window size

  const isMobile = width <= 768; // Adjust this value as per your mobile breakpoint

  const translatedLeftItems = leftItems.map(item => ({
    ...item,
    label: translate({
      id: `navbar.item.${item.label}`,
      message: item.label,
    }),
  }));

  const translatedRightItems = rightItems.map(item => ({
    ...item,
    label: translate({
      id: `navbar.item.${item.label}`,
      message: item.label,
    }),
  }));

  return (
    <NavbarContentLayout
      left={
        <>
          {!mobileSidebar.disabled && <NavbarMobileSidebarToggle />}
          <NavbarLogo />
          <NavbarItems items={translatedLeftItems} />
        </>
      }
      right={
        <>
          <NavbarItems items={translatedRightItems} />
          <NavbarColorModeToggle className={styles.colorModeToggle} />
          {!searchBarItem && (
            <NavbarSearch>
              <SearchBar />
            </NavbarSearch>
          )}
        </>
      }
    />
  );
}
