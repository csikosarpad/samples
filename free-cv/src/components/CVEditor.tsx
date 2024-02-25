
const CVEditor = () => {
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
                            <section>
                                <title>Summary</title>
                                <p>
                                    Web UI developer with over 15 years of experience, passionate aboutcreating intuitive, user-friendly websites and applications. Proficient inHTML, CSS (SASS), JavaScript and React.
                                    I'm open to new technologies, I'm also interested in AI, data processingand visualisation.</p>
                            </section>
                            <section>
                                <title>section 2 title</title>
                                cv section 2 content
                            </section>
                            <section>
                                <title>section 3 title</title>
                                cv section 3 content
                            </section>
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