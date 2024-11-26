function svgturkiyeharitasi() {
    const sehirVerileri = {
        //ZEYNEP START
        '01': { il: 'Adana', TGBNumber : 3, buisnessCount: 121, projectCount: 543, kategoriler: ['Girişimler', 'Hızlandırıcı Fonları', 'TTO', 'Kuluçka ve Hızlandırıcılar', 'STK ve Dernekler', 'Teknopark', 'İSGEM']},
        '02': { il: 'Adıyaman', TGBNumber: 1, buisnessCount: 30, projectCount: 120, kategoriler: ['Girişimler', 'Teknopark'] },
        '03': { il: 'Afyonkarahisar', TGBNumber: 1, buisnessCount: 35, projectCount: 130, kategoriler: ['Girişimler', 'Hızlandırıcı Fonları'] },
        '04': { il: 'Ağrı', TGBNumber: 0, buisnessCount: 10, projectCount: 50, kategoriler: ['Girişimler'] },
        '05': { il: 'Amasya', TGBNumber: 1, buisnessCount: 20, projectCount: 80, kategoriler: ['Girişimler'] },
        '06': { il: 'Ankara', TGBNumber: 5, buisnessCount: 250, projectCount: 900, kategoriler: ['Girişimler', 'Kurumsal Girişim Sermayesi', 'Ortak Çalışma Alanları', 'Kitle Fonlama', 'Ekosistem Destek Organizasyonları', 'Devlet', 'Kuluçka ve Hızlandırıcılar', 'Yatırım Şirketi', 'STK ve Dernekler', 'Açık İnovasyon ve İç Girişimcilik Şirketleri', 'TEKMER', 'Teknopark', 'Girişim Sermayesi'] },
        '07': { il: 'Antalya', TGBNumber: 2, buisnessCount: 150, projectCount: 600, kategoriler: ['Girişimler', 'Hızlandırıcı Fonları', 'Kitle Fonlama', 'Teknopark', 'Melek Yatırım Ağları'] },
        '08': { il: 'Artvin', TGBNumber: 0, buisnessCount: 15, projectCount: 70, kategoriler: ['Girişimler'] },
        '09': { il: 'Aydın', TGBNumber: 1, buisnessCount: 80, projectCount: 300, kategoriler: ['Girişimler', 'Kurumsal Girişim Sermayesi', 'Hızlandırıcı Fonları'] },
        '10': { il: 'Balıkesir', TGBNumber: 2, buisnessCount: 90, projectCount: 350, kategoriler: ['Girişimler', 'Hızlandırıcı Fonları', 'Melek Yatırım Ağları'] },
        '11': { il: 'Bilecik', TGBNumber: 0, buisnessCount: 25, projectCount: 100, kategoriler: ['TTO'] },
        '12': { il: 'Bingöl', TGBNumber: 0, buisnessCount: 12, projectCount: 60, kategoriler: ['Girişimler'] },
        '13': { il: 'Bitlis', TGBNumber: 0, buisnessCount: 10, projectCount: 50, kategoriler: ['TTO'] },
        '14': { il: 'Bolu', TGBNumber: 1, buisnessCount: 30, projectCount: 120, kategoriler: ['Girişimler', 'Teknopark'] },
        '15': { il: 'Burdur', TGBNumber: 0, buisnessCount: 20, projectCount: 80, kategoriler: ['TTO', 'Teknopark'] },
        '16': { il: 'Bursa', TGBNumber: 3, buisnessCount: 180, projectCount: 700, kategoriler: ['Girişimler', 'Hızlandırıcı Fonları', 'Kurumsal Girişim Sermayesi', 'Teknopark'] },
        '17': { il: 'Çanakkale', TGBNumber: 1, buisnessCount: 40, projectCount: 150, kategoriler: ['Girişimler'] },
        '18': { il: 'Çankırı', TGBNumber: 0, buisnessCount: 15, projectCount: 70, kategoriler: ['Girişimler'] },
        '19': { il: 'Çorum', TGBNumber: 1, buisnessCount: 35, projectCount: 130, kategoriler: ['Girişimler'] },
        '20': { il: 'Denizli', TGBNumber: 2, buisnessCount: 100, projectCount: 400, kategoriler: ['Girişimler', 'Kurumsal Girişim Sermayesi'] },
        '21': { il: 'Diyarbakır', TGBNumber: 1, buisnessCount: 70, projectCount: 250, kategoriler: ['Girişimler', 'Hızlandırıcı Fonları', 'Teknopark', 'Melek Yatırım Ağları'] },
        '22': { il: 'Edirne', TGBNumber: 1, buisnessCount: 30, projectCount: 120, kategoriler: ['Girişimler', 'Teknopark'] },
        '23': { il: 'Elazığ', TGBNumber: 1, buisnessCount: 45, projectCount: 180, kategoriler: ['TTO'] },
        '24': { il: 'Erzincan', TGBNumber: 0, buisnessCount: 20, projectCount: 80, kategoriler: ['Girişimler', 'Teknopark'] },
        '25': { il: 'Erzurum', TGBNumber: 1, buisnessCount: 50, projectCount: 200, kategoriler: ['Girişimler', 'Hızlandırıcı Fonları', 'Teknopark'] },
        '26': { il: 'Eskişehir', TGBNumber: 2, buisnessCount: 70, projectCount: 280, kategoriler: ['Girişimler', 'Kurumsal Girişim Sermayesi', 'Hızlandırıcı Fonları', 'Teknopark'] },
        '27': { il: 'Gaziantep', TGBNumber: 2, buisnessCount: 130, projectCount: 500, kategoriler: ['Girişimler', 'Hızlandırıcı Fonları', 'Kurumsal Girişim Sermayesi', 'Teknopark'] },
        '28': { il: 'Giresun', TGBNumber: 0, buisnessCount: 25, projectCount: 100, kategoriler: ['Girişimler'] },
        '29': { il: 'Gümüşhane', TGBNumber: 0, buisnessCount: 10, projectCount: 50, kategoriler: ['Girişimler'] },
        '30': { il: 'Hakkari', TGBNumber: 0, buisnessCount: 8, projectCount: 40, kategoriler: ['Girişimler'] },
        '31': { il: 'Hatay', TGBNumber: 2, buisnessCount: 80, projectCount: 320, kategoriler: ['Girişimler', 'Hızlandırıcı Fonları'] },
        '32': { il: 'Isparta', TGBNumber: 1, buisnessCount: 30, projectCount: 120, kategoriler: ['Girişimler'] },
        '33': { il: 'Mersin', TGBNumber: 2, buisnessCount: 110, projectCount: 450, kategoriler: ['Girişimler', 'Hızlandırıcı Fonları', 'Kurumsal Girişim Sermayesi', 'Teknopark', 'İSGEM'] },
        '34': { il: 'İstanbul', TGBNumber: 20, buisnessCount: 3000, projectCount: 12000, kategoriler: ['Girişimler', 'Kurumsal Girişim Sermayesi', 'Hızlandırıcı Fonları', 'Ortak Çalışma Alanları', 'Portfolyo Yönetimi Şirketleri', 'Özel Sermaye', 'TEKMER', 'Teknopark', 'Venture Builder', 'Girişim Sermayesi', 'Melek Yatırım Ağları', 'Yatırım Bankası ve Aile Ofisi', 'Medya'] },
        '35': { il: 'İzmir', TGBNumber: 6, buisnessCount: 500, projectCount: 2000, kategoriler: ['Girişimler', 'Hızlandırıcı Fonları', 'Kurumsal Girişim Sermayesi', 'Ortak Çalışma Alanları', 'Teknopark', 'Girişim Sermayesi'] },
        '36': { il: 'Kars', TGBNumber: 0, buisnessCount: 12, projectCount: 60, kategoriler: ['Girişimler'] },
        '37': { il: 'Kastamonu', TGBNumber: 1, buisnessCount: 25, projectCount: 100, kategoriler: ['Girişimler'] },
        '38': { il: 'Kayseri', TGBNumber: 2, buisnessCount: 120, projectCount: 480, kategoriler: ['Girişimler', 'Hızlandırıcı Fonları', 'Kurumsal Girişim Sermayesi', 'Teknopark', 'Melek Yatırım Ağları'] },
        '39': { il: 'Kırklareli', TGBNumber: 0, buisnessCount: 18, projectCount: 72, kategoriler: ['Girişimler', 'Teknopark'] },
        '40': { il: 'Kırşehir', TGBNumber: 0, buisnessCount: 15, projectCount: 70, kategoriler: ['Girişimler', 'Teknopark'] },
        '41': { il: 'Kocaeli', TGBNumber: 3, buisnessCount: 160, projectCount: 640, kategoriler: ['Girişimler', 'Hızlandırıcı Fonları', 'Kurumsal Girişim Sermayesi', 'Teknopark'] },
        '42': { il: 'Konya', TGBNumber: 3, buisnessCount: 170, projectCount: 680, kategoriler: ['Girişimler', 'Hızlandırıcı Fonları', 'Kurumsal Girişim Sermayesi', 'Teknopark'] },
        '43': { il: 'Kütahya', TGBNumber: 1, buisnessCount: 35, projectCount: 140, kategoriler: ['Girişimler'] },
        '44': { il: 'Malatya', TGBNumber: 1, buisnessCount: 40, projectCount: 160, kategoriler: ['Girişimler'] },
        '45': { il: 'Manisa', TGBNumber: 2, buisnessCount: 90, projectCount: 360, kategoriler: ['TTO', 'Hızlandırıcı Fonları', 'Teknopark'] },
        '46': { il: 'Kahramanmaraş', TGBNumber: 1, buisnessCount: 50, projectCount: 200, kategoriler: ['Girişimler', 'Teknopark'] },
        '47': { il: 'Mardin', TGBNumber: 1, buisnessCount: 30, projectCount: 120, kategoriler: ['Girişimler', 'Teknopark'] },
        '48': { il: 'Muğla', TGBNumber: 2, buisnessCount: 100, projectCount: 400, kategoriler: ['Girişimler', 'Hızlandırıcı Fonları', 'Teknopark', 'Venture Builder'] },
        '49': { il: 'Muş', TGBNumber: 0, buisnessCount: 15, projectCount: 60, kategoriler: ['Girişimler'] },
        '50': { il: 'Nevşehir', TGBNumber: 1, buisnessCount: 25, projectCount: 100, kategoriler: ['Girişimler'] },
        '51': { il: 'Niğde', TGBNumber: 1, buisnessCount: 30, projectCount: 120, kategoriler: ['Girişimler'] },
        '52': { il: 'Ordu', TGBNumber: 1, buisnessCount: 40, projectCount: 160, kategoriler: ['Girişimler'] },
        '53': { il: 'Rize', TGBNumber: 1, buisnessCount: 35, projectCount: 140, kategoriler: ['Girişimler'] },
        '54': { il: 'Sakarya', TGBNumber: 2, buisnessCount: 80, projectCount: 320, kategoriler: ['Girişimler', 'Hızlandırıcı Fonları', 'Teknopark'] },
        '55': { il: 'Samsun', TGBNumber: 2, buisnessCount: 100, projectCount: 400, kategoriler: ['Girişimler', 'Hızlandırıcı Fonları'] },
        '56': { il: 'Siirt', TGBNumber: 0, buisnessCount: 12, projectCount: 60, kategoriler: ['Girişimler'] },
        '57': { il: 'Sinop', TGBNumber: 0, buisnessCount: 10, projectCount: 50, kategoriler: ['TTO'] },
        '58': { il: 'Sivas', TGBNumber: 1, buisnessCount: 50, projectCount: 200, kategoriler: ['Girişimler'] },
        '59': { il: 'Tekirdağ', TGBNumber: 2, buisnessCount: 90, projectCount: 360, kategoriler: ['Girişimler', 'Hızlandırıcı Fonları'] },
        '60': { il: 'Tokat', TGBNumber: 1, buisnessCount: 30, projectCount: 120, kategoriler: ['Girişimler'] },
        '61': { il: 'Trabzon', TGBNumber: 1, buisnessCount: 50, projectCount: 200, kategoriler: ['Girişimler'] },
        '62': { il: 'Tunceli', TGBNumber: 0, buisnessCount: 10, projectCount: 50, kategoriler: ['Girişimler'] },
        '63': { il: 'Şanlıurfa', TGBNumber: 2, buisnessCount: 120, projectCount: 480, kategoriler: ['Girişimler', 'Hızlandırıcı Fonları', 'Kurumsal Girişim Sermayesi'] },
        '64': { il: 'Uşak', TGBNumber: 1, buisnessCount: 30, projectCount: 120, kategoriler: ['Girişimler'] },
        '65': { il: 'Van', TGBNumber: 1, buisnessCount: 60, projectCount: 240, kategoriler: ['Girişimler'] },
        '66': { il: 'Yozgat', TGBNumber: 0, buisnessCount: 15, projectCount: 60, kategoriler: ['Girişimler'] },
        '67': { il: 'Zonguldak', TGBNumber: 1, buisnessCount: 30, projectCount: 120, kategoriler: ['TTO'] },
        '68': { il: 'Aksaray', TGBNumber: 1, buisnessCount: 25, projectCount: 100, kategoriler: ['Girişimler', 'TTO'] },
        '69': { il: 'Bayburt', TGBNumber: 0, buisnessCount: 10, projectCount: 50, kategoriler: ['Girişimler'] },
        '70': { il: 'Karaman', TGBNumber: 1, buisnessCount: 20, projectCount: 80, kategoriler: ['TTO'] },
        '71': { il: 'Kırıkkale', TGBNumber: 0, buisnessCount: 20, projectCount: 80, kategoriler: ['Girişimler'] },
        '72': { il: 'Batman', TGBNumber: 1, buisnessCount: 30, projectCount: 120, kategoriler: ['Girişimler'] },
        '73': { il: 'Şırnak', TGBNumber: 0, buisnessCount: 12, projectCount: 60, kategoriler: ['Girişimler', 'TTO'] },
        '74': { il: 'Bartın', TGBNumber: 0, buisnessCount: 15, projectCount: 70, kategoriler: ['TTO'] },
        '75': { il: 'Ardahan', TGBNumber: 0, buisnessCount: 8, projectCount: 40, kategoriler: ['Girişimler'] },
        '76': { il: 'Iğdır', TGBNumber: 0, buisnessCount: 10, projectCount: 50, kategoriler: ['Girişimler', 'TTO'] },
        '77': { il: 'Yalova', TGBNumber: 1, buisnessCount: 25, projectCount: 100, kategoriler: ['Girişimler'] },
        '78': { il: 'Karabük', TGBNumber: 0, buisnessCount: 20, projectCount: 80, kategoriler: ['Girişimler', 'TTO'] },
        '79': { il: 'Kilis', TGBNumber: 0, buisnessCount: 8, projectCount: 40, kategoriler: ['Girişimler'] },
        '80': { il: 'Osmaniye', TGBNumber: 1, buisnessCount: 20, projectCount: 80, kategoriler: ['Girişimler'] },
        '81': { il: 'Düzce', TGBNumber: 0, buisnessCount: 25, projectCount: 100, kategoriler: ['TTO'] }

    };

    const ilIsimleriDiv = document.querySelector('.il-isimleri');
    const tabloDiv = document.createElement('div');
    tabloDiv.classList.add('sehir-tablosu');
    document.body.appendChild(tabloDiv);
    document.querySelectorAll('#Harita g').forEach(function (il) {
        const plakaKodu = il.getAttribute('data-plakakodu');

        il.addEventListener('mouseover', function () {
            const sehirBilgi = sehirVerileri[plakaKodu];
            if (sehirBilgi) {
                const infoDiv = document.createElement('div');
                infoDiv.classList.add('sehir-bilgi');
                infoDiv.innerHTML = `
          <h4>${sehirBilgi.il}</h4>
          <p>Teknoloji Geliştirme Bölge Sayısı: ${sehirBilgi.teknolojiGelistirmeBolgeSayısı}</p>
          <p>Firma Sayısı: ${sehirBilgi.buisnessCount}</p>
          <p>Proje Sayısı: ${sehirBilgi.projectCount}</p>
        `;
                ilIsimleriDiv.innerHTML = '';
                ilIsimleriDiv.appendChild(infoDiv);

                const rect = il.getBoundingClientRect();
                ilIsimleriDiv.style.top = `${rect.top + window.scrollY - infoDiv.offsetHeight}px`;
                ilIsimleriDiv.style.left = `${rect.left + window.scrollX + rect.width / 2 - infoDiv.offsetWidth / 2}px`;
            }
        });

        il.addEventListener('mouseout', function () {
            ilIsimleriDiv.innerHTML = '';
        });

        il.addEventListener('click', function () {
            const sehirBilgi = sehirVerileri[plakaKodu];
            if (sehirBilgi) {
                tabloDiv.innerHTML = `
          <h4>${sehirBilgi.il} Sanayi ve Teknoloji Geliştirme Bölge Bilgileri</h4>
          <table>
            <tr>
              <th>Teknoloji Geliştirme Bölge Sayısı</th>
              <th>Firma Sayısı</th>
              <th>Proje Sayısı</th>
            </tr>
            <tr>
              <td>${sehirBilgi.teknolojiGelistirmeBolgeSayısı}</td>
              <td>${sehirBilgi.buisnessCount}</td>
              <td>${sehirBilgi.projectCount}</td>
            </tr>
          </table>
        `;
            }
        });
    });

    document.querySelectorAll('.sidebar a').forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const kategori = this.textContent;
            renklendirKategori(kategori);
        });
    });

    function renklendirKategori(kategori) {
        document.querySelectorAll('#Harita path').forEach(function (path) {
            path.classList.remove('selected');
        });

        Object.keys(sehirVerileri).forEach(function (plakaKodu) {
            const sehirBilgi = sehirVerileri[plakaKodu];
            if (sehirBilgi.kategoriler.includes(kategori)) {
                const sehirPath = document.querySelector(`#Harita g[data-plakakodu="${plakaKodu}"] path`);
                if (sehirPath) {
                    sehirPath.classList.add('selected');
                }
            }
        });
    }
    //ZEYNEP END
}
