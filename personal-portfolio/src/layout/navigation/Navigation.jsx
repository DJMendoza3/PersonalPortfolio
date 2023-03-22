import { useContext } from "react";
import { WindowContext } from "providers/WindowProvider";
import './navigation.css';

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";


export default function Navigation() {
    const { dimensions } = useContext(WindowContext);

    if (dimensions.width < 768) {
        return(
            <MobileNav />
        );
    } else {
        return(
            <DesktopNav />
        );
    }
}