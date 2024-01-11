import * as React from "react";


function TableHeader() {
    return (
        <thead>
            <tr>
                <th>Время</th>
                <th>Температура, С</th>
                <th>Осадки</th>
                <th>Скорость ветра, м/сек</th>
                <th>Давление, мм рт. ст.</th>
            </tr>
        </thead>
    );
}

export default TableHeader;