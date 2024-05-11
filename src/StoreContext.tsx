import React from "react";
import {StoreProps} from "./redux/Store";

export type ProviderPropsType = {
    store: StoreProps
    children: React.ReactNode
}

export const StoreContext = React.createContext<StoreProps | null>(null);

export const Provider = (props: ProviderPropsType) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    );
}