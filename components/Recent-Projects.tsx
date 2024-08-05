'use client'
import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading mb-10">
        A small selection of{" "}
        <span className="text-purple">Recent Projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-8 gap-y-8">
        {projects.map((item) => (
          <div
            className="flex flex-col items-center justify-center lg:min-h-[32.5rem] sm:min-h-[28rem] min-h-[25rem] sm:w-[500px] w-[80vw] rounded-lg shadow-lg overflow-hidden"
            key={item.id}
          >
            <PinContainer
              title="Github"
              href="https://github.com/Kushhhhhhhh"
            >
              <div className="relative flex items-center justify-center sm:w-[500px] w-[80vw] h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162D]"
                >
                  <img src="/bg.png" alt="bgimg" className="object-cover w-full h-full"/>
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0 object-fill"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base text-center">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm text-center"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3 w-full px-4">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <a href={item.link} className="flex lg:text-xl md:text-xs text-sm text-purple" target="_blank">
                    Check Live Site
                  </a>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentProjects;