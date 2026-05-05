import './project.css'
export default function Projects() {
    return (<>
        <div className="project">
            <h3 id='header'>My Projects</h3>
            <div className="cards">
                <div className="p">
                    <p><span id='title'>GitHub Profile Finder </span>- A project made of HTML CSS and JAVASCRIPT | user can use it for searching people on GitHub by their User Name
                        <button className="live" title='See it live in next tab'><a href="../../public/projects/git-profile-finder/index.html" target="_blank" rel="noopener noreferrer">Live view</a></button></p>
                </div>

            </div>
            <div className="btn">
                <button className="git" title='See my GitHub'>
                    <a href="https://github.com/D-Bhattacherjee" target="_blank" rel="noopener noreferrer">GitHub</a>
                </button>

                <button className="linkdin" title='See my LinkdIn'>
                    <a href="https://www.linkedin.com/in/debojyoti-bhattacherjee-513081345/" target="_blank" rel="noopener noreferrer">LinkdIn</a>
                </button>
                <button className="mail" title='Contact me via Email'>📧 bhattacherjeedebojyoti@gmail.com</button>
            </div>
        </div>
    </>)
}