const hexagon = {
    Hexagon: {

        Area: {
            formula: "A = (3√3/2)s²",
            inputs: ["Side Length"],

            calculate(side) {

                const answer =
                    ((3 * Math.sqrt(3)) / 2) *
                    side *
                    side;

                return {
                    valuesUsed:
                        `Side Length = ${side}`,

                    substitution:
                        `(3√3/2) × ${side}²`,

                    answer:
                        answer.toFixed(2)
                };
            }
        },

        Perimeter: {
            formula: "P = 6s",
            inputs: ["Side Length"],

            calculate(side) {

                const answer =
                    6 * side;

                return {
                    valuesUsed:
                        `Side Length = ${side}`,

                    substitution:
                        `6 × ${side}`,

                    answer:
                        answer.toFixed(2)
                };
            }
        },

        Diameter: {
            formula: "D = 2s",
            inputs: ["Side Length"],

            calculate(side) {

                const answer =
                    2 * side;

                return {
                    valuesUsed:
                        `Side Length = ${side}`,

                    substitution:
                        `2 × ${side}`,

                    answer:
                        answer.toFixed(2)
                };
            }
        },

        Apothem: {
            formula: "a = (√3/2)s",
            inputs: ["Side Length"],

            calculate(side) {

                const answer =
                    (Math.sqrt(3) / 2) * side;

                return {
                    valuesUsed: `Side Length = ${side}`,
                    substitution: `(√3/2) × ${side}`,
                    answer: answer.toFixed(2)
                };
            }
        },

        Circumradius: {
            formula: "R = s",
            inputs: ["Side Length"],

            calculate(side) {

                return {
                    valuesUsed: `Side Length = ${side}`,
                    substitution: `${side}`,
                    answer: side.toFixed(2)
                };
            }
        },

        SideFromPerimeter: {
            formula: "s = P/6",
            inputs: ["Perimeter"],

            calculate(perimeter) {

                return {
                    valuesUsed: `Perimeter = ${perimeter}`,
                    substitution: `${perimeter} ÷ 6`,
                    answer: (perimeter / 6).toFixed(2)
                };
            }
        },

        InteriorAngle: {
            formula: "(n−2)×180/n",
            inputs: [],

            calculate() {

                return {
                    valuesUsed: "n = 6",
                    substitution: "(6−2)×180÷6",
                    answer: "120°"
                };
            }
        },

        ExteriorAngle: {
            formula: "360/n",
            inputs: [],

            calculate() {

                return {
                    valuesUsed: "n = 6",
                    substitution: "360÷6",
                    answer: "60°"
                };
            }
        },

        DiagonalCount: {
            formula: "n(n−3)/2",
            inputs: [],

            calculate() {

                return {
                    valuesUsed: "n = 6",
                    substitution: "6(6−3)/2",
                    answer: "9"
                };
            }
        }
    }
};