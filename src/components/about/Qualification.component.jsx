import React, { useState } from "react";
import "./Qualification.component.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle">My personal journey</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            onClick={() => toggleTab(1)}
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
          <div
            onClick={() => toggleTab(2)}
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Completed Projects
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">O/Ls</h3>
                <span className="qualification__subtitle">
                  Kelani Maha Vidyalaya
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2012 - 2019
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">A/Ls</h3>
                <span className="qualification__subtitle">
                  Sri Dharmaloka College
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2020 - 2022
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Diploma in Software Engineering
                </h3>
                <span className="qualification__subtitle">NAITA</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2023 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Text based finance Tracker
                </h3>
                <span className="qualification__subtitle">
                  Desktop | Python
                </span>
                <div className="project__link">
                  <a href="https://www.github.com/itz-Hiru/Text-Based-Finance-Tracker">
                    <i class="bx bxl-github"></i>
                  </a>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Smart Expense Tracker</h3>
                <span className="qualification__subtitle">
                  Desktop | JavaFX
                </span>
                <div className="project__link">
                  <a href="https://www.github.com/itz-Hiru/Smart-Expense-Tracker">
                    <i class="bx bxl-github"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">My Scanner</h3>
                <span className="qualification__subtitle">React Vite</span>
                <div className="project__link">
                  <a href="https://www.github.com/itz-Hiru/My-Scanner">
                    <i class="bx bxl-github"></i>
                  </a>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Money Map</h3>
                <span className="qualification__subtitle">Android | Java</span>
                <div className="project__link">
                <a href="https://www.github.com/itz-Hiru/Money-Map">
                  <i class="bx bxl-github"></i>
                </a>
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Budget Buddy</h3>
                <span className="qualification__subtitle">
                  Android | Kotlin
                </span>
                <div className="project__link">
                <a href="https://www.github.com/itz-Hiru/Smart-Expense-Tracker">
                  <i class="bx bxl-github"></i>
                </a>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Care Bridge</h3>
                <span className="qualification__subtitle">Android | Java</span>
                <div className="project__link">
                <a href="https://www.github.com/itz-Hiru/Care-Bridge">
                  <i class="bx bxl-github"></i>
                </a>
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Audition Hive</h3>
                <span className="qualification__subtitle">
                  Full Stack | React Vite, NodeJS
                </span>
                <div className="project__link">
                <a href="https://www.github.com/itz-Hiru/Blogging-Website-Frontend">
                  <i class="bx bxl-github"></i>
                </a>
                <a href="https://www.github.com/itz-Hiru/Blogging-Website-Backend">
                  <i class="bx bxl-github"></i>
                </a>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">QRify</h3>
                <span className="qualification__subtitle">NextJS</span>
                <div className="project__link">
                <a href="https://www.github.com/itz-Hiru/QRify-project">
                  <i class="bx bxl-github"></i>
                </a>
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Aurudu Nakath Seettuwa</h3>
                <span className="qualification__subtitle">Android | Java</span>
                <div className="project__link">
                <a href="https://www.github.com/itz-Hiru/Aurudu-Nakath-Seettuwa">
                  <i class="bx bxl-github"></i>
                </a>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Book Review System</h3>
                <span className="qualification__subtitle">
                  Full Stack | React Vite, NodeJS
                </span>
                <div className="project__link">
                <a href="https://www.github.com/itz-Hiru/Book-Review-System-Frontend">
                  <i class="bx bxl-github"></i>
                </a>
                <a href="https://www.github.com/itz-Hiru/Book-Review-System-Backend">
                  <i class="bx bxl-github"></i>
                </a>
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Personal Finance Tracker
                </h3>
                <span className="qualification__subtitle">
                  Full stack | Springboot, Angular
                </span>
                <div className="project__link">
                <a href="https://www.github.com/itz-Hiru/Expense-Tracker-Angular-Frontend">
                  <i class="bx bxl-github"></i>
                </a>
                <a href="https://www.github.com/itz-Hiru/Expense-Tracker-Spring-Backend">
                  <i class="bx bxl-github"></i>
                </a>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Salon Booking System</h3>
                <span className="qualification__subtitle">
                  Backend | Java, SpringBoot, MySQL
                </span>
                <div className="project__link">
                <a href="https://github.com/itz-Hiru/Salon-Booking-User-Spring-Backend">
                  <i class="bx bxl-github"></i>
                </a>
                <a href="https://github.com/itz-Hiru/Salon-Booking-Service-Spring-Backend">
                  <i class="bx bxl-github"></i>
                </a>
                <a href="https://github.com/itz-Hiru/Salon-Booking-Category-Spring-Backend">
                  <i class="bx bxl-github"></i>
                </a>
                <a href="https://github.com/itz-Hiru/Salon-Booking-Offering-Spring-Backend">
                  <i class="bx bxl-github"></i>
                </a>
                <a href="https://github.com/itz-Hiru/Salon-Booking-Booking-Spring-Backend">
                  <i class="bx bxl-github"></i>
                </a>
                <a href="https://github.com/itz-Hiru/Salon-Booking-Payment-Spring-Backend">
                  <i class="bx bxl-github"></i>
                </a>
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Expense Tracker
                </h3>
                <span className="qualification__subtitle">
                  MERN | NodeJS, React Vite
                </span>
                <div className="project__link">
                <a href="https://www.github.com/itz-Hiru/Expense-Tracker-MERN-Frontend">
                  <i class="bx bxl-github"></i>
                </a>
                <a href="https://www.github.com/itz-Hiru/Expense-Tracker-MERN-Backend">
                  <i class="bx bxl-github"></i>
                </a>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Task Manager</h3>
                <span className="qualification__subtitle">
                  Full Stack | NodeJS, React Vite, TailwindCSS
                </span>
                <div className="project__link">
                <a href="https://github.com/itz-Hiru/Task-Manager-Frontend">
                  <i class="bx bxl-github"></i>
                </a>
                <a href="https://github.com/itz-Hiru/Task-Manager-Backend">
                  <i class="bx bxl-github"></i>
                </a>
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  3D Portfolio
                </h3>
                <span className="qualification__subtitle">
                  Frontend | React Vite, Tailwind CSS, ThreeJS
                </span>
                <div className="project__link">
                <a href="https://www.github.com/itz-Hiru/3D-Portfolio">
                  <i class="bx bxl-github"></i>
                </a>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
