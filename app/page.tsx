"use client";

import { useState } from "react";

export default function Home() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [trainerPage, setTrainerPage] = useState(0);
    const [showAllTrainers, setShowAllTrainers] = useState(false);

    return (
        <>
            {/* =========================================================
     TOP UTILITY BAR & MAIN NAVIGATION
     ========================================================= */}
            <div className="top-bar" id="top">
                <div className="container top-bar-inner">
                    <div className="top-left">
                        <span>📍 Komplek Pesantren Idrisiyyah, Pagendingan, Cisayong, Kab. Tasikmalaya</span>
                    </div>
                    <div className="top-right">
                        <a href="https://wa.me/6281224249757" target="_blank" rel="noopener noreferrer">
                            WA: 0812-2424-9757
                        </a>
                        <span>·</span>
                        <a href="mailto:sufitrainingcenter@gmail.com">sufitrainingcenter@gmail.com</a>
                    </div>
                </div>
            </div>

            <header className="site-header">
                <div className="container nav-inner">
                    <a href="#top" className="site-logo">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/logo-stc.png"
                            alt="STC - Sufi Training Center"
                            className="site-logo-img"
                        />
                        <span className="logo-text-title">
                            Sufi Training Center
                        </span>
                    </a>

                    <nav className="nav-desktop">
                        <ul className="nav-links">
                            <li><a href="#top" className="active">Beranda</a></li>
                            <li><a href="#sejarah">Sejarah</a></li>
                            <li><a href="#seminar">Layanan</a></li>
                            <li><a href="#metode">Metode</a></li>
                            <li><a href="#trainer">Trainer</a></li>
                            <li><a href="#podcast">Galeri</a></li>
                            <li><a href="#katalog">Testimoni</a></li>
                            <li><a href="#kontak">Kontak</a></li>
                        </ul>
                    </nav>

                    <div className="nav-actions">
                        <a href="https://wa.me/6281224249757" className="btn-nav-cta" target="_blank" rel="noopener noreferrer">
                            Konsultasi Training &rarr;
                        </a>
                        <button
                            type="button"
                            className={`nav-hamburger ${isNavOpen ? "active" : ""}`}
                            id="navToggle"
                            aria-label="Buka Menu"
                            aria-expanded={isNavOpen}
                            onClick={() => setIsNavOpen(!isNavOpen)}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>

                {/* Mobile Drawer */}
                <div className={`mobile-drawer ${isNavOpen ? "open" : ""}`} id="mobileNav">
                    <ul>
                        <li><a href="#top" onClick={() => setIsNavOpen(false)}>Beranda</a></li>
                        <li><a href="#sejarah" onClick={() => setIsNavOpen(false)}>Sejarah</a></li>
                        <li><a href="#seminar" onClick={() => setIsNavOpen(false)}>Layanan</a></li>
                        <li><a href="#metode" onClick={() => setIsNavOpen(false)}>Metode</a></li>
                        <li><a href="#trainer" onClick={() => setIsNavOpen(false)}>Trainer</a></li>
                        <li><a href="#podcast" onClick={() => setIsNavOpen(false)}>Galeri</a></li>
                        <li><a href="#katalog" onClick={() => setIsNavOpen(false)}>Testimoni</a></li>
                        <li><a href="#kontak" onClick={() => setIsNavOpen(false)}>Kontak</a></li>
                    </ul>
                    <a
                        href="https://wa.me/6281224249757"
                        className="btn-nav-cta btn-mobile-cta"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsNavOpen(false)}
                    >
                        Konsultasi Training &rarr;
                    </a>
                </div>
            </header>

            {/* =========================================================
     HERO SECTION: SIMPLE, MINIMALIST & INSTITUTIONAL
     ========================================================= */}
            <section className="sec-hero">
                <div className="container hero-container-simple">
                    <h1 className="hero-title">
                        Spiritual Wellness: <em>Sacred Governance</em> for Leaders
                    </h1>

                    <p className="hero-lead">
                        Pelatihan pengembangan potensi manusia secara holistik untuk instansi pemerintah dan perusahaan.
                        Mengintegrasikan tiga pilar keilmuan: pendekatan sufistik modern, Neuro-Linguistic Programming (NLP),
                        dan neuroscience untuk melahirkan pemimpin yang tenang, utuh, berintegritas tinggi, dan amanah.
                    </p>

                    <div className="hero-action-simple">
                        <a href="https://wa.me/6281224249757" className="btn-hero-primary" target="_blank"
                            rel="noopener noreferrer">
                            Konsultasi Training Instansi &rarr;
                        </a>
                    </div>

                    <div className="hero-trust-simple">
                        <div className="trust-stat">
                            <div className="trust-stat-val">4.70<small>/5</small></div>
                            <div className="trust-stat-desc">Tingkat Kepuasan Peserta</div>
                        </div>
                        <div className="trust-divider"></div>
                        <div className="trust-stat">
                            <div className="trust-stat-val">+70.4</div>
                            <div className="trust-stat-desc">Net Promoter Score (Kategori Excellent)</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
     SEJARAH & LATAR BELAKANG STC (HISTORICAL SECTION)
     ========================================================= */}
            <section className="sec-history" id="sejarah">
                <div className="container">
                    <div className="history-grid">
                        {/* Kolom Kiri: Teks & Narasi Sejarah */}
                        <div className="history-content">
                            <span className="history-eyebrow">SEJARAH &amp; LATAR BELAKANG</span>
                            <h2 className="history-title">
                                Berakar dari Tradisi Sufistik, Berkembang Menjawab <em>Tantangan Kepemimpinan</em>
                            </h2>
                            <div className="history-body">
                                <p>
                                    Perjalanan <strong>Sufi Training Center (STC)</strong> berakar dari nilai luhur Pesantren
                                    Idrisiyyah di Pagendingan, Cisayong, Tasikmalaya—sebuah institusi pendidikan Islam yang
                                    telah membina umat sejak tahun 1932. Pada tahun <strong>2015</strong>, STC secara resmi
                                    didirikan oleh <strong>Syekh Akbar Muhammad Fathurahman, M.Ag</strong> (Mursyid Tarekat
                                    Idrisiyyah) untuk menjawab kebutuhan riil aparatur negara dan eksekutif korporasi akan
                                    pembinaan karakter yang menyentuh akar batin terdalam.
                                </p>
                                <p>
                                    Melihat tingginya tingkat kejenuhan kerja (<em>burnout</em>), disorientasi kepemimpinan, dan
                                    kerapuhan integritas di era modern, STC menghadirkan terobosan dengan memadukan tiga pilar
                                    keilmuan: kedalaman spiritualitas <strong>Sufistik (Tazkiyatun Nafs)</strong>, metodologi
                                    perilaku <strong>Neuro-Linguistic Programming (NLP)</strong>, dan temuan biologi kesadaran
                                    <strong>Neuroscience</strong>. Kolaborasi ini mentransformasikan ajaran spiritual menjadi
                                    instrumen nyata tata kelola kepemimpinan yang amanah, tenang, dan anti-fraud (<em>Sacred
                                        Governance</em>).
                                </p>
                                <p>
                                    Kini, beroperasi secara legal sebagai <strong>Lembaga Kursus dan Pelatihan (LKP
                                        SPNF)</strong> Yayasan Idrisiyyah, STC telah dipercaya mendampingi ribuan pemimpin dari
                                    kementerian, pemerintah daerah, badan usaha milik negara (BUMN), perbankan nasional, hingga
                                    institusi pendidikan tinggi di seluruh Indonesia.
                                </p>
                            </div>

                            {/* Milestones Badges */}
                            <div className="history-badges">
                                <div className="h-badge">
                                    <span className="h-badge-val">2015</span>
                                    <span className="h-badge-lbl">Tahun Pendirian STC</span>
                                </div>
                                <div className="h-badge">
                                    <span className="h-badge-val">LKP SPNF</span>
                                    <span className="h-badge-lbl">Izin Resmi Berbadan Hukum</span>
                                </div>
                                <div className="h-badge">
                                    <span className="h-badge-val">3 Pilar</span>
                                    <span className="h-badge-lbl">Sufistik · NLP · Neuroscience</span>
                                </div>
                            </div>
                        </div>

                        {/* Kolom Kanan: Foto & Visual Heritage */}
                        <div className="history-visual">
                            <div className="history-card">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src="/images/pesantren-landscape.jpg"
                                    alt="Sufi Training Center - Pesantren Idrisiyyah Tasikmalaya" className="history-card-img"
                                    loading="lazy" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
     1. SEMINAR & TRAINING (Materi Pokok Bahasan STC)
     ========================================================= */}
            <section className="sec-seminar" id="seminar">
                <div className="container">
                    <div className="head">
                        <h1>Materi Pokok Bahasan STC</h1>
                        <p>Kurikulum Pelatihan Holistik Memadukan Pendekatan Sufistik, NLP, dan Neuroscience</p>
                    </div>

                    <div className="seminar-grid">
                        {/* Item 1 */}
                        <div className="sem-item">
                            <div className="sem-icon">
                                <svg viewBox="0 0 24 24">
                                    <circle cx="9" cy="6" r="2.5" />
                                    <circle cx="15" cy="6" r="2.5" />
                                    <path d="M4 18v-4a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v4" />
                                    <path d="M14 11h3a3 3 0 0 1 3 3v4" />
                                </svg>
                            </div>
                            <h3>5 Human Dimensions</h3>
                            <p>Menyelaraskan 5 unsur kompleks manusia yang saling berinteraksi: Jasmani, Akal, Emosi, Rohani, dan Jiwa untuk melahirkan pribadi pemimpin yang utuh.</p>
                        </div>

                        {/* Item 2 */}
                        <div className="sem-item">
                            <div className="sem-icon">
                                <svg viewBox="0 0 24 24">
                                    <rect x="3" y="7" width="18" height="13" rx="2" />
                                    <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
                                    <path d="M3 12h18" />
                                    <rect x="10" y="10" width="4" height="4" rx="1" />
                                </svg>
                            </div>
                            <h3>Fondasi Agama Terpadu</h3>
                            <p>Mengintegrasikan kesatuan esensial Iman, Islam, dan Ihsan ke dalam etika kerja, integritas personal, dan budaya tata kelola amanah (Sacred Governance).</p>
                        </div>

                        {/* Item 3 */}
                        <div className="sem-item">
                            <div className="sem-icon">
                                <svg viewBox="0 0 24 24">
                                    <rect x="3" y="6" width="18" height="14" rx="2" />
                                    <path d="M16 13h5v-2h-5a1 1 0 0 0 0 2z" />
                                    <path d="M6 6l10-3v3" />
                                </svg>
                            </div>
                            <h3>Manajemen Hati</h3>
                            <p>Membimbing batin menuju jiwa yang damai (nafs muthmainnah), hati yang selamat dan tulus (qalbun salim), serta sikap senantiasa mawas diri (muraqabah).</p>
                        </div>

                        {/* Item 4 */}
                        <div className="sem-item">
                            <div className="sem-icon">
                                <svg viewBox="0 0 24 24">
                                    <rect x="3" y="4" width="18" height="12" rx="1" />
                                    <path d="M8 20l4-4 4 4" />
                                    <path d="M12 16v4" />
                                    <path d="M8 12v-2" />
                                    <path d="M12 12V8" />
                                    <path d="M16 12v-3" />
                                </svg>
                            </div>
                            <h3>Tazkiyatun Nafs</h3>
                            <p>Pembersihan jiwa sebagai benteng moral terkuat aparatur dan pimpinan dari jerat stres, godaan duniawi, penyalahgunaan wewenang, dan budaya anti-fraud.</p>
                        </div>

                        {/* Item 5 */}
                        <div className="sem-item">
                            <div className="sem-icon">
                                <svg viewBox="0 0 24 24">
                                    <path d="M3 20h18" />
                                    <path d="M5 20v-6l4-3 4 3v6" />
                                    <path d="M15 20V9l4-3v14" />
                                    <path d="M6 10l9-7" />
                                </svg>
                            </div>
                            <h3>Ibadah Terbimbing</h3>
                            <p>Praktik shalat khusyuk, dzikir qalbu sirri dan jahri, muhasabah mendalam, tadarus tematik, serta qiyamul lail untuk ketenangan batin hakiki.</p>
                        </div>

                        {/* Item 6 */}
                        <div className="sem-item">
                            <div className="sem-icon">
                                <svg viewBox="0 0 24 24">
                                    <circle cx="8" cy="7" r="2.5" />
                                    <path d="M4 19v-5a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v5" />
                                    <rect x="14" y="5" width="7" height="6" rx="1" />
                                    <path d="M17.5 11v6" />
                                </svg>
                            </div>
                            <h3>Pendekatan 3 Pilar</h3>
                            <p>Sinergi ilmiah metode Sufistik, Neuro-Linguistic Programming (NLP), dan temuan mutakhir Neuroscience untuk transformasi karakter yang terukur.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
     2. MITRA & KLIEN RESMI STC (Slide 12)
     ========================================================= */}
            <section className="sec-clients" id="klien">
                <div className="client-head">
                    <span className="client-eyebrow">LEMBAGA &amp; KORPORASI TERNAMA</span>
                    <h2 className="client-title">Dipercaya oleh Kementerian, Lembaga Negara, BUMN &amp; Swasta</h2>
                </div>

                <div className="client-grid">
                    {/* 1. Bank Indonesia */}
                    <div className="client-card">
                        <div className="client-card-logo-wrap">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/images/clients/bank-indonesia.png" alt="Bank Indonesia" loading="lazy" />
                        </div>
                        <span className="client-card-name">Bank Indonesia (BI)</span>
                    </div>

                    {/* 2. Bank BNI */}
                    <div className="client-card">
                        <div className="client-card-logo-wrap">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/images/clients/bni.png" alt="Bank BNI" loading="lazy" />
                        </div>
                        <span className="client-card-name">Bank BNI</span>
                    </div>

                    {/* 3. PT Pelindo */}
                    <div className="client-card">
                        <div className="client-card-logo-wrap">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/images/clients/pelindo.png" alt="PT Pelindo" loading="lazy" />
                        </div>
                        <span className="client-card-name">PT Pelindo</span>
                    </div>

                    {/* 4. Pemda Kabupaten Tasikmalaya */}
                    <div className="client-card">
                        <div className="client-card-logo-wrap">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/images/clients/pemda-tasikmalaya.png" alt="Pemda Kab. Tasikmalaya" loading="lazy" />
                        </div>
                        <span className="client-card-name">Pemkab Tasikmalaya</span>
                    </div>

                    {/* 5. Pemprov DKI Jakarta */}
                    <div className="client-card">
                        <div className="client-card-logo-wrap">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/images/clients/pemprov-dki.png" alt="Pemprov DKI Jakarta" loading="lazy" />
                        </div>
                        <span className="client-card-name">Pemprov DKI Jakarta</span>
                    </div>

                    {/* 6. Astra Agro Lestari */}
                    <div className="client-card">
                        <div className="client-card-logo-wrap">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/images/clients/astra-agro.png" alt="Astra Agro Lestari" loading="lazy" />
                        </div>
                        <span className="client-card-name">Astra Agro Lestari</span>
                    </div>

                    {/* 7. Kepolisian Resor */}
                    <div className="client-card">
                        <div className="client-card-logo-wrap">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/images/clients/polres.png" alt="Kepolisian Resor (Polres)" loading="lazy" />
                        </div>
                        <span className="client-card-name">Kepolisian Resor (Polres)</span>
                    </div>

                    {/* 8. PT Gudang Garam */}
                    <div className="client-card">
                        <div className="client-card-logo-wrap">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/images/clients/gudang-garam.png" alt="PT Gudang Garam" loading="lazy" />
                        </div>
                        <span className="client-card-name">PT Gudang Garam</span>
                    </div>

                    {/* 9. Sinarmas Reinsurance */}
                    <div className="client-card">
                        <div className="client-card-logo-wrap">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/images/clients/simasre.png" alt="Sinarmas Reinsurance" loading="lazy" />
                        </div>
                        <span className="client-card-name">Sinarmas Reinsurance</span>
                    </div>

                    {/* 10. Horison Hotel Tasikmalaya */}
                    <div className="client-card">
                        <div className="client-card-logo-wrap">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/images/clients/horison.png" alt="Horison Hotel" loading="lazy" />
                        </div>
                        <span className="client-card-name">Horison Hotel</span>
                    </div>

                    {/* 11. PT Ansori Jaya */}
                    <div className="client-card">
                        <div className="client-card-logo-wrap">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/images/clients/ansori-jaya.png" alt="PT Ansori Jaya" loading="lazy" />
                        </div>
                        <span className="client-card-name">PT Ansori Jaya</span>
                    </div>

                    {/* 12. PP Kebon Jambu Al Islamy */}
                    <div className="client-card">
                        <div className="client-card-logo-wrap">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/images/clients/kebon-jambu.png" alt="PP Kebon Jambu Al Islamy" loading="lazy" />
                        </div>
                        <span className="client-card-name">PP Kebon Jambu</span>
                    </div>
                </div>
            </section>

            {/* =========================================================
     3. ALC METHOD / STC METHOD DIAGRAM (Ref: Screenshot 3)
     ========================================================= */}
            <section className="sec-method" id="metode">
                <div className="container">
                    <h2 className="method-heading">STC Method</h2>

                    <div className="method-diagram">
                        {/* Left Column (01 - 04) - 4 Pilar Metodologi */}
                        <div className="m-col left">
                            <div className="m-item">
                                <div className="m-text">
                                    Transformational<br />Training</div>
                                <div className="m-badge">01</div>
                            </div>
                            <div className="m-item">
                                <div className="m-text">
                                    Experiential<br />Learning</div>
                                <div className="m-badge">02</div>
                            </div>
                            <div className="m-item">
                                <div className="m-text">
                                    Muhasabah<br />Mendalam</div>
                                <div className="m-badge">03</div>
                            </div>
                            <div className="m-item">
                                <div className="m-text">
                                    Tanya Jawab<br />Interaktif</div>
                                <div className="m-badge">04</div>
                            </div>
                        </div>

                        {/* Center Dashed Connector Lines */}
                        <svg className="m-connector-svg" viewBox="0 0 210 380" fill="none" aria-hidden="true">
                            {/* Left 01 to 04 */}
                            <circle cx="16" cy="36" r="4.5" stroke="#16222f" strokeWidth="2.2" fill="#fff" />
                            <path d="M21 36 H86 V190" stroke="#16222f" strokeWidth="2" strokeDasharray="5 4" />

                            <circle cx="16" cy="138" r="4.5" stroke="#16222f" strokeWidth="2.2" fill="#fff" />
                            <path d="M21 138 H62 V190" stroke="#16222f" strokeWidth="2" strokeDasharray="5 4" />

                            <circle cx="16" cy="242" r="4.5" stroke="#16222f" strokeWidth="2.2" fill="#fff" />
                            <path d="M21 242 H62 V190" stroke="#16222f" strokeWidth="2" strokeDasharray="5 4" />

                            <circle cx="16" cy="344" r="4.5" stroke="#16222f" strokeWidth="2.2" fill="#fff" />
                            <path d="M21 344 H86 V190" stroke="#16222f" strokeWidth="2" strokeDasharray="5 4" />

                            {/* Center Bridge */}
                            <path d="M62 190 H148" stroke="#16222f" strokeWidth="2" strokeDasharray="5 4" />

                            {/* Right 05 to 08 */}
                            <circle cx="194" cy="36" r="4.5" stroke="#16222f" strokeWidth="2.2" fill="#fff" />
                            <path d="M189 36 H124 V190" stroke="#16222f" strokeWidth="2" strokeDasharray="5 4" />

                            <circle cx="194" cy="138" r="4.5" stroke="#16222f" strokeWidth="2.2" fill="#fff" />
                            <path d="M189 138 H148 V190" stroke="#16222f" strokeWidth="2" strokeDasharray="5 4" />

                            <circle cx="194" cy="242" r="4.5" stroke="#16222f" strokeWidth="2.2" fill="#fff" />
                            <path d="M189 242 H148 V190" stroke="#16222f" strokeWidth="2" strokeDasharray="5 4" />

                            <circle cx="194" cy="344" r="4.5" stroke="#16222f" strokeWidth="2.2" fill="#fff" />
                            <path d="M189 344 H124 V190" stroke="#16222f" strokeWidth="2" strokeDasharray="5 4" />
                        </svg>

                        {/* Right Column (05 - 08) - 4 Karakter Jiwa */}
                        <div className="m-col right">
                            <div className="m-item">
                                <div className="m-badge">05</div>
                                <div className="m-text">
                                    Jiwa<br />Mardhiyyah</div>
                            </div>
                            <div className="m-item">
                                <div className="m-badge">06</div>
                                <div className="m-text">
                                    Jiwa<br />Muthmainnah</div>
                            </div>
                            <div className="m-item">
                                <div className="m-badge">07</div>
                                <div className="m-text">
                                    Qalbun<br />Salim</div>
                            </div>
                            <div className="m-item">
                                <div className="m-badge">08</div>
                                <div className="m-text">
                                    Sikap<br />Muraqabah</div>
                            </div>
                        </div>
                    </div>

                    <div className="services-sublabel">Services</div>
                </div>
            </section>

            {/* =========================================================
     4. TRAINER ANDA (Slide 10 & 11)
     ========================================================= */}
            <section className="sec-trainer" id="trainer">
                <div className="container">
                    <div className="head">
                        <h2>Trainer Anda</h2>
                        <p>Dewan Guru, Senior Trainer &amp; Praktisi Bersertifikasi Sufi Training Center</p>
                    </div>

                    <div className="trainer-stage">
                        <button
                            className="tr-nav prev"
                            id="trPrev"
                            aria-label="Sebelumnya"
                            onClick={() => {
                                setShowAllTrainers(false);
                                setTrainerPage((p) => (p === 0 ? 1 : 0));
                            }}
                        >
                            &#10094;
                        </button>
                        <button
                            className="tr-nav next"
                            id="trNext"
                            aria-label="Berikutnya"
                            onClick={() => {
                                setShowAllTrainers(false);
                                setTrainerPage((p) => (p === 0 ? 1 : 0));
                            }}
                        >
                            &#10095;
                        </button>

                        <div className="trainer-cards" id="trainerList">
                            {/* Card 1 - Founder */}
                            <div className="tr-card" hidden={!showAllTrainers && trainerPage !== 0}>
                                <div className="tr-photo-frame cover-photo">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src="/images/trainers/syekh-akbar.png"
                                        alt="Syekh Akbar M. Fathurahman, M.Ag"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="tr-info-box">
                                    <b>Syekh Akbar M. Fathurahman, M.Ag</b>
                                    <span className="tr-role">Founder STC &amp; Pimpinan Pesantren</span>
                                    <span className="tr-cred">Mursyid Tarekat Idrisiyyah · Khatib Istiqlal · Rois Idaroh &apos;Aliyah JATMAN</span>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="tr-card" hidden={!showAllTrainers && trainerPage !== 0}>
                                <div className="tr-photo-frame">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src="/images/trainers/asep-deni.png"
                                        alt="Ust. Dr. Asep Deni Al-Idrisi, M.Pd"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="tr-info-box">
                                    <b>Ust. Dr. Asep Deni Al-Idrisi, M.Pd</b>
                                    <span className="tr-role">Senior Trainer STC</span>
                                    <span className="tr-cred">Doktor Pendidikan &amp; Pakar Transformasi Karakter Kepemimpinan</span>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="tr-card" hidden={!showAllTrainers && trainerPage !== 0}>
                                <div className="tr-photo-frame">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src="/images/trainers/herman-dody.png"
                                        alt="H. Herman Dody Isdarmadi, MNLP, Cht."
                                        loading="lazy"
                                    />
                                </div>
                                <div className="tr-info-box">
                                    <b>H. Herman Dody Isdarmadi, S.Ak, MNLP, Cht.</b>
                                    <span className="tr-role">Senior Trainer &amp; NLP Master</span>
                                    <span className="tr-cred">Master Practitioner NLP &amp; Certified Hypnotherapist</span>
                                </div>
                            </div>

                            {/* Card 4 - Cecep Hidayatulloh */}
                            <div className="tr-card extra" hidden={!showAllTrainers && trainerPage !== 1}>
                                <div className="tr-photo-frame">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src="/images/trainers/cecep-hidayatulloh.png"
                                        alt="Ust. Cecep Hidayatulloh Al-Idrisi, M.Sos."
                                        loading="lazy"
                                    />
                                </div>
                                <div className="tr-info-box">
                                    <b>Ust. Cecep Hidayatulloh Al-Idrisi, M.Sos.</b>
                                    <span className="tr-role">Senior Trainer STC</span>
                                    <span className="tr-cred">Magister Sosial, Komunikasi Dakwah &amp; Manajemen Qalbu</span>
                                </div>
                            </div>

                            {/* Card 5 - Taufiqurrachman */}
                            <div className="tr-card extra" hidden={!showAllTrainers && trainerPage !== 1}>
                                <div className="tr-photo-frame cover-photo">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src="/images/trainers/taufiqurrachman.png"
                                        alt="Muhammad Taufiqurrachman, S.E Akt. M.Sc."
                                        loading="lazy"
                                    />
                                </div>
                                <div className="tr-info-box">
                                    <b>M. Taufiqurrachman, S.E Akt. M.Sc.</b>
                                    <span className="tr-role">Senior Trainer STC</span>
                                    <span className="tr-cred">Akuntan Publik, Konsultan Tata Kelola &amp; Anti-Fraud</span>
                                </div>
                            </div>

                            {/* Card 6 - Adang Nurdin */}
                            <div className="tr-card extra" hidden={!showAllTrainers && trainerPage !== 1}>
                                <div className="tr-photo-frame cover-photo">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src="/images/trainers/adang-nurdin.png"
                                        alt="Ust. Adang Nurdin MS Al-Idrisi, M.Pd"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="tr-info-box">
                                    <b>Ust. Adang Nurdin MS Al-Idrisi, M.Pd</b>
                                    <span className="tr-role">Senior Trainer STC</span>
                                    <span className="tr-cred">Magister Pendidikan &amp; Pembimbing Ibadah Terbimbing</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="trainer-btn-wrap">
                        <button
                            type="button"
                            className="btn-semua-trainer"
                            id="btnAllTr"
                            onClick={() => setShowAllTrainers(!showAllTrainers)}
                        >
                            <span>{showAllTrainers ? "Tampilkan 3 Trainer" : "Lihat Semua 6 Trainer"}</span>{" "}
                            <span>{showAllTrainers ? "↑" : "→"}</span>
                        </button>
                    </div>

                    {/* Fasilitator Roles Banner from Slide 11 */}
                    <div className="fasilitator-info-box">
                        <span className="fasilitator-badge">Rasio 1 : 10–15</span>
                        <p className="fasilitator-desc">
                            <strong>Didukung Tim Fasilitator Terlatih:</strong> Mendampingi peserta secara intensif dalam sesi Sharing Session &amp; Mentoring, memandu tadarus tematik dan ibadah qiyamul lail, serta memberikan dukungan penuh IT &amp; dokumentasi demi kenyamanan peserta.
                        </p>
                    </div>
                </div>
            </section>

            {/* =========================================================
     5. STAGGERED 4-ROW COLLAGE + DOKUMENTASI (Slide 14 & 15)
     ========================================================= */}
            <section className="sec-podcast" id="podcast">
                <div className="container podcast-split">
                    {/* Left Staggered 4-Row Grid with Real Event Photos */}
                    <div className="collage-rows" aria-hidden="true">
                        {/* Row 1 */}
                        <div className="c-row">
                            <div className="c-cell">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src="/images/gallery/event-1.jpg" alt="STC Event 1" loading="lazy" />
                            </div>
                            <div className="c-cell">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src="/images/gallery/event-2.jpg" alt="STC Event 2" loading="lazy" />
                            </div>
                            <div className="c-cell">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src="/images/gallery/event-3.jpg" alt="STC Event 3" loading="lazy" />
                            </div>
                        </div>
                        {/* Row 2 */}
                        <div className="c-row">
                            <div className="c-cell">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src="/images/gallery/event-4.jpg" alt="STC Event 4" loading="lazy" />
                            </div>
                            <div className="c-cell">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src="/images/gallery/event-5.jpg" alt="STC Event 5" loading="lazy" />
                            </div>
                            <div className="c-cell">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src="/images/gallery/event-6.jpg" alt="STC Event 6" loading="lazy" />
                            </div>
                        </div>
                        {/* Row 3 */}
                        <div className="c-row">
                            <div className="c-cell">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src="/images/gallery/event-7.jpg" alt="STC Event 7" loading="lazy" />
                            </div>
                            <div className="c-cell">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src="/images/gallery/event-8.jpg" alt="STC Event 8" loading="lazy" />
                            </div>
                            <div className="c-cell">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src="/images/book/jogja-wellness.jpg" alt="Jogja Culture Wellness Festival" loading="lazy" />
                            </div>
                        </div>
                        {/* Row 4 */}
                        <div className="c-row">
                            <div className="c-cell">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src="/images/pesantren-landscape.jpg" alt="Pesantren Idrisiyyah" loading="lazy" />
                            </div>
                            <div className="c-cell">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src="/images/gallery/event-1.jpg" alt="STC Training Ballroom" loading="lazy" />
                            </div>
                            <div className="c-cell">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src="/images/gallery/event-5.jpg" alt="Bank Indonesia Session" loading="lazy" />
                            </div>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="podcast-copy">
                        <span className="eyebrow">Dokumentasi &amp; Literasi</span>
                        <h2>STC Spiritual Wellness Series</h2>
                        <p>
                            Dokumentasi visual rangkaian pelatihan kepemimpinan, muhasabah batin, dan kajian tasawuf tematik. Dirancang membimbing eksekutif dan aparatur negara menggapai ketenangan batin (*nafs muthmainnah*) demi melahirkan kepemimpinan yang amanah, adil, dan berdaya tahan tinggi.
                        </p>
                        <a href="https://wa.me/6281224249757" target="_blank" rel="noopener noreferrer" className="btn-black-rect">
                            Konsultasi Jadwal Pelatihan &rarr;
                        </a>
                    </div>
                </div>
            </section>

            {/* =========================================================
     6. CATALOG & TESTIMONIAL EVALUASI (Slide 13 & 16)
     ========================================================= */}
            <section className="sec-cat-vid" id="katalog">
                <div className="container cat-vid-grid">
                    {/* Left Column: Official Book Catalog */}
                    <div className="cat-col">
                        <h2>Buku &amp; Silabus<br />Resmi STC</h2>

                        <div className="catalog-real-cover">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/images/book/buku-stc.jpg"
                                alt="Buku Spiritual Wellness: Sufistic Neuroscience karya Syekh Akbar M. Fathurahman"
                                loading="lazy"
                            />
                            <span className="catalog-badge-soon">Segera Terbit</span>
                        </div>

                        <p className="catalog-desc">
                            <strong>Spiritual Wellness: Sufistic Neuroscience</strong> karya Syekh Akbar Muhammad Fathurahman, M.Ag. Mengulas integrasi tasawuf dan neurosains modern untuk kepemimpinan utuh.
                        </p>

                        <a href="https://wa.me/6281224249757" className="btn-view-cat" target="_blank" rel="noopener noreferrer">
                            Unduh Silabus Lengkap &rarr;
                        </a>
                    </div>

                    {/* Right Column: Real Testimonials & Evaluation Metrics (Slide 13) */}
                    <div className="vid-col">
                        <h2>Hasil Evaluasi &amp; Testimoni Peserta</h2>

                        <div className="testi-showcase-wrap">
                            {/* Card 1: Pemkab Tasikmalaya */}
                            <div className="testi-card-box">
                                <div className="testi-head-row">
                                    <div>
                                        <div className="testi-org-title">Pemerintah Kabupaten Tasikmalaya</div>
                                        <div className="testi-org-subtitle">Pelatihan Spiritual Wellness (100 Peserta Aparatur Daerah)</div>
                                    </div>
                                    <div className="testi-score-pill">
                                        <span>★</span> 4.70 / 5.00
                                    </div>
                                </div>
                                <p className="testi-quote">
                                    &ldquo;Pelatihan ini menjadi penyejuk di tengah rutinitas dan ketegangan pekerjaan aparatur daerah. Membuka kesadaran baru tentang bekerja sebagai ibadah dan amanah suci.&rdquo;
                                </p>
                                <div className="testi-metrics-grid">
                                    <div className="testi-stat-item">
                                        <div className="testi-metric-val">4.70<small>/5</small></div>
                                        <div className="testi-metric-lbl">Kepuasan Peserta</div>
                                    </div>
                                    <div className="testi-stat-item">
                                        <div className="testi-metric-val">+70.4</div>
                                        <div className="testi-metric-lbl">Net Promoter Score</div>
                                    </div>
                                    <div className="testi-stat-item">
                                        <div className="testi-metric-val">100%</div>
                                        <div className="testi-metric-lbl">Aparatur Berpartisipasi</div>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2: Bank Indonesia Batch 3 */}
                            <div className="testi-card-box">
                                <div className="testi-head-row">
                                    <div>
                                        <div className="testi-org-title">Bank Indonesia (Batch 3)</div>
                                        <div className="testi-org-subtitle">Executive Spiritual Wellness Session (46 Peserta Pimpinan BI)</div>
                                    </div>
                                    <div className="testi-score-pill">
                                        <span>★</span> 4.90 / 5.00
                                    </div>
                                </div>
                                <p className="testi-quote">
                                    &ldquo;Memberikan perspektif baru yang sangat mendalam: spiritualitas yang aplikatif dan relevan bagi pimpinan otoritas keuangan. Dalil kuat dan penjelasan trainer sangat memuaskan batin.&rdquo;
                                </p>
                                <div className="testi-metrics-grid">
                                    <div className="testi-stat-item">
                                        <div className="testi-metric-val">4.9<small>/5</small></div>
                                        <div className="testi-metric-lbl">Tingkat Relevansi</div>
                                    </div>
                                    <div className="testi-stat-item">
                                        <div className="testi-metric-val">4.9<small>/5</small></div>
                                        <div className="testi-metric-lbl">Kualitas Trainer</div>
                                    </div>
                                    <div className="testi-stat-item">
                                        <div className="testi-metric-val">4.8<small>/5</small></div>
                                        <div className="testi-metric-lbl">Tingkat Engagement</div>
                                    </div>
                                </div>
                            </div>

                            {/* Video CTA Link */}
                            <div
                                className="video-cta-bar"
                                onClick={() => window.open("https://wa.me/6281224249757", "_blank")}
                            >
                                <div className="video-cta-text">
                                    <h4>Tonton Video Profil &amp; Dokumentasi Pelatihan</h4>
                                    <p>Saksikan langsung atmosfer keheningan dzikir, muhasabah, dan testimoni para pimpinan instansi.</p>
                                </div>
                                <div className="video-cta-btn">
                                    Hubungi Kami &#9654;
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
     7. DEEP RED MULTI-FORMAT GALLERY (Slide 14 & 15)
     ========================================================= */}
            <section className="sec-red-gallery">
                <div className="container">
                    <div className="gal-head">
                        <span className="gal-eyebrow">DOKUMENTASI PELATIHAN</span>
                        <h2 className="gal-title">Galeri Transformasi &amp; Suasana Pelatihan</h2>
                        <p className="gal-lead">Momen-momen bermakna dalam membina ketenangan, integritas moral, dan sacred governance bersama institusi-institusi terbaik negeri.</p>
                    </div>

                    {/* Row 1: 3 Landscape Event Cards with Real Photos */}
                    <div className="gal-r1">
                        <div className="gal-stage-card">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/images/gallery/event-1.jpg"
                                alt="Executive Ballroom Training - Pemda Tasikmalaya & BUMN"
                                loading="lazy"
                            />
                            <div className="gal-caption-overlay">
                                <span>Executive Ballroom Training – Pemkab Tasikmalaya</span>
                            </div>
                        </div>

                        <div className="gal-stage-card">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/images/gallery/event-5.jpg"
                                alt="Special Executive Session - Bank Indonesia Institute"
                                loading="lazy"
                            />
                            <div className="gal-caption-overlay">
                                <span>Executive Session – Bank Indonesia Institute</span>
                            </div>
                        </div>

                        <div className="gal-stage-card">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/images/gallery/event-3.jpg"
                                alt="Outdoor Experiential Learning & Team Reflection"
                                loading="lazy"
                            />
                            <div className="gal-caption-overlay">
                                <span>Outdoor Experiential Learning &amp; Team Reflection</span>
                            </div>
                        </div>
                    </div>

                    {/* Row 2: 4 Portrait 9:16 Reels Cards with Real Photos */}
                    <div className="gal-r2">
                        {/* Reel 1 */}
                        <div className="reel-card">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/images/gallery/event-2.jpg" alt="Materi Sesi Interaktif" className="bg-photo" loading="lazy" />
                            <div className="reel-overlay">
                                <div className="reel-hash-title">
                                    <span className="ylw">#</span><span className="cyn">TRANSFORMASI</span>
                                </div>
                            </div>
                        </div>

                        {/* Reel 2 */}
                        <div className="reel-card bordered">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/images/gallery/event-4.jpg" alt="Ibadah Khusyuk & Tadarus" className="bg-photo" loading="lazy" />
                            <div className="reel-overlay">
                                <div className="reel-fitnah-title">
                                    DZIKIR &amp;<em>QIYAMUL LAIL</em>
                                </div>
                            </div>
                        </div>

                        {/* Reel 3 */}
                        <div className="reel-card">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/images/gallery/event-6.jpg" alt="Muhasabah Batin" className="bg-photo" loading="lazy" />
                            <div className="reel-overlay">
                                <div className="reel-hash-title">
                                    <span className="ylw">#</span><span className="cyn">MUHASABAH</span>
                                </div>
                            </div>
                        </div>

                        {/* Reel 4 */}
                        <div className="reel-card">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/images/gallery/event-7.jpg" alt="Sacred Governance" className="bg-photo" loading="lazy" />
                            <div className="reel-overlay">
                                <div className="reel-red-banner">
                                    INTEGRITAS &amp;<em>AMANAH</em><em>SACRED GOVERNANCE</em>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Row 3: 2 Wide 16:9 Video Highlight Cards with Real Thumbnails */}
                    <div className="gal-r3">
                        {/* Video Left */}
                        <div
                            className="yt-embed-card"
                            onClick={() => window.open("https://wa.me/6281224249757", "_blank")}
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/images/gallery/event-8.jpg"
                                alt="100 Peserta Pemda Tasikmalaya & BI"
                                className="bg-art"
                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                loading="lazy"
                            />
                            <div className="yt-head">
                                <div className="yt-ch-icon">STC</div>
                                <div className="yt-vid-title">100 Peserta Pemkab Tasikmalaya &amp; Bank Indonesia – Spiritual Wellness STC</div>
                            </div>
                            <div className="yt-center-play" aria-label="Play Video">
                                <svg viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                            <div className="yt-foot">
                                <div className="yt-foot-left"><span>&#10150;</span> <span>&#9201; 2 Hari 1 Malam</span></div>
                                <div className="yt-watch-pill">Lihat Dokumentasi &#9654;</div>
                            </div>
                        </div>

                        {/* Video Right */}
                        <div
                            className="yt-embed-card"
                            onClick={() => window.open("https://wa.me/6281224249757", "_blank")}
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/images/book/jogja-wellness.jpg"
                                alt="Official Institutional Profile STC"
                                className="bg-art"
                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                loading="lazy"
                            />
                            <div className="yt-head">
                                <div className="yt-ch-icon">STC</div>
                                <div className="yt-vid-title">Profil Resmi &amp; Kiprah Kebangsaan – SUFI TRAINING CENTER</div>
                            </div>
                            <div className="yt-center-play" aria-label="Play Video">
                                <svg viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                            <div className="yt-foot">
                                <div className="yt-foot-left"><span>&#10150;</span> <span>&#9201; LKP SPNF Idrisiyyah</span></div>
                                <div className="yt-watch-pill">Lihat Profil &#9654;</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
     8. BLACK 3-COLUMN FOOTER (Ref: Screenshot 8)
     ========================================================= */}
            <div className="footer-red-lip"></div>
            <footer className="sec-footer" id="kontak">
                <div className="container footer-3col">
                    {/* Left Column */}
                    <div>
                        <div className="ft-sig">Sufi Training</div>
                        <div className="ft-copy">
                            &copy; 2026 Sufi Training Center.<br />
                            All Rights Reserved
                        </div>
                    </div>

                    {/* Center Column */}
                    <div className="ft-address">
                        <b>Sufi Training Center</b>
                        <span>
                            Komplek Pesantren Idrisiyyah, Pagendingan<br />
                            Jl. Raya Cisayong, Kab. Tasikmalaya<br />
                            46153
                        </span>
                        <a className="ft-tel" href="https://wa.me/6281224249757">(0812) 24249757</a>
                    </div>

                    {/* Right Column */}
                    <div className="ft-social">
                        <h4>Stay
                            Connected with Sufi Training Center</h4>
                        <div className="ft-icons">
                            {/* YouTube */}
                            <a href="https://youtube.com" aria-label="YouTube">
                                <svg viewBox="0 0 24 24">
                                    <path
                                        d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z" />
                                </svg>
                            </a>
                            {/* Instagram */}
                            <a href="https://instagram.com" aria-label="Instagram">
                                <svg viewBox="0 0 24 24">
                                    <path
                                        d="M12 2.2c3.2 0 3.6 0 4.9.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8 0 3.2 0 3.6-.1 4.8-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.6.1-4.9.1-3.2 0-3.6 0-4.8-.1-3.3-.1-4.8-1.7-4.9-4.9-.1-1.3-.1-1.6-.1-4.8 0-3.2 0-3.6.1-4.8.1-3.2 1.7-4.8 4.9-4.9 1.2-.1 1.6-.1 4.8-.1zM12 0C8.7 0 8.3 0 7.1.1 2.7.3.3 2.7.1 7.1 0 8.3 0 8.7 0 12s0 3.7.1 4.9c.2 4.4 2.6 6.8 7 7 1.2.1 1.6.1 4.9.1s3.7 0 4.9-.1c4.4-.2 6.8-2.6 7-7 .1-1.2.1-1.6.1-4.9s0-3.7-.1-4.9c-.2-4.4-2.6-6.8-7-7C15.7 0 15.3 0 12 0zm0 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.8a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z" />
                                </svg>
                            </a>
                            {/* Facebook */}
                            <a href="https://facebook.com" aria-label="Facebook">
                                <svg viewBox="0 0 24 24">
                                    <path
                                        d="M22.7 0H1.3C.6 0 0 .6 0 1.3v21.3c0 .7.6 1.3 1.3 1.3h11.5v-9.3H9.7v-3.6h3.1V8.4c0-3.1 1.9-4.8 4.7-4.8 1.3 0 2.5.1 2.8.1v3.2h-1.9c-1.5 0-1.8.7-1.8 1.8v2.3h3.6l-.5 3.6h-3.1V24h6.1c.7 0 1.3-.6 1.3-1.3V1.3c0-.7-.6-1.3-1.3-1.3z" />
                                </svg>
                            </a>
                            {/* TikTok */}
                            <a href="https://tiktok.com" aria-label="TikTok">
                                <svg viewBox="0 0 24 24">
                                    <path
                                        d="M12.5 0h3.9c.2 2.1 1.5 4 3.6 4.5v3.9c-1.4 0-2.8-.4-3.9-1.2v6.6c0 5.3-4.3 8.9-9.1 7.9-3.9-.8-6.4-4.7-5.5-8.6.8-3.5 4.1-6 7.7-5.6v4c-1.8-.3-3.6.9-3.9 2.7-.4 1.8.8 3.6 2.6 4 1.9.4 3.8-.9 4-2.8l.6-15.4z" />
                                </svg>
                            </a>
                            {/* X */}
                            <a href="https://x.com" aria-label="X">
                                <svg viewBox="0 0 24 24">
                                    <path
                                        d="M18.2 2.25h3.3l-7.2 8.26 8.5 11.24H16.1l-5.2-6.82-6 6.82H1.6l7.7-8.8L1.2 2.25H8l4.7 6.23 5.5-6.23zm-1.1 17.52h1.8L7.1 4.13H5.1l12 15.64z" />
                                </svg>
                            </a>
                            {/* Spotify */}
                            <a href="#katalog" aria-label="Spotify">
                                <svg viewBox="0 0 24 24">
                                    <path
                                        d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm5.5 17.3a.7.7 0 0 1-1 .2c-2.8-1.7-6.3-2.1-10.5-1.1a.8.8 0 0 1-.3-1.5c4.6-1 8.5-.6 11.6 1.3.4.2.5.7.2 1.1zm1.5-3.3a.9.9 0 0 1-1.3.3c-3.2-2-8.1-2.6-11.9-1.4a.9.9 0 0 1-.6-1.8c4.3-1.3 9.7-.7 13.5 1.6.4.3.5.9.3 1.3zm.1-3.4C15.3 8.3 8.9 8.1 5.2 9.2a1.1 1.1 0 1 1-.6-2.1c4.2-1.3 11.3-1 15.7 1.6a1.1 1.1 0 0 1-1.2 1.9z" />
                                </svg>
                            </a>
                            {/* LinkedIn */}
                            <a href="https://linkedin.com" aria-label="LinkedIn">
                                <svg viewBox="0 0 24 24">
                                    <path
                                        d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6v6.3h-4v-5.6c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9V21H10V9z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
