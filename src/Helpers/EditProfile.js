import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { loginContext, myid } from '../Pages/Login';
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';



const EditProfile = () => {
    const initialState = {Id:'',username:'', email:'', password:'', gender:'', hobbies:[], state:'', address:''}
    const [editform,setEditForm] = useState(initialState);
    const [data,setData] = useState()
    const editItems = useSelector((state) => state.editpage.edit)
    const registerItems = useSelector((state) => state.register.register)
    console.log(registerItems,'registerItems')
    console.log(editItems,'editItems')
    const IdOne = editItems && editItems[0] && editItems[0].Id
    const IdTwo = registerItems && registerItems[0] && registerItems[0].Id
    var Id;
    console.log(typeof(IdOne),'ll')
    if(typeof(IdOne) == 'undefined'){
        Id = IdTwo
    }
    else{
        Id = IdOne
    }
    console.log(Id,'jj')
    useEffect(()=>{
        axios.get('https://crypto-backend-zspp.onrender.com/users/login').then((response)=>{
            console.log(response.data,'res')
            let Data = Object.values(response?.data?.users);
            let list =[]
            Data.map(key => list.push(Data))
            console.log(Data,'resdatas')
            const loginData = Data.filter((item) => item.Id === Id)
            console.log(loginData, 'loginData')
            //console.log(loginData[0].email,'loginData')
            setData(Data)
            console.log(data,'data1234')
            setEditForm({
                ...editform,
                Id:loginData[0].Id,
                username:loginData[0].username,
                email:loginData[0].email,
                password:loginData[0].password,
                gender:loginData[0].gender,
                hobbies:loginData[0].hobbies,
                state:loginData[0].state,
                address:loginData[0].address
            })
        }).catch((err) => console.error(err))
    },[])
    //Onchange event handler //
    const handleEdit = (event) =>{
        if(event.target.name === 'hobbies'){
            const existedItem = editform.hobbies.indexOf(event.target.value);
            if(existedItem > -1){
                editform.hobbies.splice(existedItem,1);
            }
            else{
                editform.hobbies.push(event.target.value);
            }
            setEditForm({
                ...editform,
                hobbies:editform.hobbies
            })
        }
        else{
            setEditForm({
                ...editform,
                [event.target.name]:event.target.value
            })
        }
    }

    //Submit Edit//
    const submitEdit = (e) =>{
        e.preventDefault();
        const editedData = data && data.filter((item) => Number(item.Id) !== Number(editform.Id))
        editedData.push(editform)
        console.log(data,'data')
        console.log(editform,'editedForm')
        console.log('editedprofile',editform.Id)
        console.log('editedData',editedData)
        axios.put('https://crypto-backend-zspp.onrender.com/users/update',editform).then((res)=>{
            alert('successfully Edited')
        })
        
    }

  return (
    <React.Fragment>
        <h1 style={{textAlign:'center',marginTop:'20px'}}><i class="fa fa-user-circle" aria-hidden="true"></i> Profile Settings</h1>
        <article className='container bg-info-subtle my-4 p-3 rounded-2 edit_form'>
            <h2 className='text-center'>EditProfile</h2>
            <form onSubmit={submitEdit}>

                {/*UserName field*/}
                <section className='form-group my-1'>
                    <label className='fs-5'>Username : </label>
                    <input type='text' className='form-control' name='username' value={editform.username} onChange={handleEdit} />
                </section>

                {/*Email Field*/}
                <section className='form-group my-1'>
                    <label className='fs-5'>Email : </label>
                    <input type='text' className='form-control' name='email' value={editform.email} onChange={handleEdit}/>
                </section>

                {/*Password Field*/}
                <section className='form-group my-1'>
                    <label className='fs-5'>Password : </label>
                    <input type='password' className='form-control' name='password' value={editform.password} onChange={handleEdit} />
                </section>

                {/* Gender Field */}
                <section className='form-group my-1'>
                    <label className='fs-5'>Gender : </label><br/>
                    <label className='mx-2'><input type='radio' name='gender' value='Male' checked = {editform.gender && editform.gender === 'Male' ? true : false} onChange={handleEdit}/> Male</label>
                    <label className='mx-2'><input type='radio' name='gender' value='Female' checked = {editform.gender && editform.gender === 'Female' ? true : false} onChange={handleEdit} /> Female</label>
                </section>
                
                {/* State Field */}
                <section className='form-group my-1'>
                    <label className='fs-5'>State : </label>
                    <select className='form-select' name='state' value={editform.state} onChange={handleEdit}>
                        <option value=''>--Select State--</option>
                        <option value='Andhra Pradesh'>Andhra Pradesh</option>
                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                        <option value="Assam">Assam</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Chhattisgarh">Chhattisgarh</option>
                        <option value="Goa">Goa</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Haryana">Haryana</option>
                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                        <option value="Jammu & Kashmir">Jammu & Kashmir</option>
                        <option value="Jharkhand">Jharkhand</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Manipur">Manipur</option>
                        <option value="Meghalaya">Meghalaya</option>
                        <option value="Mizoram">Mizoram</option>
                        <option value="Nagaland">Nagaland</option>
                        <option value="Odisha">Odisha</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Sikkim">Sikkim</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Tripura">Tripura</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Uttarakhand">Uttarakhand</option>
                        <option value="West Bengal">West Bengal</option>
                    </select>
                </section>

                {/* Address Field */}
                <section className='form-group my-1'>
                    <label className='fs-5'>Address : </label>
                    <textarea className='form-control' name='address' value={editform.address} onChange={handleEdit}></textarea>
                    
                </section>

                {/* Hobbies field */}
                <section className='form-group my-1'>
                    <label className='fs-5'>Hobbies : </label><br />
                    <label className='mx-1'><input type='checkbox' name='hobbies' value='Reading' checked={editform.hobbies && editform.hobbies.indexOf('Reading') === -1 ? false: true} onChange={handleEdit} /> Reading</label><br />
                    <label className='mx-1'><input type='checkbox' name='hobbies' value='Cooking' checked={editform.hobbies && editform.hobbies.indexOf('Cooking') === -1 ? false: true} onChange={handleEdit} /> Cooking</label><br />
                    <label className='mx-1'><input type='checkbox' name='hobbies' value='Sleeping' checked={editform.hobbies && editform.hobbies.indexOf('Sleeping') === -1 ? false: true} onChange={handleEdit}/> Sleeping</label><br />
                    <label className='mx-1'><input type='checkbox' name='hobbies' value='Singing' checked={editform.hobbies && editform.hobbies.indexOf('Singing') === -1 ? false: true} onChange={handleEdit}/> Singing</label><br />
                    <label className='mx-1'><input type='checkbox' name='hobbies' value='Dancing' checked={editform.hobbies && editform.hobbies.indexOf('Dancing') === -1 ? false: true} onChange={handleEdit} /> Dancing</label><br />
                </section>

                {/* Submit Button */}
                <section className='form-group my-1 text-center'>
                    <input type='submit' className='btn btn-success py-2 px-3 my-2' value='Edit'/>
                </section>
            </form>
        </article>
    </React.Fragment>
  )
}

export default EditProfile