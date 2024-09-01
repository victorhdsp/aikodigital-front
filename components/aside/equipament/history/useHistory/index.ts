import type { OrganizedStateHistory, PositionHistory, StateHistory } from "@/assets/types/equipament";

export function filterStatesByDate(
    states: StateHistory[], 
    positions: PositionHistory[], 
    index: number
): StateHistory[] {
    return states.filter((state) => {
        const positionDate = new Date(positions[index].date);
        const stateDate = new Date(state.date);
        
        if(stateDate.getTime() > positionDate.getTime()) {
            return false;
        }
        if(index + 1 < positions.length) {
            const nextPosition = new Date(positions[index + 1].date);

            if(stateDate.getTime() <= nextPosition.getTime()) {
                return false;
            }
        }
        return true;
    });
}

export function bruteStateHistory(
    states: StateHistory[], 
    positions: PositionHistory[]
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
            states: filteredStates.map((filtered) => {
                const stateDate = new Date(filtered.date);
                return {
                    id: filtered.state,
                    time: stateDate.toLocaleString(),
                };
            })
        }
    });
}

export function organizeStateHistory(
    states: StateHistory[],
    positions: PositionHistory[]
): OrganizedStateHistory[] {
    const stateHistory = bruteStateHistory(states, positions);
    const filteredStateHistory = stateHistory.filter((item) => {
        return item.states.length > 0;
    });

    const ordenedStateHistory = filteredStateHistory.sort((a, b) => {
        return b.date.getTime() - a.date.getTime();
    });

    return ordenedStateHistory;
}