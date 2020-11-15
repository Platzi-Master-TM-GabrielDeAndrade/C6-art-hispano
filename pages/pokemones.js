import { useDispatch } from "react-redux";
import { obtenerPokemonsAction } from "./redux/userDucks";

export default function Pokemones() {
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(obtenerPokemonsAction())}
      >
        Obtener Pokemones
      </button>
    </>
  );
}
