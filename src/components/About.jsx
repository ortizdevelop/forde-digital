import Slider from "./Slider";

function About() {
  return (
    <article className="text-white flex flex-col w-full h-full">
      <div className="px-[98px]">
        <section className=" mt-[98px]">
          <h2 className="text-[36px] font-normal blue-line mb-[96px]">
            О нашей команде
          </h2>
          <p className="text-[24px] font-normal mb-[170px]">
            Добро пожаловать в мир уникальных и качественных сайтов! Наша
            команда специалистов создаёт дизайн и фронтенд разработку, что
            подчеркивает вашу уникальность и превращает посетителей в клиентов.
          </p>
        </section>
        <section className="flex flex-col items-center">
          <h3 className="w-full blue-line text-[36px] font-normal mb-[42px] items-start justify-start">
            Наши работы
          </h3>
          <div className="">
            <div className="w-full flex items-center justify-center">
              <Slider></Slider>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-start justify-start mt-[122px]">
          <h4 className="blue-line text-[36px] font-normal">Команда</h4>
          <ul className="mt-[100px] items-center">
            <li className="flex mb-[44px] items-center">
              <p className=" text-[24px] font-medium">Александр</p>
              <span className="mx-[26px] text-[#00E0FF] text-[36px]">&gt;</span>
              <p className=" text-[24px] font-medium">Веб - дизайнер</p>
            </li>
            <li className="flex mb-[44px] items-center">
              <p className=" text-[24px] font-medium">Никита</p>
              <span className="mx-[65px] text-[#00E0FF] text-[36px]">&gt;</span>
              <p className=" text-[24px] font-medium">Веб - разбработчик</p>
            </li>
            <li className="flex mb-[44px] items-center">
              <p className=" text-[24px] font-medium">Полина</p>
              <span className="mx-[58px] text-[#00E0FF] text-[36px]">&gt;</span>
              <p className=" text-[24px] font-medium">SMM - Менеджер</p>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}

export default About;
