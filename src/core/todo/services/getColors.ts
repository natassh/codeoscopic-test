import { Color } from '../../../ui/Store/modules/todo/types/todo';

const getColors = async (): Promise<Color[]> => {
    const colors: Color[] = [];

    const endPoint = 'https://www.colr.org/json/colors/random/10';
    const colorsResponseObject = await fetch(endPoint);
    const colorsData = await colorsResponseObject.json();
    const colorsDoc= colorsData.colors
    colorsDoc.forEach((doc: any) => {
        if(doc.hex !== "") {
            colors.push({
                hex: doc.hex,
                name: doc.tags[0]?.name
            } as Color);
        }
    })
    return colors;
}

export { getColors }