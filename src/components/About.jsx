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
        <section className="flex items-center">
          <div className="">
            <h3 className="blue-line text-[36px] font-normal mb-[42px]">
              Наши работы
            </h3>
            <div className="w-[712px] h-[508px]">
              <Slider></Slider>
            </div>
          </div>
          <div className="ml-[121px]">
            <p className="text-[22px] font-medium">Realty IBC</p>
            <p className="w-[362px] text-[22px] font-medium leading-10">
              Сайт по продаже недвижимости от независимого агенства
            </p>
          </div>
        </section>
        <section className="flex flex-col items-start justify-start mt-[122px]">
          <h4 className="blue-line text-[36px] font-normal">Команда</h4>
          <ul className="mt-[100px] items-center">
            <li className="flex mb-[44px] items-center">
              <p className=" text-[24px] font-medium">Александр</p>
              <span className="mx-[39px] text-[#00E0FF] text-[36px]">&gt;</span>
              <p className=" text-[24px] font-medium">Веб - дизайнер</p>
            </li>
            <li className="flex mb-[44px] items-center">
              <p className=" text-[24px] font-medium">Никита</p>
              <span className="mx-[65px] text-[#00E0FF] text-[36px]">&gt;</span>
              <p className=" text-[24px] font-medium">Веб - разбработчик</p>
            </li>
            <li className="flex mb-[44px] items-center">
              <p className=" text-[24px] font-medium">Полина</p>
              <span className="mx-[65px] text-[#00E0FF] text-[36px]">&gt;</span>
              <p className=" text-[24px] font-medium">SMM - Менеджер</p>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}

export default About;
