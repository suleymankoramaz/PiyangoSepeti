import { makeAutoObservable } from 'mobx';

export interface DrawType {
  id: number,
  title: string,
  remain: number,
  date: string,
  price: number,
  ticketPrice: number,
  image: string
}

const defaultDraw: DrawType = {
  id: 0,
  title: "",
  remain: 0,
  date: "",
  price: 0,
  ticketPrice: 0,
  image: ""
};

class DrawStore {
  draws: DrawType[] = [];
  selectedDraw: DrawType = defaultDraw;

  constructor() {
    makeAutoObservable(this);
  }

  setDraws(draws: DrawType[]) {
    this.draws = draws;
  }

  setSelectedDraw(draw: DrawType) {
    this.selectedDraw = draw;
  }
}

const drawStore = new DrawStore();
export default drawStore;
