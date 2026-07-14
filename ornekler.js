const { Collection } = require('discord.js');

// Yeni bir Collection oluşturuyoruz
const uyeler = new Collection();

console.log("--- 1. VERİ EKLEME (set) ---");
uyeler.set('11111', { isim: 'never meant to belong', rol: 'Kurucu', level: 99 });
uyeler.set('22222', { isim: 'toji', rol: 'Üye', level: 5 });
uyeler.set('33333', { isim: 'aki', rol: 'Moderatör', level: 15 });
uyeler.set('44444', { isim: 'maravilha', rol: 'VIP', level: 50 });
console.log(`Toplam ${uyeler.size} üye eklendi.\n`);


console.log("--- 2. VERİ ÇEKME (get) ---");
const kisi = uyeler.get('11111');
console.log(`11111 ID'li üyenin ismi: ${kisi.isim}\n`);


console.log("--- 3. VERİ KONTROLÜ (has) ---");
if (uyeler.has('55555')) {
    console.log("55555 ID'li üye sistemde kayıtlı.\n");
} else {
    console.log("55555 ID'li üye sistemde bulunamadı!\n");
}


console.log("--- 4. İLK VERİYİ BULMA (find) ---");
const mod = uyeler.find(uye => uye.rol === 'Moderatör');
console.log(`Bulunan ilk moderatör: ${mod.isim}\n`);


console.log("--- 5. ÇOKLU FİLTRELEME (filter) ---");
const yuksekSeviyeler = uyeler.filter(uye => uye.level > 10);
console.log(`Seviyesi 10'dan büyük olan kişi sayısı: ${yuksekSeviyeler.size}`);
// Filtrelenmiş kişilerin isimlerini yazdıralım
yuksekSeviyeler.forEach(uye => console.log(`- ${uye.isim} (Lvl: ${uye.level})`));
console.log("");


console.log("--- 6. LİSTELEME / DİZİYE ÇEVİRME (map) ---");
const isimListesi = uyeler.map(uye => uye.isim);
console.log(`Üye İsimleri: ${isimListesi.join(', ')}\n`);


console.log("--- 7. SIRALAMA (sort) ---");
// Seviyeye göre büyükten küçüğe sıralayalım
uyeler.sort((a, b) => b.level - a.level);

console.log("Seviyeye Göre Sıralı Liste:");
uyeler.forEach(uye => {
    console.log(`${uye.isim} - Seviye: ${uye.level}`);
});

/*
BU DOSYAYI ÇALIŞTIRMAK İÇİN:
1. Bilgisayarınızda Node.js kurulu olduğundan emin olun.
2. Bu dosyanın bulunduğu klasörde terminal (cmd/powershell) açın.
3. 'npm install discord.js' komutunu yazıp entegrasyonu indirin.
4. 'node ornekler.js' yazarak kodları çalıştırın ve çıktıları izleyin.
*/
