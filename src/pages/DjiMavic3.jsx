import React from 'react';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import BlogSingle from '../partials/Mavic3';
import Newsletter from '../partials/Newsletter';
import Footer from '../partials/Footer';

function DjiMavic3() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">
        {/*  Page illustration */}
        <div
          className="relative max-w-6xl mx-auto h-0 pointer-events-none"
          aria-hidden="true"
        >
          <PageIllustration />
        </div>

        {/*  Page sections */}
        <BlogSingle />
        <Newsletter />
      </main>

    </div>
  );
}

export default DjiMavic3;