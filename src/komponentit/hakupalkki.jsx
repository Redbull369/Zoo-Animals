import React from 'react';

const SearchBar = ({ onSearch, placeholder }) => {
    const handleInputChange = (event) => {
        onSearch(event.target.value);
    };

    return (
        <div style={{ margin: '20px 0', textAlign: 'center' }}>
            <input
                type="text"
                placeholder={placeholder || "Search..."}
                onChange={handleInputChange}
                style={{
                    padding: '10px',
                    fontSize: '16px',
                    borderRadius: '5px',
                    border: '1px solid #ccc',
                    width: '80%',
                    maxWidth: '400px',
                }}
            />
        </div>
    );
};

export default SearchBar;

