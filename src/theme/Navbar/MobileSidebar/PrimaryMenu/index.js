import React from 'react';
import { useThemeConfig, ErrorCauseBoundary } from '@docusaurus/theme-common';
import {useNavbarMobileSidebar} from '@docusaurus/theme-common/internal';
import { translate } from '@docusaurus/Translate';
import NavbarItem from '@theme/NavbarItem';
function useNavbarItems() {
  // TODO temporary casting until ThemeConfig type is improved
  return useThemeConfig().navbar.items;
}
// The primary menu displays the navbar items
export default function NavbarMobilePrimaryMenu() {
  const mobileSidebar = useNavbarMobileSidebar();
  // TODO how can the order be defined for mobile?
  // Should we allow providing a different list of items?
  const items = useNavbarItems();
  return (
    <ul className="menu__list">
      {/* {items.map((item, i) => (
        <NavbarItem
          mobile
          {...item}
          onClick={() => mobileSidebar.toggle()}
          key={i}
        />
      ))} */}

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
              <NavbarItem {...item} onClick={() => mobileSidebar.toggle()} mobile  />
              
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
                to={item.to || '#'
                  
                }
                onClick={() => mobileSidebar.toggle()} mobile 
              />
            </ErrorCauseBoundary>
          );
        }

        return null;
      })}
    </>
    </ul>
  );
}
