import Navigation from './Navigation'

export default function Header({title, titleText}) {
    return(
        <>
         <Navigation />

         {title && <h1 className="font-headers text-black font-extrabold text-6xl my-8 px-6">
            {titleText}
            </h1> }
           
        </>
    )
}