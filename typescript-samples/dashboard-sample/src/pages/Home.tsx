import React from 'react';

const HomePage = () => {
  return (
    <main>
      <h2>Solution by Árpád Csikós for Siemens</h2>
      <h2>Interview Exercise - Software Requirement Specification</h2>
      <ol>
        <li>
          INTRODUCTION
          <p>
            The purpose of this document is to provide a clear and detailed
            specification for the development of a React-based website that will
            display comments from a given URL and represent the number of words
            per comment on a graph.
          </p>
        </li>
        <li>
          FUNCTIONAL REQUIREMENTS{' '}
          <p>
            The following are the functional requirements of the website:
            <ul>
              <li>The website shall be developed using React framework.</li>
              <li>
                The website shall fetch comments from the following URL:
                <dfn>https://jsonplaceholder.typicode.com/comments</dfn>
              </li>
              <li>
                The website shall display the comments on the screen in a
                readable format.
              </li>
              <li>
                The website shall generate a graph that represents the number of
                words per comment.
              </li>
              <li>
                The website shall be responsive and optimized for different
                screen sizes.
              </li>
            </ul>
          </p>
        </li>
        <li>
          NON-FUNCTIONAL REQUIREMENTS
          <p>
            The following are the non-functional requirements of the website:
            <ul>
              <li>The website shall be optimized for fast loading times.</li>
              <li>The website shall be compatible with modern web browsers.</li>
              <li>
                The website shall be developed using modular and maintainable
                code.
              </li>
            </ul>
          </p>
        </li>
        <li>
          USER INTERFACE REQUIREMENTS
          <p>
            The following are the user interface requirements of the website:
            <ul>
              <li>The website shall have a clean and modern design.</li>
              <li>
                The website shall have a user-friendly interface that is easy to
                use and understand.
              </li>
              <li>
                The website shall have clear instructions on how to use the
                website.
              </li>
            </ul>
          </p>
        </li>
        <li>
          TECHNICAL REQUIREMENTS
          <p>
            The following are the technical requirements of the website:
            <ul>
              <li>The website shall be developed using React 17 or later.</li>
              <li>
                The website shall use a modern bundler like webpack to bundle
                the code.
              </li>
              <li>
                The website shall use a modern state management library like
                Redux to manage the state.
              </li>
              <li>
                The website shall use a modern charting library like Chart.js to
                generate the graphs.
              </li>
              <li>
                The website shall be tested using automated testing frameworks
                like Jest and Enzyme.
              </li>
            </ul>
          </p>
        </li>
        <li>
          CONCLUSION
          <p>
            This Software Requirement Specification outlines the requirements
            for a React-based website that displays comments from a URL and
            represents the number of words per comment on a graph. By meeting
            these requirements, we aim to deliver a high-quality and
            user-friendly website that meets the needs of our users.
          </p>
        </li>
      </ol>
    </main>
  );
};

export default HomePage;
