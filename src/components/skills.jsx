import './skills.css'

export default function Skills() {
    return (<>
        <div className="skills">
            <h3>My Skills</h3>
            <div className="web">
                <div className="logo">
                    <p className="skill">HTML</p> <div id="html"></div>
                </div>
                <div className="logo">
                    <p className="skill">CSS </p> <div id="css"></div>
                </div>
                <div className="logo">
                    <p className="skill">JS </p> <div id="js"></div>
                </div>
                <div className="logo">
                    <p className="skill"> REACT</p> <div id="react"></div>
                </div>
            </div>
            <div className="programming">
                <div className="logo">
                    <p className="skill">Core Java</p> <div id="java"></div>
                </div>
            </div>
            <div className="softskills">
                <div className="logo">
                    <p className="skill">Logical Thinking</p> <div id="lt"></div>
                </div>
                <div className="logo">
                    <p className="skill">Problem Solving</p> <div id="pb"></div>
                </div>
            </div>
        </div>

    </>)
}