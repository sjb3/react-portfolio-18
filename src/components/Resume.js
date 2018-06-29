import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './Education';
import Experiences from './Experiences';
import Skills from './Skills';

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell className="resume-left-col" col={4}>
            <div style={{ textAlign: 'center' }}>
              <img
                src="https://media.giphy.com/media/owkzrTfCgmXu0/giphy.gif"
                alt="temple"
                style={{ width: '200px' }}
              />

            </div>
            <h2 style={{ textAlign: 'left' }}>
Justin Byun
            </h2>
            <h4 style={{ textAlign: 'left' }}>
Hacker
            </h4>
            <hr style={{ borderTop: '1px solid brown' }} />
            <p style={{ textAlign: 'left' }}>
            Seeking position of a Front End Developer in Seattle/Bellevue, WA where I would be able to put to use the knowledge gained in the software development cycle and technical aptitude.
            </p>
          </Cell>

          <Cell className="resume-right-col" col={8}>
            <h4 style={{ textAlign: 'center' }}>
              Experiences
            </h4>
            <hr style={{ borderTop: '1px solid brown' }} />
            <Experiences
              startYear={2017}
              endYear={2018}
              jobTitle="Information Tech 2"
              jobLocation="Harborview Medical Center/ Health Info Management Team"
              jobDescription="Prepare and quality control/QA patients data"
            />

            <Experiences
              startYear={2016}
              endYear="current"
              jobTitle="Open source Contributor"
              jobLocation="heyduwamish.org"
              jobDescription="Portrays the history of Duwamish river and proper over time and the environmental effects due to city development, and the users can log in and report and/or share the images "
            />

            <Experiences
              startYear={2017}
              endYear={2017}
              jobTitle="Teaching Assistant"
              jobLocation="CodeFellows"
              jobDescription="Help students learn javaScript, HTML5 and CSS3"
            />
            <h4 style={{ textAlign: 'center' }}>
            Skill Sets
            </h4>
            <hr style={{ borderTop: '1px solid brown' }} />
            <Skills
              skills="HTML5/CSS3"
              progress={100}
            />
            <Skills
              skills="javaScript"
              progress={90}
            />
            <Skills
              skills="ReactJS"
              progress={90}
            />
            <Skills
              skills="nodeJS"
              progress={80}
            />
            <Skills
              skills="MongoDB"
              progress={90}
            />
            <Skills
              skills="graphQL/Apollo"
              progress={80}
            />
            <h4 style={{ textAlign: 'center' }}>
              Education
            </h4>
            <hr style={{ borderTop: '1px solid brown' }} />
            <Education
              startYear={2018}
              endYear="progress"
              schoolName="North Seattle College | Seattle, WA"
              schoolDescription="Bachelor’s of Sciences,
              Application Development"
            />
            <Education
              startYear={2015}
              endYear={2016}
              schoolName="CodeFellows | Seattle, WA"
              schoolDescription="Certificate in Advanced Full-Stack JavaScript Development"
            />
            <Education
              startYear={2000}
              endYear={2005}
              schoolName="
              University of Washington | Seattle, WA"
              schoolDescription="Bachelor’s of Sciences, May, 2005
              Majors in Biochemistry and Microbiology (dual degree), Minor in Chemistry"
            />
          </Cell>

        </Grid>
      </div>
    );
  }
}

export default Resume;
