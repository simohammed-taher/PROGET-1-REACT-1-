import React from "react";
import { Row, Col } from "react-bootstrap";
const DatesList = ({ person }) => {
  return (
    <Row className="justify-content-center my-2">
      <Col sm="8" className="">
        <div className="rectangle p-2">
          {person.length ? (
            person.map((item) => {
              return (
                <div key={item.id} className="d-flex  border-bottom mx-3">
                  <img className="img-avatar" alt="img1" src={item.img}></img>
                  <div className="px-3">
                    <p className="d-inline fs-5"> {item.name}</p>
                    <p className="fs-6"> {item.date}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <h2 className="p-5 text-center">لا يوجد مواعيد</h2>
          )}
        </div>
      </Col>
    </Row>
  );
};

export default DatesList;
