import type { EquipamentComplete, StateHistory } from "~/assets/types/equipament";

const library = {
    operating: '0808344c-454b-4c36-89e8-d7687e692d57',
    stopped: 'baff9783-84e8-4e01-874b-6fd743b875ad',
    maintenance: '03b2d446-e3ba-4c82-8dc2-a5611fea6e1f' 
}

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
        if (item.state === state) {
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
    const lastStatusDate = new Date(props.stateHistory[0].date);
    const lastStatus = {
        state: props.stateHistory[0].state,
        date: lastStatusDate.toLocaleString()
    };

    return { lastStatus };
}

export function getProductivity (props: EquipamentComplete) {
    const { stateHistory } = props;

    const operatingHours = msToHours(getHoursByStates(library.operating, stateHistory));
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
        operating: msToHours(getHoursByStates(library.operating, stateHistory)),
        stopped: msToHours(getHoursByStates(library.stopped, stateHistory)),
        maintenance: msToHours(getHoursByStates(library.maintenance, stateHistory))
    };

    const operating = values.operating * times.operating;
    const stopped = values.stopped * times.stopped;
    const maintenance = values.maintenance * times.maintenance;
    
    return {
        profit: operating,
        cost: stopped + maintenance
    };
}