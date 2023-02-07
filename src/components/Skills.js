import React from "react";

export default function Skills() {

    const skillStyle = {
        border: "10px solid rgb(23, 112, 30)",
        borderRadius: "20px",
        width: "300px",
        backgroundColor: "#d5f4e6",
        padding: "1vw",
        position:"relative",
        left: "20px"
    };

    return <>
        <div style={skillStyle}>
            <h3>Skills:</h3>
            <ul>
                <li>
                    Java, Python, C, C#, C++, JavaScript, HTML/CSS, MySQL, PostgreSQL
                </li>
                <li>
                    Called React Axios to get Web APIs to transfer data from backend and update the states in the store of mySQL
                </li>
                <li>
                    Developed a web application using RESTful API CRUD with React as the frontend to display French words
                </li>
            </ul>
        </div>
    </>
}