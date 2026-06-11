const nonagon = {
    Nonagon: {

        Area: {
            formula: "A = (9/4)s² cot(π/9)",
            inputs: ["Side Length"],

            calculate(side) {

                const answer =
                    (9 / 4) *
                    side *
                    side *
                    (1 / Math.tan(Math.PI / 9));

                return {
                    valuesUsed:
                        `Side Length = ${side}`,

                    substitution:
                        `(9/4) × ${side}² × cot(π/9)`,

                    answer:
                        answer.toFixed(2)
                };
            }
        },

        Perimeter: {
            formula: "P = 9s",
            inputs: ["Side Length"],

            calculate(side) {

                return {
                    valuesUsed:
                        `Side Length = ${side}`,

                    substitution:
                        `9 × ${side}`,

                    answer:
                        (9 * side).toFixed(2)
                };
            }
        },

        Apothem: {
            formula: "a = s/(2tan(π/9))",
            inputs: ["Side Length"],

            calculate(side) {

                const answer =
                    side /
                    (2 * Math.tan(Math.PI / 9));

                return {
                    valuesUsed:
                        `Side Length = ${side}`,

                    substitution:
                        `${side}/(2tan(π/9))`,

                    answer:
                        answer.toFixed(2)
                };
            }
        }
    }
};
