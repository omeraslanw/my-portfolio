import React from 'react';
import myphoto from "../assets/omer.jpg";

const  AboutMe =() => {
  return (
    <section id="about" className="bg-gray-700 text-white py-20 px-10">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 flex justify-center">
            <img 
              src={myphoto} 
              alt="Profil Fotoğrafı" 
              className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover shadow-lg shadow-cyan-500/50 transition-transform duration-300 hover:scale-105" 
            />
          </div>
          <div className="flex-2 text-center md:text-left">
            <h2 className="text-4xl font-bold mb-4 text-white">Hakkımda</h2>
            <p className="text-lg leading-relaxed text-gray-300">
              Merhaba! Ben, Ömer Faruk Aslan. Yıldız Teknik Üniversitesi Matematik Mühendisliği 3. sınıf öğrencisiyim. Teknoloji ve yazılım geliştirme tutkunu biriyim.
              Özellikle Java, C#, Python, JavaScript, C gibi programlama dillerinde deneyimliyim. React.js, Spring, Asp.Net Core, Flask gibi modern web teknolojileriyle kullanıcı dostu arayüzler, servisler oluşturmaktan keyif alıyorum.
              Yenilikçi çözümler üretmeyi ve kendimi sürekli geliştirmeyi hedefliyorum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;