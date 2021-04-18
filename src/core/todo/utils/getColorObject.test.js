import {getColorObject} from './getColorObject';

describe('getColorObject', () => {
   
    it('should return an object color filtered by a name color', () => {

        // Arrange 
        const color1 = {hex: "ddeff4", name: "starlight"}
        const color2 = {hex: "455138", name: "waters"}
        const color3 = {hex: "9d8769", name: "golden"}
        const colors = [color1, color2, color3]
        const colorName = "golden"

        // Act
        const color = getColorObject(colors, colorName);

        // Assert
        expect(color).toEqual(color3)
    })
   
})