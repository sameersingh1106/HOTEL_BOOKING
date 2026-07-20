import { assets } from '@/assets/assets'

const Footer = () => {
  return (
        <div className='bg-[#F6F9FC] text-gray-500/80 pt-8 px-6 md:px-16 lg:px-24 xl:px-32'>
            <div className='flex flex-wrap justify-between gap-12 md:gap-6'>
                
                
                <div className='max-w-80'>
                    <img src={assets.logo} alt="logo" className='mb-4 h-8 md:h-9' />
                    <p className='text-sm'>
                        Discover the world's most extraordinary places to stay, from iconic hotels to hidden gems, and experience unforgettable moments with us.
                    </p> 
                    
                    <div className='flex items-center gap-3 mt-4'>
                        {/* Instagram */}
                        <img src={assets.instagramIcon} alt="instagram-icon" className='w-6 h-6' />
                        {/* Facebook */}
                        <img src={assets.facebookIcon} alt="facebook-icon" className='w-6 h-6' />
                        {/* Twitter */}
                        <img src={assets.twitterIcon} alt="twitter-icon" className='w-6 h-6' />
                        {/* LinkedIn */}
                        <img src={assets.linkedinIcon} alt="linkedin-icon" className='w-6 h-6' /> {/* Fixed: Self-closed tag properly */}
                    </div>
                </div>

                {/* Company Links Column */}
                <div>
                    <p className='font-playfair text-lg text-gray-800 font-medium'>COMPANY</p>
                    <ul className='mt-3 flex flex-col gap-2 text-sm'>
                        <li><a href="#" className='hover:text-gray-900 transition-colors'>About</a></li>
                        <li><a href="#" className='hover:text-gray-900 transition-colors'>Careers</a></li>
                        <li><a href="#" className='hover:text-gray-900 transition-colors'>Press</a></li>
                        <li><a href="#" className='hover:text-gray-900 transition-colors'>Blog</a></li>
                        <li><a href="#" className='hover:text-gray-900 transition-colors'>Partners</a></li>
                    </ul>
                </div>

                {/* Support Links Column */}
                <div>
                    <p className='font-playfair text-lg text-gray-800 font-medium'>SUPPORT</p>
                    <ul className='mt-3 flex flex-col gap-2 text-sm'>
                        <li><a href="#" className='hover:text-gray-900 transition-colors'>Help Center</a></li>
                        <li><a href="#" className='hover:text-gray-900 transition-colors'>Safety Information</a></li>
                        <li><a href="#" className='hover:text-gray-900 transition-colors'>Cancellation Options</a></li>
                        <li><a href="#" className='hover:text-gray-900 transition-colors'>Contact Us</a></li>
                        <li><a href="#" className='hover:text-gray-900 transition-colors'>Accessibility</a></li>
                    </ul>
                </div>

                {/* Newsletter Column */}
                <div className='max-w-80'>
                    <p className='font-playfair text-lg text-gray-800 font-medium'>STAY UPDATED</p>
                    <p className='mt-3 text-sm'>
                        Subscribe to our newsletter for inspiration and special offers.
                    </p>
                    <div className='flex items-center mt-4 w-full'>
                        <input type="email" className='bg-white rounded-l border border-gray-300 h-9 px-3 outline-none text-sm w-full' placeholder='Your email' />
                        <button className='flex items-center justify-center bg-black h-9 w-9 aspect-square rounded-r cursor-pointer hover:bg-gray-800 transition-colors'>
                            {/* Arrow icon */}
                            <img src={assets.arrowIcon} alt="arrow-icon" className='w-4 h-4 invert' />
                        </button>
                    </div>
                </div>
            </div>

            <hr className='border-gray-300 mt-8' />

            {/* Sub-Footer Copyright Area */}
            <div className='flex flex-col md:flex-row gap-2 items-center justify-between py-5 text-xs md:text-sm'>
                <p>© {new Date().getFullYear()} All rights reserved.</p>
                <ul className='flex items-center gap-4'>
                    <li><a href="#" className='hover:text-gray-900 transition-colors'>Privacy</a></li>
                    <li><a href="#" className='hover:text-gray-900 transition-colors'>Terms</a></li>
                    <li><a href="#" className='hover:text-gray-900 transition-colors'>Sitemap</a></li>
                </ul>
            </div>
        </div>
  ); 
};

export default Footer; 