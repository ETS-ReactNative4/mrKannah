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
                  The first visual studio app was an app that helped me get free energy to play on OurWorld.
                  It started as a simple chat spammer (I would get more energy as I participated in conversations).
                  Another functionality was ability to access all the promotional codes that gave free premium currency within the app.
                  These codes were distributed across different social media sites, I would aggregate them, add them to the app then release an update.
                  That required me to add auto updating functionality, using text files on a server.
                  Playing around with a server, lead me to a whole new world.
                </p>
                <br/>
                <p>
                  My curiosity spiraled out of control. I started making websites which made forced me to learn how everything worked.
                  I started getting extremely interested on how computers worked and what happens for a website to work.
                  I learned the differences between compiled and run-time languages. Understood client-server communication.
                  Then dove deeper into networking, how TCP works. At this point I was a freshman in the university.
                  I joined multiple computer science and engineering student organizations ranching from robotics to mobile and game developments.
                  That exposed me to a lot of different technologies, programing languages and projects.
                </p>
                <br/>
                <p>
                  I took the knowledge I gained to that point and applied into my classes.
                  In my intro to C programming class, I used an Arduino Uno for my projects instead of just a simple C program.
                  For my first project, I wanted to control things from my phone.
                  I created a Wireless Arduino LED Piano utilizing three different softwares.
                </p>
                <br/>
                <p>
                  Soon after I realized that my classes, were teaching me things that I already knew but in a more structured way.
                  All that meant for me that I have more free time to experiment with different things.
                  I started making apps, ranging from simple ToDo apps to an online shopping store.
                  I invested in a raspberry pie and created my own super server.
                  My server turned into a hub for the tools I use.
                  It had a Git, ownCloud (dropbox like cloud), network file sharing, PHP web server, MySQL database and much more.
                  I even turned it, into a gaming console, media center, remote admin shell.
                  Currently I use it as my personal streaming server (similar to twich) to stream my pc to the TV. 
                </p>
                <br/>
                <p>
                  As you can see, majority of my learning was fueled by passion for problem solving and curiosity.
                  I created many apps over the years. Some I forgot about, some provided grate value for me and others, some got me in trouble and some that just satisfies my curiosity.
                  I made an app for WarFrame (video game) that helped players spend less time researching and more time playing the game.
                  My first app that I started sold to people was Aztec Course Snatcher, which got me in trouble.
                  It was a chrome packaged app that monitored students' course wish list and helped them register for those courses automatically.
                </p>
                <br/>
                <p>
                  This is how I transitioned from a curious gamer into a full fledged software developer.
                  I can not stop writing code and creating things.
                  Most of which are just exterminations with technology and tools, to expand my knowledge and satisfy my hunger for code.
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
