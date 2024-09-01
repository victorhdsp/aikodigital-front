//Mock de uma API para consumir esse banco de dados no front-end.

import EquipamentData from '@/data/equipment.json';
import EquipamentModelData from '@/data/equipmentModel.json';
import EquipamentPositionHistoryData from '@/data/equipmentPositionHistory.json';
import EquipamentStateData from '@/data/equipmentState.json';
import EquipamentStateHistoryData from '@/data/equipmentStateHistory.json';

import type { EquipamentSimple, EquipamentComplete } from '~/assets/types/equipament';

function getEquipamentById(id: string) {
    const equipament = EquipamentData.find((equipament) => equipament.id === id);
    if (!equipament) throw new Error('Equipament not found');
    return equipament;
}

function getEquipamentModelById(id: string) {
    const model = EquipamentModelData.find((model) => model.id === id);
    if (!model) throw new Error('Model not found');
    return model;
}

function getEquipamentStateHistoryById(id: string) {
    const state = EquipamentStateHistoryData.find((state) => state.equipmentId === id);
    if (!state) throw new Error('State not found');
    return state;
}

function getEquipamentPositionHistoryById(id: string) {
    const position = EquipamentPositionHistoryData.find((position) => position.equipmentId === id);
    if (!position) throw new Error('Position not found');
    return position;
}

export async function getEquipamentList(): Promise<EquipamentSimple[]> {
    const equipaments: EquipamentSimple[] = [];

    EquipamentData.forEach((data) => {
        const vahicle = getEquipamentModelById(data.equipmentModelId);
        
        const stateHistory = getEquipamentStateHistoryById(data.id);
        const lastState = stateHistory.states.sort((a, b) => {
            return new Date(b.date).getTime() - new Date(a.date).getTime();
        })[0];
        const lastStateDate = new Date(lastState.date);
        
        const positionHistory = getEquipamentPositionHistoryById(data.id);
        const lastPosition = positionHistory.positions.sort((a, b) => {
            return new Date(b.date).getTime() - new Date(a.date).getTime();
        })[0];
        const lastPositionDate = new Date(lastPosition.date);

        const lastUpdateDate = lastPositionDate.getDate() > lastStateDate.getDate() ? 
                                lastPositionDate : lastStateDate;
        
        equipaments.push({
            id: data.id,
            name: data.name,
            vehicle: {
                name: vahicle.name,
                id: vahicle.id,
            },
            state: lastState.equipmentStateId,
            lat: lastPosition.lat,
            lon: lastPosition.lon,
            lastUpdateDate: lastUpdateDate.toISOString(),
        });
    });
    
    return equipaments;
}

export async function getEquipament(id: string): Promise<EquipamentComplete> {
    const data = getEquipamentById(id);
    const vehicle = getEquipamentModelById(data.equipmentModelId);

    const positionHistory = getEquipamentPositionHistoryById(data.id);
    const ordenedPositionHistory = positionHistory.positions.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    const stateHistory = getEquipamentStateHistoryById(data.id);
    const ordenedStateHistory = stateHistory.states.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    const equipament: EquipamentComplete = {
        id: data.id,
        name: data.name,
        vehicle: {
            id: vehicle.id,
            name: vehicle.name,
            hourlyEarnings: vehicle.hourlyEarnings.map((earning) => ({
                state: earning.equipmentStateId,
                value: earning.value,
            })),
        },
        positionHistory: ordenedPositionHistory,
        stateHistory: ordenedStateHistory.map((state) => ({
            state: state.equipmentStateId,
            date: state.date,
        }))
    };

    return equipament;
}

export async function fetchEquipamentStates() {
    return EquipamentStateData;
}