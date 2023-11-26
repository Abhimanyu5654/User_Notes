import React from "react";
import { Link } from "react-router-dom";

function Home() {

    return (
        <div className="container">
            <div >
                <h1>Notes..</h1>
                <Link to="/cruds/new" className="btn btn-primary float-right">
                    Uasr Create
                </Link>
            </div>
            <p>
                <b>Front-end</b>: React.js v17+
            </p>
            <p>
                <b>Back-end</b>: Node.js, Express.js
            </p>
            <p>
                <b>Database</b>: MongoDB Atlas with Mongoose ODM
            </p>
            <p>
                <b>Developed By</b>:Abhimanyu singh

            </p>
        </div>
    );
}
export default Home;