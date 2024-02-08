import React from 'react';
import Newsletter from './Newsletter';

function CtaContact() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* CTA box */}
        <div className="py-10 md:py-16 md:px-12">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <Newsletter />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaContact;
