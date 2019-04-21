import React from 'react';

const configSeason = {
    Summer : {
        text : 'Burr, it is chilly',
        iconName: 'snowflake'
    },
    Winter : {
        text : "Let's hit the beach",
        iconName: 'sun'
    }
}

const getSeason = (lat, month) => {
    if(month > 2 && month < 9) {
        return lat > 0 ? 'Summer' : 'Winter'
    } else {
        return lat > 0 ? 'Winter' : 'Summer'
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    // const {text, iconName} = configSeason[season]
    console.log(configSeason[season].text)
    const {text, iconName} = configSeason[season]
    return (
        <div>
            <i className={`${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`${iconName} icon`} />
        </div>
    );
};

export default SeasonDisplay;