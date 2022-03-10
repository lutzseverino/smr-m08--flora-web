import { useTranslation } from 'react-i18next';

import jasper from "../images/jasper.png"
import marc from "../images/marc.png"
import nicolas from "../images/nicolas.png"

import dinahosting from "../images/dinahosting.jpg"
import wappscat from "../images/wappscat.jpg"

function Team() {
    const { t } = useTranslation();
    return(
        <div className="max-w-[70ch] p-8 md:pt-16 md:pb-16 ml-auto mr-auto">
            <div className='flex flex-row gap-4 justify-center items-center
                            text-center'>
                <div className='flex flex-col'>
                    <img height="192" width="192" className='rounded-lg shadow-inner-component dark:shadow-inner-dark-component' src={jasper} alt="Jasper Lutz Severino" />
                    <p>Jasper Lutz Severino</p>
                </div>
                <div className='flex flex-col'>
                    <img height="192" width="192" className='rounded-lg shadow-inner-component dark:shadow-inner-dark-component' src={nicolas} alt="Nicolás Zarcero García" />
                    <p>Nicolás Zarcero García</p>
                </div>
                <div className='flex flex-col'>
                    <img height="192" width="192" className='rounded-lg shadow-inner-component dark:shadow-inner-dark-component' src={marc} alt="Marc Montoya Pons" />
                    <p>Marc Montoya Pons</p>
                </div>
            </div>

            <div className='p-8 md:pt-16 md:pb-16'>
                <p>{t('team.explenation')}</p>
                <a href='https://github.com/frequential/flora-landing'><p>{t('team.landing_source')}</p></a>
            </div>

            <div className='flex md:flex-row flex-col gap-4 justify-between'>
                <a href='https://wapps.cat'><img height="48" width="192" src={wappscat} className='rounded-lg shadow-inner-component dark:shadow-inner-dark-component invert dark:invert-0' alt="wapps logo"/></a>
            </div>
        </div>
    )
}

export default Team;