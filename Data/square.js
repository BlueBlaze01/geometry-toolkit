const square = {
    Square: {

        Area: {
            formula: "A = s²",
            inputs: ["Side Length"],

            calculate(side) {

                return {
                    valuesUsed:
                        `Side Length = ${side}`,

                    substitution:
                        `${side}²`,

                    answer:
                        (side * side).toFixed(2)
                };
            }
        },

        Perimeter: {
            formula: "P = 4s",
            inputs: ["Side Length"],

            calculate(side) {

                return {
                    valuesUsed:
                        `Side Length = ${side}`,

                    substitution:
                        `4 × ${side}`,

                    answer:
                        (4 * side).toFixed(2)
                };
            }
        },

        Diagonal: {
            formula: "D = s√2",
            inputs: ["Side Length"],

            calculate(side) {

                return {
                    valuesUsed:
                        `Side Length = ${side}`,

                    substitution:
                        `${side} × √2`,

                    answer:
                        (side * Math.sqrt(2)).toFixed(2)
                };
            }
        },

        SideFromArea: {
            formula: "s = √A",
            inputs: ["Area"],

            calculate(area) {

                return {
                    valuesUsed:
                        `Area = ${area}`,

                    substitution:
                        `√${area}`,

                    answer:
                        Math.sqrt(area).toFixed(2)
                };
            }
        },

        SideFromPerimeter: {
            formula: "s = P/4",
            inputs: ["Perimeter"],

            calculate(perimeter) {

                return {
                    valuesUsed:
                        `Perimeter = ${perimeter}`,

                    substitution:
                        `${perimeter} ÷ 4`,

                    answer:
                        (perimeter / 4).toFixed(2)
                };
            }
        },

        SideFromDiagonal: {
            formula: "s = D/√2",
            inputs: ["Diagonal"],

            calculate(diagonal) {

                return {
                    valuesUsed:
                        `Diagonal = ${diagonal}`,

                    substitution:
                        `${diagonal} ÷ √2`,

                    answer:
                        (diagonal / Math.sqrt(2)).toFixed(2)
                };
            }
        },

        AreaFromDiagonal: {
            formula: "A = D²/2",
            inputs: ["Diagonal"],

            calculate(diagonal) {

                return {
                    valuesUsed:
                        `Diagonal = ${diagonal}`,

                    substitution:
                        `${diagonal}² ÷ 2`,

                    answer:
                        ((diagonal * diagonal) / 2).toFixed(2)
                };
            }
        },

        PerimeterFromDiagonal: {
            formula: "P = 2√2D",
            inputs: ["Diagonal"],

            calculate(diagonal) {

                return {
                    valuesUsed:
                        `Diagonal = ${diagonal}`,

                    substitution:
                        `2√2 × ${diagonal}`,

                    answer:
                        (2 * Math.sqrt(2) * diagonal).toFixed(2)
                };
            }
        },

        Inradius: {
            formula: "r = s/2",
            inputs: ["Side Length"],

            calculate(side) {

                return {
                    valuesUsed:
                        `Side Length = ${side}`,

                    substitution:
                        `${side} ÷ 2`,

                    answer:
                        (side / 2).toFixed(2)
                };
            }
        },

        Circumradius: {
            formula: "R = s/√2",
            inputs: ["Side Length"],

            calculate(side) {

                return {
                    valuesUsed:
                        `Side Length = ${side}`,

                    substitution:
                        `${side} ÷ √2`,

                    answer:
                        (side / Math.sqrt(2)).toFixed(2)
                };
            }
        },

        AreaFromPerimeter: {
            formula: "A = (P/4)²",
            inputs: ["Perimeter"],

            calculate(perimeter) {

                const side =
                    perimeter / 4;

                return {
                    valuesUsed:
                        `Perimeter = ${perimeter}`,

                    substitution:
                        `(${perimeter}/4)²`,

                    answer:
                        (side * side).toFixed(2)
                };
            }
        },

        AreaFromCircumradius: {
            formula: "A = 2R²",
            inputs: ["Circumradius"],

            calculate(radius) {

                return {
                    valuesUsed:
                        `Circumradius = ${radius}`,

                    substitution:
                        `2 × ${radius}²`,

                    answer:
                        (2 * radius * radius).toFixed(2)
                };
            }
        },

        DiagonalFromArea: {
            formula: "D = √(2A)",
            inputs: ["Area"],

            calculate(area) {

                const diagonal =
                    Math.sqrt(2 * area);

                return {
                    valuesUsed:
                        `Area = ${area}`,

                    substitution:
                        `√(2 × ${area})`,

                    answer:
                        diagonal.toFixed(2)
                };
            }
        },

        DiagonalFromPerimeter: {
            formula: "D = P/(2√2)",
            inputs: ["Perimeter"],

            calculate(perimeter) {

                const diagonal =
                    perimeter /
                    (2 * Math.sqrt(2));

                return {
                    valuesUsed:
                        `Perimeter = ${perimeter}`,

                    substitution:
                        `${perimeter} ÷ (2√2)`,

                    answer:
                        diagonal.toFixed(2)
                };
            }
        },

        PerimeterFromArea: {
            formula: "P = 4√A",
            inputs: ["Area"],

            calculate(area) {

                const perimeter =
                    4 * Math.sqrt(area);

                return {
                    valuesUsed:
                        `Area = ${area}`,

                    substitution:
                        `4 × √${area}`,

                    answer:
                        perimeter.toFixed(2)
                };
            }
        },

        PerimeterFromCircumradius: {
            formula: "P = 4R√2",
            inputs: ["Circumradius"],

            calculate(radius) {

                const perimeter =
                    4 *
                    radius *
                    Math.sqrt(2);

                return {
                    valuesUsed:
                        `Circumradius = ${radius}`,

                    substitution:
                        `4 × ${radius} × √2`,

                    answer:
                        perimeter.toFixed(2)
                };
            }
        },

        SideFromCircumradius: {
            formula: "s = R√2",
            inputs: ["Circumradius"],

            calculate(radius) {

                const side =
                    radius *
                    Math.sqrt(2);

                return {
                    valuesUsed:
                        `Circumradius = ${radius}`,

                    substitution:
                        `${radius} × √2`,

                    answer:
                        side.toFixed(2)
                };
            }
        },

        SideFromInradius: {
            formula: "s = 2r",
            inputs: ["Inradius"],

            calculate(radius) {

                const side =
                    2 * radius;

                return {
                    valuesUsed:
                        `Inradius = ${radius}`,

                    substitution:
                        `2 × ${radius}`,

                    answer:
                        side.toFixed(2)
                };
            }
        },

        AreaFromInradius: {
            formula: "A = 4r²",
            inputs: ["Inradius"],

            calculate(radius) {

                const area =
                    4 *
                    radius *
                    radius;

                return {
                    valuesUsed:
                        `Inradius = ${radius}`,

                    substitution:
                        `4 × ${radius}²`,

                    answer:
                        area.toFixed(2)
                };
            }
        },

        CircumradiusFromArea: {
            formula: "R = √(A/2)",
            inputs: ["Area"],

            calculate(area) {

                const radius =
                    Math.sqrt(area / 2);

                return {
                    valuesUsed:
                        `Area = ${area}`,

                    substitution:
                        `√(${area}/2)`,

                    answer:
                        radius.toFixed(2)
                };
            }
        },

        InradiusFromArea: {
            formula: "r = √A/2",
            inputs: ["Area"],

            calculate(area) {

                const radius =
                    Math.sqrt(area) / 2;

                return {
                    valuesUsed:
                        `Area = ${area}`,

                    substitution:
                        `√${area} ÷ 2`,

                    answer:
                        radius.toFixed(2)
                };
            }
        }
    }
}; 