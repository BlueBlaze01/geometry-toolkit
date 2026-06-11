const pentagon = {
    Pentagon: {

        Area: {
            formula: "A = (1/4)√(5(5+2√5))s²",
            inputs: ["Side Length"],

            calculate(side) {

                const answer =
                    (1 / 4) *
                    Math.sqrt(
                        5 * (
                            5 +
                            2 * Math.sqrt(5)
                        )
                    ) *
                    side *
                    side;

                return {
                    valuesUsed:
                        `Side Length = ${side}`,

                    substitution:
                        `(1/4)√(5(5+2√5)) × ${side}²`,

                    answer:
                        answer.toFixed(2)
                };
            }
        },

        Perimeter: {
            formula: "P = 5s",
            inputs: ["Side Length"],

            calculate(side) {

                const answer =
                    5 * side;

                return {
                    valuesUsed:
                        `Side Length = ${side}`,

                    substitution:
                        `5 × ${side}`,

                    answer:
                        answer.toFixed(2)
                };
            }
        },

        Apothem: {
            formula: "a = s/(2tan(π/5))",
            inputs: ["Side Length"],

            calculate(side) {

                const answer =
                    side /
                    (2 * Math.tan(Math.PI / 5));

                return {
                    valuesUsed:
                        `Side Length = ${side}`,

                    substitution:
                        `${side}/(2tan(π/5))`,

                    answer:
                        answer.toFixed(2)
                };
            }
        },

        Circumradius: {
            formula: "R = s/(2sin(π/5))",
            inputs: ["Side Length"],

            calculate(side) {

                const answer =
                    side /
                    (2 * Math.sin(Math.PI / 5));

                return {
                    valuesUsed:
                        `Side Length = ${side}`,

                    substitution:
                        `${side}/(2sin(π/5))`,

                    answer:
                        answer.toFixed(2)
                };
            }
        },

        SideFromPerimeter: {
            formula: "s = P/5",
            inputs: ["Perimeter"],

            calculate(perimeter) {

                const answer =
                    perimeter / 5;

                return {
                    valuesUsed:
                        `Perimeter = ${perimeter}`,

                    substitution:
                        `${perimeter} ÷ 5`,

                    answer:
                        answer.toFixed(2)
                };
            }
        },

        AreaFromApothem: {
            formula: "A = (Pa)/2",
            inputs: ["Perimeter", "Apothem"],

            calculate(perimeter, apothem) {

                const answer =
                    (perimeter * apothem) / 2;

                return {
                    valuesUsed:
                        `Perimeter = ${perimeter}<br>Apothem = ${apothem}`,

                    substitution:
                        `(${perimeter} × ${apothem}) ÷ 2`,

                    answer:
                        answer.toFixed(2)
                };
            }
        },

        PerimeterFromAreaAndApothem: {
            formula: "P = 2A/a",
            inputs: ["Area", "Apothem"],

            calculate(area, apothem) {

                const answer =
                    (2 * area) /
                    apothem;

                return {
                    valuesUsed:
                        `Area = ${area}<br>Apothem = ${apothem}`,

                    substitution:
                        `(2 × ${area}) ÷ ${apothem}`,

                    answer:
                        answer.toFixed(2)
                };
            }
        },

        InteriorAngle: {
            formula: "(n−2)×180/n",
            inputs: [],

            calculate() {

                return {
                    valuesUsed:
                        "Regular Pentagon",

                    substitution:
                        "(5−2)×180÷5",

                    answer:
                        "108°"
                };
            }
        },

        ExteriorAngle: {
            formula: "360/n",
            inputs: [],

            calculate() {

                return {
                    valuesUsed:
                        "Regular Pentagon",

                    substitution:
                        "360÷5",

                    answer:
                        "72°"
                };
            }
        },

        Diagonal: {
            formula: "d = φs",
            inputs: ["Side Length"],

            calculate(side) {

                const phi =
                    (1 + Math.sqrt(5)) / 2;

                const answer =
                    phi * side;

                return {
                    valuesUsed:
                        `Side Length = ${side}`,

                    substitution:
                        `φ × ${side}`,

                    answer:
                        answer.toFixed(2)
                };
            }
        },

        SideFromDiagonal: {
            formula: "s = d/φ",
            inputs: ["Diagonal"],

            calculate(diagonal) {

                const phi =
                    (1 + Math.sqrt(5)) / 2;

                const answer =
                    diagonal / phi;

                return {
                    valuesUsed:
                        `Diagonal = ${diagonal}`,

                    substitution:
                        `${diagonal} ÷ φ`,

                    answer:
                        answer.toFixed(2)
                };
            }
        },

        DiagonalCount: {
            formula: "n(n−3)/2",
            inputs: [],

            calculate() {

                return {
                    valuesUsed:
                        "n = 5",

                    substitution:
                        "5(5−3)/2",

                    answer:
                        "5"
                };
            }
        }
    }
};
