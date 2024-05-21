import React from 'react';
import ProjectManagement from '../../assets/project management.jpg';
import Design from '../../assets/design.jpg';
import Practice from '../../assets/practice.jpg';

const Services = () => {
  return (
    <div className='services-container'>
      <div className='service'>
        <img src={Design} alt='' width={150} height={150}/>
        <h2>Tasarım</h2>
        <p>
          Sadece inşa etmeyin, benzersiz ve ilham verici tasarımlarla özel bir mekana sahip olun. İşlevsel ve
          sürdürülebilir bir tasarım, doğru bir yatırımın temelidir.
        </p>
      </div>
      <div className='service'>
        <img src={Practice} alt=''  width={150} height={150} />
        <h2>Uygulama</h2>
        <p>
          İyi bir mimari tasarım, kaliteli bir uygulama ile değer kazanır. Teknik uzmanlık, profesyonel ekip, etkili
          yönetim ve özenli işçilikle hayata geçirilen tasarımlar amacına ulaşır.
        </p>
      </div>
      <div className='service'>
        <img src={ProjectManagement} alt=''  width={150} height={150} />
        <h2>Proje Yönetimi</h2>
        <p>
          Projelerde tasarım ve uygulama disiplinlerinin kontrol, denetim ve raporlama mekanizmaları aracılığıyla
          yönetilmesi, projenin zamanında, bütçeye uygun ve kaliteli bir şekilde tamamlanmasını sağlar.
        </p>
      </div>
    </div>
  );
};

export default Services;
