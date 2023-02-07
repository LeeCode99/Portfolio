import React from "react";

export default function Intro() {

    const myStyle = {
        color: "white",
    };
    const divStyle = {
        border: "10px solid rgb(23, 112, 30)",
        borderRadius: "20px",
        backgroundColor: "#DBF9FC",
        padding: "1vw",
        marginBottom: "5px",
        width: "50%",
        marginLeft: "20px",

    };
    return <>
        <h2 style={myStyle}>Portfolio - Giwon</h2>

        <div className="introSum" style={divStyle}>
            <h3>Knowledge</h3>
            I have taken the initiative to learn ReactJs for front-end development and SQL for back-end development. This has provided me with the
            knowledge and skills to create full-stack development, allowing me to design and develop a website with both front-end and
            back-end functionality. This experience has further enhanced my ability to create complete and functional web applications that are
            both visually appealing and efficient in terms of data management. Through this self-directed learning, I have gained a deeper understanding
            of web development and the ability to create web applications that are both user-friendly and responsive.
        </div>
    </>
}