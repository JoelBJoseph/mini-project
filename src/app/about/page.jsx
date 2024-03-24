import style from ".//about.module.css"
import Image from "next/image";

const About = () =>{
    return(
        <div>
            <div className={style.headContainer}>
                <span className={style.head}>Simplify government management with our
                    user-friendly application</span>
            </div>
            <div className={style.content_container}>
                <p className={style.content}>
                    Experience the ease and efficiency of managing government services
                    with our user interface government Akshaya Center management application
                </p>
                <Image className={style.image} src={"/../../public/images/familyphotot@2x.png"} alt={"family-Photo"}
                       width={600} height={800}/>
            </div>
            <div className={style.btnContainer}>
                <button className={"learn-more"}>Learn More</button>
                <button className={"sign-up"}>Sign Up</button>
            </div>
        </div>
    );
}
export default About