import React,{ useState } from 'react'
import './SignIn.css'
import new_user from '../../../apis/new-user'
import { useDispatch, useSelector } from 'react-redux';
import Loader from "../../../components/loader/Loader";
import { Redirect, useLocation } from 'react-router-dom';
import { authUserSuccess, authUserFail } from '../../../redux/actions/authActions';

const SignIn = () => {
    const[phonenumber, setPhonenumber] = useState('');
    const [username, setUsername] = useState('');
    const [fullname, setFullname] = useState('');
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false);
    const user = useSelector(state => state.user);
    const location = useLocation();
    const dispatch = useDispatch();

    const handleCreateUser = () => {
        setLoading(true);
        new_user.post("newUser", {
          phonenumber: phonenumber,
          username: username,
          fullname: fullname,
          password: password,
        })
        .then(newUser =>{
          dispatch(authUserSuccess(newUser.data))
          setLoading(false)
         })
       .catch(err => {
           dispatch(authUserFail())
           setLoading(false)
         if(err.code){
           console.log(err.message)
           }
       })
    }
    
    const loaderStyle = {
      fontSize: "25px",
      marginLeft: "20px"
    }

    return user.isAuthenticated ?  <Redirect
    to={{
      pathname: "/admin",
      state: {
        from: location.pathname
      }
    }}
  /> : (
        <div className="signIn_container">
            <div className="sign_in">
                <h1>Регистрация</h1>
                    <form>
                        <input type="number" autoFocus placeholder="+998 (90) 1234567" required value={phonenumber} onChange={e => setPhonenumber(e.target.value)}/>
                        <input type="text" placeholder="Имя" required value={username} onChange={e => setUsername(e.target.value)}/>
                        <input type="text" placeholder="Фамилия" required value={fullname} onChange={e => setFullname(e.target.value)}/>
                        <input type="password" placeholder="Создайте пароль" minLength="8" required value={password} onChange={e => setPassword(e.target.value)}/>
                        <button disabled={loading} className="login_submit" style={loading ? {opacity: 0.7} : {opacity: 1}} type="submit" onClick={handleCreateUser}> {loading && <Loader loaderStyle={loaderStyle}/>} Зарегистрировать</button>
                    </form>
                </div>
        </div>
    )
}

export default SignIn
