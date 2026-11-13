import { useState, useEffect } from 'react';
import './App.css';

const INITIAL_STUDENTS = [
  {
    id: '24031011',
    fullName: 'Ruthtatia Grace Astridia',
    phone: '085731209911',
    email: 'tatyasimson17@student.ac.id',
    city: 'Surabaya',
    major: 'Sains Data',
    entryYear: 2024,
  },
  {
    id: '24031018',
    fullName: 'Raka Mahendra Putra',
    phone: '081249883102',
    email: 'raka.mahendra@student.ac.id',
    city: 'Sidoarjo',
    major: 'Teknik Informatika',
    entryYear: 2024,
  },
  {
    id: '23031005',
    fullName: 'Bilqis Fadiyah Nisrina',
    phone: '082133047719',
    email: 'bilqisfadiyah@student.ac.id',
    city: 'Gresik',
    major: 'Sains Data',
    entryYear: 2024,
  },
  {
    id: '23031029',
    fullName: 'Frelin Theresia Pania',
    phone: '089677120455',
    email: 'frelintheresia@student.ac.id',
    city: 'surabaya',
    major: 'Sains Data',
    entryYear: 2024,
  },
  {
    id: '25031002',
    fullName: 'Clarissa Evelyn Wijaya',
    phone: '081358902144',
    email: 'clarissa.wijaya@student.ac.id',
    city: 'Surabaya',
    major: 'Bisnis Digital',
    entryYear: 2025,
  },
  {
    id: '25031014',
    fullName: 'Farhan Rizky Ramadhan',
    phone: '085811294083',
    email: 'farhan.rizky@student.ac.id',
    city: 'Mojokerto',
    major: 'Teknik Informatika',
    entryYear: 2025,
  },
];

function App() {
  // State daftar mahasiswa
  const [studentList] = useState(INITIAL_STUDENTS);

  // State jam digital real-time
  const [now, setNow] = useState(() => new Date());

  // Effect untuk memperbarui waktu tiap 1000ms dan cleanup saat unmount
  useEffect(() => {
    const intervalId = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const timeString = now.toLocaleTimeString('id-ID', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  const dateString = now.toLocaleDateString('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="page-wrapper">
      <div className="dashboard-card">
        {/* Bagian Header */}
        <header className="top-banner">
          <div className="title-group">
            <span className="pill-tag">Academic Portal</span>
            <h1>Student Management</h1>
            <p className="subtitle">Daftar Data Mahasiswa</p>
          </div>

          <div className="info-boxes">
            <div className="metric-box">
              <span className="metric-label">Jumlah Mahasiswa</span>
              <strong className="metric-number">
                {studentList.length} <small>Mahasiswa</small>
              </strong>
            </div>

            <div className="metric-box time-box">
              <span className="metric-label">{dateString}</span>
              <strong className="metric-clock">{timeString} WIB</strong>
            </div>
          </div>
        </header>

        {/* Tabel Data Mahasiswa */}
        <div className="table-container">
          <table className="data-grid">
            <thead>
              <tr>
                <th>NIM</th>
                <th>Nama Mahasiswa</th>
                <th>No. HP</th>
                <th>Email</th>
                <th>Alamat</th>
                <th>Program Studi</th>
                <th>Tahun Masuk</th>
              </tr>
            </thead>
            <tbody>
              {studentList.map((mhs) => (
                <tr key={mhs.id}>
                  <td className="col-nim">{mhs.id}</td>
                  <td className="col-name">{mhs.fullName}</td>
                  <td>{mhs.phone}</td>
                  <td>
                    <a href={`mailto:${mhs.email}`} className="link-email">
                      {mhs.email}
                    </a>
                  </td>
                  <td>{mhs.city}</td>
                  <td>
                    <span className="major-tag">{mhs.major}</span>
                  </td>
                  <td className="col-year">{mhs.entryYear}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;