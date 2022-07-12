import React from 'react'

function Footer(){
    return(
        <div className='xl:mx-40'>
            <footer>
                <div className='flex justify-between'>
                <ul className='flex flex-row items-center pb-4'>
                    <li className='px-1'><i class="fa-brands fa-linkedin text-2xl"></i></li>
                    <li className='px-1'><i class="fa-brands fa-facebook text-2xl"></i></li>
                    <li className='px-1'><i class="fa-brands fa-twitter text-2xl"></i></li>
                    <li className='px-1'><i class="fa-brands fa-youtube text-2xl"></i></li>
                </ul>
                <p className='text-xs text-lightText'>
                    © 2022 Sahay . All rights reserved .
                </p>
                </div>
            </footer>
        </div>
        
    )
}

export default Footer;