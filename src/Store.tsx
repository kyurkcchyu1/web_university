import {action, makeObservable, observable} from "mobx";
import {data, IAddedCar} from './data'

interface User {
    username: string;
    password: string;
}

const initialUsers: User[] = [
    { username: 'admin', password: 'admin' },
    { username: 'user2', password: 'password2' },
    { username: 'user3', password: 'password3' },
];


class Store {
    data: IAddedCar[] = [];
    users:User[] = initialUsers

    constructor() {
        makeObservable(this,{
            data: observable,
            createNewItem: action,
        });
    }

    setItems() {
        if(localStorage.getItem('cars')){
            setTimeout(()=>{
                // @ts-ignore
                this.data = JSON.parse(localStorage.getItem('cars'))
            }, 2000)
            return
        }
        localStorage.setItem('cars', JSON.stringify(data))
        setTimeout(()=>{
            // @ts-ignore
            this.data = JSON.parse(localStorage.getItem('cars'))
        }, 2000)
    }

    createNewItem (item: IAddedCar) {
        this.data = [...this.data, item]
        localStorage.setItem('cars', JSON.stringify(this.data))
    }

    deleteItem(id:number){
        this.data = this.data.filter(el=> el.id !==id)
        localStorage.setItem('cars', JSON.stringify(this.data))

    }
}
export default new Store();
