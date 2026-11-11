export default function JsonLd() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://sufitrainingcenter.vercel.app";

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Sufi Training Center",
        description:
          "Pusat pelatihan kepemimpinan dan pengembangan potensi manusia holistik berbasis spiritual wellness, sacred governance, NLP, dan neuroscience.",
        inLanguage: "id-ID",
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
      },
      {
        "@type": ["EducationalOrganization", "Organization"],
        "@id": `${siteUrl}/#organization`,
        name: "Sufi Training Center (STC)",
        alternateName: [
          "STC",
          "STC Idrisiyyah",
          "Sufi Training Center Indonesia",
        ],
        url: siteUrl,
        logo: `${siteUrl}/logo-stc-full.png`,
        image: `${siteUrl}/logo-stc-full.png`,
        description:
          "Pelatihan pengembangan potensi manusia secara holistik untuk instansi pemerintah dan korporasi. Mengintegrasikan tiga pilar keilmuan: Tazkiyatun Nafs (Sufistik Modern), NLP, dan Neuroscience.",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Komplek Pesantren Idrisiyyah, Pagendingan",
          addressLocality: "Cisayong",
          addressRegion: "Tasikmalaya, Jawa Barat",
          postalCode: "46153",
          addressCountry: "ID",
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+62-812-2424-9757",
            contactType: "customer service",
            email: "sufitrainingcenter@gmail.com",
            availableLanguage: ["Indonesian", "English"],
          },
        ],
        parentOrganization: {
          "@type": "Organization",
          name: "Yayasan Idrisiyyah",
          url: "https://idrisiyyah.or.id",
        },
      },
      {
        "@type": "Service",
        "@id": `${siteUrl}/#service-wellness`,
        name: "Spiritual Wellness & Sacred Governance for Leaders",
        provider: {
          "@id": `${siteUrl}/#organization`,
        },
        serviceType: "Corporate & Government Leadership Training",
        description:
          "Program pelatihan kepemimpinan spiritual holistik yang mengintegrasikan Tazkiyatun Nafs, NLP, dan Neuroscience untuk aparatur negara dan eksekutif korporasi guna melahirkan tata kelola kepemimpinan yang tenang, utuh, dan anti-fraud.",
        areaServed: {
          "@type": "Country",
          name: "Indonesia",
        },
        audience: {
          "@type": "Audience",
          audienceType:
            "Instansi Pemerintah, BUMN, Lembaga Perbankan, dan Perusahaan Swasta",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
