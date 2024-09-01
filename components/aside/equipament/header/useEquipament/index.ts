import type { EquipamentComplete, StateHistory } from "~/assets/types/equipament";

function getTime (date: string) {
    return new Date(date).getTime();
}

function msToHours (ms: number) {
    return ms / 1000 / 60 / 60;
}

export function getHoursByStates (state: string, history: StateHistory[]) {
    let productiveTime = 0;
    let lastOperatingDate: number|null = null;

    const ordernedHistory = history.sort((a, b) => {
        return getTime(a.date) - getTime(b.date);
    });

    ordernedHistory.forEach((item) => {
        const date = new Date(item.date).getTime();
        if (item.state.name === state) {
            lastOperatingDate = date;
        } else {
            if (lastOperatingDate) {
                productiveTime += date - lastOperatingDate;
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
    const { stateHistory } = props;

    const operatingHours = msToHours(getHoursByStates('Operando', stateHistory));
    const firstTime = getTime(stateHistory[0].date);
    const lastTime = getTime(stateHistory.reverse()[0].date);
    const allTimeHours = msToHours(lastTime - firstTime);

    const productivity = ((operatingHours / allTimeHours) * 100).toFixed(0);

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
        operating: msToHours(getHoursByStates('Operando', stateHistory)),
        stopped: msToHours(getHoursByStates('Parado', stateHistory)),
        maintenance: msToHours(getHoursByStates('Manutenção', stateHistory))
    };

    const operating = values.operating * times.operating;
    const stopped = values.stopped * times.stopped;
    const maintenance = values.maintenance * times.maintenance;
    
    return {
        profit: operating,
        cost: stopped + maintenance
    };
}