import React from 'react';
import slider1 from '../../assets/slider-1.jpg';
import slider3 from '../../assets/slider-3.jpg';

const About = () => {
  return (
    <>
      <div className='page-title'>
        <div className='title-image'>
          <img src={slider1} alt='modern-architecture about-us' />
          <div className='overlay'></div>
          <h1>Modernarc Architecture</h1>
        </div>
      </div>
      <div className='about-container'>
        <div className='image-section'>
          <img src={slider3} alt='modern-architecture about-us' />
        </div>
        <div className='text-section'>
          <div className='text'>
            <p>
              ModernArc Architecture, 2010 yılında İstanbul’da kurulmuş ve hem ticari hem de konut projeleri için yenilikçi
              ve kişiye özel mimari tasarım çözümleri sunan bir mimarlık ofisidir. Tasarım süreçlerimizde estetiği ve
              işlevselliği ön planda tutarak, her projeye özgün ve yaratıcı yaklaşımlar getiriyoruz. Modern çizgilerle
              geleneksel unsurları harmanlayarak, kullanıcı dostu ve sürdürülebilir yaşam alanları yaratmaya
              odaklanıyoruz.
            </p>
            <p>
              Deneyimli ve dinamik ekibimiz, mimarlık ve mühendislik bilgilerini sanatsal bir vizyonla birleştirerek,
              projelerin her aşamasında titizlikle çalışmaktadır. Modern Architecture olarak, farklılıklarımızı ortaya
              koyan en önemli özelliklerimizden biri de, projelerimizde yenilikçi teknolojileri kullanmamız ve
              sürdürülebilir tasarım anlayışını benimsememizdir.
            </p>
            <p>
              <strong>
                Projelerimizin başarısında, tasarımın ötesinde, projelendirme ve uygulama süreçlerindeki profesyonel
                yaklaşımımız önemli bir rol oynamaktadır. Kendi bünyemizde bulunan Modern Engineering ile iş birliği
                içinde elektrik ve mekanik taahhüt işlerini de kapsayan bütünleşik çözümler sunuyoruz. Bu sayede,
                projelerimizin her aşamasında kalite ve verimliliği en üst seviyede tutmayı başarıyoruz.
              </strong>
            </p>
            <p>
              Modern Architecture olarak, mimari tasarımın her detayında estetik ve işlevselliği bir araya getiriyoruz.
              Projelerimizde müşterilerimizin ihtiyaçlarını ve beklentilerini dikkatle dinleyerek, onlara özel çözümler
              üretiyoruz. Her projede, kullanıcıların yaşam kalitesini artırmayı hedefleyen, sürdürülebilir ve yenilikçi
              yaklaşımlarımızla fark yaratıyoruz.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
