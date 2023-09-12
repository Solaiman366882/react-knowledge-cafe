import profile from"../../assets/images/profile.png"

export default function Header(){

    return(
        <header className="flex justify-between items-center py-6 px-4 border-b-2">
            <h1 className='text-3xl font-bold text-[#111]'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </header>
    )
}