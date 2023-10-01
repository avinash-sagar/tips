
import React from 'react'

function SearchCard({ visible, setVisible , isGO}) {
    const data = [
        { lable: "Dubai", city: "Dubai Emirate, United Arab Emirates" },
        { lable: "Doha", city: "Qatar" },
        { lable: "Darling Harbour", city: "Sydney, New South Wales, Australia" },
        { lable: "Dhaka", city: "Banglades" },
        { lable: "Dubai International Airport", city: "Dubai, Dubai Emirate, United Arab Emirates" }
    ]
    return (
        <div style={isGO ?  {marginLeft : "190px"} : {} } className="menuCard1 mt-2 w-30 p-2  ">
            <div className="menuCardHeader1">
                {
                    data?.map((item, index) => {
                        return <>
                            <div >
                                <div><img width={20} src='/images/location.png' /> <label htmlFor="">{item.lable} </label></div>
                                <div>
                                <label style={{ opacity: "0.6" }} className='ms-4' >{item.city} </label>
                                </div>
                            </div>
                        </>
                    })
                }

            </div>
        </div>
    )
}

export default SearchCard
