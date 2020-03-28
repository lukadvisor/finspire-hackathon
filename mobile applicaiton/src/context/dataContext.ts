// https://andyyou.github.io/2019/08/11/use-react-hooks-and-context-replace-redux/

import createUseContext from 'constate';
import { useState } from 'react';

const useContext = () => {
    const [sanguine, setSanguine] = useState(0);
    const [choleric, setCholeric] = useState(0);
    const [melancholic, setMelancholic] = useState(0);
    const [phlegmatic, setPhlegmatic] = useState(0);
    const [done, setDone] = useState(true);
    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [gender, setGender] = useState("");
    const [dob, setDob] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [plan, setPlan] = useState("");
    const [type] = useState(["Sanguine", "Choleric", "Melancholic", "Phlegmatic"]);
    const [description] = useState([
        "Sanguine people are boisterous, bubbly, chatty, openly emotional, social extroverts. They love aDventure anD have high risk tolerance. Sanguine people are very creative and can become great artists.",
        "A choleric is goal-oriented person. They are very savvy, analytical, and logical. Extremely practical and straightforward; they dislike small talks and enjoy deep and meaningful conversations.",
        "Melancholic people are emotionally sensitive, perfectionistic introverts. They love traditions and do not particularly seek adventures. They think before they act and are not the types who will resort to impulsive behaviour.",
        "Phlegmatic people are usually a people person. They tend to avoid conflict and are task oriented with a great capacity for work that requires precision and accuracy.",
    ])
    const [personality, setPersonality] = useState("");
    const [personalityDescription, setPersonalityDescription] = useState("");
    const [mortgageResponse, setMortgageResponse] = useState("");

    const cal = () => {
        const score = [sanguine, choleric, melancholic, phlegmatic];
        var mx = -1;
        var id = -1

        for (var i = 0; i < 4; i++) {
            if (score[i] > mx) {
                id = i;
                mx = score[i];
            }
        }
        setDone(true);
        setPersonality(type[id]);
        setPersonalityDescription(description[id]);
    }

    const RunMortgage = () => {
        var request = require("request");

        console.log(dob)

        var options = {
            method: 'POST',
            url: 'https://api.au-syd.apiconnect.appdomain.cloud/bochk-fintech-dev/sb/api/application/mortgage',
            headers:
            {
                'Postman-Token': 'fc5a086e-4001-4dac-b2c3-7399947bf80c',
                'cache-control': 'no-cache',
                Authorization: 'Bearer AAIkNDk1MzNhMDctNzA3Zi00YTA4LTg5NzQtNTBiMzc1NGJlNzRlDTN0lKs0iy5nNbTTDJnlXbyfAB-CcmGqdQ_JuPTbYwKLO-4Fi6QoWKDIzlX_ECI3gPvZqjDJp8HKNAMza7__vY8r-_M9zD-rrtbr6AT7XqSUGtjkIWXJWpHqVirZC9Y-',
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body:
            {
                name: {name},
                id: {id},
                gender: {gender},
                date_of_birth: {dob},
                phone_no: {phone},
                address: {address},
                plan_type: {plan}
            },
            json: true
        };

        request(options, function (error: string | undefined, response: any, body: any) {
            if (error) throw new Error(error);
            setMortgageResponse(body.message);
        });

    }

    return {
        sanguine,
        setSanguine,
        choleric,
        setCholeric,
        melancholic,
        setMelancholic,
        phlegmatic,
        setPhlegmatic,
        done,
        cal,
        personality,
        setName,
        setId,
        setGender,
        setDob,
        setPhone,
        setAddress,
        setPlan,
        RunMortgage,
        mortgageResponse,
        description,
        personalityDescription,
    };
};

export const useDataContext = createUseContext(useContext);