import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';



// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { TfiAngleLeft } from "react-icons/tfi";
import { TfiAngleRight } from "react-icons/tfi";

const FullPageSlider = () => {
    const countries = [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain",
        "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
        "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso",
        "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic",
        "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)",
        "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)",
        "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica",
        "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea",
        "Estonia", "Eswatini (fmr. Swaziland)", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
        "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea",
        "Guinea-Bissau", "Guyana", "Haiti", "Holy See", "Honduras", "Hungary", "Iceland", "India",
        "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan",
        "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon",
        "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar",
        "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania",
        "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro",
        "Morocco", "Mozambique", "Myanmar (formerly Burma)", "Namibia", "Nauru", "Nepal",
        "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia (formerly Macedonia)",
        "Norway", "Oman", "Pakistan", "Palau", "Palestine State", "Panama", "Papua New Guinea",
        "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia",
        "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
        "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia",
        "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
        "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan",
        "Suriname", "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste",
        "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
        "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America",
        "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
    ]

    const swiperRef = useRef(null);
    const goNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const goPrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };
    return (
        <>
            <div className='relative overflow-hidden'>
                <div className='text-3xl font-semibold p-4 text-center font-sans'>Business Idea Generation</div>

                <button className='absolute right-0 grid place-items-center w-16 bg-gradient-to-tr to-white/20 from-white/0 backdrop-blur-sm h-full cursor-pointer z-10 text-white !font-extrabold' onClick={goNext}><TfiAngleRight size={34} /></button>
                <button className='absolute left-0  grid place-items-center w-16 bg-gradient-to-tr to-white/20 from-white/0 backdrop-blur-sm h-full cursor-pointer z-10 text-white !font-extrabold' onClick={goPrev}><TfiAngleLeft size={34} /></button>

                <Swiper
                    pagination={{
                        type: 'progressbar',
                    }}
                    navigation={true}
                    modules={[]}
                    className="mySwiper"
                    ref={swiperRef}
                >
                    <SwiperSlide>
                        <div className='bg-yellow-400/30' style={{ width: '100vw', height: '100vh', display: 'inline-block' }}>
                            <div class="relative space-y-4  grid place-items-center h-full">
                                <div className="w-96">
                                    <label for="input-label" class="block text-sm font-medium mb-2">Internal Name</label>
                                    <input

                                        type="email" id="input-label" className="py-3 px-4 block w-full rounded-lg focus:outline-none outline-blue-100 text-sm ring-pink-400/70 focus:ring-4 disabled:opacity-50 disabled:pointer-events-none" placeholder="you@site.com" />
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-blue-400/30' style={{ width: '100vw', height: '100vh', display: 'inline-block' }}>
                            <div class="relative space-y-4  grid place-items-center h-full">
                                <div className="w-96 max-w-sm mx-auto">
                                    <label for="input-label" class="block text-sm font-medium mb-2">Budget</label>

                                    <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:outline-none outline-blue-100 text-md ring-pink-400/70 focus:ring-4 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option>Less than 5000</option>
                                        <option selected value="5000-10000">5000-10000</option>
                                        <option value="10000-25000">10000-25000</option>
                                        <option value="25000-50000">25000-50000</option>
                                        <option value="50000-100000">50000-100000</option>
                                        <option value="Over 100000">Over 100000</option>
                                    </select>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-pink-400/30' style={{ width: '100vw', height: '100vh', display: 'inline-block' }}>
                            <div class="relative space-y-4  grid place-items-center h-full">
                                <div className="w-96 max-w-sm mx-auto">
                                    <label for="input-label" class="block text-sm font-medium mb-2">Country</label>

                                    <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:outline-none outline-blue-100 text-md ring-pink-400/70 focus:ring-4 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        {
                                            countries?.map(item => {
                                                return <option value={item}>{item}</option>
                                            })
                                        }

                                    </select>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-green-400/30' style={{ width: '100vw', height: '100vh', display: 'inline-block' }}>
                            <div class="relative space-y-4  grid place-items-center h-full">
                                <div className="w-96">
                                    <label for="input-label" class="block text-sm font-medium mb-2">City</label>
                                    <input

                                        type="text" id="input-label" className="py-3 px-4 block w-full rounded-lg focus:outline-none outline-blue-100 text-sm ring-pink-400/70 focus:ring-4 disabled:opacity-50 disabled:pointer-events-none" placeholder="Enter your business location" />
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-indigo-400/30' style={{ width: '100vw', height: '100vh', display: 'inline-block' }}>
                            <div class="relative space-y-4  grid place-items-center h-full">
                                <div className="w-96 max-w-sm mx-auto">
                                    <label for="input-label" class="block text-sm font-medium mb-2">Type</label>

                                    <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:outline-none outline-blue-100 text-md ring-pink-400/70 focus:ring-4 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option selected>Select Physical or online</option>
                                        <option value="Physical Business">Physical Business</option>
                                        <option value="Online and Physical Business">Online and Physical Business</option>
                                        <option value="Online Business">Online Business</option>
                                    </select>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-teal-400/30' style={{ width: '100vw', height: '100vh', display: 'inline-block' }}>
                            <div class="relative space-y-4  grid place-items-center h-full">
                                <div className="w-96">
                                    <label for="input-label" class="block text-sm font-medium mb-2">BUSINESS IDEA</label>
                                    <textarea
                                        className="py-3 px-4 block w-full rounded-lg focus:outline-none outline-blue-100 text-sm ring-pink-400/70 focus:ring-4 disabled:opacity-50 disabled:pointer-events-none"
                                        name="" id="" cols="30" rows="10"></textarea>
                                    {/* <input

                                        type="email" id="input-label" className="py-3 px-4 block w-full rounded-lg focus:outline-none outline-blue-100 text-sm ring-pink-400/70 focus:ring-4 disabled:opacity-50 disabled:pointer-events-none" placeholder="you@site.com" /> */}
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>

                </Swiper>


                <div class=" absolute top-0 -z-10 min-h-screen  px-16 flex h-full w-full flex-shrink-0 snap-start items-center justify-center text-5xl">
                    <div class="relative w-full max-w-lg">
                        <div class="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                        <div class="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                        <div class="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default FullPageSlider