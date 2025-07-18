import React from 'react'

export default function List({urls, onVisit}){
    return(
        <div className="list">
            <h3>List of Your Shortened URLs</h3>
            <table>
                <th>Long Url</th>
                <th>Shortened Urls Generated</th>
            </table>
        </div>
    )
}