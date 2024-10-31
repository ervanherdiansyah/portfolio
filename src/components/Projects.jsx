import React from "react";
import projectImage1 from "../assets/Website-Toko-Keramik/3.png";
import projectImage2 from "../assets/Aplikasi-Alodia/2.jpg";
import projectImage3 from "../assets/aplikasi-depot-air-minum/homepage.png";
import projectImage4 from "../assets/kta/2.png";
import projectImage5 from "../assets/Lms-LTQ-Markaz/landingpage.png";
import projectImage6 from "../assets/PPDB-smk-bandung-timur/1.png";
import projectImage7 from "../assets/pyxis/pyxis.png";
import projectImage8 from "../assets/sistem-kerjasama-uin/1.png";
import projectImage9 from "../assets/tasqira/admin.png";
import projectImage10 from "../assets/web-profile-isteqamtsilati/1.png";
import projectImage11 from "../assets/web-profile-ptipd/1.png";
import projectImage12 from "../assets/Sistem-bimbingan-online/Sistem-bimbingan-skripsi-online.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBook } from "react-icons/fa";

const projects = [
  {
    id: 1,
    name: "Website Toko Keramik",
    technologies: "Laravel",
    image: projectImage1,
    tahun: "Tahun 2024",
    description:
      "Project ini adalah membangun dan mengembangkan website e-commerce Toko Keramik Nawal. Toko Keramik Nawal adalah perusahaan yang menyediakan berbagai jenis keramik berkualitas dari berbagai merek, baik lokal maupun internasional, untuk kebutuhan lantai, dinding, hingga aksen dekoratif.",
    problem:
      "Toko Keramik Nawal membutuhkan website dengan struktur yang baik dan user-friendly agar dapat menampilkan katalog produk keramik yang beragam. Tujuannya adalah untuk memudahkan calon pelanggan dalam menelusuri dan membeli produk keramik yang sesuai dengan kebutuhan mereka di Toko Keramik Nawal.",
    userAudience:
      "Tujuan utama dari website ini adalah memberikan informasi lengkap mengenai produk keramik. Oleh karena itu, audiens dari website ini adalah calon pelanggan Toko Keramik Indah, yang mencari pilihan keramik terbaik untuk keperluan rumah atau proyek mereka.",
    roleResponsibility:
      "Sebagai Fullstack Developer, saya bertanggung jawab untuk membangun dan mengembangkan website Toko Keramik Nawal. Tugas ini mencakup penyusunan struktur yang efektif dan desain yang menarik agar informasi terkait produk keramik dapat disajikan dengan jelas dan mudah diakses oleh calon pelanggan",
    aos: "fade-right",
    github: "https://github.com/ervanherdiansyah",
  },
  {
    id: 2,
    name: "Aplikasi Alodia - Pemesanan Parfum",
    technologies: "Laravel & Flutter",
    tahun: "Tahun 2024",
    description:
      "Project ini adalah membangun dan mengembangkan aplikasi Alodia, sebuah platform pemesanan parfum khusus yang memungkinkan pelanggan untuk memilih, menyesuaikan, dan memesan parfum secara online. Aplikasi Alodia menawarkan berbagai varian parfum yang dapat dipilih sesuai dengan selera pelanggan, serta memberikan pengalaman belanja yang mudah dan cepat.",
    problem:
      "Alodia membutuhkan aplikasi yang tidak hanya menarik secara visual tetapi juga memiliki struktur yang memudahkan pengguna dalam memilih parfum. Dengan aplikasi ini, Alodia bertujuan untuk memperluas jangkauan pemasaran produk parfum mereka dan meningkatkan penjualan melalui pengalaman berbelanja yang nyaman dan terintegrasi.",
    userAudience:
      "Aplikasi ini dirancang untuk para pecinta parfum yang ingin membeli parfum tanpa harus datang ke toko fisik. Audience utamanya adalah pelanggan Alodia, yang mencari kenyamanan dan variasi pilihan dalam berbelanja parfum secara online.",
    roleResponsibility:
      "Sebagai Developer untuk Aplikasi Alodia, saya bertanggung jawab dalam pengembangan aplikasi ini menggunakan teknologi Laravel di backend dan Flutter di frontend. Tugas saya mencakup pembuatan fitur pemilihan produk, pemesanan, serta integrasi pembayaran, yang memastikan bahwa proses pembelian parfum dapat berjalan lancar dan memberikan kepuasan bagi pengguna.",
    aos: "fade-right",
    image: projectImage2,
    github: "https://github.com/ervanherdiansyah",
  },
  {
    id: 3,
    name: "Website Oprec Anggota Forum Osis Jawa Barat",
    technologies: "Laravel",
    image: projectImage4,
    tahun: "Tahun 2024",
    description:
      "Proyek ini bertujuan untuk membangun dan mengembangkan Website Open Recruitment Anggota Forum OSIS Jawa Barat sebagai platform pendaftaran online untuk calon anggota OSIS. Website ini tidak hanya memfasilitasi proses pendaftaran, tetapi juga mengelola alur pembayaran pendaftaran secara aman dan cepat dengan integrasi pembayaran melalui Midtrans.",
    problem:
      "Forum OSIS Jawa Barat membutuhkan sebuah website yang dapat menangani proses rekrutmen dengan efisien, mulai dari pengisian data peserta hingga pembayaran. Tujuan utama website ini adalah menyediakan proses pendaftaran yang mudah bagi calon anggota dan memastikan pembayaran dapat dilakukan dengan cepat dan aman.",
    userAudience:
      "Website ini dirancang untuk calon anggota OSIS dari berbagai sekolah di Jawa Barat yang ingin mendaftar sebagai anggota Forum OSIS. Target utamanya adalah siswa-siswa yang memenuhi kriteria untuk bergabung dan ingin mengikuti proses rekrutmen secara online.",
    roleResponsibility:
      "Sebagai Fullstack Developer untuk proyek ini, saya bertanggung jawab mengembangkan keseluruhan website mulai dari sisi frontend hingga backend. Pada sisi frontend, saya membangun antarmuka pengguna yang ramah menggunakan Blade templating engine dari Laravel, sehingga menciptakan tampilan yang responsif dan interaktif. Di sisi backend saya menggunakan Laravel untuk menangani logika pengelolaan data pendaftar, verifikasi, dan pengelolaan status pembayaran. Untuk mendukung proses pembayaran, saya mengintegrasikan payment gateway Midtrans pada platform, memastikan bahwa setiap transaksi dapat dilakukan dengan aman. Fitur ini mencakup notifikasi pembayaran, verifikasi status, dan pelacakan riwayat transaksi, memberikan transparansi dan kemudahan bagi pengguna dalam proses rekrutmen.",
    aos: "fade-left",
    github: "https://github.com/ervanherdiansyah",
  },
  {
    id: 4,
    name: "Website Depot Air Minum",
    technologies: "Laravel",
    image: projectImage3,
    tahun: "Tahun 2024",
    description:
      "Proyek ini adalah membangun dan mengembangkan Website Depot Air Minum, platform pemesanan air minum isi ulang secara online yang memudahkan pelanggan untuk memesan produk depot air dengan cepat dan praktis. Melalui website ini, pelanggan dapat memesan air minum dalam berbagai ukuran dan jumlah sesuai kebutuhan.",
    problem:
      "Depot Air Minum membutuhkan website yang terstruktur dengan baik dan mudah digunakan untuk mendukung pemesanan air minum secara online. Tujuan utamanya adalah meningkatkan aksesibilitas layanan depot bagi pelanggan dengan memungkinkan mereka untuk memesan air minum kapan pun dan dari mana pun.",
    userAudience:
      "Website ini dirancang untuk pelanggan yang ingin memesan air minum isi ulang dengan mudah tanpa harus datang ke lokasi depot. Target audiens utamanya adalah rumah tangga, perkantoran, dan bisnis yang membutuhkan pengiriman air minum secara berkala.",
    roleResponsibility:
      "Sebagai Fullstack Developer untuk proyek ini, saya bertanggung jawab mengembangkan keseluruhan website mulai dari sisi frontend hingga backend. Pada sisi frontend, saya membangun antarmuka pengguna yang ramah menggunakan Blade templating engine dari Laravel, sehingga menciptakan tampilan yang responsif dan interaktif. Di sisi backend, saya menggunakan Laravel untuk menangani logika pemesanan, manajemen produk, dan integrasi database. Dengan memanfaatkan Laravel di kedua sisi, saya berhasil membuat website yang mendukung pemesanan, pelacakan pengiriman, dan notifikasi untuk pelanggan, sehingga menciptakan pengalaman yang efisien dan terpadu bagi pengguna.",
    aos: "fade-left",
    github: "https://github.com/ervanherdiansyah",
  },
  {
    id: 5,
    name: "Website LMS LTQ Markaz",
    technologies: "Laravel & React Js",
    image: projectImage5,
    tahun: "Tahun 2023",
    description:
      "Proyek ini adalah membangun dan mengembangkan Website Depot Air Minum, platform pemesanan air minum isi ulang secara online yang memudahkan pelanggan untuk memesan produk depot air dengan cepat dan praktis. Melalui website ini, pelanggan dapat memesan air minum dalam berbagai ukuran dan jumlah sesuai kebutuhan.",
    problem:
      "Depot Air Minum membutuhkan website yang terstruktur dengan baik dan mudah digunakan untuk mendukung pemesanan air minum secara online. Tujuan utamanya adalah meningkatkan aksesibilitas layanan depot bagi pelanggan dengan memungkinkan mereka untuk memesan air minum kapan pun dan dari mana pun.",
    userAudience:
      "Website ini dirancang untuk pelanggan yang ingin memesan air minum isi ulang dengan mudah tanpa harus datang ke lokasi depot. Target audiens utamanya adalah rumah tangga, perkantoran, dan bisnis yang membutuhkan pengiriman air minum secara berkala.",
    roleResponsibility:
      "Sebagai Fullstack Developer untuk proyek ini, saya bertanggung jawab mengembangkan keseluruhan website mulai dari sisi frontend hingga backend. Pada sisi frontend, saya membangun antarmuka pengguna yang ramah menggunakan Blade templating engine dari Laravel, sehingga menciptakan tampilan yang responsif dan interaktif. Di sisi backend, saya menggunakan Laravel untuk menangani logika pemesanan, manajemen produk, dan integrasi database. Dengan memanfaatkan Laravel di kedua sisi, saya berhasil membuat website yang mendukung pemesanan, pelacakan pengiriman, dan notifikasi untuk pelanggan, sehingga menciptakan pengalaman yang efisien dan terpadu bagi pengguna.",
    aos: "fade-right",
    github: "https://github.com/ervanherdiansyah",
  },
  {
    id: 6,
    name: "Website PPDB SMK Bandung Timur",
    technologies: "Laravel",
    image: projectImage6,
    tahun: "Tahun 2024",
    description:
      "Proyek ini adalah untuk membangun Website Penerimaan Peserta Didik Baru (PPDB) SMK Bandung Timur sebagai platform online yang memfasilitasi proses pendaftaran siswa baru. Website ini dirancang untuk memudahkan calon siswa dalam mengakses informasi, mendaftar, dan melengkapi data dengan mudah dan terstruktur.",
    problem:
      "SMK Bandung Timur membutuhkan sebuah sistem pendaftaran digital untuk PPDB yang terintegrasi. Sistem ini memungkinkan calon siswa mendaftar secara online, mengurangi proses administrasi manual, dan memastikan alur pendaftaran lebih efisien serta dapat diakses dari mana saja.",
    userAudience:
      "Platform ini ditujukan untuk calon siswa baru dan orang tua yang ingin mendaftarkan anaknya ke SMK Bandung Timur. Dengan alur pendaftaran online yang praktis, website ini diharapkan dapat memberikan pengalaman yang nyaman bagi pengguna.",
    roleResponsibility:
      "Sebagai Fullstack Developer dalam proyek ini, saya mengembangkan fitur frontend dan backend menggunakan Laravel. Di bagian frontend, saya memastikan tampilan antarmuka yang intuitif sehingga calon siswa dapat mengisi formulir, mengunggah dokumen, dan melacak status pendaftaran dengan mudah. Sementara itu, di sisi backend, Laravel digunakan untuk mengelola alur data, autentikasi, dan validasi, yang memungkinkan tim administrasi sekolah untuk mengelola data pendaftar, verifikasi dokumen, dan memantau statistik pendaftaran secara efektif.",
    aos: "fade-right",
    github: "https://github.com/ervanherdiansyah",
  },
  {
    id: 7,
    name: "Website Undangan Digital Pyxis Digital Invitation",
    technologies: "Wordpress",
    image: projectImage7,
    tahun: "Tahun 2022",
    description:
      "Proyek ini adalah untuk membangun Website Undangan Digital Pyxis Digital Invitation sebagai platform yang memungkinkan pengguna untuk membuat, mengelola, dan membagikan undangan digital dengan mudah. Dengan Pyxis Digital Invitation, pengguna dapat membuat undangan digital yang menarik dan menyebarkannya secara online kepada para tamu.",
    problem:
      "Pyxis Digital Invitation membutuhkan sebuah platform digital yang user-friendly untuk mendukung berbagai kebutuhan undangan digital, mulai dari undangan pernikahan, acara ulang tahun, hingga berbagai acara khusus lainnya. Platform ini dirancang untuk memudahkan pengguna dalam membuat undangan dengan cepat, memperbarui informasi acara, dan melacak jumlah konfirmasi kehadiran secara online.",
    userAudience:
      "Situs ini ditujukan untuk pengguna yang menginginkan cara praktis dalam membuat undangan digital dan berbagi informasi acara kepada tamu undangan. Dengan tampilan yang menarik dan fungsi yang intuitif, website ini diharapkan dapat memenuhi kebutuhan berbagai kalangan yang ingin membuat undangan digital, baik untuk keperluan formal maupun personal.",
    roleResponsibility:
      "Sebagai WordPress Developer dalam proyek ini, saya bertanggung jawab untuk mengembangkan dan mengonfigurasi website Pyxis Digital Invitation menggunakan WordPress. Pada bagian frontend, saya memastikan tampilan antarmuka website yang modern dan responsif sehingga pengguna dapat membuat undangan yang menarik secara visual. Di bagian backend, saya menggunakan fitur WordPress untuk mengelola berbagai template undangan, integrasi RSVP, dan formulir yang memudahkan pengguna dalam membuat dan berbagi undangan secara digital.",
    aos: "fade-left",
    github: "https://github.com/ervanherdiansyah",
  },
  {
    id: 8,
    name: "Website Kerjasama UIN Sunan Gunung Djati Bandung",
    technologies: "Laravel",
    image: projectImage8,
    tahun: "Tahun 2022",
    description:
      "Proyek ini melibatkan pembangunan Website Kerjasama UIN Sunan Gunung Djati Bandung untuk memfasilitasi informasi dan dokumentasi terkait berbagai kerja sama institusional. Website ini berfungsi sebagai pusat data dan informasi terkait program dan inisiatif kerja sama antara UIN Sunan Gunung Djati Bandung dengan berbagai institusi, baik nasional maupun internasional.",
    problem:
      "UIN Sunan Gunung Djati Bandung memerlukan platform digital yang dapat mengelola dan menampilkan informasi kerja sama dengan mudah diakses oleh publik. Dengan banyaknya program kolaborasi yang ada, dibutuhkan struktur website yang rapi dan informatif sehingga setiap pengguna dapat menemukan informasi yang dibutuhkan dengan mudah.",
    userAudience:
      "Situs ini ditujukan untuk institusi, calon mitra, mahasiswa, dosen, dan masyarakat umum yang ingin mengetahui informasi tentang kerja sama yang dijalin oleh UIN Sunan Gunung Djati Bandung. Website ini menjadi sarana transparansi dan informasi bagi berbagai pemangku kepentingan.",
    roleResponsibility:
      "Sebagai Fullstack Developer menggunakan Laravel, saya bertanggung jawab dalam pengembangan frontend dan backend website ini. Di bagian backend, saya mengelola pembuatan sistem untuk input dan manajemen data kerja sama, serta memberikan kemudahan dalam pengelolaan konten bagi admin. Pada frontend, saya memastikan tampilan yang user-friendly, informatif, dan responsif, sehingga pengguna dapat dengan mudah mengakses informasi kerja sama yang diinginkan.",
    aos: "fade-left",
    github: "https://github.com/ervanherdiansyah",
  },
  {
    id: 9,
    name: "Website Tracking Order Tasqira Konveksi",
    technologies: "Laravel",
    image: projectImage9,
    tahun: "Tahun 2024",
    description:
      "Proyek ini berfokus pada pembangunan Website Tracking Order Tasqira Konveksi, sebuah platform yang dirancang untuk memudahkan pelanggan dalam melacak status pesanan mereka secara real-time. Website ini bertujuan untuk memberikan transparansi dan meningkatkan pengalaman pelanggan dalam berinteraksi dengan Tasqira Konveksi.",
    problem:
      "Tasqira Konveksi menghadapi tantangan dalam memberikan informasi yang jelas dan akurat tentang status pesanan kepada pelanggan. Dengan banyaknya pesanan yang diproses, pelanggan sering kali merasa kesulitan untuk mengetahui posisi pesanan mereka, sehingga diperlukan solusi digital yang dapat memberikan informasi secara langsung dan efisien.",
    userAudience:
      "Target pengguna website ini adalah pelanggan Tasqira Konveksi, yang ingin mendapatkan informasi terkini mengenai status pesanan mereka. Website ini juga dapat diakses oleh staff konveksi untuk memperbarui status pesanan dan memberikan pelayanan yang lebih baik kepada pelanggan.",
    roleResponsibility:
      "Sebagai Fullstack Developer menggunakan Laravel, saya bertanggung jawab dalam pengembangan sistem tracking order dari awal hingga akhir. Ini mencakup pembuatan database untuk menyimpan informasi pesanan, pengembangan API untuk mengakses data secara real-time, serta pembuatan antarmuka pengguna yang intuitif untuk memudahkan pelanggan dalam melakukan pelacakan. Saya juga memastikan bahwa website ini aman dan responsif, sehingga pengguna dapat dengan mudah mengakses informasi di berbagai perangkat.",
    aos: "fade-right",
    github: "https://github.com/ervanherdiansyah",
  },
  {
    id: 10,
    name: "Website Profile Isteqamtsilati",
    technologies: "Laravel",
    image: projectImage10,
    tahun: "Tahun 2022",
    description:
      "Proyek ini bertujuan untuk membangun Website Profile Isteqamtsilati, sebuah platform yang dirancang untuk memperkenalkan dan memberikan informasi terkait organisasi Isteqamtsilati. Website ini berfungsi sebagai sarana komunikasi dan publikasi informasi yang relevan bagi anggota dan masyarakat umum.",
    problem:
      "Isteqamtsilati membutuhkan sebuah website yang dapat menampilkan informasi tentang visi, misi, kegiatan, dan anggota organisasi. Dengan banyaknya informasi yang perlu disampaikan, penting untuk memiliki website yang terstruktur dengan baik agar pengunjung dapat dengan mudah mengakses dan memahami informasi yang tersedia.",
    userAudience:
      "Target pengguna dari website ini adalah anggota organisasi Isteqamtsilati dan masyarakat umum yang ingin mengetahui lebih lanjut tentang kegiatan dan tujuan organisasi. Website ini juga menjadi alat untuk memperluas jangkauan informasi organisasi kepada audiens yang lebih luas.",
    roleResponsibility:
      "Sebagai Fullstack Developer menggunakan Laravel, saya bertanggung jawab untuk mengembangkan website dari sisi frontend dan backend. Ini termasuk merancang database untuk menyimpan data organisasi, mengembangkan antarmuka pengguna yang menarik dan responsif, serta memastikan bahwa informasi yang disajikan selalu terbarui. Saya juga melakukan pengujian untuk memastikan fungsionalitas website dan memastikan pengalaman pengguna yang optimal.",
    aos: "fade-right",
    github: "https://github.com/ervanherdiansyah",
  },
  {
    id: 11,
    name: "Website Profile PTIPD UIN Sunan Gunung Djati Bandung",
    technologies: "Laravel",
    image: projectImage11,
    tahun: "Tahun 2024",
    description:
      "Proyek ini adalah pembangunan Website Profile PTIPD UIN Sunan Gunung Djati Bandung, yang bertujuan untuk memberikan informasi lengkap dan transparan mengenai kegiatan, visi, misi, dan layanan yang disediakan oleh PTIPD (Pusat Teknologi Informasi dan Pangkalan Data) UIN Sunan Gunung Djati Bandung.",
    problem:
      "PTIPD membutuhkan sebuah website yang dapat menyampaikan informasi secara efektif kepada mahasiswa, dosen, dan masyarakat umum tentang layanan teknologi informasi yang mereka tawarkan. Dengan demikian, penting untuk memiliki website yang tidak hanya informatif tetapi juga mudah diakses dan dinavigasi oleh pengunjung.",
    userAudience:
      "Target pengguna website ini adalah pelanggan Tasqira Konveksi, yang ingin mendapatkan informasi terkini mengenai status pesanan mereka. Website ini juga dapat diakses oleh staff konveksi untuk memperbarui status pesanan dan memberikan pelayanan yang lebih baik kepada pelanggan.Audiens dari website ini terdiri dari mahasiswa, dosen, dan pihak-pihak lain yang berkepentingan dengan layanan PTIPD. Mereka mencari informasi terkait sistem informasi akademik, layanan IT, dan berita terbaru mengenai kegiatan dan pengembangan teknologi informasi di UIN Sunan Gunung Djati Bandung.",
    roleResponsibility:
      "Sebagai Fullstack Developer menggunakan Laravel, saya bertanggung jawab untuk mengembangkan website dari sisi frontend dan backend. Tugas saya meliputi merancang database untuk menyimpan data terkait layanan dan kegiatan PTIPD, membangun antarmuka pengguna yang responsif dan ramah pengguna, serta memastikan bahwa konten dapat dengan mudah diupdate oleh tim PTIPD. Saya juga melakukan pengujian untuk menjamin kinerja yang optimal dan keamanan website.",
    aos: "fade-left",
    github: "https://github.com/ervanherdiansyah",
  },
  {
    id: 12,
    name: "Website Bimbingan Skripsi Online FEBI UIN Sunan Gunung Djati Bandung",
    technologies: "Laravel",
    image: projectImage12,
    tahun: "Tahun 2024",
    description:
      "Proyek ini adalah pembangunan Website Bimbingan Skripsi Online FEBI UIN Sunan Gunung Djati Bandung, yang bertujuan untuk memfasilitasi mahasiswa Fakultas Ekonomi dan Bisnis Islam dalam proses bimbingan skripsi secara efektif dan efisien.",
    problem:
      "FEBI UIN Sunan Gunung Djati Bandung membutuhkan platform yang dapat mempermudah komunikasi antara mahasiswa dan dosen pembimbing. Dalam situasi yang terkadang sulit untuk bertemu langsung, website ini akan menjadi solusi untuk menyediakan informasi terkait bimbingan skripsi, termasuk jadwal bimbingan, pengumpulan draft, dan umpan balik dari dosen.",
    userAudience:
      "Audiens utama dari website ini adalah mahasiswa FEBI yang sedang dalam proses penyusunan skripsi serta dosen pembimbing. Mahasiswa membutuhkan akses yang mudah untuk melihat jadwal, mengunggah dokumen, dan mendapatkan bimbingan, sedangkan dosen memerlukan alat untuk memantau kemajuan bimbingan dan memberikan masukan kepada mahasiswa.",
    roleResponsibility:
      "Sebagai Fullstack Developer, saya bertanggung jawab untuk merancang dan mengembangkan website menggunakan Laravel. Tugas saya mencakup pengembangan backend untuk mengelola database mahasiswa dan dosen, serta frontend untuk membuat antarmuka pengguna yang intuitif dan responsif. Selain itu, saya juga melakukan pengujian untuk memastikan semua fitur berfungsi dengan baik dan memberikan pelatihan kepada pengguna tentang cara menggunakan platform tersebut.",
    aos: "fade-left",
    github: "https://github.com/ervanherdiansyah",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 ">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        {/* <div className="bg-gray-800 p-10 m-5 rounded-lg w-full z-10 overflow-hidden"> */}
        <div className="relative overflow-hidden">
          <div className="relative -mx-6 overflow-hidden">
            <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth md:snap-none px-6 no-scrollbar">
              {projects.map((item, index) => (
                <div
                  key={item.id}
                  data-aos={item.aos}
                  data-aos-offset="500"
                  data-aos-duration="500"
                  className={`min-w-[calc(100%/1.5)] sm:min-w-[calc(100%/3.5)]`}
                >
                  <div className="relative image-full h-60 w-full shadow-xl overflow-hidden group rounded-md">
                    <figure className="h-full w-full">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </figure>
                    <div
                      className="absolute inset-0 flex flex-col bg-black justify-center items-center bg-opacity-70 text-white opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 p-6"
                      // style={{
                      //   background:
                      //     "linear-gradient(to top, rgba(0, 112, 255, 0.8), rgba(173, 216, 230, 0.2))",
                      // }}
                    >
                      <h2 className="text-xl font-semibold text-center">
                        {item.name}
                      </h2>
                      <div className="flex gap-2 items-center justify-center pt-2">
                        <FaBook></FaBook>
                        <button
                          className="text-md text-white"
                          onClick={() => openModal(item)}
                        >
                          View Study Case
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          project={selectedProject}
        />
        {/* </div> */}
      </div>
    </div>
  );
};

const Modal = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-3/4 max-w-4xl max-h-[80vh] overflow-y-auto shadow-lg">
        <h2 className="text-2xl text-black font-bold mb-4">{project.name}</h2>
        <div className="flex items-center justify-center">
          <img
            src={project.image}
            alt={project.name}
            className="rounded-lg mb-4 w-98 "
          />
        </div>

        <p className="text-black mb-2">
          <span className="font-semibold">Technologies:</span>{" "}
          {project.technologies}
        </p>
        <p className="text-black mb-2 font-semibold">
          <span className="font-semibold"></span> {project.tahun}
        </p>
        <p className="text-black mb-2">{project.description}</p>

        <h3 className="text-black text-lg font-semibold mt-4">Problem:</h3>
        <p className="text-black mb-2">{project.problem}</p>

        <h3 className="text-black text-lg font-semibold mt-4">
          User Audience:
        </h3>
        <p className="text-black mb-2">{project.userAudience}</p>

        <h3 className="text-black text-lg font-semibold mt-4">
          Role & Responsibility:
        </h3>
        <p className="text-black mb-4">{project.roleResponsibility}</p>

        <div className="flex justify-end">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4 mt-4 bg-blue-500 text-white p-2 rounded"
          >
            View on GitHub
          </a>
          <button
            onClick={onClose}
            className="mt-4 bg-red-500 text-white p-2 rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
