const heptagon = {
    Heptagon: {

        Area: {
            formula: "A = (7/4)s² cot(π/7)",
            inputs: ["Side Length"],

            calculate(side) {

                const answer =
                    (7 / 4) *
                    side *
                    side *
                    (1 / Math.tan(Math.PI / 7));

                return {
                    valuesUsed:
                        `Side Length = ${side}`,

                    substitution:
                        `(7/4) × ${side}² × cot(π/7)`,

                    answer:
                        answer.toFixed(2)
                };
            }
        },

        Perimeter: {
            formula: "P = 7s",
            inputs: ["Side Length"],

            calculate(side) {

                return {
                    valuesUsed:
                        `Side Length = ${side}`,

                    substitution:
                        `7 × ${side}`,

                    answer:
                        (7 * side).toFixed(2)
                };
            }
        },

        Apothem: {
            formula: "a = s/(2tan(π/7))",
            inputs: ["Side Length"],

            calculate(side) {

                const answer =
                    side /
                    (2 * Math.tan(Math.PI / 7));

                return {
                    valuesUsed: `Side Length = ${side}`,
                    substitution: `${side}/(2tan(π/7))`,
                    answer: answer.toFixed(2)
                };
            }
        },

        Circumradius: {
            formula: "R = s/(2sin(π/7))",
            inputs: ["Side Length"],

            calculate(side) {

                const answer =
                    side /
                    (2 * Math.sin(Math.PI / 7));

                return {
                    valuesUsed: `Side Length = ${side}`,
                    substitution: `${side}/(2sin(π/7))`,
                    answer: answer.toFixed(2)
                };
            }
        },

        SideFromPerimeter: {
            formula: "s = P/7",
            inputs: ["Perimeter"],

            calculate(perimeter) {

                return {
                    valuesUsed: `Perimeter = ${perimeter}`,
                    substitution: `${perimeter} ÷ 7`,
                    answer: (perimeter / 7).toFixed(2)
                };
            }
        },

        InteriorAngle: {
            formula: "(n−2)×180/n",
            inputs: [],

            calculate() {

                return {
                    valuesUsed: "n = 7",
                    substitution: "(7−2)×180÷7",
                    answer: "128.57°"
                };
            }
        },

        ExteriorAngle: {
            formula: "360/n",
            inputs: [],

            calculate() {

                return {
                    valuesUsed: "n = 7",
                    substitution: "360÷7",
                    answer: "51.43°"
                };
            }
        },

        DiagonalCount: {
            formula: "n(n−3)/2",
            inputs: [],

            calculate() {

                return {
                    valuesUsed: "n = 7",
                    substitution: "7(7−3)/2",
                    answer: "14"
                };
            }
        }
    }
};