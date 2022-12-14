import { CafeteriaInfo } from "lib/utils/interfaces/Cafeteria.interface";
import service from "./config";

const getCafeteria = async () => {
    return (await service.get<CafeteriaInfo[]>("cafeteria")).data;
};

const getCafeteriaId = async (id: string) => {
    return (await service.get<CafeteriaInfo>(`cafeteria/${id}`)).data;
};

export {
    getCafeteria,
    getCafeteriaId
};

