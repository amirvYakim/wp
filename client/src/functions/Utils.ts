import React from 'react';
import axios from 'axios'

let postData = async (url: string, obj: any) => {
    return axios.post(url, obj)
}

export default { postData }