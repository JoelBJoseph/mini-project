import style from "./service.module.css"
import Navabar from "../../../component/Navabar";
import Image from "next/image";
import Link from "next/link";

const Services = () =>{
    return (
        <div className={style.serviceContainer}>

            <Navabar/>

            <div className={style.container}>

                <div className={style.textContainer}>
                    <div className={style.headContainer}>
                    <span className={style.head}>Enhance Your Government Experience with Our
                        platform</span>
                    </div>

                    <div className={style.content_container}>
                        <p className={style.content}>
                            Our user interface government Akshaya center management application
                            provides a range of additional features to improve your digital
                            government experience. From robust security measures to multilingual
                            support, and 24/7 access to government services,our platform is
                            designed to meet your needs.
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
                    <div className={style.service}>
                        <Image className={style.image} src={"/security.png"} alt={"Security-image"} width={40}
                               height={30}/>
                        <div className={style.text}>
                            Robust Security Measures<br/>
                            <span className={style.subhead}>Protecting your data and ensuring privacy.</span>
                        </div>
                    </div>
                    <div className={style.service}>
                        <Image className={style.image} src={"/people.png"} alt={"Security-image"} width={40}
                               height={30}/>
                        <div className={style.text}>
                            Multilingual Support<br/>
                            <span
                                className={style.subhead}>Access government services in your preferred language.</span>
                        </div>
                    </div>
                    <div className={style.service}>
                        <Image className={style.image} src={"/people.png"} alt={"Security-image"} width={40}
                               height={30}/>
                        <div className={style.text}>
                            24/7 Access ot Givernment Services<br/>
                            <span
                                className={style.subhead}>Conveniently access government services anytime, anywhere.</span>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}
export default Services