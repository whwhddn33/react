/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";

function body() {
  function content() {
    function timeline() {
      function user_info() {
        return (
          <div className="user_info_wrapper">
            <div className="info_box">
              <div className="user_img">
                <img src="http://img.lifestyler.co.kr/uploads/program/2/2197/menu/4/html/f132470404914550966(0).png" />
              </div>
              <div className="user_id">User_00</div>
            </div>
          </div>
        );
      }
      function photo() {
        return (
          <div className="photo_area">
            <img src="https://sitem.ssgcdn.com/36/72/88/item/1000023887236_i1_1100.jpg" />
          </div>
        );
      }
      function info() {
        function get_content_info() {
          let now = new Date().toString();
          return <div className="info">방금 {now}</div>;
        }

        function get_content() {
          return <div className="photo_content">별해는밤</div>;
        }

        return (
          <div className="content_info_area">
            {get_content_info()}
            {get_content()}
          </div>
        );
      }
      const result = [];

      for (let i = 0; i < 10; i++) {
        result.push(
          <article key={i} className="timeline item">
            {user_info()}
            {photo()}
            {info()}
          </article>
        );
      }

      return <div className="timeline_wrapper wrapper">{result}</div>;
    }
    return <article className="content">{timeline()}</article>;
  }
  function side_notice() {
    function content() {
      return <div className="side_content"></div>;
    }
    return <article className="side_notice">{content()}</article>;
  }
  function footer() {
    return <footer className="footer"></footer>;
  }
  return (
    <section className="body">
      {content()}
      {side_notice()}
      {footer()}
    </section>
  );
}

export default body;
