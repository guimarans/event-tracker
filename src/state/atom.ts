import { IFiltroDeEventos } from './../interfaces/IFiltroDeEventos';
import { IEvento } from "interfaces/IEvento";
import { atom } from "recoil";
import { eventosAsync } from './seletores';

export const listaDeEventosState = atom<IEvento[]>({
  key: 'ListaDeEventosState',
  default: eventosAsync
})

export const filtroDeEventos = atom<IFiltroDeEventos>({
  key: 'filtroDeEventos',
  default: {}
})