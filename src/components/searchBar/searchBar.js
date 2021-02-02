import React, {useState} from 'react'

const SearchBar =props=> {
    const [value, setValue] = useState("")
 
    const onSearchHandler= (event) => {
        event.preventDefault()
        // momken tshow toast here law 3ayez 
        props.clicked(value)
    }
    return (
        
       
            <form onSubmit={onSearchHandler}>
                <input placeholder="Type in your friend's username" type="text" value={value} onChange={event => setValue(event.target.value)} />
                <button disabled={!value}>Find...</button>
            </form>
       
    )
}

export default SearchBar
