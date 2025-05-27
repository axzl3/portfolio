import React from "react";
import {
  BiCodeBlock,
  BiEdit,
} from "react-icons/bi";

import { Card } from "../components";

const AboutPage = () => {
  return (
    <>
      <Card
        cardStyle={"w-3/4 h-auto"}
        cardTitle={"About me"}
        cardTitleStyle={"text-4xl"}
      >
        <div className="text-md">
          I am Alexander Edic, a{" "}
          <span className="font-semibold">
            Full-Stack Web Developer
          </span>{" "}
          based in Don Galo, Parañaque City, Metro
          Manila. I specialize in building dynamic
          and scalable applications using a robust
          tech stack that includes
          PostgreSQL/MongoDB, Node.js, Express,
          and React/Vue.js. Passionate about
          crafting seamless user experiences and
          efficient backend systems, I thrive in
          solving complex problems and developing
          innovative solutions.
        </div>
        <div className="divider"></div>
        <div className="text-3xl font-semibold">
          What I do
        </div>
        <div className="flex justify-between">
          <Card cardStyle="bg-base-300 w-1/2 m-2">
            <div className="grid grid-cols-4">
              <div className="flex justify-center items-center">
                <BiCodeBlock className="text-3xl" />
              </div>
              <div className="col-span-3">
                <div className="font-semibold">
                  Web Development
                </div>
                <div>
                  Lorem ipsum dolor sit amet.
                </div>
              </div>
            </div>
          </Card>
          <Card cardStyle="bg-base-300 w-1/2 m-2">
            <div className="grid grid-cols-4 ">
              <div className="flex justify-center items-center">
                <BiEdit className="text-3xl" />
              </div>
              <div className="col-span-3">
                <div className="font-semibold">
                  Web Design
                </div>
                <div>
                  Lorem ipsum dolor sit amet.
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Card>
    </>
  );
};

export default AboutPage;
