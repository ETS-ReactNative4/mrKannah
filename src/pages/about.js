import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Card, CardText} from 'material-ui/Card';
import muiThemeable from 'material-ui/styles/muiThemeable';



class About extends Component {
  render() {
    const styles = {
      color: this.props.muiTheme.palette.textColor,
      width: '90%',
      margin: '0 auto',
      padding: 0,
      fontSize: this.props.mobileView ? '1.1em' : '1.3em',
      lineHeight: '1.5em',
      maxWidth: '800px',
    };
    return (
      <div id="about" style={{background: this.props.muiTheme.palette.accent3Color, padding: '10px'}}>
        <Tabs style={styles} inkBarStyle={{backgroundColor: this.props.muiTheme.palette.primary1Color}}>
          <Tab label="Summary" style = {{backgroundColor: this.props.muiTheme.palette.accent1Color}}>
            <Card>
              <CardText>
                <p>
                  Originally from Iraq. I was born in <a href="https://en.wikipedia.org/wiki/Bartella">Bartella</a>, a small town located east of Mosul.
                  I lived my childhood in Baghdad. However, I moved back to Bartella in 2006, due to lack of safety and the dangers after the war.
                  In 2008, my family and I decided that staying in Iraq was unsafe for us. By March we moved to Turkey, where we applied to be refugees in the United States through the United Nation.
                  Within nine months, we were granted visas to the US.
                </p>
                <br/>
                <p>
                  When I first landed in the US, I knew that now I have the opportunity of accomplishing all of my goals and make my dreams a reality.
                  Nonetheless, it was not easy. Starting with learning the language and culture, to catching up and passing my peers.
                  I started high school as sophomore, with no records to account for the first year and a half of my high school career.
                  After pouring lots of sweat and tears, I was able to graduate on time, top of my class and get accepted into the university of my choice.
                  I started a web development business shortly after gradating using my self taught and high school knowledge.
                </p>
                <br/>
                <p>
                  Being fortunate to attend San Diego State University, I was able to grow immensely and take the first step to achieving my goals.
                  During my time at SDSU, I not only got to expand my knowledge and skill sets; but also allowed me to meet great people, whom have left a great impact on my life and future.
                  Taking the knowledge I gained, I expanded my own business to producing professional software and providing consulting services.
                  Soon after I was getting noticed by not only staff and faculty but also by fellow colleagues.
                  This lead to me meeting other great entrepreneurial people with whom I started CourseKey.
                </p>
                <br/>
                <p>
                  I joined CourseKey as a technical co-founder. I helped take it from its conception stages to where it is now.
                  During my time in CourseKey I got to lead an amazing engineering team with whom I got to architect, built and maintain the infrastructure and systems running CourseKey.
                  CourseKey has allowed me to achieve many of my goals, from giving back to the community and improving the educational experience to personal and professional growth.
                </p>
              </CardText>
            </Card>
          </Tab>
          <Tab label="Software Development" style = {{backgroundColor: this.props.muiTheme.palette.accent1Color}}>
            <Card>
              <CardText>
                <p>
                  Since I was a kid, I always liked problem solving, breaking things and putting them back together.
                  When I got my first computer, I took it all apart and put it back together.
                  The next day, my curiosity got the best of me and I ended up deleting my Windows OS.
                  To feed my curiosity, I spent all of my allowance on purchasing software and video games.
                  Playing around with different software, allowed to learn a lot of different skills (editing, animating, manipulating data and much more).
                  However, my curiosity was not satisfied.
                </p>
                <br/>
                <p>
                  When I came to the US, I gained access to the internet (the only thing that could satisfy my curiosity).
                  At first, my teenage mind went all in on video games. Nonetheless, my curiosity still got the best of me.
                  It started with modding game files to get the premium characters at first.
                  Then transitioned to adding my own models, customizations skins and files which lead me to start scripting.
                </p>
                <br/>
                <p>
                  At fist I used <a href="https://www.autoitscript.com/site/">AutoIt3</a> to create a script that played the game for me.
                  Soon after I added UI to give me analytics on how many times the script was executed and estimated rewards based on drop rates.
                  That was when my curiosity peaked about programming. I soon created an application with AutoIt that allowed me to make my scripts easier.
                  It gave me the ability to capture cursor's position, sample pixel color values and store it for later processing.
                  After that, my interests about programming peaked. I downloaded visual studio and started making small apps.
                </p>
                <br/>
                <p>
                  At fist I used <a href="https://www.autoitscript.com/site/">AutoIt3</a> to create a script that played the game for me.
                  Soon after I added UI to give me analytics on how many times the script was executed and estimated rewards based on drop rates.
                  That was when my curiosity peaked about programming. I soon created an application with AutoIt that allowed me to make my scripts easier.
                  It gave me the ability to capture cursor's position, sample pixel color values and store it for later processing.
                  After that, my interests about programming peaked. I downloaded visual studio and started making small apps.
                </p>
                {/*Now, I know that I will not let anything hold me back from my dreams. I have overcome the war, the challenges of learning a new language, and have graduated high school in two and a half years. I give everything in my life a hundred and ten percent despite its significance because I know that the only place success comes before work, is in the dictionary.*/}

                {/*To be able to graduate I had to complete a remedial english as a second language program.*/}

                {/*To be able to graduate, I needed to complete the ESL program, which was two years long, in addition to the four years of regular english classes.*/}

              </CardText>
            </Card>
          </Tab>
        </Tabs>
      </div>
    )
  }
}

export default muiThemeable()(About);
