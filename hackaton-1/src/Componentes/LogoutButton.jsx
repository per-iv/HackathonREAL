import { Link , useNavigate} from "react-router-dom";
import {auth} from "../firebase"

function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button onClick={handleLogout}>Salir</button>
  );
}

export function Inicio(props) {
  return (
    <div>
      <div>
        <div>
          <h1>
            <Link to="/login">Login</Link>
          </h1>
          <br />
          <h1>
            <Link to="/signup">Registrar</Link>
          </h1>
        </div>
      </div>
      <h2>{props.name ? `Bienvenido - ${props.name}` : "Inicie sesión"}</h2>
      <LogoutButton />
    </div>
  );
}
