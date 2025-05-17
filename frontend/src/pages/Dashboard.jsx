const role = localStorage.getItem('rol');

{role === 'admin' && <Link to="/clientes">Clientes</Link>}
{role === 'tecnico' && <Link to="/personal">Mi perfil</Link>}
