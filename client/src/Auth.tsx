//import React from 'react';

interface Auth {
    authentucated: boolean
}

class Auth {

    constructor() {
        this.authentucated = false; 
    }

    login(cb: any) {
        this.authentucated = true
        cb()
    }

    logout(cb: any) {
        this.authentucated = true
        cb()
    }

    isAuthenticated() {
        return this.authentucated
    }

}

export default new Auth()