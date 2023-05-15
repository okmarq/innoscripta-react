import React, { useState } from 'react';
import ApiService from '../services/ApiService';
import App from '../App';

const Preferences = ({ user }) => {
    const [preferences, setPreferences] = useState({
        category: '',
        source: '',
        author: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const response = ApiService.preferences(preferences);

        // Handle successful preferences update
        response.then(console.log(response.data))
            // Handle preferences update error
            .catch(error => console.log(error.response.data))
    };

    return (
        <App>
            <div>
                <h2>Preferences</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Category"
                        value={preferences.category}
                        onChange={(e) =>
                            setPreferences({ ...preferences, category: e.target.value })
                        }
                    />
                    <input
                        type="text"
                        placeholder="Source"
                        value={preferences.source}
                        onChange={(e) =>
                            setPreferences({ ...preferences, source: e.target.value })
                        }
                    />
                    <input
                        type="text"
                        placeholder="Author"
                        value={preferences.author}
                        onChange={(e) =>
                            setPreferences({ ...preferences, author: e.target.value })
                        }
                    />
                    <button type="submit">Save Preferences</button>
                </form>
            </div>
        </App>
    );
};

export default Preferences;
