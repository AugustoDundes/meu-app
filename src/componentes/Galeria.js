import React from 'react';
import Perfil from './Perfil';
import '../Atv03.css';

function Galeria() {
  const users = [
    { name: 'George', imageUrl: 'https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png' },
    { name: 'Felipe', imageUrl: 'https://cdn-icons-png.flaticon.com/512/4975/4975733.png' },
    { name: 'Estéfannye', imageUrl: 'https://cdn-icons-png.flaticon.com/512/147/147135.png' }
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
