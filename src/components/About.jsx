import Slider from "./Slider";

function About() {
  return (
    <article className="text-white flex flex-col w-full h-full">
      <div className="px-[98px] max-sm:px-6">
        <section id="about" className=" mt-[98px]">
          <h2 className="text-[36px] font-normal blue-line mb-[96px] max-sm:mb-[22px]">
            О нашей команде
          </h2>
          <p className="text-[24px] font-normal mb-[170px] max-sm:px-0 max-sm:mb-[0px] max-sm:w-[272px] max-sm:h-[153px] text-white max-sm:text-sm max-sm:font-normal max-sm:leading-7">
            Добро пожаловать в мир уникальных и качественных сайтов! Наша
            команда специалистов создаёт дизайн и фронтенд разработку, что
            подчеркивает вашу уникальность и превращает посетителей в клиентов.
          </p>
        </section>
        <section
          id="projects"
          className="flex flex-col items-center max-sm:mt-[32px]"
        >
          <h3 className="w-full blue-line text-[36px] font-normal mb-[42px] items-start justify-start">
            Наши работы
          </h3>
          <div className="">
            <div className="w-full flex items-center justify-center">
              <Slider></Slider>
            </div>
          </div>
        </section>
        <section
          id="team"
          className="flex flex-col items-start justify-start mt-[122px] max-sm:mt-[0px]"
        >
          <h4 className="blue-line text-[36px] font-normal">Команда</h4>
          <ul className="mt-[100px] w-full items-center max-sm:mt-[22px] max-sm:justify-center">
            <li className="flex mb-[44px] items-center max-sm:mb-[30px]">
              <p className=" text-[24px] font-medium max-sm:text-base max-sm:font-medium">
                Александр
              </p>
              <span className="mx-[26px] max-sm:mx-[10px] text-[#00E0FF] text-[36px]">
                &gt;
              </span>
              <p className=" text-[24px] font-medium max-sm:text-base max-sm:font-medium">
                Веб - дизайнер
              </p>
            </li>
            <li className="flex mb-[44px] items-center max-sm:mb-[30px]">
              <p className=" text-[24px] font-medium max-sm:text-base max-sm:font-medium">
                Никита
              </p>
              <span className="mx-[65px] max-sm:mx-[37px] text-[#00E0FF] text-[36px]">
                &gt;
              </span>
              <p className=" text-[24px] font-medium max-sm:text-base max-sm:font-medium">
                Веб - разбработчик
              </p>
            </li>
            <li className="flex mb-[44px] items-center max-sm:mb-[30px]">
              <p className=" text-[24px] font-medium max-sm:text-base max-sm:font-medium">
                Полина
              </p>
              <span className="mx-[58px]  max-sm:mx-[37px] text-[#00E0FF] text-[36px]">
                &gt;
              </span>
              <p className=" text-[24px] font-medium max-sm:text-base max-sm:font-medium">
                SMM - Менеджер
              </p>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}

export default About;
