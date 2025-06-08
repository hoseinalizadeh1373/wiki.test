import React from 'react';
import OriginalLayout from '@theme-original/Layout';
import SEO from '@theme/SEO';

export default function Layout(props) {
  return (
    <>
      <SEO />
      <OriginalLayout {...props} />
    </>
  );
}
