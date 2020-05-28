import React from 'react'
import Logo from "../../images/logo.png"
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
                        <li>Pizza Slice</li>
                    </ul> </div>
                </nav>
                    I am header</header>

        </div>
    )
}


