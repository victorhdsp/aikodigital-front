//Mock de uma API para consumir esse banco de dados no front-end.

import EquipamentData from '@/data/equipment.json';
import EquipamentModelData from '@/data/equipmentModel.json';
import EquipamentPositionHistoryData from '@/data/equipmentPositionHistory.json';
import EquipamentStateData from '@/data/equipmentState.json';
import EquipamentStateHistoryData from '@/data/equipmentStateHistory.json';

import type { EquipamentSimple, EquipamentComplete } from '~/assets/types/equipament';

export async function getEquipamentList(): Promise<EquipamentSimple[]> {
    const equipaments: EquipamentSimple[] = [];

    EquipamentData.forEach((data) => {
        const model = EquipamentModelData.find((model) => {
            return model.id === data.equipmentModelId;
        });
        if (!model) return;

        const position = EquipamentPositionHistoryData.find((position) => {
            return position.equipmentId === data.id;
        });
        if (!position) return;

        const stateId = EquipamentStateHistoryData.find((state) => {
            return state.equipmentId === data.id;
        });
        if (!stateId) return;

        const state = EquipamentStateData.find((state) => {
            return state.id === stateId.states.reverse()[0].equipmentStateId;
        })
        if (!state) return;

        const lastPositionDate = new Date(position.positions.reverse()[0].date);
        const lastStateDate = new Date(stateId.states.reverse()[0].date);
        const lastUpdate = lastPositionDate > lastStateDate ? lastPositionDate : lastStateDate;

        const equipament: EquipamentSimple = {
            id: data.id,
            name: data.name,
            vehicle: {
                name: model.name,
                id: model.id,
            },
            lat: position.positions.reverse()[0].lat,
            lon: position.positions.reverse()[0].lon,
            state: {
                name: state.name,
                color: state.color,
            },
            lastUpdate: lastUpdate.toISOString(),
        };

        equipaments.push(equipament);
    });

    return equipaments;
}

export async function getEquipament(id: string): Promise<EquipamentComplete> {
    function getState(stateId: string) {
        const state = EquipamentStateData.find((state) => {
            return state.id === stateId;
        });
        if (!state) throw new Error('State not found');
        return state;
    }

    const data = EquipamentData.find((data) => {
        return data.id === id;
    });
    if (!data) throw new Error('Equipament not found');

    const model = EquipamentModelData.find((model) => {
        return model.id === data.equipmentModelId;
    });
    if (!model) throw new Error('Model not found');

    const position = EquipamentPositionHistoryData.find((position) => {
        return position.equipmentId === data.id;
    });
    if (!position) throw new Error('Position not found');

    const stateId = EquipamentStateHistoryData.find((state) => {
        return state.equipmentId === data.id;
    });
    if (!stateId) throw new Error('State not found');

    const positionHistory = position.positions.map((position) => {
        return {
            date: position.date,
            lat: position.lat,
            lon: position.lon,
        };
    });

    const stateHistory = stateId.states.map((state) => {
        return {
            date: state.date,
            state: getState(state.equipmentStateId),
        };
    });

    const equipament: EquipamentComplete = {
        id: data.id,
        name: data.name,
        vehicle: {
            name: model.name,
            id: model.id,
            hourlyEarnings: model.hourlyEarnings.map((earning) => {
                return {
                    state: getState(earning.equipmentStateId),
                    value: earning.value,
                };
            }),
        },
        positionHistory,
        stateHistory: stateHistory,
    };

    return equipament;
}