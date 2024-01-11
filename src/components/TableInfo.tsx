import * as React from "react";
import Badge from "react-bootstrap/Badge";


function TableInfo(props) {
    return (
        <>
            <h6>Город: <Badge bg="danger">{props.name}</Badge></h6>
            <h6>Текущая дата: <Badge bg="dark">{props.date}</Badge></h6>
            <h6>Восход солнца: <Badge bg="dark">{props.sunrise}</Badge></h6>
            <h6>Заход солнца: <Badge bg="dark">{props.sunset}</Badge></h6>
        </>
    );
}

export default TableInfo;