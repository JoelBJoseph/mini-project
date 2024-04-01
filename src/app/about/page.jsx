import style from "./about.module.css"
import Image from "next/image";
import Link from "next/link";

const About = () =>{
    return(
        <div className={style.aboutContainer}>

            <div className={style.container}>

                <div className={style.textContainer}>
                    <div className={style.headContainer}>
                    <span className={style.head}>Simplify government management with our
                    user-friendly application</span>
                    </div>

                    <div className={style.content_container}>
                        <p className={style.content}>
                            Experience the ease and efficiency of managing government services
                            with our user interface government Akshaya Center management application
                        </p>
                    </div>

                    <div className={style.btnContainer}>
                        <Link href={"/services"}>
                            <button className={style.learnmore}>Learn More</button>
                        </Link>
                        <Link href={"/signup"}>
                            <button className={style.signup}>Sign Up</button>
                        </Link>
                    </div>
                </div>
                <div className={style.imageContainer}>
                    <Image className={style.image} src={"/queue.png"} alt={"queue"} width={500} height={300}/>
                </div>
            </div>

        </div>
    );
}
export default About