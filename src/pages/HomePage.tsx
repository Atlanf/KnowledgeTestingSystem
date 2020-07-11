import React from "react";
import { useState } from "react";
import axios from "axios";

import { TestCategory } from "../components/homePageComponents/TestCategory";
import { TestCategoryDTO } from "../common/interfaces";
import { API_URL } from "../common/apiUrl";

const api = axios.create({
    baseURL: API_URL,
});

export class HomePage extends React.Component {
    constructor(props: any) {
        super(props);

        const res = api.head(API_URL + "/index", {
            method: "GET",
            headers: "Access-Control-Allow-Origin: *",
        });
        console.log(res);
        //console.log("sending request to " + API_URL);
        // api.get("/index").then((res) => {
        //     console.log(res.data);
        // });
    }
    render() {
        return <h1></h1>;
    }
}

// export const HomePage: React.FC = (props) => {
//     const [items, setItems] = useState<Array<TestCategoryDTO>>();

//     return (
//         <div>
//             <ul>
//                 {items?.map((item) => {
//                     return <li>{item.categoryName}</li>;
//                 })}
//             </ul>
//         </div>
//     );
// };
