import "./About.scss";
import { useTranslation } from "react-i18next";
import ShowMoreText from "react-show-more-text";

const About = () => {
    const { t, i18n } = useTranslation();

    return (
        <div className="about" id="about">
            <div className="left">
                <img src="/img/logo.png" alt="" />
            </div>
            <div className="right">
                <h3>{t("title_about")}</h3>
                <p>
                <ShowMoreText
                    /* Default options */
                    lines={10}
                    more="Show more"
                    less="Show less"
                    className="content-css"
                    anchorClass="my-anchor-css-class"
                    /* onClick={this.executeOnClick} */
                    expanded={false}
                    width={500}
                    truncatedEndingComponent={"... "}
                >
                    ОЙЛ ФУУД ТЕХНОЛЪДЖИС“ ООД е частно търговско дружество, специализирано в екологосъобразно оползотворяване на отпадъци от хранително-вкусовата промишленост - отработен омазнен филтърен прах и утайка от избистряне на растителни масла.{" "}Дружеството е със седалище в гр. Добрич, ЕИК: 203672806, Валери Александров Арнаудов – Управител, тел. 0887289007, e-mail: oiltech@abv.bg“ОЙЛ ФУУД ТЕХНОЛЪДЖИС“ ООД е привело дейността си в пълно съответствие с изискванията на националното и европейско екологично законодателство, в сферата на третирането на отпадъци и опазването на околната среда.В дружеството работи екип от опитни специалисти, натрупали специфични знания и умения, което е гаранция за качеството на предоставяните услуги.Една от основните цели на политиката на ЕС е насърчаване използването на отпадъчните материали като се намерят начини за приложението им под формата на суровини и материали за изработване на други продукти. Натрупаният опит показва, че рециклирането/оползотворяването води до спестяване на енергия и респективно намаляване на парниковия ефект. За управление на отпадъците в България е разработен Национален план за управление на отпадъците (НПУО). Като основна цел на НПУО се извежда постигане на устойчиво развитие на страната чрез интегрирана рамка за управление на отпадъците. Тя следва да обезпечи понижаване на негативното въздействие на отпадъците върху околната среда, увеличаване на отговорностите на замърсителите, както и стимулиране на инвестициите за управление на отпадъците. В НПУО, разработен за програмния период 2021-2028 г. са заложени цели за намаляване на вредното въздействие на отпадъците чрез предотвратяване образуването им и насърчаване на повторното им използване, както и увеличаване на количествата на рециклираните и оползотворени отпадъци.На базата на дългогодишния практически опит в областта на екологичните дейности, както и в сферата на управлението на околната среда, “ОЙЛ ФУУД ТЕХНОЛЪДЖИС“ ООД се наложи като дружество, специализирано в екологосъобразно оползотворяване на отпадъци от хранително-вкусовата промишленост - отработен омазнен филтърен прах и утайка от избистряне на растителни масла.Дейността на “ОЙЛ ФУУД ТЕХНОЛЪДЖИС“ ООД се осъществява в промишлена сграда с идентификатор 72624.603.29.8, находяща се в гр. Добрич, бул. „Трети март“ № 52, УПИ ХХ-7588, в квартал №256 по кадастрален и ЗРП на Промишлена зона „Запад“ на гр.Добрич, одобрена със заповед № 750/05.08.1996г. на кмета на общ.Добрич.Дружеството притежава „Инсталация за оползотворяване на омазнен филтърен материал от производството на растителни масла (филтрацел и/или перлит) и утайка от филтрирано растително масло“ с производствен капацитет 11 200 т/год. преработени отпадъци.За своята дейност “ОЙЛ ФУУД ТЕХНОЛЪДЖИС“ ООД има издаден Регистрационен документ № 12-РД-1715-00 от 09.05.2017г.Отпадъците, които се обработват в инсталацията са:Отработен омазнен/омаслен филтърен прах.При филтриране и рафиниране на растителни масла се използва перлит и белилна пръст, притежаващи уникални сорбционни свойства. За филтриране на растителни масла се използва също така и целулоза, диатомити и др. материали притежаващи сорбционни свойства. Уникалните екологични свойства на материалите за филтриране позволяват използването им в хранително-вкусовата промишленост за филтриране и рафиниране на растителни масла и др. След филтриране на маслата се образува отработен омазнен/омаслен филтърен прах, съдържащ 25 - 30 % масло.Утайка от предприятия за производство на растителни масла (от избистряне на растителни масла)Утайката се образува при декантиране на растителни масла преди тяхното филтриране - маслото се подлага на избистряне чрез физическо утаяване на частици, които са суспендирани в течната среда. Именно в процеса на избистряне на маслото се получава утайка.
Код на отпадъци, подлежащи на оползотворяване, в зависимост от извършената класификация на дружествата от които се приемат отпадъците:
-	02 03 01 - утайки от измиване, почистване, белене, центрофугиране и сепариране/разделяне;
-	02 03 02 - отпадъци от консерванти;
-	02 03 03 - отпадъци от екстракция с разтворители;
-	02 03 04 - материали, негодни за консумация или преработване;
-	02 03 99 - отпадъци, неупоменати другаде;
-	15 02 03 - абсорбенти, филтърни материали, кърпи за изтриване и предпазни облекла, различни от упоменатите в 15 02 02;
-	19 08 09 - смеси от мазнини и масла от маслено-водна сепарация, съдържащи само хранителни масла и мазнини;
-	19 12 12 - други отпадъци(включително смеси от материали) от механично третиране на отпадъци, различни от упоменатите в 19 12 11.
Оползотворяването на отпадъците става чрез механично извличане на остатъчното масло от генерираните в хранително-вкусовата промишленост отпадъци: отработен омазнен/омаслен филтърен прах и утайка от избистряне на растителни масла.
Процесът на извличане на остатъчното масло се осъществява чрез физическо смесване на двата отпадъка в миксер и механично пресоване на сместа (без екстракция, без използване на химикали и химически процеси) на хидравлични преси. Крайният продукт след третиране/оползотворяване на приетите отпадъци е масло за технически цели, получено чрез механично пресоване на омаслен филтърен прах. Полученото масло може да се използва в производството на бои, лакове (безир), а също така може да послужи и като един от компонентите за производство на биодизел, метан и други продукти.
                </ShowMoreText>
                </p>
            </div>
        </div>
    )
}
export default About;
