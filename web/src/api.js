import axios from 'axios';

const url = 'http://localhost:8080'

export async function signin(login_email, password){
  console.log(login_email)
    const data = await axios.post(url+"/authorization/signin",{
      login_email,
      password
    
    }
 )
      .then(response => {
        console.log(response)
        return response
      })
      .catch(error => {
       console.log(error);
      })
    console.log(data)
    return data
   
}
export async function signup(login_email, password, nickname){
  console.log(login_email)
    const data = await axios.post(url+"/authorization/signup",{
      nickname,
      login_email,
      password
    
    }
 )
      .then(function (response) {
        return response
      })
      .catch(function (error) {
       // console.log(error);
      });
    console.log(data)
    return data
}
// {headers:{Autorization:token}
// export const getAllUsers = async()=>{
//     let data = await axios.post(url+"/admin/getAllUsers",null)
//       .then(function (response) {
//         return response.data.values
//       })
//       .catch(function (error) {
//        // console.log(error);
//       });
//       return data
// }
export const getAllPr = async()=>{
  let data = await axios.post(url+"/admin/getAllUsers",null)
    .then(function (response) {
      return response.data.values
    })
    .catch(function (error) {
     // console.log(error);
    });
    return data
}
export async function addEx(value, city, dictrict,descption){
  // console.log(login_email)
    const data = await axios.post(url+"/estimation",{
      value, city, dictrict,descption}
 )
      .then(function (response) {
        return response
      })
      .catch(function (error) {
       // console.log(error);
      });
    console.log(data)
    return data
}
export async function getDataGoogleNap(address, email, classification,description){
  // console.log(login_email)
    const data = await axios.post(url+"/map",{
      address, email, classification,description}
 )
      .then(function (response) {
        return response
      })
      .catch(function (error) {
       // console.log(error);
      });
    console.log(data)
    return data
}
export const getAllMark = async()=>{
  let data = await axios.post(url+"/users",null)
    .then(function (response) {
      return response.data.values
    })
    .catch(function (error) {
     // console.log(error);
    });
    return data
}