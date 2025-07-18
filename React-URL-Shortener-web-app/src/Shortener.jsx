import React from 'react';
import { useState } from 'react';
//import {nanoid} from 'naniod'; // library used to generate unique ids

export default function Shortener({ onShorten }){
        const [longUrl, setLongUrl] = useState('');
        const handleShorten = () => {
            if (!longUrl) return;
            const shortCode = nanoid(6);
            onShorten(longUrl, shortCode);
            setLongUrl('');
        };
    return(
        <>
        <h1>URL Shortener</h1>
        <div className="sh">
            <input
                type="text"
                placeholder="Enter the URL"
                value={longUrl}
                onChange={(e) => setLongUrl(e.target.value)}
            />
        <button onClick={handleShorten}>Shorten URL</button>
    </div>
    </>
    )
}