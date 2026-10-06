# Keuangan Saya — V2 MVP

Aplikasi keuangan pribadi Android + iOS berbasis Expo/React Native dan SQLite.

## V2 yang sudah tersedia
- Dashboard profesional dengan total deposit, gaji bulan ini, utang, piutang, dan tabungan.
- Bottom navigation: Beranda, Utang, Piutang, Tabungan, Riwayat.
- Pencatatan pemasukan/gaji dan pengeluaran.
- Utang dengan progress pelunasan dan pembayaran cicilan.
- Pembayaran utang otomatis mengurangi deposit, sisa utang, dan tempo.
- Piutang dengan penerimaan pembayaran otomatis menambah deposit.
- Tabungan dengan target dan progress.
- Riwayat transaksi terpadu.
- SQLite offline-first.
- UI responsif untuk Android/iOS.

## Menjalankan

```bash
npm install
npx expo start
```

Untuk cloud build Android dengan EAS:

```bash
npm install -g eas-cli
eas login
eas build -p android --profile preview
```

## Catatan
MVP V2 ini masih menggunakan database lokal. Sinkronisasi cloud, login, backup, notifikasi jatuh tempo, laporan, dan keamanan biometrik dapat ditambahkan pada tahap berikutnya.
