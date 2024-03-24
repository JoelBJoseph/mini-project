import style from "./staff_signin.module.css"
const Signin = () => {
    return(
        <div className={style.card_container}>

            <div className={style.btn_close_contain}>
                <button>X</button>
            </div>

            <div className={"header-container"}>
                <div className={"heading"}>Sign in for Staff</div>
                <div className={style.subheading}>New to this?<a>Create an Account</a></div>
            </div>

            <div className={style.email_container}>
                <label htmlFor={"email"}>Email</label><br/>
                <input className={style.email_box} type={"email"} id={"email"}
                       name={"email"} placeholder={"Enter your email"}/>
            </div>

            <div className={style.password_container}>
                <label htmlFor={"email"}>Password</label><br/>
                <input className={style.password_box} type={"password"} id={"password"}
                       name={"password"} placeholder={"Enter your Password"}/>
            </div>

            <div className={"btn-container"}>
                <button className={style.sign_in}>Sign in</button><br/>
                <a>Forgot your password?</a>
            </div>
        </div>
    );
}
export default Signin