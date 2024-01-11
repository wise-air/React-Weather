import * as React from "react";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormSelect from "react-bootstrap/FormSelect";
import Spinner from 'react-bootstrap/Spinner';

import "../styles/CityForm.css";


function CityForm(props) {
    const cities = [
        'Уфа',
        "Москва",
        "Санкт-Петербург",
        "Новосибирск",
        "Екатеринбург",
        "Казань",
        "Нижний Новгород",
        "Челябинск",    
        "Самара",
        "Ростов-на-Дону", 
        "Омск",
        "Красноярск",
        "Воронеж",
        "Пермь", 
        "Волгоград",
        "Краснодар",
        "Тюмень",
        "Саратов"
        ]
    return (
        <Form onSubmit={props.getWeather}>
            <h6>Выберите город</h6>
            
            <FormSelect size='lg' name="city">
                {cities.map((city) => (
                    <option key={city} value={city}>
                        {city}
                    </option>
                ))}
            </FormSelect>
            <Button type='submit' variant="secondary" onClick={() => props.setDays(1)}>
                <Spinner
                    as="span"
                    animation="grow"
                    variant="light"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />
                Прогноз на текущие сутки
            </Button>
            <Button type='submit' variant="secondary" onClick={() => props.setDays(5)}>
                <Spinner
                    as="span"
                    animation="grow"
                    variant="light"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />
                Прогноз на 5 дней
            </Button>
        </Form>
    );
}

export default CityForm;