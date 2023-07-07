import logo from "../images/Logo.png";

function Footer() {
  return (
    <footer className="text-white w-full bg-[#1E1E1E] py-11">
      <div className="flex items-center justify-center">
        <nav className="w-full flex items-center justify-around">
          <p className="text-neutral-500 text-[20px] font-light leading-loose">
            ©2023 ForgeDigital | Все права защищены
          </p>
          <img src={logo} alt="" className="" />
          <ul className="flex items-center">
            <li className="footer-list">
              <button className="footer-btn">Домой</button>
            </li>
            <li className="footer-list">
              <button className="footer-btn">О нас</button>
            </li>
            <li className="footer-list">
              <button className="footer-btn">Команда</button>
            </li>
            <li className="footer-list">
              <button className="footer-btn">Политика</button>
            </li>
            <li className="footer-list ">
              <button className="text-white text-[20px] font-light leading-loose">
                FAQ
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
