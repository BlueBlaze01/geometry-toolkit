const decagon = {
    Decagon: {

        Area: {
            formula: "A = (5/2)s² √(5 + 2√5)",
            inputs: ["Side Length"],

            calculate(side) {

                const answer =
                    (5 / 2) *
                    side *
                    side *
                    Math.sqrt(
                        5 + 2 * Math.sqrt(5)
                    );

                return {
                    valuesUsed:
                        `Side Length = ${side}`,

                    substitution:
                        `(5/2) × ${side}² × √(5+2√5)`,

                    answer:
                        answer.toFixed(2)
                };
            }
        },

        Perimeter: {
            formula: "P = 10s",
            inputs: ["Side Length"],

            calculate(side) {

                return {
                    valuesUsed:
                        `Side Length = ${side}`,

                    substitution:
                        `10 × ${side}`,

                    answer:
                        (10 * side).toFixed(2)
                };
            }
        },

        Apothem: {
            formula: "a = s/(2tan(π/10))",
            inputs: ["Side Length"],

            calculate(side) {

                const answer =
                    side /
                    (2 * Math.tan(Math.PI / 10));

                return {
                    valuesUsed:
                        `Side Length = ${side}`,

                    substitution:
                        `${side}/(2tan(π/10))`,

                    answer:
                        answer.toFixed(2)
                };
            }
        }
    }
};