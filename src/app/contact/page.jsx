import Navabar from "../../../component/Navabar";
import Link from "next/link";
import style from "./contact.module.css";
import Image from "next/image";

const Contact = () =>{
    return(
        <div className={style.container}>
            <Navabar/>

            <div className={style.topContainer}>

                <span className={style.head}>Access Government Services with ease</span><br/>
                <span className={style.subHead}>Sign up or log in to explore our digital services</span>
                <div className={"button-container"}>
                    <Link href={"/services"}>
                        <button className={style.learnmore}>Learn More</button>
                    </Link>
                    <Link href={"/signup"}>
                        <button className={style.signup}>Sign Up</button>
                    </Link>
                </div>

            </div>

            <div className={style.imgContainer}>
                <div className={style.contactContainer}>
                    <div className={style.head}>
                        Stay Updated with Government Initiatives
                    </div>
                    <div className={style.subHead}>
                        Subscribe to receive news and updates about the governments digital initiative.
                    </div>
                    <div className={style.subscribe}>
                        <div className={style.form}>
                            <input className={style.input} type={"email"} placeholder={"Enter your email"}
                                   name={"email"}/>
                            <button className={style.btn}>Sign Up</button>
                        </div>
                        <span className={style.subHead}>By clicking SignUp, you agree to our Terms and Condition</span>
                    </div>
                </div>
                <Image className={style.image} src={"/cloud.png"} alt={"background"} width={1000} height={100}/>
            </div>

        </div>
    );
}
export default Contact