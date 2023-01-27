import {
  AiOutlineMenu,
  AiFillLinkedin,
  AiFillGithub,
  AiFillFilePdf,
} from "react-icons/ai";
export function NavBar(props) {
  return (
    <nav className="py-5 flex justify-between sticky top-0 z-10 bg-white px-10 shadow-md">
      <h1 className="text-2xl text-gray-900">Alejandro Ortiz</h1>
      {/* mobile screen navbar */}
      <ul className=" flex items-center md:hidden">
        <AiOutlineMenu className="text-2xl cursor-pointer" onClick={props.menuClick}/>
      </ul>

      {/* large screen navbar */}
      <ul className=" hidden md:flex items-center">
        <li className="hover:bg-gray-300 py-1 px-3 cursor-pointer">
          <a target={"_blank"} rel="noreferrer" href="https://github.com/alejandrojortiz" className="flex items-center">
            
              <AiFillGithub className="text-2xl" />
            
            <span className="text-gray-700  py2 rounded-lg">
              GITHUB
            </span>
          </a>
        </li>
        <li className="hover:bg-gray-300 py-1 px-3 hover:cursor-pointer">
          <a target={"_blank"} rel="noreferrer" href="https://www.linkedin.com/in/alejandrojortiz/" className="flex items-center">
            
              <AiFillLinkedin className="text-2xl"/>
            
            <span className="text-gray-700  py2 rounded-lg">
              LINKEDIN
            </span>
          </a>
        </li>
        <li className="hover:bg-gray-300 py-1 px-3 cursor-pointer">
          <a target={"_blank"} rel="noreferrer" href={"/AlejandroOrtizResume.pdf"} className="flex items-center">
            
              <AiFillFilePdf className="text-2xl" />
            
            <span className="text-gray-700  py2 rounded-lg">
              RESUME
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
