import React from 'react'

const Search = () => {
    return (
        <div className="search">
            <div className="search-form">
                <input type="text" placeholder='find a user'/>
            </div>
            <div className="user-chat">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                <div className="user-chat-info">
                    <span>Jane</span>
                </div>
            </div>
        </div>
    )
}

export default Search