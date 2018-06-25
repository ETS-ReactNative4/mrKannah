import React, { Component } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withTheme } from '@material-ui/core/styles';
import {connect} from "react-redux";
import {push} from "react-router-redux";

class About extends Component {
  
  navigate = (value) => {
    this.props.dispatch(push(value));
  };
  
  render() {
    const styles = {
      color: this.props.theme.palette.textColor,
      width: '90%',
      margin: '0 auto',
      padding: 0,
      fontSize: this.props.mobileView ? '1.1em' : '1.3em',
      lineHeight: '1.5em',
      maxWidth: '800px',
    };
    return (
      <div id="about" style={{background: this.props.theme.palette.accent3Color, padding: '10px'}}>        
        <Tabs style={styles}
              inkbarstyle={{backgroundColor: this.props.theme.palette.primary1Color}} 
              onChange={(value) => this.navigate(value)}
              value={this.props.currentRoute}
              scrollable
              scrollButtons="auto"
        >
          <Tab label="Summary" value={'/about'} style = {{backgroundColor: this.props.theme.palette.accent1Color}} />
          <Tab label="Software Development" value={'/about/softwareDevelopment'} style = {{backgroundColor: this.props.theme.palette.accent1Color}} />
          <Tab label="Education" value={'/about/education'} style = {{backgroundColor: this.props.theme.palette.accent1Color}} />
        </Tabs>
        {this.props.value === '/about' && <Card>
          <CardContent>
            <p>
              Originally from Iraq. I was born in <a href="https://en.wikipedia.org/wiki/Bartella">Bartella</a>, a small town located east of Mosul.
              I lived my childhood in Baghdad. However, I moved back to Bartella in 2006, due to lack of safety and the dangers of the aftermath of the war.
              In 2008, we moved to Turkey, where we applied to be refugees in the United States through the United Nation.
              Within nine months, we were granted visas to the US.
            </p>
            <br/>
            <p>
              When I first landed in the US, I knew that now I have the opportunity of accomplishing all my goals and make my dreams a reality.
              Nonetheless, it was not easy. Starting with learning the language and culture, to catching up and passing my peers.
              I started high school as sophomore, with no records to account for the first year and a half of my high school career.
              After pouring lots of sweat and tears, I was able to graduate on time, top of my class and get accepted into the university of my choice.
              I started a web development business shortly after graduating using my self taught and high school knowledge.
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
          </CardContent>
        </Card>}
        {this.props.value === '/about/softwareDevelopment' && <Card>
          <CardContent>
            <p>
              Since I was a kid, I always liked problem solving, breaking things and putting them back together.
              When I got my first computer, I took it all apart and put it back together.
              The next day, my curiosity got the best of me and I ended up deleting my Windows OS.
              To feed my curiosity, I spent all my allowance on purchasing software and video games.
              Playing around with different software, allowed me to learn a lot of different skills (editing, animating, 3D modeling, manipulating data and much more).
            </p>
            <br/>
            <p>
              When I came to the US, I gained access to the internet (the only thing that could satisfy my curiosity).
              The teenage me went head first into gaming. Nonetheless, my curiosity still got the best of me.
              It started with modding game files to get the premium characters at first.
              Then transitioned to adding my own models, customizations skins, maps and other game files.
              Soon after, I started modifying memory values using <a href="http://www.cheatengine.org/">Cheat Engine</a>.
              That forced me to learn more about memory, assembly and machine languages as well as the inner workings of computers in general.
              At that point, my curiosity could not be contained. I started scripting.
            </p>
            <br/>
            <p>
              At first, I used <a href="https://www.autoitscript.com/site/">AutoIt3</a> to create a script that played the game for me.
              Soon after I added UI to give me analytics on how many times the script was executed, and give estimated summary of rewards earned.
              That was when my curiosity peaked about programming.
              I soon created a <a href="/picker">mouse picker</a> application with AutoIt that allowed me to get the information needed to create my bot scripts easier.
              It gave me the ability to capture cursor's position, sample pixel color values and store it for later processing.
              After that, I downloaded visual studio and started making small apps.
            </p>
            <br/>
            <p>
              My first visual studio app was an app that helped me get free energy to play on <a href="https://www.ourworld.com">OurWorld</a>.
              It started as a simple chat spammer (I would get more energy as I participated in "conversations").
              Soon after I added ability to access all the promotional codes that gave free gems (premium currency) within the app.
              These codes were distributed across different social media sites, I would aggregate them, add them to the app then release an update.
              That required me to add auto updating functionality, using text files on a server.
              Playing around with a server, lead me to a whole new world.
            </p>
            <br/>
            <p>
              My curiosity spiraled out of control. I started making websites which forced me to learn how everything worked.
              I started getting extremely interested in how computers worked and what needs to happen for a website to work.
              I learned the differences between compiled and run-time languages. Understood client-server communication.
              Then dove deeper into networking, how TCP works. At this point I was a freshman in the university.
              I joined multiple computer science and engineering student organizations ranging from robotics to mobile and game developments.
              That exposed me to a lot of different technologies, programing languages and projects.
            </p>
            <br/>
            <p>
              I took the knowledge I gained up to that point and applied into my classes.
              In my intro to C programming class, I used an Arduino Uno for my projects instead of just a simple C program.
              For my first project, I wanted to control things from my phone.
              So, I created a <a href="https://www.youtube.com/watch?v=8vLEkw8au64">Wireless Arduino LED Piano</a> utilizing three different software.
            </p>
            <br/>
            <p>
              Soon after I realized that my classes, were teaching me things that I already knew but in a more structured way.
              All that meant for me was that I have more free time to experiment with different things.
              I started making apps, ranging from simple To-Do apps to an online shopping store.
              I invested in a raspberry pie and created my own super server.
              My server turned into a hub for the tools I use.
              It had a Git, ownCloud (Dropbox like cloud), network file sharing, PHP web server, MySQL database and much more.
              I even turned it, into a gaming console, media center, remote admin shell.
              Currently I use it as my personal streaming server (like <a href="https://www.twitch.tv/">twitch</a>) to stream my pc to the TV.
            </p>
            <br/>
            <p>
              As you can see, majority of my learning was fueled by passion for problem solving and curiosity.
              I created many apps over the years. Some I forgot about, some provided grate value for me and others, some got me in trouble and some that just satisfied my curiosity.
              I made an app for <a href="https://www.warframe.com/landing">Warframe</a> that helped players spend less time researching and more time playing the game.
              My first app that I sold to people was <a href="">Aztec Course Snatcher</a>, which got me in trouble.
              It was a chrome packaged app that monitored students' course wish list and helped them register for those courses automatically.
              I created <a href="https://chrome.google.com/webstore/detail/youtube-redirector/fnlklbjlpkkdnelohembgpdahpfpfcbp?hl=en-US">YouTube Redirector</a>, just to satisfy my curiosity on how chrome extensions work.
            </p>
            <br/>
            <p>
              This is how I transitioned from a curious gamer into a full-fledged software developer.
              I cannot stop writing code and creating things.
              Most of my previous creations were experimentations with technology and tools, to expand my knowledge and satisfy my hunger for code.
            </p>
          </CardContent>
        </Card>}
        {this.props.value === '/about/education' && <Card>
          <CardContent>
            <p>
              For me education is an ongoing process. Since early on, I always was interested in learning.
              Learning about everything, from how history shaped our current societies to how atoms work.
              From sneaking out of classes to spend time in the library, to reading my dad's college books, I always found a way to learn something new.
              My passion for learning led to where I am, from learning programming to co-founding CourseKey to even greater things.
            </p>
            <br/>
            <p>
              My education journey has been a unique one. For fifteen years, I attended school in Iraq.
              My elementary school was nothing special, however my passion for learning and efforts did not go unnoticed.
              I was ranked top of my school which gave me the opportunity to apply and attend <a href="https://en.wikipedia.org/wiki/Al_Mutamayizeen_Secondary">Al Mutamayizeen Secondary</a>.
              To be able to attend it, I had to not only pass multiple comprehensive academic and IQ tests but also score in the top 100 of the applicants.
              Which was not easy! It was the hardest thing I had done, I spend my entire summer studying and preparing for it.
              These tests spanned multiple days, eight hours each and were comprehensive tests in science, math and language.
            </p>
            <br />
            <p>
              Sadly, because of the war, I had to move from Baghdad to <a href="https://en.wikipedia.org/wiki/Bartella">Bartella</a>. This meant I was not able to continue my education there.
              However, my passion for learning never stopped. I continued teaching myself and learning more and more about computers and technology on my own.
              Nonetheless, my stay in the new secondary school was short because I ended up leaving the country.
            </p>
            <br />
            <p>
              When I arrived to the US, I was a sophomore. That meant that I had missed on a year and a half of academic progress.
              That didn't stop or slow me down. After I took the placement exams, I was placed in the lowest level of the english as a second language program (ESL).
              That meant that I had to go through the entire program (4 years long) before I could take a regular freshman english.
              The counselors and teachers expected me to spend my remaining high school time just finishing the ESL program.
            </p>
            <br />
            <p>
              I did not like that plan! After a couple of weeks, in the entry class of the ESL program, I became a translator and a teacher assistant for my peers.
              My teacher noticed my efforts and helped me change the class to the next level of the ESL program (beginners level).
              From there, I spent only couple more months in the ESL program.
              While I was in the beginner level, I was still unsatisfied.
              I knew I could easily be in a higher level and spending years to get there was not an option for me.
            </p>
            <br />
            <p>
              I spent majority of those months in front of the counseling and advising office trying to convince them to move me up.
              Because of my performance in the beginner ESL class, the teacher helped me skip not one but two classes.
              I made a deal with the counseling & advising office. During summer, I will take the regular freshman english class, skipping the entirety of the ESL program.
              If I pass, I can continue progressing normally from there. However, if I failed, I would stop bothering them and must take every single class in the ESL program.
            </p>
            <br />
            <p>
              I ended up not only passing but ranking the top of the class with an A+.
              I managed within half of a year to finish the entire ESL program and freshman english.
              At that point, I started setting my goals higher. It was no longer satisfying to catch up to my peers.
              I wanted to get into university directly from high school. That still was no easy feat, I had to make up for almost two years that I was not attending school.
            </p>
            <br />
            <p>
              To reach my goal, I just did what I always do use my passion.
              I never missed a summer school session, I took every opportunity to take a class.
              I did online classes, I took after school classes and even took college classes.
              All of this was still not a challenging enough for me.
              I didn't stop at taking regular classes, I took honors and Advanced Placement classes.
              I was able to graduate within two and a half years while passing majority of my peers and ranking top of my graduating class.
            </p>
            <br />
            <p>
              I got accepted into San Diego State University (SDSU) as a computer engineer. Soon after starting my university journey, I realized that it was still not challenging for me.
              I added a computer science minor, joined multiple student organizations, started my own student organizations, managed computer labs, became a teacher assistant and worked for the university.
              While doing all of that, I learned a lot. Taking all this knowledge and the knowledge gained from personal learning on the internet, I was able to run my own personal software development business as well as manage another.
            </p>
            <br />
            <p>
              All of that, was still not enough to satisfy my hunger for knowledge. Classes were starting to get slow and boring because I already knew the material before even taking the class.
              I needed an environment where I was always learning. The solution was building CourseKey. At CourseKey every day has been a day where I learn something new.
              Soon, I realized that school was no longer benefiting me or my knowledge hunger, so I ended up taking a break.
              I would have never taken a break from school if it wasn't for the environment that CourseKey is. Not only I am in an environment that forces me to always learn, but also surrounded by great people who want to always grow and achieve more.
            </p>
            <br />
            <p>
              Education has always been a part of my life and it will always be. I can't see myself stop learning. To me if I stop learning that is when I die.
              Learning and education are my passions, and I will always give everything I do a hundred and twenty (as long as I am able to).
            </p>
          </CardContent>
        </Card>}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    mobileView: state.navigation.mobileView,
    openDrawer: state.navigation.openDrawer,
    currentRoute: state.routing.location.pathname,
  }
}

export default connect(mapStateToProps)(withTheme()(About));
