import React from "react";
const Page= ()=>{
    const axios = require('axios');
    return(
        axios.get('/user?ID=12345')
        .then(function (response) {
          // handle success
          console.log(response);
        })
    );

}
export default Page;