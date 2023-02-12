import React from "react";
import { BrowserRouter as Route, Link } from 'react-router-dom';
export default function Languages() {

    return <div className="LanguageDiv">
        <ul className="ListForLan">
            <li>Korenan</li>
            <li>English</li>
        </ul>
        <Link className="ReturnButtom" to="/">Return</Link>
    </div>
}