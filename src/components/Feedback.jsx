import tg from "../images/icon_tg.svg";
import Button from "@mui/material/Button";

function Feedback() {
  return (
    <article className="text-white mt-[122px] px-[98px]">
      <div className="flex flex-col items-center justify-center">
        <h5 className="blue-line text-[36px] font-normal items-start justify-start w-full">
          Часто задаваемые вопросы
        </h5>
        <section className="flex items-center justify-center">
          <ul className="flex w-[70%] flex-wrap items-center justify-between mt-[34px]">
            <li className="group feedback-list mb-[58px]">
              <div className="flex items-center justify-around">
                <p className="feedback-title">Какие услуги вы предлагаете?</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 group-hover:rotate-[270deg]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p className="feedback-text">
                Мы предоставляем услуги по созданию дизайна и фронтед разработки
                сайтов, которые помогут привлечь внимание и выделится среди
                конкурентов.
              </p>
            </li>
            <li className="group group feedback-list mb-[58px]">
              <div className="flex items-center justify-around">
                <p className="feedback-title">
                  Как мне начать работать с вами?
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 group-hover:rotate-[270deg]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p className="feedback-text">
                Все просто, вам нужно связаться с нами через форму обратной
                связи и мы обсудим ваш проект и индивидуальные требования.
              </p>
            </li>
            <li className="group group feedback-list mb-[58px]">
              <div className="flex items-center justify-around">
                <p className="feedback-title">
                  Как составляется стоимость проекта?
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 group-hover:rotate-[270deg]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p className="feedback-text">
                Цена проекта зависит от его сложности и индивидуальных
                требований. Мы будем рады все обсудить и предложить оптимальный
                бюджет.
              </p>
            </li>
            <li className="group group feedback-list mb-[58px]">
              <div className="flex items-center justify-around">
                <p className="feedback-title">
                  Как долго длится разработка сайтов?
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 group-hover:rotate-[270deg]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p className="feedback-text">
                Срок зависит от сложности и требований. Мы стараемся работать
                быстро и при этом не жертвовать качеством дизайна и функционала.
              </p>
            </li>
          </ul>
        </section>
        <section className="flex flex-col items-center justify-center">
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
          <div className="w-full flex items-center justify-center my-[46px]">
            <span className="line"></span>
          </div>
          <img className="mb-9" src={tg} alt="" />
        </section>
      </div>
    </article>
  );
}

export default Feedback;
