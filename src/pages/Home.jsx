import buttonClasses from "../components/Button/builder";

function Home() {
    return ( 
        <div>
            <header>
                {/* Headline */}
                <div className="p-8 md:pb-64 md:pt-64
                                flex flex-col justify-center md:items-center
                                md:text-center
                                dark:bg-gray-800"> 

                    {/* Slogan */}
                    <div className="pb-8">
                        <h1>Let your community grow, the <span className=" bg-blue text-green dark:text-blue dark:bg-green">b</span>right way</h1>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col gap-4 md:flex-row md:gap-8 ">
                        <a href="https://discord.com"><button className={buttonClasses({type: 'accent'})}>Add to Discord</button></a>
                        <a href="#features"><button className={buttonClasses({type: 'default'})}>Learn more</button></a>
                    </div>
                </div>

                <div id="features"></div>

                {/* Features */}
                <Feature 
                    title="Create and manage community objectives" 
                    description="Flora provides pre-defined objectives but also gives you the ability to create custom ones, keeping your community busy with whatever fits best!" 
                    image={
                        <svg width="200" height="200" viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg">
                            <rect x="107.036" y="21" width="150" height="150" transform="rotate(35 107.036 21)" fill="#EB459E"/>
                            <path d="M166.667 62.5L190.521 86.3542L139.688 137.188L98.0208 95.5208L20.8333 172.813L35.5208 187.5L98.0208 125L139.688 166.667L205.312 101.146L229.167 125V62.5H166.667Z" fill="#57F287"/>
                        </svg>
                    }
                />
                <Feature 
                    title="Show off your reputation" 
                    description="Having Flora on your guild for a while also ensures to new users you're the real deal! The more time passes, the more public reputation you gain." 
                    position="second" 
                    image={
                        <svg className="hidden sm:inline-block" width="200" height="200" viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg">
                            <path d="M63.3678 108.933C70.2279 103.665 79.7721 103.665 86.6322 108.933L103 121.502C104.328 122.522 105.784 123.363 107.33 124.003L126.4 131.893C134.392 135.2 139.164 143.465 138.032 152.04L135.33 172.5C135.111 174.159 135.111 175.841 135.33 177.5L138.032 197.96C139.164 206.535 134.392 214.8 126.4 218.107L107.33 225.997C105.784 226.637 104.328 227.478 103 228.498L86.6322 241.067C79.7721 246.335 70.2279 246.335 63.3678 241.067L47.0002 228.498C45.6725 227.478 44.2165 226.637 42.6696 225.997L23.6004 218.107C15.6079 214.8 10.8358 206.535 11.9682 197.96L14.6698 177.5C14.889 175.841 14.889 174.159 14.6698 172.5L11.9682 152.04C10.8358 143.465 15.608 135.2 23.6004 131.893L42.6697 124.003C44.2165 123.363 45.6725 122.522 47.0002 121.502L63.3678 108.933Z" fill="#5865F2"/>
                            <path d="M125 74.2708L135.104 98.125L140 109.687L152.5 110.729L178.229 112.917L158.646 129.896L149.167 138.125L151.979 150.417L157.813 175.521L135.729 162.187L125 155.521L114.271 161.979L92.1875 175.312L98.0208 150.208L100.833 137.917L91.3542 129.687L71.7708 112.708L97.5 110.521L110 109.479L114.896 97.9166L125 74.2708ZM125 20.8333L95.7292 89.8958L20.8333 96.25L77.7083 145.521L60.625 218.75L125 179.896L189.375 218.75L172.292 145.521L229.167 96.25L154.271 89.8958L125 20.8333Z" fill="#EB459E"/>
                        </svg>
                    }
                />
                <Feature 
                    title="Make the leaderboards count" 
                    description="Use all the tools Flora provides to the extreme! Give out prizes to top users or even organize events at the end of an objective." 
                    image={
                        <svg className="hidden sm:inline-block" width="200" height="200" viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="175" cy="75.0001" rx="75" ry="75.0001" fill="#FEE75C"/>
                            <path d="M197.917 52.0833H177.083V31.25H72.9167V52.0833H52.0833C40.625 52.0833 31.25 61.4583 31.25 72.9167V83.3333C31.25 109.896 51.25 131.562 76.9792 134.792C83.5417 150.417 97.6042 162.188 114.583 165.625V197.917H72.9167V218.75H177.083V197.917H135.417V165.625C152.396 162.188 166.458 150.417 173.021 134.792C198.75 131.562 218.75 109.896 218.75 83.3333V72.9167C218.75 61.4583 209.375 52.0833 197.917 52.0833ZM52.0833 83.3333V72.9167H72.9167V112.708C60.8333 108.333 52.0833 96.875 52.0833 83.3333ZM125 145.833C107.812 145.833 93.75 131.771 93.75 114.583V52.0833H156.25V114.583C156.25 131.771 142.188 145.833 125 145.833ZM197.917 83.3333C197.917 96.875 189.167 108.333 177.083 112.708V72.9167H197.917V83.3333Z" fill="#5865F2"/>
                        </svg>
                    }
                />
            </header>
        </div>
    );
}

const Feature = ({title, description, image, position = "first"}) => (
    <div className={"p-8 md:pb-32 md:pt-32 flex justify-center gap-16 items-center " + (position === "first" ? "text-left flex-row bg-gray-100 dark:bg-gray-900" : "text-right flex-row-reverse dark:bg-gray-800")}>

        <div className="flex flex-col 
                        w-72">
            <h1>{title}</h1>
            <p>{description}</p>
        </div>

        <div className="hidden sm:inline-block">
            {image}
        </div>
    </div>
);

export default Home;