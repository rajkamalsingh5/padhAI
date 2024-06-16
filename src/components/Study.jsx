import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Study = () => {
  return (
    <div id="work">
      <section>
        <article>
          <Carousel
            showArrows={true}
            showIndicators={true}
            showStatus={false}
            showThumbs={false}
            infiniteLoop={true}
          >
              

           <div className="workItem">
           <iframe src="https://drive.google.com/file/d/1vmLWJSJStfXRdAwtMFz1Kpj2Nnj7b9hY/preview" title="Doc-b" width="640" height="415" allow="autoplay" border="none" overflow="hidden"></iframe>
                <aside>
                  <h3>DBMS Notes</h3>
                  <b>A Database Management System DBMS is software that handles the storage, retrieval, and updating of data in a database. </b>
                  <a href="https://www.geeksforgeeks.org/last-minute-notes-dbms/" target="blank">
                    Explore
                  </a>
                </aside>
              </div>

            <div className="workItem">
              <iframe src="https://docs.google.com/document/d/1bX6bOHKqZLZBGN981P5KOlh9657Vyd42ib3Z7ySWBuI/preview" title="Doc-a" width="640" height="415" allow="autoplay" border="none" overflow="hidden"></iframe>
                <aside>
                  <h3>Computer Net.</h3>
                  <b> Computer networking is the practice of connecting computers and other devices to share resources, data, and applications. </b>
                  <a target="blank" href="https://www.geeksforgeeks.org/last-minute-notes-computer-network/">
                    Explore
                  </a>
                </aside>
              </div>
           <div className="workItem">
           <iframe src="https://drive.google.com/file/d/1YHJktzBS2s2Q0A93jBuo6kbbXlSU1b_H/preview" title="Doc-c" width="640" height="415" allow="autoplay" border="none" overflow="hidden"></iframe>
                <aside>
                  <h3>Operating System</h3>
                  <b>An Operating System (OS) is system software that acts as an intermediary between computer hardware and the computer user</b>
                  <a target="blank" href="https://www.geeksforgeeks.org/last-minute-notes-operating-systems/">
                  Explore
                  </a>
                </aside>
              </div>

             
              <div className="workItem">
              <iframe src= "https://drive.google.com/file/d/1_j7guQZdReJ9GzMdFhqRscXq9rnquBya/preview" title="Doc-d" width="640" height="415" allow="autoplay" border="none" overflow="hidden"></iframe>
                <aside>
                  <h3>OOps</h3>
                  <b>Object-Oriented Programming (OOP) is a programming paradigm based on the concept of "objects". </b>
                  <a href=" https://www.geeksforgeeks.org/object-oriented-programming-in-cpp/" target="blank">
                  Explore
                  </a>
                </aside>
              </div>
              <div className="workItem">
              
              <iframe src= "https://docs.google.com/spreadsheets/u/0/d/12l4Tc_zPgtFdWCHDDHZVMxC8pbjL4BzHzoVcHdleOb0/preview" title="Doc-f" width="640" height="415" allow="autoplay" border="none" overflow="hidden"></iframe>
                <aside>
                  <h3>D.S.A</h3>
                  <b>(DSA) are fundamental concepts in computer science that focus on the efficient organization and manipulation of data</b>
                  <a href="https://www.geeksforgeeks.org/lmns-data-structures/" target="blank">
                  Explore
                  </a>
                </aside>
              </div>
              <div className="workItem">
              <iframe src= "https://docs.google.com/document/d/1sQlRDw6--HwyxeFL7b4kBsOG-Tz7rXMbpWNnfvJErA4/preview" title="Doc-e" width="640" height="415" allow="autoplay"  border="none" overflow="hidden"></iframe>
                <aside>
                  <h3> Core Sheet</h3>
                  <b>Test Your Knowledge of previous studies by solving these questions.</b>
                  <a target="blank" href="https://docs.google.com/document/u/0/d/1sQlRDw6--HwyxeFL7b4kBsOG-Tz7rXMbpWNnfvJErA4/mobilebasic">
                  Explore
                  </a>
                </aside>
              </div>
            
            
          </Carousel>
        </article>
      </section>
    </div>
  );
};

export default Study;