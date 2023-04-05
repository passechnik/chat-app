import React from 'react'

const Navbar = () => {
    return (
        <div className="navbar">
            <span className="logo">Chatster</span>
            <div className="user">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                <span>Jane</span>
                <button>Log Out</button>
            </div>
        </div>
    )
}

export default Navbar