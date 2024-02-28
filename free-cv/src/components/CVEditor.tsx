import { useEffect } from "react";

const CVEditor = () => {

    /** it is not important parts, just a demo */


    const dragFunction = () => {
        const draggableElement = document.querySelectorAll('[draggable="true"]');
        const draggTarget = document.querySelectorAll('.dropzone');
        const log = document.querySelector('.event-log-contents');

        if (draggableElement) {
            let dragged = null;

            draggableElement.forEach((item) => {
                item.addEventListener('error', (event) => {
                    //log.textContent += `${event.type}: Loading \n`;
                });

                item.addEventListener('dragstart', (event) => {
                    event.target.classList.add('dragged');
                    dragged = event.target;
                    //event.dataTransfer.setData('text/plain', 'This text may be dragged');
                });

                item.addEventListener('dragend', (event) => {
                    event.target.classList.remove('dragged');
                    //event.target.parentNode.classList.add('elemet-added');
                    //log.textContent += `${event.type}: ${event.target} \n`;
                    //event.dataTransfer.setData('text/plain', 'This text may be dragged');
                });

                item.addEventListener('dragenter', (event) => {
                    // highlight potential drop target when the draggable element enters it
                    if (event.target.classList.contains('dropzone')) {
                        event.target.classList.add('dragover');
                        //log.textContent += `${event.type}: entered \n`;
                    }
                });
            });

            draggTarget.forEach((item) => {
                item.addEventListener('dragover', (event) => {
                    event.preventDefault();
                });

                item.addEventListener('drop', (event) => {
                    event.preventDefault();
                    if (event.target.className === 'dropzone') {
                        dragged.parentNode.removeChild(dragged);
                        event.target.appendChild(dragged);
                        //log.textContent += `${event.type}: ${event.target} \n`;
                    }
                });
            });
        }

    }


    const demoText = `Web UI developer with over 15 years of experience, passionate about creating intuitive, user-friendly websites and applications. Proficient in HTML, CSS (SASS), JavaScript and React. I'm open to new technologies, I'm also interested in AI, data processingand visualisation.`.toString();
    const speed = 30;
    let i = 0;

    const typeWriter = () => {
        if (i < demoText.length) {
            document.getElementById("demo").textContent += demoText.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    const setWrite = () => {
        document.querySelectorAll('.cv-frame p').forEach(item => item.setAttribute('contenteditable', true))
    }

    useEffect(() => {
        typeWriter();
        setWrite();
        dragFunction();
    }, []);

    /** it is not important parts, just a demo - end */


    return (
        <div className="editor-content frame-container">
            <main>
                <article className="cv-frame">
                    <header>
                        <section>
                            <h2>Arpad Csikos</h2>
                            <h3>Senior UI Developer</h3>
                        </section>
                    </header>
                    <div className="cv-content">
                        <nav>
                            <h2>Personal</h2>
                            <ul>
                                <li>+36302807143</li>
                                <li>arpad.csikos@gmail.com</li>
                            </ul>
                            <h2>Skills</h2>
                            <ul>
                                <li>React.js
                                    <progress value="80" max="100"></progress></li>
                                <li>JavaScript, Ecmascript
                                    <progress value="80" max="100"></progress></li>
                                <li>TypeScript
                                    <progress value="80" max="100"></progress></li>
                                <li>CSS, Sass
                                    <progress value="80" max="100"></progress></li>
                                <li>Node.js
                                    <progress value="80" max="100"></progress></li>
                                <li>Scrum
                                    <progress value="80" max="100"></progress></li>
                                <li>Jira
                                    <progress value="80" max="100"></progress></li>
                            </ul>
                        </nav>
                        <main>
                            <div className="dropzone">
                                <section draggable="true">
                                    <title contentEditable="true">Summary</title>
                                    <p id="demo" contentEditable="true"></p>
                                </section>
                            </div>
                            <div className="dropzone">
                                <section draggable="true">
                                    <title contentEditable="true">Experience</title>
                                    <p contentEditable="true">
                                        Web UI developer with over 15 years of experience, passionate aboutcreating intuitive, user-friendly websites and applications. Proficient inHTML, CSS (SASS), JavaScript and React.
                                        I'm open to new technologies, I'm also interested in AI, data processingand visualisation.</p>
                                </section>
                            </div>
                            <div className="dropzone">
                                <section draggable="true">
                                    <title contentEditable="true">Summary</title>
                                    <p contentEditable="true">
                                        Web UI developer with over 15 years of experience, passionate aboutcreating intuitive, user-friendly websites and applications. Proficient inHTML, CSS (SASS), JavaScript and React.
                                        I'm open to new technologies, I'm also interested in AI, data processingand visualisation.</p>
                                </section>
                            </div>
                        </main>
                    </div>
                </article>
                <aside>
                    Comment Section
                </aside>
            </main>
        </div>
    );
}

export default CVEditor;