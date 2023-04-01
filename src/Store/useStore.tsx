import {Component, createContext, useContext} from "react";
import CarsStore from "./CarsStore";

const StoreContext = createContext(CarsStore);

export class StoreProvider extends Component<{ children: any }> {
    render() {
        let {children} = this.props;
        return (
            <StoreContext.Provider value = {CarsStore}>{children}</StoreContext.Provider>
        );
    }
}

const useStore = () => useContext(StoreContext);

export default useStore;