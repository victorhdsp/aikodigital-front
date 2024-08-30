import type { OrganizedStateHistory, PositionHistory, StateHistory } from "./type";

export function filterStatesByDate(
    states: StateHistory, 
    positions: PositionHistory, 
    index: number
): StateHistory {
    return states.filter((state) => {
        const stateDate = new Date(state.date);
        const positionDate = new Date(positions[index].date);

        if(stateDate.getTime() < positionDate.getTime()) {
            return false;
        }
        if(index + 1 < positions.length) {
            const nextPosition = new Date(positions[index + 1].date);

            if(stateDate.getTime() >= nextPosition.getTime()) {
                return false;
            }
        }
        return state;
    });
}

export function bruteStateHistory(
    states: StateHistory, 
    positions: PositionHistory
): OrganizedStateHistory[] {
    return positions.map((position, index) => {
        const positionDate = new Date(position.date);
        const filteredStates = filterStatesByDate(states, positions, index);

        return {
            date: positionDate,
            position: {
                lat: position.lat,
                lon: position.lon,
            },
            states: filteredStates.map((state) => {
                const stateDate = new Date(state.date);
                return {
                    name: state.state.name,
                    color: state.state.color,
                    time: stateDate.toLocaleString(),
                };
            })
        }
    });
}

export function organizeStateHistory(
    states: StateHistory, 
    positions: PositionHistory
): OrganizedStateHistory[] {
    const stateHistory = bruteStateHistory(states, positions);

    const filteredStateHistory = stateHistory.filter((state) => {
        return state.states.length > 0;
    });

    const ordenedStateHistory = filteredStateHistory.sort((a, b) => {
        return b.date.getTime() - a.date.getTime();
    });

    return ordenedStateHistory;
}