import { useState } from "react";
import logo from "../images/Logo.png";
import Button from "@mui/material/Button";

function Navbar() {
  const [formClass, setFormClass] = useState("form-inactive");
  const [policyClass, setPolicyClass] = useState("policy-inactive");

  const handleFormButtonClick = () => {
    setFormClass("form-active");
  };

  const handleInActiveFormButtonClick = () => {
    setFormClass("form-inactive");
  };

  const handlePolicyButtonClick = () => {
    setPolicyClass("policy-active");
  };

  const handleInActivePolicyButtonClick = () => {
    setPolicyClass("policy-inactive");
  };

  const FeedbackForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = (event) => {
      event.preventDefault();

      fetch("/email.php", {
        method: "POST",
        body: new FormData(event.target),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            setSuccess(true);
            setError(null);
            setName("");
            setEmail("");
            setText("");
            // setIsActive(false);
          } else {
            setError(data.error);
            setSuccess(false);
          }
        })
        .catch((error) => {
          setError("Ваша запись была отправлена!");
          setSuccess(false);
        });
    };

    return (
      <form
        className={`fixed flex flex-col w-full h-[100vh] top-[0%] left-[0%] bg-[rgb(28,28,28,0.85)] z-10 ${formClass}`}
        onSubmit={handleSubmit}
      >
        <div className="fixed top-[5%] left-[15%] form-bg py-[80px] px-[336px]">
          <p className="text-center text-white text-[48px] font-bold leading-10 mb-4">
            Свяжитесь с нами
          </p>
          <p className="mb-12 text-center text-white text-[18px] font-normal leading-relaxed">
            Заполните поля и отправьте заявку, для того чтобы мы начали работать
            с вами!
          </p>
          <div className="feedback__field">
            <label htmlFor="name" className="form-label">
              Имя:
            </label>
            <input
              type="text"
              id="name"
              className="form-input"
              name="name"
              required
              placeholder=""
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="feedback__field">
            <label htmlFor="email" className="form-label">
              Почта
            </label>
            <input
              type="email"
              id="email"
              className="form-input"
              required
              placeholder=""
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="feedback__field">
            <label htmlFor="text" className="form-label">
              Сообщение
            </label>
            <textarea
              id="text"
              className="form-textarea"
              required
              placeholder="Напечатайте свое сообщение..."
              name="text"
              value={text}
              onChange={(event) => setText(event.target.value)}
            ></textarea>
          </div>
          <div className="w-full flex flex-row items-center justify-center mb-10">
            <input
              type="checkbox"
              name="checkbox"
              id=""
              className="mr-3 w-[18px] h-[18px] relative bg-white border border border border border-black"
            />
            <p className="text-white text-[14px] font-normal leading-tight">
              Я согласен с{" "}
              <button
                onClick={handlePolicyButtonClick}
                className="underline cursor-pointer"
              >
                Политикой конфиденциальности
              </button>
            </p>
          </div>  
          <div className="w-full flex items-center justify-center">
            <Button
              className="button"
              sx={{
                color: "#1c1c1c",
                background: "#CECECE",
                "&:hover": { background: "transparent", color: "#CECECE" },
                border: "2px #CECECE solid",
                padding: 2,
                width: "134px",
                fontSize: 16,
                fontWeight: 500,
                textTransform: "initial",
              }}
              variant="contained"
              type="submit"
              onClick={handleInActiveFormButtonClick}
            >
              Отправить
            </Button>
          </div>
        </div>
      </form>
    );
  };

  const PolicyForm = () => {
    return (
      <form
        action=""
        className={`fixed flex flex-col w-full h-[100vh] top-[0%] left-[0%] bg-[rgb(24,24,24,0.85)] z-10 ${policyClass}`}
      >
        <div className="fixed flex flex-col top-[0%] left-00%] form-bg py-[80px] px-[336px]">
          <label className="text-[32px] font-normal" htmlFor="">
            Политика в отношении обработки персональных данных
          </label>
          <div className="w-[1240px] h-[671px] bg-[#1E1E1E] rounded-tl-[25px] rounded-bl-[25px] overflow-auto scrollbar scrollbar-thumb-[#535353] scrollbar-track-[#3A3A3A] scrollbar-rounded-[5px]">
            <div className="w-[1177px] h-[621px] p-5">
              <span className="text-white text-[16px] font-normal leading-loose">
                Политика в отношении обработки персональных данных
                <br />
                1. Общие положения
                <br />
                Настоящая политика обработки персональных данных составлена в
                соответствии с требованиями Федерального закона от 27.07.2006. №
                152-ФЗ «О персональных данных» (далее — Закон о персональных
                данных) и определяет порядок обработки персональных данных и
                меры по обеспечению безопасности персональных данных,
                предпринимаемые Forge Digital (далее — Оператор).
                <br />
                1.1. Оператор ставит своей важнейшей целью и условием
                осуществления своей деятельности соблюдение прав и свобод
                человека и гражданина при обработке его персональных данных, в
                том числе защиты прав на неприкосновенность частной жизни,
                личную и семейную тайну.
                <br />
                1.2. Настоящая политика Оператора в отношении обработки
                персональных данных (далее — Политика) применяется ко всей
                информации, которую Оператор может получить о посетителях
                веб-сайта https://forgedigital.ru.
                <br />
                2. Основные понятия, используемые в Политике
                <br />
                2.1. Автоматизированная обработка персональных данных —
                обработка персональных данных с помощью средств вычислительной
                техники.
                <br />
                2.2. Блокирование персональных данных — временное прекращение
                обработки персональных данных (за исключением случаев, если
                обработка необходима для уточнения персональных данных).
                <br />
                2.3. Веб-сайт — совокупность графических и информационных
                материалов, а также программ для ЭВМ и баз данных,
                обеспечивающих их доступность в сети интернет по сетевому адресу
                https://forgedigital.ru.
                <br />
                2.4. Информационная система персональных данных — совокупность
                содержащихся в базах данных персональных данных и обеспечивающих
                их обработку информационных технологий и технических средств.
                <br />
                2.5. Обезличивание персональных данных — действия, в результате
                которых невозможно определить без использования дополнительной
                информации принадлежность персональных данных конкретному
                Пользователю или иному субъекту персональных данных.
                <br />
                2.6. Обработка персональных данных — любое действие (операция)
                или совокупность действий (операций), совершаемых с
                использованием средств автоматизации или без использования таких
                средств с персональными данными, включая сбор, запись,
                систематизацию, накопление, хранение, уточнение (обновление,
                изменение), извлечение, использование, передачу
                (распространение, предоставление, доступ), обезличивание,
                блокирование, удаление, уничтожение персональных данных.
                <br />
                2.7. Оператор — государственный орган, муниципальный орган,
                юридическое или физическое лицо, самостоятельно или совместно с
                другими лицами организующие и/или осуществляющие обработку
                персональных данных, а также определяющие цели обработки
                персональных данных, состав персональных данных, подлежащих
                обработке, действия (операции), совершаемые с персональными
                данными.
                <br />
                2.8. Персональные данные — любая информация, относящаяся прямо
                или косвенно к определенному или определяемому Пользователю
                веб-сайта https://forgedigital.ru.
                <br />
                2.9. Персональные данные, разрешенные субъектом персональных
                данных для распространения, — персональные данные, доступ
                неограниченного круга лиц к которым предоставлен субъектом
                персональных данных путем дачи согласия на обработку
                персональных данных, разрешенных субъектом персональных данных
                для распространения в порядке, предусмотренном Законом о
                персональных данных (далее — персональные данные, разрешенные
                для распространения).
                <br />
                2.10. Пользователь — любой посетитель веб-сайта
                https://forgedigital.ru.
                <br />
                2.11. Предоставление персональных данных — действия,
                направленные на раскрытие персональных данных определенному лицу
                или определенному кругу лиц.
                <br />
                2.12. Распространение персональных данных — любые действия,
                направленные на раскрытие персональных данных неопределенному
                кругу лиц (передача персональных данных) или на ознакомление с
                персональными данными неограниченного круга лиц, в том числе
                обнародование персональных данных в средствах массовой
                информации, размещение в информационно-телекоммуникационных
                сетях или предоставление доступа к персональным данным
                каким-либо иным способом.
                <br />
                2.13. Трансграничная передача персональных данных — передача
                персональных данных на территорию иностранного государства
                органу власти иностранного государства, иностранному физическому
                или иностранному юридическому лицу.
                <br />
                2.14. Уничтожение персональных данных — любые действия, в
                результате которых персональные данные уничтожаются безвозвратно
                с невозможностью дальнейшего восстановления содержания
                персональных данных в информационной системе персональных данных
                и/или уничтожаются материальные носители персональных данных.
                <br />
                3. Основные права и обязанности Оператора
                <br />
                3.1. Оператор имеет право:
                <br />— получать от субъекта персональных данных достоверные
                информацию и/или документы, содержащие персональные данные;
                <br />— в случае отзыва субъектом персональных данных согласия
                на обработку персональных данных, а также, направления обращения
                с требованием о прекращении обработки персональных данных,
                Оператор вправе продолжить обработку персональных данных без
                согласия субъекта персональных данных при наличии оснований,
                указанных в Законе о персональных данных;
                <br />— самостоятельно определять состав и перечень мер,
                необходимых и достаточных для обеспечения выполнения
                обязанностей, предусмотренных Законом о персональных данных и
                принятыми в соответствии с ним нормативными правовыми актами,
                если иное не предусмотрено Законом о персональных данных или
                другими федеральными законами.
                <br />
                3.2. Оператор обязан:
                <br />— предоставлять субъекту персональных данных по его
                просьбе информацию, касающуюся обработки его персональных
                данных;
                <br />— организовывать обработку персональных данных в порядке,
                установленном действующим законодательством РФ;
                <br />— отвечать на обращения и запросы субъектов персональных
                данных и их законных представителей в соответствии с
                требованиями Закона о персональных данных;
                <br />— сообщать в уполномоченный орган по защите прав субъектов
                персональных данных по запросу этого органа необходимую
                информацию в течение 10 дней с даты получения такого запроса;
                <br />— публиковать или иным образом обеспечивать неограниченный
                доступ к настоящей Политике в отношении обработки персональных
                данных;
                <br />— принимать правовые, организационные и технические меры
                для защиты персональных данных от неправомерного или случайного
                доступа к ним, уничтожения, изменения, блокирования,
                копирования, предоставления, распространения персональных
                данных, а также от иных неправомерных действий в отношении
                персональных данных;
                <br />— прекратить передачу (распространение, предоставление,
                доступ) персональных данных, прекратить обработку и уничтожить
                персональные данные в порядке и случаях, предусмотренных Законом
                о персональных данных;
                <br />— исполнять иные обязанности, предусмотренные Законом о
                персональных данных.
                <br />
                4. Основные права и обязанности субъектов персональных данных
                <br />
                4.1. Субъекты персональных данных имеют право:
                <br />— получать информацию, касающуюся обработки его
                персональных данных, за исключением случаев, предусмотренных
                федеральными законами. Сведения предоставляются субъекту
                персональных данных Оператором в доступной форме, и в них не
                должны содержаться персональные данные, относящиеся к другим
                субъектам персональных данных, за исключением случаев, когда
                имеются законные основания для раскрытия таких персональных
                данных. Перечень информации и порядок ее получения установлен
                Законом о персональных данных;
                <br />— требовать от оператора уточнения его персональных
                данных, их блокирования или уничтожения в случае, если
                персональные данные являются неполными, устаревшими, неточными,
                незаконно полученными или не являются необходимыми для
                заявленной цели обработки, а также принимать предусмотренные
                законом меры по защите своих прав;
                <br />— выдвигать условие предварительного согласия при
                обработке персональных данных в целях продвижения на рынке
                товаров, работ и услуг;
                <br />— на отзыв согласия на обработку персональных данных, а
                также, на направление требования о прекращении обработки
                персональных данных;
                <br />— обжаловать в уполномоченный орган по защите прав
                субъектов персональных данных или в судебном порядке
                неправомерные действия или бездействие Оператора при обработке
                его персональных данных;
                <br />— на осуществление иных прав, предусмотренных
                законодательством РФ.
                <br />
                4.2. Субъекты персональных данных обязаны:
                <br />— предоставлять Оператору достоверные данные о себе;
                <br />— сообщать Оператору об уточнении (обновлении, изменении)
                своих персональных данных.
                <br />
                4.3. Лица, передавшие Оператору недостоверные сведения о себе,
                либо сведения о другом субъекте персональных данных без согласия
                последнего, несут ответственность в соответствии с
                законодательством РФ.
                <br />
                5. Принципы обработки персональных данных
                <br />
                5.1. Обработка персональных данных осуществляется на законной и
                справедливой основе.
                <br />
                5.2. Обработка персональных данных ограничивается достижением
                конкретных, заранее определенных и законных целей. Не
                допускается обработка персональных данных, несовместимая с
                целями сбора персональных данных.
                <br />
                5.3. Не допускается объединение баз данных, содержащих
                персональные данные, обработка которых осуществляется в целях,
                несовместимых между собой.
                <br />
                5.4. Обработке подлежат только персональные данные, которые
                отвечают целям их обработки.
                <br />
                5.5. Содержание и объем обрабатываемых персональных данных
                соответствуют заявленным целям обработки. Не допускается
                избыточность обрабатываемых персональных данных по отношению к
                заявленным целям их обработки.
                <br />
                5.6. При обработке персональных данных обеспечивается точность
                персональных данных, их достаточность, а в необходимых случаях и
                актуальность по отношению к целям обработки персональных данных.
                Оператор принимает необходимые меры и/или обеспечивает их
                принятие по удалению или уточнению неполных или неточных данных.
                <br />
                5.7. Хранение персональных данных осуществляется в форме,
                позволяющей определить субъекта персональных данных, не дольше,
                чем этого требуют цели обработки персональных данных, если срок
                хранения персональных данных не установлен федеральным законом,
                договором, стороной которого, выгодоприобретателем или
                поручителем по которому является субъект персональных данных.
                Обрабатываемые персональные данные уничтожаются либо
                обезличиваются по достижении целей обработки или в случае утраты
                необходимости в достижении этих целей, если иное не
                предусмотрено федеральным законом.
                <br />
                6. Цели обработки персональных данных
                <br />
                Цель обработкиинформирование Пользователя посредством отправки
                электронных писемПерсональные данные
                <br />
              </span>
              <span className="text-white text-[16px] font-normal leading-loose">
                электронный адрес
                <br />
                номера телефонов
                <br />
                имя
                <br />
              </span>
              <span className="text-white text-[16px] font-normal leading-loose">
                Правовые основания
                <br />
              </span>
              <span className="text-white text-[16px] font-normal leading-loose">
                договоры, заключаемые между оператором и субъектом персональных
                данных
                <br />
              </span>
              <span className="text-white text-[16px] font-normal leading-loose">
                Виды обработки персональных данных
                <br />
              </span>
              <span className="text-white text-[16px] font-normal leading-loose">
                Отправка информационных писем на адрес электронной почты
                <br />
              </span>
              <span className="text-white text-[16px] font-normal leading-loose">
                7. Условия обработки персональных данных
                <br />
                7.1. Обработка персональных данных осуществляется с согласия
                субъекта персональных данных на обработку его персональных
                данных.
                <br />
                7.2. Обработка персональных данных необходима для достижения
                целей, предусмотренных международным договором Российской
                Федерации или законом, для осуществления возложенных
                законодательством Российской Федерации на оператора функций,
                полномочий и обязанностей.
                <br />
                7.3. Обработка персональных данных необходима для осуществления
                правосудия, исполнения судебного акта, акта другого органа или
                должностного лица, подлежащих исполнению в соответствии с
                законодательством Российской Федерации об исполнительном
                производстве.
                <br />
                7.4. Обработка персональных данных необходима для исполнения
                договора, стороной которого либо выгодоприобретателем или
                поручителем по которому является субъект персональных данных, а
                также для заключения договора по инициативе субъекта
                персональных данных или договора, по которому субъект
                персональных данных будет являться выгодоприобретателем или
                поручителем.
                <br />
                7.5. Обработка персональных данных необходима для осуществления
                прав и законных интересов оператора или третьих лиц либо для
                достижения общественно значимых целей при условии, что при этом
                не нарушаются права и свободы субъекта персональных данных.
                <br />
                7.6. Осуществляется обработка персональных данных, доступ
                неограниченного круга лиц к которым предоставлен субъектом
                персональных данных либо по его просьбе (далее — общедоступные
                персональные данные).
                <br />
                7.7. Осуществляется обработка персональных данных, подлежащих
                опубликованию или обязательному раскрытию в соответствии с
                федеральным законом.
                <br />
                8. Порядок сбора, хранения, передачи и других видов обработки
                персональных данных
                <br />
                Безопасность персональных данных, которые обрабатываются
                Оператором, обеспечивается путем реализации правовых,
                организационных и технических мер, необходимых для выполнения в
                полном объеме требований действующего законодательства в области
                защиты персональных данных.
                <br />
                8.1. Оператор обеспечивает сохранность персональных данных и
                принимает все возможные меры, исключающие доступ к персональным
                данным неуполномоченных лиц.
                <br />
                8.2. Персональные данные Пользователя никогда, ни при каких
                условиях не будут переданы третьим лицам, за исключением
                случаев, связанных с исполнением действующего законодательства
                либо в случае, если субъектом персональных данных дано согласие
                Оператору на передачу данных третьему лицу для исполнения
                обязательств по гражданско-правовому договору.
                <br />
                8.3. В случае выявления неточностей в персональных данных,
                Пользователь может актуализировать их самостоятельно, путем
                направления Оператору уведомление на адрес электронной почты
                Оператора contact@forgedigital.ru с пометкой «Актуализация
                персональных данных».
                <br />
                8.4. Срок обработки персональных данных определяется достижением
                целей, для которых были собраны персональные данные, если иной
                срок не предусмотрен договором или действующим
                законодательством.Пользователь может в любой момент отозвать
                свое согласие на обработку персональных данных, направив
                Оператору уведомление посредством электронной почты на
                электронный адрес Оператора contact@forgedigital.ru с пометкой
                «Отзыв согласия на обработку персональных данных».
                <br />
                8.5. Вся информация, которая собирается сторонними сервисами, в
                том числе платежными системами, средствами связи и другими
                поставщиками услуг, хранится и обрабатывается указанными лицами
                (Операторами) в соответствии с их Пользовательским соглашением и
                Политикой конфиденциальности. Субъект персональных данных и/или
                с указанными документами. Оператор не несет ответственность за
                действия третьих лиц, в том числе указанных в настоящем пункте
                поставщиков услуг.
                <br />
                8.6. Установленные субъектом персональных данных запреты на
                передачу (кроме предоставления доступа), а также на обработку
                или условия обработки (кроме получения доступа) персональных
                данных, разрешенных для распространения, не действуют в случаях
                обработки персональных данных в государственных, общественных и
                иных публичных интересах, определенных законодательством РФ.
                <br />
                8.7. Оператор при обработке персональных данных обеспечивает
                конфиденциальность персональных данных.
                <br />
                8.8. Оператор осуществляет хранение персональных данных в форме,
                позволяющей определить субъекта персональных данных, не дольше,
                чем этого требуют цели обработки персональных данных, если срок
                хранения персональных данных не установлен федеральным законом,
                договором, стороной которого, выгодоприобретателем или
                поручителем по которому является субъект персональных данных.
                <br />
                8.9. Условием прекращения обработки персональных данных может
                являться достижение целей обработки персональных данных,
                истечение срока действия согласия субъекта персональных данных,
                отзыв согласия субъектом персональных данных или требование о
                прекращении обработки персональных данных, а также выявление
                неправомерной обработки персональных данных.
                <br />
                9. Перечень действий, производимых Оператором с полученными
                персональными данными
                <br />
                9.1. Оператор осуществляет сбор, запись, систематизацию,
                накопление, хранение, уточнение (обновление, изменение),
                извлечение, использование, передачу (распространение,
                предоставление, доступ), обезличивание, блокирование, удаление и
                уничтожение персональных данных.
                <br />
                9.2. Оператор осуществляет автоматизированную обработку
                персональных данных с получением и/или передачей полученной
                информации по информационно-телекоммуникационным сетям или без
                таковой.
                <br />
                10. Трансграничная передача персональных данных
                <br />
                10.1. Оператор до начала осуществления деятельности по
                трансграничной передаче персональных данных обязан уведомить
                уполномоченный орган по защите прав субъектов персональных
                данных о своем намерении осуществлять трансграничную передачу
                персональных данных (такое уведомление направляется отдельно от
                уведомления о намерении осуществлять обработку персональных
                данных).
                <br />
                10.2. Оператор до подачи вышеуказанного уведомления, обязан
                получить от органов власти иностранного государства, иностранных
                физических лиц, иностранных юридических лиц, которым планируется
                трансграничная передача персональных данных, соответствующие
                сведения.
                <br />
                11. Конфиденциальность персональных данных
                <br />
                Оператор и иные лица, получившие доступ к персональным данным,
                обязаны не раскрывать третьим лицам и не распространять
                персональные данные без согласия субъекта персональных данных,
                если иное не предусмотрено федеральным законом.
                <br />
                12. Заключительные положения
                <br />
                12.1. Пользователь может получить любые разъяснения по
                интересующим вопросам, касающимся обработки его персональных
                данных, обратившись к Оператору с помощью электронной почты
                contact@forgedigital.ru.
                <br />
                12.2. В данном документе будут отражены любые изменения политики
                обработки персональных данных Оператором. Политика действует
                бессрочно до замены ее новой версией.
                <br />
                12.3. Актуальная версия Политики в свободном доступе расположена
                в сети Интернет по адресу https://forgedigital.ru/privacy.
              </span>
            </div>
          </div>
          <div className="w-full flex items-center justify-end mt-[55px]">
            <button
              onClick={handleInActivePolicyButtonClick}
              className="text-neutral-600 text-[32px] font-normal leading-loose mr-[106px] py-[18px] px-[56px] rounded-2xl transition-all duration-300 hover:bg-[#3A3A3A] hover:text-white"
            >
              Отмена
            </button>
            <button
              onClick={handleInActivePolicyButtonClick}
              className="text-[32px] font-normal leading-loose py-[18px] px-[56px] rounded-2xl transition-all duration-300 hover:bg-[#3A3A3A]"
              type="submit"
            >
              Принимаю
            </button>
          </div>
        </div>
      </form>
    );
  };

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
            onClick={handleFormButtonClick}
          >
            Связаться с нами
          </Button>
          <FeedbackForm />
          <PolicyForm />
        </section>
      </article>
    </header>
  );
}

export default Navbar;
