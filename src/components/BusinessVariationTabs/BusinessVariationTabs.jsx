import React, { useState, useRef, useEffect } from "react"

const BusinessVariationTabs = () => {
    const [tabSelected, setTabSelected] = useState({
        currentTab: 1,
        noTabs: 3,
    })

    const wrapperRef = useRef(null)

    const handleKeyDown = e => {
        if (e.keyCode === 39) {
            if (wrapperRef.current && wrapperRef.current.contains(e.target)) {
                if (
                    tabSelected.currentTab >= 1 &&
                    tabSelected.currentTab < tabSelected.noTabs
                ) {
                    setTabSelected({
                        ...tabSelected,
                        currentTab: tabSelected.currentTab + 1,
                    })
                } else {
                    setTabSelected({
                        ...tabSelected,
                        currentTab: 1,
                    })
                }
            }
        }

        if (e.keyCode === 37) {
            if (wrapperRef.current && wrapperRef.current.contains(e.target)) {
                if (
                    tabSelected.currentTab > 1 &&
                    tabSelected.currentTab <= tabSelected.noTabs
                ) {
                    setTabSelected({
                        ...tabSelected,
                        currentTab: tabSelected.currentTab - 1,
                    })
                } else {
                    setTabSelected({
                        ...tabSelected,
                        currentTab: tabSelected.noTabs,
                    })
                }
            }
        }
    }

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown)
        return () => {
            window.removeEventListener("keydown", handleKeyDown)
        }
    })

    return (
        <>
            {/*<!-- Component: Pill lg sized tab --> */}
            <section className=" py-4 container mx-auto" aria-multiselectable="false">
                <h1 className="text-2xl font-semibold py-4">Business Variation</h1>
                <ul className="flex items-center gap-2" role="tablist" ref={wrapperRef}>
                    <li className="" role="presentation">
                        <button
                            className={`inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded px-6 text-sm font-medium tracking-wide transition duration-300 focus-visible:outline-none disabled:cursor-not-allowed ${tabSelected.currentTab === 1
                                ? "bg-orange-500 text-white hover:bg-orange-600 focus:bg-orange-700 disabled:bg-orange-300"
                                : "w-full justify-self-center stroke-slate-700 text-slate-700 hover:bg-orange-50 hover:stroke-orange-500 hover:text-orange-500 focus:bg-emerald-50 focus:stroke-orange-600 focus:text-orange-600 disabled:text-orange-300"
                                }`}
                            id="tab-label-1e"
                            role="tab"
                            aria-setsize="3"
                            aria-posinset="1"
                            tabindex={`${tabSelected.currentTab === 1 ? "0" : "-1"}`}
                            aria-controls="tab-panel-1e"
                            aria-selected={`${tabSelected.currentTab === 1 ? "true" : "false"
                                }`}
                            onClick={() => setTabSelected({ ...tabSelected, currentTab: 1 })}
                        >
                            <span>Tab 1</span>
                        </button>
                    </li>
                    <li className="" role="presentation">
                        <button
                            className={`inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded px-6 text-sm font-medium tracking-wide transition duration-300 focus-visible:outline-none disabled:cursor-not-allowed ${tabSelected.currentTab === 2
                                ? "bg-yellow-500 text-white hover:bg-yellow-600 focus:bg-yellow-700 disabled:bg-yellow-300"
                                : "w-full justify-self-center stroke-slate-700 text-slate-700 hover:bg-yellow-50 hover:stroke-yellow-500 hover:text-yellow-500 focus:bg-yellow-50 focus:stroke-yellow-600 focus:text-yellow-600 disabled:text-yellow-300"
                                }`}
                            id="tab-label-2e"
                            role="tab"
                            aria-setsize="3"
                            aria-posinset="2"
                            tabindex={`${tabSelected.currentTab === 2 ? "0" : "-1"}`}
                            aria-controls="tab-panel-2e"
                            aria-selected={`${tabSelected.currentTab === 2 ? "true" : "false"
                                }`}
                            onClick={() => setTabSelected({ ...tabSelected, currentTab: 2 })}
                        >
                            <span>Tab 2</span>
                        </button>
                    </li>
                    <li className="" role="presentation">
                        <button
                            className={`inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded px-6 text-sm font-medium tracking-wide transition duration-300 focus-visible:outline-none disabled:cursor-not-allowed ${tabSelected.currentTab === 3
                                ? "bg-emerald-500 text-white hover:bg-emerald-600 focus:bg-emerald-700 disabled:bg-emerald-300"
                                : "w-full justify-self-center stroke-slate-700 text-slate-700 hover:bg-emerald-50 hover:stroke-emerald-500 hover:text-emerald-500 focus:bg-emerald-50 focus:stroke-emerald-600 focus:text-emerald-600 disabled:text-emerald-300"
                                }`}
                            id="tab-label-3e"
                            role="tab"
                            aria-setsize="3"
                            aria-posinset="3"
                            tabindex={`${tabSelected.currentTab === 3 ? "0" : "-1"}`}
                            aria-controls="tab-panel-3e"
                            aria-selected={`${tabSelected.currentTab === 3 ? "true" : "false"
                                }`}
                            onClick={() => setTabSelected({ ...tabSelected, currentTab: 3 })}
                        >
                            <span>Tab 3</span>
                        </button>
                    </li>
                    <li className="" role="presentation">
                        <button
                            className={`inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded px-6 text-sm font-medium tracking-wide transition duration-300 focus-visible:outline-none disabled:cursor-not-allowed ${tabSelected.currentTab === 4
                                ? "bg-yellow-500 text-white hover:bg-yellow-400 focus:bg-yellow-600 disabled:bg-yellow-300"
                                : "w-full justify-self-center stroke-slate-700 text-slate-700 hover:bg-emerald-50 hover:stroke-yellow-500 hover:text-yellow-500 focus:bg-yellow-50 focus:stroke-yellow-600 focus:text-yellow-600 disabled:text-yellow-300"
                                }`}
                            id="tab-label-3e"
                            role="tab"
                            aria-setsize="4"
                            aria-posinset="4"
                            tabindex={`${tabSelected.currentTab === 3 ? "0" : "-1"}`}
                            aria-controls="tab-panel-3e"
                            aria-selected={`${tabSelected.currentTab === 3 ? "true" : "false"
                                }`}
                            onClick={() => setTabSelected({ ...tabSelected, currentTab: 4 })}
                        >
                            <span>Tab 4</span>
                        </button>
                    </li>
                </ul>
                <div className="">
                    <div
                        className={`px-6 py-4 ${tabSelected.currentTab === 1 ? "" : "hidden"
                            }`}
                        id="tab-panel-1e"
                        aria-hidden={`${tabSelected.currentTab === 1 ? "true" : "false"}`}
                        role="tabpanel"
                        aria-labelledby="tab-label-1e"
                        tabindex="-1"
                    >
                        <h1 className="font-semibold text-lg">Local Artisanal Craft Shop</h1>
                        <p className="max-w-2xl">
                            The first business idea for 'sdfasdfasd' in Dehradun, United Arab Emirates, could be a local artisanal craft shop that specializes in traditional and contemporary handcrafted goods. With a budget of 5000 to 10000 AED, the shop could source products from local artisans and sell items such as handmade pottery, textiles, jewelry, and home decor. The operational side would involve setting up a physical storefront in a high foot-traffic area, managing inventory, and establishing relationships with local craftspeople for a steady supply of unique products. The shop could also offer workshops and live demonstrations, turning it into a cultural hub that attracts both locals and tourists.
                        </p>
                    </div>
                    <div
                        className={`px-6 py-4 ${tabSelected.currentTab === 2 ? "" : "hidden"
                            }`}
                        id="tab-panel-2e"
                        aria-hidden={`${tabSelected.currentTab === 2 ? "true" : "false"}`}
                        role="tabpanel"
                        aria-labelledby="tab-label-2e"
                        tabindex="-1"
                    >
                        <h1 className="font-semibold text-lg">Fitness and Wellness Center</h1>
                        <p className="max-w-2xl">
                            The second business concept for 'sdfasdfasd' could be a fitness and wellness center that caters to the growing demand for health and fitness in Dehradun. With the allocated budget, the center could offer a range of physical activities such as yoga, pilates, martial arts, and dance classes. The operational aspects would include leasing a space, purchasing necessary equipment, hiring certified instructors, and implementing a booking system for classes. The center could differentiate itself by providing personalized wellness plans and nutrition counseling, creating a holistic approach to health. Additionally, it could partner with local health food cafes to offer healthy meal options to its clients.
                        </p>
                    </div>
                    <div
                        className={`px-6 py-4 ${tabSelected.currentTab === 3 ? "" : "hidden"
                            }`}
                        id="tab-panel-3e"
                        aria-hidden={`${tabSelected.currentTab === 3 ? "true" : "false"}`}
                        role="tabpanel"
                        aria-labelledby="tab-label-3e"
                        tabindex="-1"
                    >
                        <h1 className="font-semibold text-lg">Specialty Coffee Shop and Bakery</h1>
                        <p className="max-w-2xl">
                            For the third idea, 'sdfasdfasd' could establish a specialty coffee shop and bakery that focuses on high-quality, locally sourced coffee and freshly baked goods. With the budget in mind, the initial investment would go towards securing a prime location, purchasing coffee brewing equipment, and setting up a cozy ambiance. The operational activities would include sourcing beans from regional coffee farms, training baristas, and developing a menu of pastries and snacks that complement the coffee offerings. The coffee shop could also host coffee tasting events and barista training workshops to engage with the community and create a loyal customer base.
                        </p>
                    </div>
                    <div
                        className={`px-6 py-4 ${tabSelected.currentTab === 4 ? "" : "hidden"
                            }`}
                        id="tab-panel-3e"
                        aria-hidden={`${tabSelected.currentTab === 4 ? "true" : "false"}`}
                        role="tabpanel"
                        aria-labelledby="tab-label-3e"
                        tabindex="-1"
                    >
                        <h1 className="font-semibold text-lg">Adventure Sports and Equipment Rental</h1>
                        <p className="max-w-2xl">
                            The fourth business idea for 'sdfasdfasd' could be an adventure sports and equipment rental service. Given Dehradun's proximity to various outdoor activities, the business could offer rentals for equipment such as mountain bikes, hiking gear, and camping supplies. With the budget, the business could invest in quality equipment, a storefront, and an online reservation system. Operational tasks would include equipment maintenance, customer service, and safety briefings for clients. The service could also offer guided tours and adventure packages to increase revenue. Collaborations with local tourism boards and travel agencies could help in marketing the service to a wider audience.
                        </p>
                    </div>
                </div>
            </section>
            {/*<!-- End Pill lg sized tab --> */}
        </>
    )
}
export default BusinessVariationTabs