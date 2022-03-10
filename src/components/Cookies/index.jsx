import buttonClasses from "../Button/builder";

import { useTranslation } from 'react-i18next';

const Cookies = () => {
    const { t } = useTranslation();
    return (
        <div id="cookies-notification" className="fixed bottom-0 w-full h-16 p-4
                        dark:bg-white bg-black
                        flex flex-row justify-between items-center">
            <div>
                <p className="invert">{t('cookies.explenation')}</p>
            </div>
            <div>
                <button onClick={() => document.querySelector("#cookies-notification").classList.toggle("hidden")} className={buttonClasses({type: 'accent'})}>{t('commons.accept')}</button>
            </div>
            
        </div>
    );
};
export default Cookies;