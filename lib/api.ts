//Mock de uma API para consumir esse banco de dados no front-end.

import EquipamentData from '@/data/equipment.json';
import EquipamentModelData from '@/data/equipmentModel.json';
import EquipamentPositionHistoryData from '@/data/equipmentPositionHistory.json';
import EquipamentStateData from '@/data/equipmentState.json';
import EquipamentStateHistoryData from '@/data/equipmentStateHistory.json';

import type { EquipamentSimple } from '~/assets/types/equipament';

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
            veicule: model.name,
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
