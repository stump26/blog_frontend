import React from 'react';
import './About.scss';

const ImageList = ({ imgs }) => {
  return (
    <>
      {imgs.map((img) => {
        return (
          <img className="skill-img" src={`/img//tech/${img}.png`} alt={img} />
        );
      })}
    </>
  );
};

const SKILLS = () => {
  const lang = ['javascript', 'html_css', 'python', 'java', 'c', 'cpp', 'php'];
  const libs = [
    'react',
    'node',
    'webpack',
    'sass',
    'hooks',
    'redux',
    'passport',
    'mongo',
    'graphql',
    'apollo',
    'docker',
    'kubernetes',
    'git',
    'nginx',
  ];
  return (
    <div className="skills-list">
      <div className="skills skill-lang">
        <ImageList imgs={lang} />
      </div>
      <div className="skills skill-libs">
        <ImageList imgs={libs} />
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div id="container">
      <h1 className="title">
        <span className="title-Name">Shawn Park</span>
        <span style={{ fontSize: '0.5em' }}>aka 'stumpark'</span>
      </h1>
      <div className="row-me">
        <div className="me">
          <span>컴퓨터 공학과 재학 (cs major)</span>
          <br />
          <span>사진 좋아함.</span>
          <span>취미: 코딩, 사진찍기, 게임</span>
          <br />
          <span>세미나 찾아다니는거 좋아함.</span>
          <br />
          <span>*특이점: google 없으면 코딩못함. </span>
          <br />
        </div>
        <img
          className="my-shot"
          src="https://stumpark.com/wordpress/wp-content/uploads/2018/04/IMG_9008-1-768x512.jpg"
        />
      </div>
      <SKILLS />
    </div>
  );
};

export default About;
