import React from 'react'
import Logo from "../../images/logo.png"

import { FaPizzaSlice } from 'react-icons/fa'
export const Headers = () => {
    return (
        <div>
            <header className="App-header header" data-testid="header">
                <nav>
                    <div className="logo">
                        <img src={Logo} />
                    </div>
                    <div className="Settings"> <ul>
                        <li>+</li>
                        <li><FaPizzaSlice /></li>
                    </ul> </div>
                </nav>
            </header>

        </div>
    )
}


