const express = require('express');
const app = express();

const waktuMulai = new Date();

// Halaman utama
app.get('/', (req, res) => {
    res.send(`
        <h1>SELAMAT DATANG</h1>
        <h2>DI WEBSITE KELOMPOK 8</h2>
        <p>Website Praktik Pemrograman Berbasis Server</p>
    `);
});

// Halaman admin
app.get('/admin', (req, res) => {
    res.send('<h1>Selamat Datang di Halaman Admin Kelompok 8</h1>');
});

// Informasi server
app.get('/info', (req, res) => {
    res.send('Server dijalankan pada: ' + waktuMulai);
});

// Data anggota kelompok
app.get('/anggota', (req, res) => {
    res.send(`
        <h2>Anggota Kelompok 8</h2>
        <ul>
            <li>Imam</li>
            <li>Floren</li>
            <li>Arul</li>
            <li>Rafly</li>
        </ul>
    `);
});

// Menjalankan server
app.listen(8000, () => {
    console.log('Mini Web Server berjalan di http://localhost:8000');
});