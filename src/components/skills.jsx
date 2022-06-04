import { React } from 'react';

function Skills() {
  return (
    <div className="skills">
      <div className="skill-card">
        <h2 className="skill-card-title">Front End</h2>
        <div>
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="100" height="100" />
          {' '}
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="100" height="100" />
          {' '}
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="100" height="100" />
          {' '}
          <img src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg" alt="jest" width="100" height="100" />
          {' '}
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="100" height="100" />
          {' '}
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="100" height="100" />
          {' '}
        </div>
        <h2 className="skill-card-title">Back End</h2>
        <div>
          <img src="https://user-images.githubusercontent.com/84882231/171644691-25c3e157-9187-4d1c-8e5c-87d753d0de4b.png" alt="docker" width="100" height="100" />
          {' '}
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="100" height="100" />
          {' '}
          <img src="https://user-images.githubusercontent.com/84882231/171644717-4c5a1acf-cd34-44f6-87d1-d43d5b843e42.png" alt="node" width="100" height="100" />
          {' '}

        </div>
      </div>
    </div>
  );
}
export default Skills;
