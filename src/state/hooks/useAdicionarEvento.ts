import { listaDeEventosState } from './../atom';
import { IEvento } from 'interfaces/IEvento';
import { useSetRecoilState } from 'recoil';
import { obterId } from '../../util';
export default function useAdicionarEventos() {
  const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);

  return (evento: IEvento) => {
    const hoje = new Date();

    if (evento.inicio < hoje) {
      throw new Error("Eventos nao podem ser cadastrados com a data menor que a atual");
    }

    evento.id = obterId();

    return setListaDeEventos(listaAntiga => [...listaAntiga, evento])
  };
}