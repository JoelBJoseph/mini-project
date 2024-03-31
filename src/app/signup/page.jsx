import style from "./signup.module.css";
import Link from "next/link";

const Signup = () => {
    return (
        <div className={style.container}>
            <div className={style.cardContainer}>

                <div className={style.close}>
                    <Link href={"/"}>
                        <button>X</button>
                    </Link>
                </div>

                <div className={style.headerContainer}>
                    <span className={style.head}>Sign in for Staff</span><br/>
                    <span className={style.subHead}>Have an Account?
                        <Link href={"/sign-in"}>
                            <span className={style.link}> Sign In</span>
                        </Link></span>
                </div>

                <div className={style.form}>
                    <div className={style.formInput}>
                        <label className={style.label} htmlFor={"email"}>Email</label><br/>
                        <input className={style.input} type={"email"} name={"email"}
                               placeholder={"Enter your email"}/><br/>
                    </div>
                    <div className={style.formInput}>
                        <label className={style.label} htmlFor={"password"}>Password</label><br/>
                        <input className={style.input} type={"password"} name={"password"}
                               placeholder={"Enter your password"}/><br/>
                    </div>

                    <button className={style.signin}>Create Account</button>
                    <br/>
                </div>

                <div className={style.agree}>
                    By creating account, you agree to our <br/>
                    <span className={style.terms}>Terms of Service</span>
                </div>

            </div>
        </div>
    );
}
export default Signup