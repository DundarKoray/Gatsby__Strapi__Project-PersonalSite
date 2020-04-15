import React from 'react';
import Title from "../Title";
import styles from "../../css/aboutme.module.css";

const AboutMe = () => {
    return (
        <section>
            <Title title="" subtitle="Hakkinda"></Title>
            <div className={styles.center}><p>
            Kubilay Dündar, Hacettepe Üniversitesi Tıp Fakültesi'nden 1979 senesinde mezun olmuştur. İhtisasını Ankara Zekai Tahir Burak Kadın Hastanesi'nde 1984'te tamamlamıştır.</p>
<p>
40 senelik hekimlik geçmişinin büyük bir bölümünde Kırşehir'de görev yapmıştır. 1993 - 96 seneleri arasında Kırşehir İl Sağlık Müdürü ve Kırşehir Çocuk ve Kadın Hastalıkları Hastanesi Baş Hekimi olarak hizmet vermiştir.</p>
<p>
Uzun zamandır çalıştığı Kırşehir Eğitim ve Araştırma Hastanesi'ndeki Kadın Doğum Uzmanlığı görevinden 2019 yılının Nisan ayında emekliye ayrılmıştır.  </p>

<p>
Mesleki hayatına ve değerli Kırşehir halkına hizmet vermeye bundan sonra Ahi Evran Caddesi üzerinde yer alan muayenehanesinde devam edecektir.</p> 
            </div>
        </section>
    );
};

export default AboutMe;