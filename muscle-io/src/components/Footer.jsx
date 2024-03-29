import { RiGithubLine, RiLinkedinLine } from "react-icons/ri";

function Footer() {
    return (
        <footer className="mb-16 flex flex-col items-center justify-center mt-20">
            <p>Daniel Lopez <span>© 2024</span></p>
            <div className="mt-4 flex flex-row">
                <a className="text-center mr-2 hover:scale-110 transition ease-in-out" href="https://github.com/DanielLopezB2" target="_blank"><RiGithubLine size={24} /></a>
                <a className="text-center hover:scale-110 transition ease-in-out" href="https://www.linkedin.com/in/daniel-lopez-405b0a124/" target="_blank"><RiLinkedinLine size={24} /></a>
            </div>
        </footer>
    )
}

export default Footer