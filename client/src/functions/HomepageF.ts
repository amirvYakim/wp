import Utils from "./Utils"

export const amirtest = async (token: string) => {

    let homepageUrl = 'http://localhost:5073/api/homepage'


    let resp = await Utils.postData(homepageUrl, { Headers: { 'x-access-token': token }, data: '456' })

    console.log(resp);

    //let authServerResp = await Utils.getData(authServerUrl, { Headers: { 'x-access-token': getToken.data.token } });


}