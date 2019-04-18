import React from 'react';
// import Emoji from 'react-emoji-render';

import './AboutMyself.scss';

function AboutMyself() {
  return (
    <div className='about-myself-container'>
      <h4 className='about-myself-container__text'>
        <span className='hello-there'>Hello there, I'm Ilija</span>.
        <br />
        {/* but everyone calls me Zarathustra..
        <br />
        (No.. that doesn't really happen that often.. <Emoji text=":/" className="emoji" />)
        <br />
        <span className="voice-text voice-text--1">
          *ashamed of his poor intro he gonna switch to third person*{" "}
        </span>
        <br />
        {/* <span className="voice-text voice-text--2">deeper voice </span> */}
        {/* <br />
        He is front-end developer, mainly working with{" "}
        <span className="about-myself-container__text--bolded">
          Javascript(React){" "}
        </span>
        and <span className="about-myself-container__text--bolded">Sass</span>.
        But he also has great amount of curiosity towards{" "}
        <span className="about-myself-container__text--bolded">Python</span>. 
        <br /> */}
        <br />-I am a front-end developer, mainly working with{' '}
        <span className='about-myself-container__text--bolded'>
          Javascript(React){' '}
        </span>
        and <span className='about-myself-container__text--bolded'>Sass</span>{' '}
        on frontend.
        <br />
        -I'm also highly interested in backend development and currently
        expanding my knowledge towards backend technologies such as{' '}
        <span className='about-myself-container__text--bolded'>
          NodeJS(Express){' '}
        </span>
        and
        <span className='about-myself-container__text--bolded'> Python</span>.
        <br />
      </h4>
    </div>
  );
}

export default AboutMyself;
