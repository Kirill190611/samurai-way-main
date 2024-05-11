import React from "react";
import {StoreProps} from "./redux/Store";

export const StoreContext = React.createContext<StoreProps | null>(null);