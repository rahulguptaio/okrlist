export const transformOkrJson = (okrs) => {
    const okrMap = {};
    let categories = new Set();
    okrs.forEach((okr) => {
        categories.add(okr.category);
        if (okr.parent_objective_id === "") {
            if (!okrMap[okr.id]) {
                okrMap[okr.id] = {};
            }
            okrMap[okr.id] = { ...okr };
        } else {
            if (!okrMap[okr.parent_objective_id]) {
                okrMap[okr.parent_objective_id] = {};
                okrMap[okr.parent_objective_id].objectives = [];
            }
            if (!okrMap[okr.parent_objective_id].objectives) {
                okrMap[okr.parent_objective_id].objectives = [];
            }
            okrMap[okr.parent_objective_id].objectives.push(okr);
        }
    });
    return [okrMap, Array.from(categories)];
}

const _listOfAlphabets = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
];

export const fetchAlphabetByIndex = (index) => {
    return _listOfAlphabets[index];
}