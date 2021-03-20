import { UserInterface } from "../db/types/User";
import { UserRequirementFunction } from "./apiAuth";

export const isEqual = (a: string | number, b: string | number): boolean => String(a).localeCompare(String(b)) === 0;

export const doesUserMeetAllRequirements = async (user: UserInterface, userRequirements: UserRequirementFunction[]): Promise<boolean> => {
    const getFulfilledRequirements = async () => {
        return Promise.all(
            userRequirements.map((requirement) => requirement(user))
        );
    };
    const fulfilledRequirements = await getFulfilledRequirements();
    const allRequirementsMet = fulfilledRequirements.every((fulfilledRequirement) => fulfilledRequirement);
    return allRequirementsMet;
}