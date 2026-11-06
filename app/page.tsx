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
                                <img src="https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1200&q=80"
                                    alt="Sufi Training Center - Pesantren Idrisiyyah Tasikmalaya" className="history-card-img"
                                    loading="lazy" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
     1. SEMINAR & TRAINING (Ref: Screenshot 1)
     ========================================================= */}
            <section className="sec-seminar" id="seminar">
                <div className="container">
                    <div className="head">
                        <h1>Seminar &amp; Training STC
                        </h1>
                        <p>Apa yang ingin Anda Tingkatkan dalam
                            Diri dan Kepemimpinan Lembaga Anda?</p>
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
                            <h3>Spiritual Wellness</h3>
                            <p>Bagaimana
                                Tetap Tenang, Utuh, dan Berenergi melalui pendekatan Sufistik, NLP &amp; Neuroscience dalam
                                situasi sesulit apapun.</p>
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
                            <h3>Sacred Governance</h3>
                            <p>
                                Bagaimana Me-Revolusi Budaya Kerja Instansi &amp; Korporasi Anda sehingga berjalan penuh amanah
                                dan berintegritas tinggi.</p>
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
                            <h3>Sufistic Wellness BI</h3>
                            <p>
                                Bagaimana Meningkatkan Ketahanan Mental &amp; Ketenangan Eksekutif Otoritas Keuangan dengan
                                kepuasan mencapai 4.9/5.0.</p>
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
                            <h3>Government Officials</h3>
                            <p>
                                Menjadi Aparatur Negara yang Handal, Amanah, dan Anti-Fraud melalui pembersihan jiwa (Tazkiyatun
                                Nafs) selama 2 hari 1 malam.</p>
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
                            <h3>Spiritual Hospitality</h3>
                            <p>
                                ““Bagaimana Melayani dengan Nilai Ihsan”” Menciptakan Budaya Pelayanan Prima dan Keramahtamahan
                                dari Hati yang Bersih.</p>
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
                            <h3>Spiritual Revival</h3>
                            <p>
                                Melatih regulasi emosi, dzikir, dan muhasabah berkala hingga menjadi pemimpin yang tenang
                                mengambil keputusan besar.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
     2. MEDIA & CLIENT PARTNERS (Ref: Screenshot 2)
     ========================================================= */}
            <section className="sec-clients" id="klien">
                <div className="white-logo-bar">
                    <div className="logo-row">
                        <div className="tv-logo-box">
                            <div className="tv-gtv"><span className="g-circle"></span><span>TVRI</span>
                            </div>
                        </div>
                        <div className="tv-logo-box">
                            <div className="tv-rtv"><span className="swoosh"></span><span>BI</span></div>
                        </div>
                        <div className="tv-logo-box">
                            <div className="tv-trans7"><span>BANK</span><span className="prism">BNI</span></div>
                        </div>
                        <div className="tv-logo-box">
                            <div className="tv-transtv"><span>PEL</span><span className="a-tri">▲</span><span>INDO</span></div>
                        </div>
                        <div className="tv-logo-box">
                            <div className="tv-rcti">PEMDA</div>
                        </div>
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
                        {/* Left Column (01 - 04) */}
                        <div className="m-col left">
                            <div className="m-item">
                                <div className="m-text">
                                    Experiential<br />Learning</div>
                                <div className="m-badge">01</div>
                            </div>
                            <div className="m-item">
                                <div className="m-text">
                                    Two-way<br />communication</div>
                                <div className="m-badge">02</div>
                            </div>
                            <div className="m-item">
                                <div className="m-text">Coaching &amp; NLP</div>
                                <div className="m-badge">03</div>
                            </div>
                            <div className="m-item">
                                <div className="m-text">Muhasabah
                                    &amp;<br />Dzikir</div>
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

                        {/* Right Column (05 - 08) */}
                        <div className="m-col right">
                            <div className="m-item">
                                <div className="m-badge">05</div>
                                <div className="m-text">Tazkiyatun Nafs</div>
                            </div>
                            <div className="m-item">
                                <div className="m-badge">06</div>
                                <div className="m-text">
                                    Neuroscience<br />Inspiration</div>
                            </div>
                            <div className="m-item">
                                <div className="m-badge">07</div>
                                <div className="m-text">5
                                    Human<br />Dimensions</div>
                            </div>
                            <div className="m-item">
                                <div className="m-badge">08</div>
                                <div className="m-text">Qiyamul Lail
                                    &amp;<br />Tadarus</div>
                            </div>
                        </div>
                    </div>

                    <div className="services-sublabel">Services</div>
                </div>
            </section>

            {/* =========================================================
     4. TRAINER ANDA (Ref: Screenshot 4)
     ========================================================= */}
            <section className="sec-trainer" id="trainer">
                <div className="container">
                    <div className="head">
                        <h2>Trainer Anda</h2>
                        <p>Para trainer dan praktisi yang akan membantu mencapai GOAL Anda</p>
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
                            {/* Card 1 */}
                            <div className="tr-card" hidden={!showAllTrainers && trainerPage !== 0}>
                                <div className="tr-photo-frame">
                                    <svg viewBox="0 0 300 330" aria-hidden="true">
                                        {/* Cityscape silhouette backdrop */}
                                        <rect x="20" y="60" width="45" height="270" fill="rgba(255,255,255,0.35)" />
                                        <rect x="75" y="30" width="55" height="300" fill="rgba(255,255,255,0.28)" />
                                        <rect x="190" y="50" width="60" height="280" fill="rgba(255,255,255,0.32)" />
                                        {/* Suit & Portrait */}
                                        <path d="M35 330 C35 225 265 225 265 330 Z" fill="#1e242b" />
                                        <polygon points="150,245 122,315 150,330 178,315" fill="#e8d7df" />
                                        <polygon points="150,260 140,330 160,330" fill="#6b3fa0" />
                                        <circle cx="150" cy="145" r="58" fill="#d9a17c" />
                                        <path d="M92 135 C92 80 208 80 208 135 C200 102 100 102 92 135 Z" fill="#1c1c1c" />
                                    </svg>
                                </div>
                                <div className="tr-info-box">
                                    <b>Syekh Akbar M.
                                        Fathurahman</b>
                                    <span>Founder &amp; Utama</span>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="tr-card" hidden={!showAllTrainers && trainerPage !== 0}>
                                <div className="tr-photo-frame">
                                    <svg viewBox="0 0 300 330" aria-hidden="true">
                                        <rect x="30" y="45" width="50" height="285" fill="rgba(255,255,255,0.32)" />
                                        <rect x="165" y="25" width="65" height="305" fill="rgba(255,255,255,0.26)" />
                                        <path d="M35 330 C35 225 265 225 265 330 Z" fill="#232730" />
                                        <polygon points="150,245 120,320 180,320" fill="#d4e4f4" />
                                        <circle cx="150" cy="145" r="58" fill="#c98e6b" />
                                        <path d="M94 130 C94 82 206 82 206 130 C196 104 104 104 94 130 Z" fill="#262626" />
                                    </svg>
                                </div>
                                <div className="tr-info-box">
                                    <b>Ust. Dr. Asep Deni,
                                        M.Pd</b>
                                    <span>Senior Trainer</span>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="tr-card" hidden={!showAllTrainers && trainerPage !== 0}>
                                <div className="tr-photo-frame">
                                    <svg viewBox="0 0 300 330" aria-hidden="true">
                                        <rect x="25" y="55" width="55" height="275" fill="rgba(255,255,255,0.34)" />
                                        <rect x="200" y="35" width="55" height="295" fill="rgba(255,255,255,0.3)" />
                                        <path d="M35 330 C35 225 265 225 265 330 Z" fill="#181c22" />
                                        <polygon points="150,245 124,320 176,320" fill="#ffffff" />
                                        <circle cx="150" cy="145" r="58" fill="#e0ab88" />
                                        <path d="M93 135 C93 76 207 76 207 135 C195 100 105 100 93 135 Z" fill="#141414" />
                                    </svg>
                                </div>
                                <div className="tr-info-box">
                                    <b>H. Herman Dody, MNLP,
                                        Cht.</b>
                                    <span>Senior Trainer</span>
                                </div>
                            </div>

                            {/* Extra STC Trainers (Toggled when clicking Semua Trainer) */}
                            <div className="tr-card extra" hidden={!showAllTrainers && trainerPage !== 1}>
                                <div className="tr-photo-frame">
                                    <svg viewBox="0 0 300 330" aria-hidden="true">
                                        <rect x="35" y="40" width="55" height="290" fill="rgba(255,255,255,0.32)" />
                                        <path d="M35 330 C35 225 265 225 265 330 Z" fill="#1e2d3b" />
                                        <polygon points="150,245 124,320 176,320" fill="#ffffff" />
                                        <circle cx="150" cy="145" r="58" fill="#d49b78" />
                                    </svg>
                                </div>
                                <div className="tr-info-box">
                                    <b>Ust. Cecep Hidayatulloh, M.Sos</b>
                                    <span>Senior Trainer</span>
                                </div>
                            </div>

                            <div className="tr-card extra" hidden={!showAllTrainers && trainerPage !== 1}>
                                <div className="tr-photo-frame">
                                    <svg viewBox="0 0 300 330" aria-hidden="true">
                                        <rect x="185" y="40" width="55" height="290" fill="rgba(255,255,255,0.32)" />
                                        <path d="M35 330 C35 225 265 225 265 330 Z" fill="#21382c" />
                                        <polygon points="150,245 124,320 176,320" fill="#ffffff" />
                                        <circle cx="150" cy="145" r="58" fill="#cfa07e" />
                                    </svg>
                                </div>
                                <div className="tr-info-box">
                                    <b>M. Taufiqurrachman, M.Sc.</b>
                                    <span>Senior Trainer</span>
                                </div>
                            </div>

                            <div className="tr-card extra" hidden={!showAllTrainers && trainerPage !== 1}>
                                <div className="tr-photo-frame">
                                    <svg viewBox="0 0 300 330" aria-hidden="true">
                                        <rect x="95" y="30" width="65" height="300" fill="rgba(255,255,255,0.32)" />
                                        <path d="M35 330 C35 225 265 225 265 330 Z" fill="#2c2538" />
                                        <polygon points="150,245 124,320 176,320" fill="#ffffff" />
                                        <circle cx="150" cy="145" r="58" fill="#d8a382" />
                                    </svg>
                                </div>
                                <div className="tr-info-box">
                                    <b>Ust. Adang Nurdin MS, M.Pd</b>
                                    <span>Senior Trainer</span>
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
                            <span>{showAllTrainers ? "Tampilkan 3 Trainer" : "Semua Trainer"}</span>{" "}
                            <span>{showAllTrainers ? "↑" : "→"}</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* =========================================================
     5. STAGGERED 4-ROW COLLAGE + PODCAST SERIES (Ref: Screenshot 5)
     ========================================================= */}
            <section className="sec-podcast" id="podcast">
                <div className="container podcast-split">
                    {/* Left Staggered 4-Row Grid */}
                    <div className="collage-rows" aria-hidden="true">
                        {/* Row 1 (Left aligned) */}
                        <div className="c-row">
                            <div className="c-cell"><svg viewBox="0 0 120 90">
                                <rect width="120" height="90" fill="#5d4037" />
                                <circle cx="60" cy="36" r="18" fill="#e0ab88" />
                                <path d="M28 90 C28 62 92 62 92 90 Z" fill="#689f38" />
                            </svg></div>
                            <div className="c-cell"><svg viewBox="0 0 120 90">
                                <rect width="120" height="90" fill="#4e6e3a" />
                                <circle cx="60" cy="36" r="18" fill="#cfa07e" />
                                <path d="M26 90 C26 60 94 60 94 90 Z" fill="#3949ab" />
                            </svg></div>
                            <div className="c-cell"><svg viewBox="0 0 120 90">
                                <rect width="120" height="90" fill="#263238" />
                                <circle cx="60" cy="36" r="18" fill="#e6b89c" />
                                <path d="M28 90 C28 62 92 62 92 90 Z" fill="#111" />
                            </svg></div>
                        </div>
                        {/* Row 2 (Right shifted) */}
                        <div className="c-row">
                            <div className="c-cell"><svg viewBox="0 0 120 90">
                                <rect width="120" height="90" fill="#8d6e63" />
                                <circle cx="60" cy="36" r="18" fill="#f0c4a8" />
                                <path d="M28 90 C28 62 92 62 92 90 Z" fill="#1e88e5" />
                            </svg></div>
                            <div className="c-cell"><svg viewBox="0 0 120 90">
                                <rect width="120" height="90" fill="#eceff1" />
                                <circle cx="60" cy="36" r="18" fill="#d7a184" />
                                <path d="M26 90 C26 60 94 60 94 90 Z" fill="#212121" />
                            </svg></div>
                            <div className="c-cell"><svg viewBox="0 0 120 90">
                                <rect width="120" height="90" fill="#cfd8dc" />
                                <circle cx="60" cy="36" r="18" fill="#c68b68" />
                                <path d="M28 90 C28 62 92 62 92 90 Z" fill="#90caf9" />
                            </svg></div>
                        </div>
                        {/* Row 3 (Left aligned) */}
                        <div className="c-row">
                            <div className="c-cell"><svg viewBox="0 0 120 90">
                                <rect width="120" height="90" fill="#e0d6cc" />
                                <circle cx="60" cy="36" r="18" fill="#ebbfa4" />
                                <path d="M28 90 C28 62 92 62 92 90 Z" fill="#d81b60" />
                            </svg></div>
                            <div className="c-cell"><svg viewBox="0 0 120 90">
                                <rect width="120" height="90" fill="#78909c" />
                                <circle cx="60" cy="36" r="18" fill="#e5b293" />
                                <path d="M26 90 C26 60 94 60 94 90 Z" fill="#4e342e" />
                            </svg></div>
                            <div className="c-cell"><svg viewBox="0 0 120 90">
                                <rect width="120" height="90" fill="#689f38" />
                                <circle cx="60" cy="36" r="18" fill="#9c6448" />
                                <path d="M28 90 C28 62 92 62 92 90 Z" fill="#283593" />
                            </svg></div>
                        </div>
                        {/* Row 4 (Right shifted) */}
                        <div className="c-row">
                            <div className="c-cell"><svg viewBox="0 0 120 90">
                                <rect width="120" height="90" fill="#2b1d14" />
                                <circle cx="60" cy="36" r="18" fill="#d49b78" />
                                <path d="M28 90 C28 62 92 62 92 90 Z" fill="#111" />
                            </svg></div>
                            <div className="c-cell"><svg viewBox="0 0 120 90">
                                <rect width="120" height="90" fill="#b0bec5" />
                                <circle cx="60" cy="36" r="18" fill="#e8be9f" />
                                <path d="M26 90 C26 60 94 60 94 90 Z" fill="#37474f" />
                            </svg></div>
                            <div className="c-cell"><svg viewBox="0 0 120 90">
                                <rect width="120" height="90" fill="#3e2723" />
                                <circle cx="60" cy="36" r="18" fill="#8d5538" />
                                <path d="M28 90 C28 62 92 62 92 90 Z" fill="#cfd8dc" />
                            </svg></div>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="podcast-copy">
                        <span className="eyebrow">Podcast</span>
                        <h2>STC Spiritual
                            Wellness Series</h2>
                        <p>
                            Sumber daya podcast dan kajian tasawuf untuk melengkapi pelatihan Anda, seiring Anda mengembangkan
                            lebih lanjut ketenangan batin untuk menjadi versi pemimpin yang lebih baik, lebih tenang, dan lebih
                            berintegritas</p>
                        <a href="#katalog" className="btn-black-rect">Podcast Sufi Training Center</a>
                    </div>
                </div>
            </section>

            {/* =========================================================
     6. CATALOG & VIDEO TESTIMONIAL (Ref: Screenshot 6)
     ========================================================= */}
            <section className="sec-cat-vid" id="katalog">
                <div className="container cat-vid-grid">
                    {/* Left Column: Catalog */}
                    <div className="cat-col">
                        <h2>STC Training<br />Catalog</h2>

                        <div className="catalog-cover">
                            <div className="cat-header">
                                <b>x<br />Sufi
                                    Training<br />Center.</b>
                                <span>Your Global Engagement Partner</span>
                            </div>

                            <div className="cat-body-title">
                                <h3>
                                    Spiritual<br />Wellness<br />Catalog</h3>
                            </div>

                            <svg className="cat-illustration" viewBox="0 0 260 180" aria-hidden="true">
                                {/* Blue abstract curved pattern on right */}
                                <path d="M180 60 A45 45 0 1 1 225 105" stroke="#0088e8" strokeWidth="11" fill="none"
                                    strokeLinecap="round" />
                                <path d="M155 110 A55 55 0 1 0 210 165" stroke="#0088e8" strokeWidth="11" fill="none"
                                    strokeLinecap="round" />
                                <path d="M205 125 A35 35 0 1 1 245 160" stroke="#0054a6" strokeWidth="11" fill="none"
                                    strokeLinecap="round" />
                                {/* Standing figure in black blazer */}
                                <circle cx="135" cy="54" r="22" fill="#b87d5b" />
                                <path d="M110 50 C110 20 160 20 160 50 L166 95 L104 95 Z" fill="#1a1a1a" />
                                <path d="M92 180 L102 92 L168 92 L178 180 Z" fill="#141414" />
                                <rect x="104" y="148" width="62" height="32" fill="#9ea7b0" />
                            </svg>
                        </div>

                        <a href="https://wa.me/6281224249757" className="btn-view-cat">View catalog</a>
                    </div>

                    {/* Right Column: Video Testimonial */}
                    <div className="vid-col">
                        <h2>Video Testimonial</h2>

                        <div className="green-video-box" onClick={() => window.open('https://wa.me/6281224249757', '_blank')}>
                            <p>
                                Mengapa memilih Sufi Training Center?</p>
                            <div className="green-vid-logo">
                                <span>✦</span>Sufi Training<br />Center.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
     7. DEEP RED MULTI-FORMAT GALLERY (Ref: Screenshot 7)
     ========================================================= */}
            <section className="sec-red-gallery">
                <div className="container">
                    {/* Row 1: 3 Landscape Event Cards */}
                    <div className="gal-r1">
                        <div className="gal-stage-card">
                            <svg viewBox="0 0 400 250">
                                <rect width="400" height="250" fill="#2c2233" />
                                <circle cx="200" cy="90" r="110" fill="rgba(255,180,60,0.18)" />
                                {/* Crowd silhouettes */}
                                <rect x="0" y="165" width="400" height="85" fill="#16101c" />
                                {/* Speaker with outstretched arms */}
                                <circle cx="155" cy="96" r="14" fill="#e0ab88" />
                                <path d="M100 95 L155 120 L215 90 L195 215 L125 215 Z" fill="#111" />
                                <rect x="135" y="185" width="45" height="65" fill="#c62828" />
                            </svg>
                        </div>

                        <div className="gal-stage-card">
                            <svg viewBox="0 0 400 250">
                                <rect width="400" height="250" fill="#d8eeff" />
                                <rect x="210" y="0" width="190" height="250" fill="#183254" />
                                <text x="15" y="105" fill="#183254" fontWeight="900" fontSize="36">STC</text>
                                <text x="15" y="200" fill="#183254" fontWeight="800" fontSize="14">IDRISIYYAH</text>
                                {/* Speaker in red shirt */}
                                <circle cx="215" cy="62" r="20" fill="#d9a17c" />
                                <path d="M165 100 L265 100 L255 195 L175 195 Z" fill="#d32f2f" />
                                <rect x="180" y="195" width="70" height="55" fill="#f5f5f5" />
                            </svg>
                        </div>

                        <div className="gal-stage-card">
                            <svg viewBox="0 0 400 250">
                                <rect width="400" height="250" fill="#1a468d" />
                                <text x="235" y="34" fill="#ffffff" fontWeight="700" fontSize="12"
                                    letterSpacing="1">INSPIRAFEST</text>
                                <text x="210" y="78" fill="#ffffff" fontWeight="900" fontSize="48">#1MD</text>
                                <rect x="0" y="195" width="400" height="55" fill="#7a5835" />
                                {/* Two speakers & white chairs */}
                                <circle cx="150" cy="145" r="22" fill="#e8e2d5" />
                                <circle cx="355" cy="145" r="22" fill="#e8e2d5" />
                                <rect x="185" y="75" width="24" height="120" fill="#2c3e50" />
                                <rect x="240" y="82" width="24" height="113" fill="#d32f2f" />
                            </svg>
                        </div>
                    </div>

                    {/* Row 2: 4 Portrait 9:16 Reels Cards */}
                    <div className="gal-r2">
                        {/* Reel 1 */}
                        <div className="reel-card">
                            <svg className="bg-art" viewBox="0 0 270 400" preserveAspectRatio="none">
                                <rect width="270" height="400" fill="#7e4a3b" />
                                <circle cx="135" cy="135" r="52" fill="#e5b293" />
                                <path d="M40 400 C40 245 230 245 230 400 Z" fill="#e91e63" />
                            </svg>
                            <div className="reel-overlay">
                                <div className="reel-hash-title">
                                    <span className="ylw">#</span><span className="cyn">JADI TENANG</span>
                                </div>
                            </div>
                        </div>

                        {/* Reel 2 */}
                        <div className="reel-card bordered">
                            <svg className="bg-art" viewBox="0 0 270 400" preserveAspectRatio="none">
                                <rect width="270" height="400" fill="#1b141a" />
                                <circle cx="135" cy="130" r="52" fill="#d7a184" />
                                <path d="M45 400 C45 250 225 250 225 400 Z" fill="#111111" />
                            </svg>
                            <div className="reel-overlay">
                                <div className="reel-fitnah-title">
                                    KETIKA HATI<em>LELAH BEKERJA</em>
                                </div>
                            </div>
                        </div>

                        {/* Reel 3 */}
                        <div className="reel-card">
                            <svg className="bg-art" viewBox="0 0 270 400" preserveAspectRatio="none">
                                <rect width="270" height="230" fill="#dce7eb" />
                                <text x="20" y="80" fill="#00559b" fontWeight="800" fontSize="16">BRI</text>
                                <text x="95" y="80" fill="#e65100" fontWeight="800" fontSize="16">BNI</text>
                                <text x="175" y="110" fill="#00559b" fontWeight="800" fontSize="15">BCA</text>
                                <rect y="220" width="270" height="180" fill="#1c1619" />
                                <circle cx="145" cy="175" r="24" fill="#d7a184" />
                                <circle cx="65" cy="295" r="42" fill="#111" />
                                <circle cx="215" cy="305" r="38" fill="#111" />
                            </svg>
                        </div>

                        {/* Reel 4 */}
                        <div className="reel-card">
                            <svg className="bg-art" viewBox="0 0 270 400" preserveAspectRatio="none">
                                <rect width="270" height="400" fill="#8d6e63" />
                                <circle cx="135" cy="245" r="46" fill="#e5b293" />
                                <path d="M50 400 C50 295 220 295 220 400 Z" fill="#e91e63" />
                            </svg>
                            <div className="reel-overlay">
                                <div className="reel-red-banner">
                                    EKSEKUTIF INI TENANG<em>SETELAH IKUT</em><em>TRAINING STC INI</em>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Row 3: 2 Wide 16:9 YouTube Video Cards */}
                    <div className="gal-r3">
                        {/* YouTube Left */}
                        <div className="yt-embed-card" onClick={() => window.open('https://youtube.com', '_blank')}>
                            <svg className="bg-art" viewBox="0 0 540 300" preserveAspectRatio="none">
                                <rect width="540" height="300" fill="#5d4037" />
                                <rect y="0" width="540" height="110" fill="#d7ccc8" />
                                <text x="35" y="138" fill="#ffeb00" fontWeight="900" fontSize="38">BAKAT</text>
                                <text x="335" y="138" fill="#ffeb00" fontWeight="900" fontSize="38">BERKAT</text>
                                <circle cx="270" cy="130" r="32" fill="#e5b293" />
                                <path d="M210 300 L230 175 L310 175 L330 300 Z" fill="#d32f2f" />
                            </svg>
                            <div className="yt-head">
                                <div className="yt-ch-icon">STC</div>
                                <div className="yt-vid-title">100 PESERTA PEMDA TASIKMALAYA &amp;
                                    BI – Spiritual Wellness STC</div>
                            </div>
                            <div className="yt-center-play" aria-label="Play Video">
                                <svg viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                            <div className="yt-foot">
                                <div className="yt-foot-left"><span>&#10150;</span> <span>&#9201;</span></div>
                                <div className="yt-watch-pill">Watch on &#9654; YouTube</div>
                            </div>
                        </div>

                        {/* YouTube Right */}
                        <div className="yt-embed-card" onClick={() => window.open('https://youtube.com', '_blank')}>
                            <svg className="bg-art" viewBox="0 0 540 300" preserveAspectRatio="none">
                                <defs>
                                    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#c9d6df" />
                                        <stop offset="65%" stopColor="#f5d6b8" />
                                        <stop offset="100%" stopColor="#222831" />
                                    </linearGradient>
                                </defs>
                                <rect width="540" height="300" fill="url(#sky)" />
                                <circle cx="385" cy="115" r="36" fill="#d9a17c" />
                                <circle cx="445" cy="135" r="34" fill="#e5b293" />
                                <text x="155" y="195" fill="#ffffff" fontFamily="Alex Brush,cursive" fontSize="54">Sufi
                                    Training</text>
                            </svg>
                            <div className="yt-head">
                                <div className="yt-ch-icon">MD</div>
                                <div className="yt-vid-title">Official Profile - SUFI TRAINING
                                    CENTER (2026)</div>
                            </div>
                            <div className="yt-center-play" aria-label="Play Video">
                                <svg viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                            <div className="yt-foot">
                                <div className="yt-foot-left"><span>&#10150;</span> <span>&#9201;</span></div>
                                <div className="yt-watch-pill">Watch on &#9654; YouTube</div>
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
