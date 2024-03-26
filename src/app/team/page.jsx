import style from "./team.module.css"
import Navabar from "../../../component/Navabar";
import Image from "next/image";
import Link from "next/link";

const Team = () => {
    return (
        <div className={style.teamContainer}>

            <Navabar/>

            <div className={style.container}>

                <div className={style.textContainer}>
                    <div className={style.headContainer}>
                        <span className={style.head}>
                            Experience the Future of Digital Government
                        </span>
                    </div>

                    <div className={style.content_container}>
                        <p className={style.content}>
                            Our user-friendly government Akshaya Center management application
                            brings convenience reduces paperwork, and ensures faster processing
                            times for all
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
                    <Image className={style.image} src={"/taximage.png"} alt={"queue"} width={500} height={300}/>
                </div>
            </div>

        </div>
    );
}
export default Team