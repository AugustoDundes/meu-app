import React from 'react';
import Perfil from './Perfil';
import '../Atv03.css';

function Galeria() {
  const users = [
    { name: 'George', imageUrl: 'https://cdn.icon-icons.com/icons2/2643/PNG/512/female_woman_people_person_avatar_black_tone_icon_159371.png' },
    { name: 'Felipe', imageUrl: 'https://cdn-icons-png.flaticon.com/512/147/147135.png' },
    { name: 'Estéfannye', imageUrl: 'https://cdn-icons-png.flaticon.com/512/4975/4975733.png' }
  ];

  return (
    <section className="galeria">
      <h1>Galeria de Perfis</h1>
      {users.map((user, index) => (
        <Perfil key={index} name={user.name} imageUrl={user.imageUrl} />
      ))}
    </section>
  );
}

export default Galeria;
