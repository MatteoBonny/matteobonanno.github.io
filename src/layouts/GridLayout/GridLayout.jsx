export default function GridLayout({children}) {

    return(
       <div className="w-full grid grid-cols-12 md: gap-x-4 lg:gap-x-8">
            {children}
       </div>
    );
}