import React from "react";

function Card({username, btntext = "Visit Me"}) {
    //btntext = "Visit Me" this syntax we are using when we have to put default value if in another card there are no value passing then it will apply agar dusre card me koi value nahi he to visit me default value set ho jayegi
    //props by default property hoti he jisse hum obj or array ko access kar pate he doc me pad lena
    // function Card(props)
    // props ek object hota he isliye is type se lene per hume property lene ke liye ex. console.log(props.username) is type se likhna padta he lekin iska ek solution he hum direct hi perenthises me likh sakte he aur property le sakte he
    console.log(username);
    
    return (
        <div className="relative h-[400px] w-[300px] rounded-md">
            <img
                src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                alt="AirMax Pro"
                className="z-0 h-full w-full rounded-md object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-left">
                <h1 className="text-lg font-semibold text-white">{username}</h1>
                <p className="mt-2 text-sm text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
                    debitis?
                </p>
                <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                    {btntext}
                </button>
            </div>
        </div>
    )
}

export default Card