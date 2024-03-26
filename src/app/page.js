import Image from "next/image";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import Navabar from "../../component/Navabar";
import Link from "next/link";


const App = () => {
  return(

      <div className={"container"}>
            <Navabar/>
          <div className={"image-container"}>
              <Image src={"/familyphoto.png"} alt={"Family-Photo"} layout={"fill"}
                     objectFit={"cover"}/>
          </div>

          <div className={"header-container"}>
              <span className={"heading"}>Connect.Serve.<br/>Innovate.</span>
          </div>

          <div className={"content_container"}>
              <p className={"content"}>
                  Empower your community with our user-friendly government
                  Akshaya Center management application.Streamline process,
                  enhance citizen engagement, and deliver efficient services.
              </p>
          </div>

          <div className={"button-container"}>
              <Link href={"/services"}>
                  <button className={"learn-more"}>Learn More</button>
              </Link>
              <Link href={"/signup"}>
                  <button className={"sign-up"}>Sign Up</button>
              </Link>

          </div>

      </div>
  );
}
export default App