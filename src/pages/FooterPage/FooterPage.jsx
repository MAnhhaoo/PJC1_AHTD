import React from 'react';
import PharmacyBanner from './PharmaBanner';
import FooterLink from './FooterLink';
import FooterCertification from './FooterCertification';
import './FooterPage.css';



const FooterPage = () => {
  return (
    <footer className="bg-[#f5f5f5] text-sm text-[#333] pt-6 pb-10 px-8">
      {/* Xem hệ thống nhà thuốc trên toàn quốc */}
        <PharmacyBanner />
      
      {/* About us, categories, LearnMoreLinks, SwitchBoard */}\
        <FooterLink />

    </footer>
  );
};

export default FooterPage