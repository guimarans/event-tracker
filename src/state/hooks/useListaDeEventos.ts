import { listaDeEventosState } from './../atom';
import { useRecoilValue } from 'recoil';
export default function useListaDeEventos() {
    
    return useRecoilValue(listaDeEventosState);
}