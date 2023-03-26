import {action, makeObservable, observable} from "mobx";
import {data, IAddedCar} from './data'

class Store {
    data: IAddedCar[] = data;



    constructor() {
        makeObservable(this,{
            data: observable,
            createNewItem: action,
        });
    }

    createNewItem (item: IAddedCar) {
        this.data = [...this.data, item]
    }
}
export default new Store();
