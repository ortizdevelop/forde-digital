import logo from "../images/Logo.png";
import Button from "@mui/material/Button";

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
            <button className="header-link">Команда</button>
          </li>
          <li className="max-md:hidden lg:block">
            <button className="header-link">Вопросы</button>
          </li>
        </ul>
        <button className="text-white transition-all duration-300 opacity-50 hover:opacity-100 before-inset-1 relative inline-block ">
          contact@
          <span className="text-[#00E0FF]">forgedigital.ru</span>
        </button>
      </nav>
      <article className="flex mx-[98px] my-[178px]">
        <section>
          <h1 className="text-[64px] font-normal">
            Создаем сайты для вас на <br /> основе ваших <br /> пожеланий
          </h1>
          <Button
            className="button"
            sx={{
              color: "#1c1c1c",
              background: "#CECECE",
              "&:hover": { background: "transparent", color: "#CECECE" },
              border: "2px #CECECE solid",
              padding: 2,
              marginTop: 10,
              fontSize: 36,
              fontWeight: 500,
              textTransform: "initial",
            }}
            variant="contained"
          >
            Связаться с нами
          </Button>
        </section>
      </article>
    </header>
  );
}

export default Navbar;
