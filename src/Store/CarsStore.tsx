import {types} from 'mobx-state-tree';
import {data, IAddedCar} from '../data';
import {action} from "mobx";

const IAddedCars = types.model({
    id: types.number,
    name: types.string,
    descrip: types.string,
    imageUrl: types.string,
    year: types.string
})

const CarsStore = types
    .model("Cars", {
        data: types.array(IAddedCars),
    })

    .actions(self => ({
        setItems: action(function () {
            if (localStorage.getItem('cars')) {
                // @ts-ignore
                self.data = JSON.parse(localStorage.getItem('cars'))
                return
            }
            localStorage.setItem('cars', JSON.stringify(data))
            // @ts-ignore
            self.data = JSON.parse(localStorage.getItem('cars'))

        }),

        createNewItem: action(function (item: IAddedCar) {
            self.data.push(item);
            localStorage.setItem("cars", JSON.stringify(self.data));
        }),

        deleteItem: action(function (id: number) {
            // @ts-ignore
            self.data = self.data.filter((el) => el.id !== id);
            localStorage.setItem("cars", JSON.stringify(self.data));
        }),
    }));

export default CarsStore.create();