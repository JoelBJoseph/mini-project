"use server";

import Image from "next/image";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

const App = () => {
  return(
      <div className={"container"}>

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
              <button className={"learn-more"}>Learn More</button>
              <button className={"sign-up"}>Sign Up</button>
          </div>

      </div>
  );
}
export default App