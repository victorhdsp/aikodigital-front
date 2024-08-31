import type { EquipamentComplete } from "~/assets/types/equipament";

function getStateHours (state: string, history: EquipamentComplete["stateHistory"]) {
    let productiveTime = 0;
    let lastOperatingDate: number|null = null;

    history.forEach((item) => {
        const date = new Date(item.date).getTime();
        if (item.state.name === state) {
            lastOperatingDate = date;
        } else {
            if (lastOperatingDate) {
                productiveTime += lastOperatingDate - date;
                lastOperatingDate = null;
            }
        }
    })
    return productiveTime;
}

export function getLastData (props: EquipamentComplete) {
    const lastStatus = props.stateHistory[0];
    const lastPosition = props.positionHistory[0];
    const lastUpdateDate = lastStatus.date > lastPosition.date ? lastStatus.date : lastPosition.date;
    const lastUpdate = new Date(lastUpdateDate).toLocaleString();

    return {
        lastUpdate,
        lastStatus,
        lastPosition
    };
}

export function getProductivity (props: EquipamentComplete) {
    const getTime = (date: string) => new Date(date).getTime();
    const { stateHistory } = props;
    const productiveTime = getStateHours('Operando', stateHistory);
    const allTime = getTime(stateHistory[0].date) - getTime(stateHistory.reverse()[0].date);
    const productivity = ((productiveTime / allTime) * 100).toFixed(0);

    return { productivity };
}

export function getProfitByEquipament (props: EquipamentComplete) {
    const { stateHistory, vehicle } = props;
    const values = { 
        operating: vehicle.hourlyEarnings[0].value, 
        stopped: vehicle.hourlyEarnings[1].value,
        maintenance: vehicle.hourlyEarnings[2].value
    };
    const times = {
        operating: getStateHours('Operando', stateHistory) / 1000 / 60 / 60,
        stopped: getStateHours('Parado', stateHistory) / 1000 / 60 / 60,
        maintenance: getStateHours('Manutenção', stateHistory) / 1000 / 60 / 60
    };

    return {
        profit: values.operating * times.operating,
        cost: values.stopped * times.stopped + values.maintenance * times.maintenance
    };
}