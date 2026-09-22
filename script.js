let currentKategori = "";
let qrGenerated = false;

const LIVE_URL = "https://xlsatumojokerto618-ux.github.io/xlsatumojokerto/";

const timSalesData = {
    "brian": ["Aditya Permadi", "Andhika Duta Nusantara", "Andika Wisnu Putra Pradana", "Bagas Tri Kusumawardana", "Gilang Ardianta Mahesa", "Indah Novitasari", "Moh. Heru Aprijanto", "Rahmad Hidayat", "Rian Pratama", "Risma Septiowati", "Rizky Cahya Adhitama", "Rizky Faza Ramadhan", "Yogsy Tri Pamungkas"],
    "didik": ["Ainur Rohman", "Aprilia Eka Saputra", "Dony Irwanto", "Farit Efendie", "Kuntoro", "Michael Rahardjo", "Mochamad Alfan Aminulloh", "Moh. Asifudin", "Muhammad Abdul Ghofur", "Muhammad Mauluddin", "Muhammad Refa Putra", "Rizky Mawardi Nugraha"],
    "muiz": ["Adi Gunawan", "Amanda Krista Dewi", "Anasrul Mahendra Wahyuda", "Hikmahtul Ilmiah", "Ika Budiastuti", "Indah Mawardani", "Kokoh Eko Saputro", "Lutfia Ariani Kamu", "M. Agung Setiawan", "Moch. Abdul Kodir", "Moh. Asifudin", "Sri Palupi"],
    "hanif": ["Angrayni Wahyuning Pratiwi", "Bismo Arsha Ardana Desponsa", "Diky Aliffiyan Putra", "Hendrata Diki Dwi Yulian", "Ifada Umardhani", "Khafif Fatkhurrozi", "M. Rifki Sahyudi", "Muhammad Cahya Diwangkara", "Pandya Maheswara", "Satria Jaya Purnama", "Satria Wibowo", "Tegar Adiyoga"],
    "rizky": ["Agus Arfandik", "Choirul Iksan", "Dava Syah Jaya Mulya", "Fajar Salim", "Habib Muhammad", "Mohamad Andik Priyono", "Muchamad Aditya Nur Iman", "Oky Panji Pramono", "Rezky Achmadi Sholeh", "Selamet Cahyono"]
};

function toggleSales(spvId) {
    const salesContainer = document.getElementById(`sales-${spvId}`);
    document.querySelectorAll('[id^="sales-"]').forEach(el => {
        if (el.id !== `sales-${spvId}`) el.classList.add('hidden');
    });
    if (salesContainer.classList.contains('hidden')) {
        salesContainer.classList.remove('hidden');
        const ulList = salesContainer.querySelector('ul');
        if (ulList.children.length === 0 && timSalesData[spvId]) {
            timSalesData[spvId].forEach(namaSales => {
                const li = document.createElement('li');
                li.textContent = namaSales;
                ulList.appendChild(li);
            });
        }
    } else {
        salesContainer.classList.add('hidden');
    }
}

const clusterData = {
    "Kec. Sooko": ["Desa Gemekan", "Desa Jampirogo", "Desa Japan", "Graha Japan Asri", "Desa Klinterejo", "Desa Sambiroto", "Desa Sooko", "Wisma Sooko Indah"],
    "Kec. Puri": ["Desa Banjaragung", "Desa Brayung", "Desa Kenanten", "Griya Arsy Mansion", "Desa Medali", "Desa Tambak Agung", "Dusun Sawurkembang", "Perum Puri Diamond", "Perum Wikarsa Sejahtera", "Perum Graha Permata Agung", "Perum Puri Majapahit"],
    "Kec. Mojoanyar": ["Bumi Jabon Estate", "Desa Gayaman", "Desa Jabon", "Desa Wunut", "Graha Majapahit", "Taman Majapahit Firdaus Regency"],
    "Kec. Bangsal": ["Desa Ngastemi", "Desa Pancing", "Desa Pekuwon", "Desa Salen", "Desa Mojotamping", "Perum Graha Bhinneka Fortuna"],
    "Kec. Mojosari": ["Desa Belahan Tengah", "Desa Jolangan", "Desa Kebon Dalem", "Desa Randubango", "Desa Menanggal", "Desa Modopuro", "Desa Pekukuhan", "Desa Seduri", "Desa Sumbertanggul", "Kelurahan Sarirejo", "Perum Ahsana Modern Mojosari", "Perum Griya Pekukuhan Asri", "Perum Graha Menanggal Indah", "Perum Griya Nanggal Asri", "Perum Menanggal Indah", "Perum Menanggal Residence", "Perum Rumahku Residence", "Perum Zian Istana Residence"],
    "Kec. Kutorejo": ["Desa Kepuhpandak", "Desa Pesanggrahan", "Desa Singowangi", "Desa Wonodadi", "Perum Permata Pesanggrahan"],
    "Kec. Pungging": ["Desa Balongmasin", "Desa Jabontegal", "Desa Jatilangkung", "Desa Watukenongo", "Desa Kembangringgit", "Desa Sekargadung", "Desa Tunggalpager", "Desa Mojorejo", "Grand Panjer Regency", "Wisma Pungging Permai"],
    "Kec. Ngoro": ["Desa Ngoro", "Desa Jasem", "Desa Candiharjo", "Perum Baiti Jannati", "Desa Sedati", "Desa Wonosari", "Perum Griya Wonosari Indah", "Desa Watesnegoro"]
};

document.addEventListener('DOMContentLoaded', function() {
    AOS.init({ once: true, offset: 30, duration: 700 });
    
    const mobileMenu = document.getElementById('mobile-menu');
    const pcBtn = document.getElementById('pc-menu-button');
    const mobileBtn = document.getElementById('mobile-menu-button');

    function toggleMenu() {
        mobileMenu.classList.toggle('hidden');
    }

    if(pcBtn) pcBtn.addEventListener('click', toggleMenu);
    if(mobileBtn) mobileBtn.addEventListener('click', toggleMenu);
});

function toggleMobileMenu() {
    document.getElementById('mobile-menu').classList.add('hidden');
}

function openStrukturModal() {
    document.getElementById('strukturModal').classList.remove('hidden');
}
function closeStrukturModal() {
    document.getElementById('strukturModal').classList.add('hidden');
}

function openDokumentasiModal() {
    document.getElementById('dokumentasiModal').classList.remove('hidden');
}
function closeDokumentasiModal() {
    document.getElementById('dokumentasiModal').classList.add('hidden');
}

function openTestimoniModal() {
    document.getElementById('testimoniModal').classList.remove('hidden');
}
function closeTestimoniModal() {
    document.getElementById('testimoniModal').classList.add('hidden');
}

function openFwaModal() {
    document.getElementById('fwaModal').classList.remove('hidden');
}
function closeFwaModal() {
    document.getElementById('fwaModal').classList.add('hidden');
}

function openKarirModal() {
    document.getElementById('karirModal').classList.remove('hidden');
}
function closeKarirModal() {
    document.getElementById('karirModal').classList.add('hidden');
}

function filterCluster() {
    const input = document.getElementById('searchCluster').value.toLowerCase();
    const cards = document.querySelectorAll('.cluster-card');
    let foundCount = 0;
    cards.forEach(card => {
        if (card.innerText.toLowerCase().includes(input)) {
            card.style.display = 'flex';
            foundCount++;
        } else {
            card.style.display = 'none';
        }
    });
    document.getElementById('noResult').classList.toggle('hidden', foundCount > 0);
}

function filterDokumentasi(kategori) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        btn.classList.remove('bg-[#002dbb]', 'text-white');
        btn.classList.add('bg-white', 'text-slate-600', 'border', 'border-slate-200');
    });
    const activeBtn = document.getElementById(`btn-${kategori}`);
    if(activeBtn) {
        activeBtn.classList.remove('bg-white', 'text-slate-600', 'border', 'border-slate-200');
        activeBtn.classList.add('bg-[#002dbb]', 'text-white');
    }

    const items = document.querySelectorAll('#dokumentasiModal .dok-item');
    items.forEach(item => {
        const match = (kategori === 'semua' || item.getAttribute('data-category') === kategori);
        if(match) {
            item.style.display = 'block';
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'scale(1)';
            }, 50);
        } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.95)';
            setTimeout(() => {
                if(item.style.opacity === '0') item.style.display = 'none';
            }, 300);
        }
    });
}

function openModal(kategori, defaultKec = '') {
    currentKategori = kategori;
    const isPelamar = kategori.includes('Kandidat');
    const isGangguan = kategori.includes('Gangguan');
    
    document.getElementById('modalTitle').innerText = isGangguan ? 'Formulir Laporan Gangguan WiFi' : (isPelamar ? 'Formulir Kirim Lamaran' : 'Formulir Cek Lokasi Pelanggan');
    document.getElementById('modalSubtitle').innerText = isGangguan ? 'Laporkan kendala atau gangguan jaringan Anda kepada tim Troubleshoot.' : (isPelamar ? 'Lengkapi data diri Anda.' : 'Pilih kecamatan dan desa/perumahan Anda.');
    
    const idPelangganWrapper = document.getElementById('idPelangganWrapper');
    const wilayahWrapper = document.getElementById('kecamatanWrapper');
    const subWilayahWrapper = document.getElementById('desaWrapper');
    const kabupatenWrapper = document.getElementById('kabupatenWrapper');
    const warnaBlokWrapper = document.getElementById('warnaBlokWrapper');
    const gpsWrapper = document.getElementById('gpsWrapper');
    const pendidikanWrapper = document.getElementById('pendidikanWrapper');
    const pengalamanSalesWrapper = document.getElementById('pengalamanSalesWrapper');
    const alamatTextarea = document.getElementById('inputKeterangan');
    
    if (isGangguan) {
        idPelangganWrapper.style.display = 'block';
        wilayahWrapper.style.display = 'none';
        subWilayahWrapper.style.display = 'none';
        kabupatenWrapper.style.display = 'none';
        warnaBlokWrapper.style.display = 'none';
        gpsWrapper.style.display = 'block';
        pendidikanWrapper.style.display = 'none';
        pengalamanSalesWrapper.style.display = 'none';
        
        document.getElementById('inputIdPelanggan').setAttribute('required', 'true');
        document.getElementById('labelIdPelanggan').innerText = 'ID Pelanggan Resmi (Wajib diisi untuk laporan gangguan)';
        document.getElementById('labelKeterangan').innerText = 'Detail Alamat Rumah';
        alamatTextarea.placeholder = 'Contoh: RT 02 / RW 01, No. 45...';
        
        document.getElementById('kendalaWrapper').classList.remove('hidden');
        document.getElementById('inputKendala').setAttribute('required', 'true');
    } else if (isPelamar) {
        idPelangganWrapper.style.display = 'none';
        wilayahWrapper.style.display = 'none';
        subWilayahWrapper.style.display = 'none';
        kabupatenWrapper.style.display = 'none';
        warnaBlokWrapper.style.display = 'none';
        gpsWrapper.style.display = 'none';
        pendidikanWrapper.style.display = 'block';
        pengalamanSalesWrapper.style.display = 'block';
        
        document.getElementById('inputPendidikan').setAttribute('required', 'true');
        document.getElementById('inputPengalamanSales').setAttribute('required', 'true');
        
        document.getElementById('labelKeterangan').innerText = 'Keterangan Tambahan / Pengalaman Kerja Lainnya';
        alamatTextarea.placeholder = 'Tuliskan pengalaman kerja atau keahlian pendukung lainnya...';
        document.getElementById('kendalaWrapper').classList.add('hidden');
        document.getElementById('inputKendala').removeAttribute('required');
    } else {
        idPelangganWrapper.style.display = 'none'; 
        wilayahWrapper.style.display = 'block';
        subWilayahWrapper.style.display = 'block';
        kabupatenWrapper.style.display = 'block';
        warnaBlokWrapper.style.display = 'block';
        gpsWrapper.style.display = 'block';
        pendidikanWrapper.style.display = 'none';
        pengalamanSalesWrapper.style.display = 'none';
        
        document.getElementById('inputPendidikan').removeAttribute('required');
        document.getElementById('inputPengalamanSales').removeAttribute('required');
        
        document.getElementById('labelKeterangan').innerText = 'Detail Alamat / Nomor Rumah';
        alamatTextarea.placeholder = 'Contoh: RT 02 / RW 01, No. 45...';
        document.getElementById('kendalaWrapper').classList.add('hidden');
        document.getElementById('inputKendala').removeAttribute('required');
        
        const selectKecamatan = document.getElementById('inputKecamatan');
        selectKecamatan.innerHTML = '<option value="">-- Pilih Kecamatan --</option>';
        Object.keys(clusterData).forEach(kec => {
            let opt = document.createElement('option');
            opt.value = kec;
            opt.textContent = kec;
            selectKecamatan.appendChild(opt);
        });
        if (defaultKec) {
            selectKecamatan.value = defaultKec;
            updateDesaOptions();
        }
    }

    document.getElementById('leadModal').classList.remove('hidden');
}

function updateDesaOptions() {
    const selectedKec = document.getElementById('inputKecamatan').value;
    const selectDesa = document.getElementById('inputDesa');
    selectDesa.innerHTML = '<option value="">-- Pilih Desa / Perumahan --</option>';
    if (selectedKec && clusterData[selectedKec]) {
        clusterData[selectedKec].forEach(desa => {
            let opt = document.createElement('option');
            opt.value = desa;
            opt.textContent = desa;
            selectDesa.appendChild(opt);
        });
    }
}

function getGPSLocation() {
    const statusText = document.getElementById('gpsStatus');
    const alamatTextarea = document.getElementById('inputKeterangan');
    if (!navigator.geolocation) {
        statusText.innerHTML = '<span class="text-red-500">❌ Geolocation tidak didukung.</span>';
        return;
    }
    statusText.innerHTML = '<span class="text-blue-600">⏳ Mendeteksi GPS...</span>';
    navigator.geolocation.getCurrentPosition((pos) => {
        const mapsLink = `https://maps.google.com/?q=${pos.coords.latitude},${pos.coords.longitude}`;
        if (!alamatTextarea.value.includes('Sharelock GPS:')) {
            alamatTextarea.value += ` | Sharelock GPS: ${mapsLink}`;
        } else {
            alamatTextarea.value = alamatTextarea.value.replace(/\| Sharelock GPS: .*/, `| Sharelock GPS: ${mapsLink}`);
        }
        statusText.innerHTML = '<span class="text-emerald-600 font-semibold">✅ GPS Berhasil Dimasukkan ke Alamat!</span>';
    }, () => {
        statusText.innerHTML = '<span class="text-red-500">❌ Gagal mendeteksi lokasi.</span>';
    });
}

function closeModal() {
    document.getElementById('leadModal').classList.add('hidden');
}

async function submitForm(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    
    const nama = document.getElementById('inputNama').value;
    const whatsapp = document.getElementById('inputWa').value;
    const idPelanggan = document.getElementById('inputIdPelanggan').value.trim();
    const kecamatan = document.getElementById('inputKecamatan').value;
    const desa = document.getElementById('inputDesa').value;
    const alamat = document.getElementById('inputKeterangan').value;
    const kendala = document.getElementById('inputKendala').value;
    const pendidikan = document.getElementById('inputPendidikan').value;
    const pengalamanSales = document.getElementById('inputPengalamanSales').value;
    
    const isPelamar = currentKategori.includes('Kandidat');
    const isGangguan = currentKategori.includes('Gangguan');
    
    const randomString = Math.random().toString(36).substring(2, 7).toUpperCase();
    let uniqueCode = `CUS-${randomString}`;
    let targetWa = "6285974511215"; 
    
    if (isPelamar) {
        uniqueCode = `JOB-${randomString}`;
    } else if (isGangguan) {
        uniqueCode = `GANGGUAN-${randomString}`;
        targetWa = "6281952844513"; 
    }
    
    formData.append('Kode_Unik', uniqueCode);

    try {
        await fetch(form.action, { method: 'POST', body: formData, headers: { 'Accept': 'application/json' } });
    } catch (error) {
        console.error('Gagal mengirim ke Formspree:', error);
    }

    let pesan = "";
    if (isGangguan) {
        pesan = `🚨 *LAPORAN GANGGUAN / KENDALA* 🚨\n` +
                `🔑 *Kode Unik:* #${uniqueCode}\n\n` +
                `🆔 *ID Pelanggan:* ${idPelanggan}\n` +
                `👤 *Nama:* ${nama}\n` +
                `📞 *No WA:* ${whatsapp}\n` +
                `⚠️ *Kendala:* ${kendala}\n` +
                `🏠 *Alamat & GPS:* ${alamat}\n\n` +
                `_Halo Admin Troubleshoot, mohon bantuan pengecekan jaringan di rumah saya. Terima kasih!_`;
    } else if (isPelamar) {
        pesan = `✨ *PENGAJUAN LAMARAN KERJA* ✨\n` +
                `🔑 *Kode Unik:* #${uniqueCode}\n\n` +
                `📌 *Posisi:* ${currentKategori}\n` +
                `👤 *Nama:* ${nama}\n` +
                `📞 *No WA:* ${whatsapp}\n` +
                `🎓 *Pendidikan Terakhir:* ${pendidikan}\n` +
                `💼 *Pengalaman Sales/Marketing:* ${pengalamanSales}\n` +
                `📝 *Keterangan Tambahan:* ${alamat}\n\n` +
                `_Halo Admin, saya berminat bergabung. Terima kasih!_`;
    } else {
        pesan = `🔍 *PERMINTAAN CEK LOKASI WIFI* 🔍\n` +
                `🔑 *Kode Unik:* #${uniqueCode}\n\n` +
                `📦 *Paket:* ${currentKategori}\n` +
                `👤 *Nama:* ${nama}\n` +
                `📞 *No WA:* ${whatsapp}\n` +
                `📍 *Kecamatan:* ${kecamatan}\n` +
                `🏘️ *Desa/Perumahan:* ${desa}\n` +
                `🏠 *Alamat & GPS:* ${alamat}\n\n` +
                `_Halo Admin, mohon bantuan cek lokasi. Terima kasih!_`;
    }
    
    window.open(`https://wa.me/${targetWa}?text=${encodeURIComponent(pesan)}`, '_blank');
    form.reset();
    closeModal();
}

function openShareModal() {
    document.getElementById('shareModal').classList.remove('hidden');
    if (!qrGenerated) {
        new QRCode(document.getElementById("qrcode"), { text: LIVE_URL, width: 150, height: 150 });
        qrGenerated = true;
    }
    document.getElementById('shareWaBtn').href = `https://wa.me/?text=${encodeURIComponent("Cek info paket internet XL Satu Mojokerto di sini:\n\n" + LIVE_URL)}`;
}
function closeShareModal() { document.getElementById('shareModal').classList.add('hidden'); }
function copyWebsiteLink() {
    navigator.clipboard.writeText(LIVE_URL).then(() => alert("Tautan berhasil disalin!"));
}