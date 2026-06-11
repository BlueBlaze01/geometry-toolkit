const octagon = {
    Octagon: {

        Area: {
            formula: "A = 2(1+√2)s²",
            inputs: ["Side Length"],

            calculate(side) {

                const answer =
                    2 *
                    (1 + Math.sqrt(2)) *
                    side *
                    side;

                return {
                    valuesUsed: `Side Length = ${side}`,
                    substitution: `2(1+√2) × ${side}²`,
                    answer: answer.toFixed(2)
                };
            }
        },

        Perimeter: {
            formula: "P = 8s",
            inputs: ["Side Length"],

            calculate(side) {

                return {
                    valuesUsed: `Side Length = ${side}`,
                    substitution: `8 × ${side}`,
                    answer: (8 * side).toFixed(2)
                };
            }
        },

        Apothem: {
            formula: "a = s/(2tan(π/8))",
            inputs: ["Side Length"],

            calculate(side) {

                const answer =
                    side /
                    (2 * Math.tan(Math.PI / 8));

                return {
                    valuesUsed: `Side Length = ${side}`,
                    substitution: `${side}/(2tan(π/8))`,
                    answer: answer.toFixed(2)
                };
            }
        },

        Circumradius: {
            formula: "R = s/(2sin(π/8))",
            inputs: ["Side Length"],

            calculate(side) {

                const answer =
                    side /
                    (2 * Math.sin(Math.PI / 8));

                return {
                    valuesUsed: `Side Length = ${side}`,
                    substitution: `${side}/(2sin(π/8))`,
                    answer: answer.toFixed(2)
                };
            }
        },

        SideFromPerimeter: {
            formula: "s = P/8",
            inputs: ["Perimeter"],

            calculate(perimeter) {

                return {
                    valuesUsed: `Perimeter = ${perimeter}`,
                    substitution: `${perimeter} ÷ 8`,
                    answer: (perimeter / 8).toFixed(2)
                };
            }
        },

        InteriorAngle: {
            formula: "(n−2)×180/n",
            inputs: [],

            calculate() {

                return {
                    valuesUsed: "n = 8",
                    substitution: "(8−2)×180÷8",
                    answer: "135°"
                };
            }
        },

        ExteriorAngle: {
            formula: "360/n",
            inputs: [],

            calculate() {

                return {
                    valuesUsed: "n = 8",
                    substitution: "360÷8",
                    answer: "45°"
                };
            }
        },

        DiagonalCount: {
            formula: "n(n−3)/2",
            inputs: [],

            calculate() {

                return {
                    valuesUsed: "n = 8",
                    substitution: "8(8−3)/2",
                    answer: "20"
                };
            }
        }
    }
};
