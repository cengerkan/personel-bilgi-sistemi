function PersonelList({ personeller, onDuzenle, onSil }) {
  return (
    <div>
      <h2>Personel Listesi</h2>
	<div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Ad Soyad</th>
            <th>Email</th>
            <th>Telefon</th>
            <th>Departman</th>
            <th>Maaş</th>
            <th>İşe Başlama</th>
            <th>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {personeller.map(p => (
            <tr key={p.id}>
              <td>{p.ad} {p.soyad}</td>
              <td>{p.email}</td>
              <td>{p.telefon || '-'}</td>
              <td>{p.departman}</td>
              <td>{p.maas ? `₺${p.maas.toLocaleString()}` : '-'}</td>
              <td>{new Date(p.iseBaslama).toLocaleDateString('tr-TR')}</td>
              <td>
                <button onClick={() => onDuzenle(p)} className="edit-btn">
				  ✏️
				</button>
				<button onClick={() => onSil(p.id)} className="delete-btn">
				  🗑️
				</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
	</div>
  );
}

export default PersonelList;
