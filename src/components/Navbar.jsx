import logo from "../images/Logo.png";
import bg from "../images/bg.png";

function Navbar() {
  return (
    <header className="header w-full text-white pb-[203px]">
      <nav className="flex flex-row items-center justify-around my-[41px] mx-0 xl:justify-around">
        <img className="" src={logo} alt="" />
        <ul className="flex items-center">
          <li className="hidden max-md:block cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </li>
          <li className="max-md:hidden lg:block">
            <button className="header-link">О нас</button>
          </li>
          <li className="max-md:hidden lg:block">
            <button className="header-link">Работы</button>
          </li>
          <li className="max-md:hidden lg:block">
            <button className="header-link">
              Команда
            </button>
          </li>
          <li className="max-md:hidden lg:block">
            <button className="header-link">
              Вопросы
            </button>
          </li>
        </ul>
        <button className="transition-all duration-300 opacity-50 hover:opacity-100 before-inset-1 relative inline-block ">
          contact@
          <span className="text-[#00E0FF]">forgedigital.ru</span>
        </button>
      </nav>
      <article className="flex mx-[98px] my-[178px]">
        <section>
          <h1 className="text-[64px] font-normal">
            Создаем сайты для вас на <br /> основе ваших <br /> пожеланий
          </h1>
          <button className="mt-[104px] text-[36px] text-[#1c1c1c] font-normal py-4 px-[30px] bg-stone-300 rounded-lg transition-all duration-300">
            Связаться с нами
          </button>
        </section>
      </article>
    </header>
  );
}

export default Navbar;
