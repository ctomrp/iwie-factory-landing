import React from 'react';

import TeamMosaic02 from '../images/team-1.jpg';
import TeamMosaic03 from '../images/team-2.jpg';
import TeamMosaic04 from '../images/team-mosaic-04.jpg';

function TeamImages() {
  return (
    <section className="relative -mt-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="relative w-full h-0 pb-3/4">
            <figure className="absolute h-auto" style={{ top: '45%', width: '41.67%', maxWidth: '800px' }} data-aos="fade-right">
              <img src={TeamMosaic02} width="320" height="240" alt="Team mosaic 02" />
            </figure>

            <figure className="absolute h-auto" style={{ top: '8.5%', right: '0', width: '32.55%', maxWidth: '800px'}} data-aos="fade-left" data-aos-delay="200">
              <img src={TeamMosaic03} width="250" height="188" alt="Team mosaic 03" />
            </figure>
            <figure className="absolute h-auto" style={{ bottom: '0', right: '20%', width: '25.52%', maxWidth: '800px' }} data-aos="fade-up" data-aos-delay="300">
              <img src={TeamMosaic04} width="196" height="196" alt="Team mosaic 04" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamImages;