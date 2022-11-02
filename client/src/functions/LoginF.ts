import React from 'react';

export const userNamevalidator = (userName: String, password: String) => {

    // console.log(userName);
    // console.log(password);

    if (userName === '') {

        alert('No user name was entered')

    } else if (password === '') {

        alert('No password was entered')

    } else return true


}

export const loginDataReciver = async (resp: any) => {

    return resp
   

}